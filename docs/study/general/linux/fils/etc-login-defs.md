---
icon: edit
date: 2023-09-27
category:
  - 通用技能
tag:
  - Linux
  - Linux文件
star: true
---

# 文件 | /etc/login.desf

## 一、文件简介

/etc/login.defs文件是Linux系统中定义用户登录设置的配置文件。该文件包含许多影响用户登录方式的重要参数,这些参数会在用户登录时生效。

## 二、文件格式

/etc/login.defs采用了简单的key-value格式,用#号注释。每个配置参数占一行,参数名称和参数值之间使用空格分隔。

## 三、常见参数详解

### 1. PASS_MAX_DAYS

定义用户密码最长使用天数。超过这个天数,用户在登录时就会被要求修改密码。
PASS_MAX_DAYS 90
上面设置用户密码最长90天。

### 2. PASS_MIN_DAYS

定义在修改完密码之后,必须过去的最小天数才能再次修改密码。
PASS_MIN_DAYS 5
上面设置密码修改后至少5天才能再次修改。

### 3. PASS_WARN_AGE

定义密码过期前多少天开始警告用户修改密码。
PASS_WARN_AGE 7
上面设置在密码过期前7天开始警告用户。

### 4. UID_MIN

定义系统普通用户的最小UID。
UID_MIN 1000
上面设置普通用户的最小UID为1000。

### 5. UID_MAX

定义系统普通用户的最大UID。
UID_MAX 60000
上面设置普通用户的最大UID为60000。

### 6. SYS_UID_MIN

定义系统用户的最小UID。
SYS_UID_MIN 101
上面设置系统用户的最小UID为101。

### 7. SYS_UID_MAX

定义系统用户的最大UID。

SYS_UID_MAX 499
上面设置系统用户的最大UID为499。

### 8. CREATE_HOME

定义是否为新用户自动创建家目录。
CREATE_HOME yes
上面设置为新用户自动创建家目录。

## 四、配置示例

一个完整的/etc/login.defs文件示例如下:
PASS_MAX_DAYS 90
PASS_MIN_DAYS 5 
PASS_WARN_AGE 7

UID_MIN 1000
UID_MAX 60000

SYS_UID_MIN 101
SYS_UID_MAX 499

CREATE_HOME yes
以上是/etc/login.defs文件的详细解析,从文件介绍、格式、常见参数到完整配置示例。