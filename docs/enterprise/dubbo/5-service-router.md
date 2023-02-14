---
icon: edit
date: 2022-07-20
category:
  - Java企业开发
tag:
  - Dubbo
  - 源码学习
star: false
---

# 5-服务路由的原理和实现

## 1. 简介
上一篇文章分析了集群容错的第一部分 — 服务目录 Directory。服务目录在刷新 Invoker 列表的过程中，会通过 Router 进行服务路由，筛选出符合路由规则的服务提供者。在详细分析服务路由的源码之前，先来介绍一下服务路由是什么。服务路由包含一条路由规则，路由规则决定了服务消费者的调用目标，即规定了服务消费者可调用哪些服务提供者。Dubbo 目前提供了三种服务路由实现，分别为条件路由 ConditionRouter、脚本路由 ScriptRouter 和标签路由 TagRouter。其中条件路由是我们最常使用的，标签路由是一个新的实现，暂时还未发布，该实现预计会在 2.7.x 版本中发布。本篇文章将分析条件路由相关源码，脚本路由和标签路由这里就不分析了。
## 2. 源码分析
条件路由规则由两个条件组成，分别用于对服务消费者和提供者进行匹配。比如有这样一条规则：
host = 10.20.153.10 => host = 10.20.153.11
该条规则表示 IP 为 10.20.153.10 的服务消费者**只可**调用 IP 为 10.20.153.11 机器上的服务，不可调用其他机器上的服务。条件路由规则的格式如下：
[服务消费者匹配条件] => [服务提供者匹配条件]
如果服务消费者匹配条件为空，表示不对服务消费者进行限制。如果服务提供者匹配条件为空，表示对某些服务消费者禁用服务。官方文档中对条件路由进行了比较详细的介绍，大家可以参考下，这里就不过多说明了。
条件路由实现类 ConditionRouter 在进行工作前，需要先对用户配置的路由规则进行解析，得到一系列的条件。然后再根据这些条件对服务进行路由。本章将分两节进行说明，2.1节介绍表达式解析过程。2.2 节介绍服务路由的过程。下面，我们先从表达式解析过程看起。
### 2.1 表达式解析
条件路由规则是一条字符串，对于 Dubbo 来说，它并不能直接理解字符串的意思，需要将其解析成内部格式才行。条件表达式的解析过程始于 ConditionRouter 的构造方法，下面一起看一下：
```java
public ConditionRouter(URL url) {
    this.url = url;
    // 获取 priority 和 force 配置
    this.priority = url.getParameter(Constants.PRIORITY_KEY, 0);
    this.force = url.getParameter(Constants.FORCE_KEY, false);
    try {
        // 获取路由规则
        String rule = url.getParameterAndDecoded(Constants.RULE_KEY);
        if (rule == null || rule.trim().length() == 0) {
            throw new IllegalArgumentException("Illegal route rule!");
        }
        rule = rule.replace("consumer.", "").replace("provider.", "");
        // 定位 => 分隔符
        int i = rule.indexOf("=>");
        // 分别获取服务消费者和提供者匹配规则
        String whenRule = i < 0 ? null : rule.substring(0, i).trim();
        String thenRule = i < 0 ? rule.trim() : rule.substring(i + 2).trim();
        // 解析服务消费者匹配规则
        Map<String, MatchPair> when = 
            StringUtils.isBlank(whenRule) || "true".equals(whenRule) 
                ? new HashMap<String, MatchPair>() : parseRule(whenRule);
        // 解析服务提供者匹配规则
        Map<String, MatchPair> then = 
            StringUtils.isBlank(thenRule) || "false".equals(thenRule) 
                ? null : parseRule(thenRule);
        // 将解析出的匹配规则分别赋值给 whenCondition 和 thenCondition 成员变量
        this.whenCondition = when;
        this.thenCondition = then;
    } catch (ParseException e) {
        throw new IllegalStateException(e.getMessage(), e);
    }
}
```
如上，ConditionRouter 构造方法先是对路由规则做预处理，然后调用 parseRule 方法分别对服务提供者和消费者规则进行解析，最后将解析结果赋值给 whenCondition 和 thenCondition 成员变量。ConditionRouter 构造方法不是很复杂，这里就不多说了。下面我们把重点放在 parseRule 方法上，在详细介绍这个方法之前，我们先来看一个内部类。
```java
private static final class MatchPair {
    final Set<String> matches = new HashSet<String>();
    final Set<String> mismatches = new HashSet<String>();
}
```

MatchPair 内部包含了两个 Set 类型的成员变量，分别用于存放匹配和不匹配的条件。这个类两个成员变量会在 parseRule 方法中被用到，下面来看一下。

