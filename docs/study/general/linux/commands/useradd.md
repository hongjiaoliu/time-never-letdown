---
icon: edit
date: 2023-09-28
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | useradd
useradd命令用于在Linux系统中创建新用户。它是Linux用户管理的核心命令之一。全面掌握useradd命令可以让我们更好更专业地管理Linux系统用户。

## 一、命令名称及功能

**命令名称:** useradd
**命令功能:** 创建新的系统用户
useradd命令用来创建新用户。创建新用户后,系统会为该用户生成同名用户组和主目录。我们可以通过不同选项来指定用户的配置信息。

## 二、命令格式及选项

**命令格式:**
useradd [选项] 用户名
**常用选项:**

- -c:添加用户注释信息
- -d:指定用户主目录
- -g:指定用户主组
- -G:指定用户附加组
- -m:自动创建用户主目录
- -s:指定用户的登录Shell
- -u:指定用户的用户ID

## 三、命令使用示例

**1. 创建新用户,不指定任何选项**

```bash
useradd zhangsan
```

这将创建用户名为zhangsan的新用户,系统会自动创建同名的用户组zhangsan和主目录/home/zhangsan。
**2. 创建新用户,指定主目录和注释信息**

```
useradd -c "张三" -d /home/zhangsan zhangsan
```

这将创建用户名为zhangsan的用户,注释信息为“张三”,主目录为/home/zhangsan。
**3. 创建新用户,指定登录Shell**

```
useradd -s /bin/bash lisi
```

这将创建用户名为lisi的用户,登录Shell设置为/bin/bash。
**4. 创建新用户,将其加入管理员组**

```
useradd -G sudo wangwu 
```

这将创建用户名为wangwu的用户,并将其加入sudo管理员组。
**5. 从配置文件创建新用户**

```
useradd -D
```

这将从默认的配置文件创建新用户。

## 四、实践案例

1. 需要添加一个新用户zhangsan,要求主目录为/home/zhangsan,登录Shell为/bin/zsh

   ```
   useradd -d /home/zhangsan -s /bin/zsh zhangsan
   ```

2. 需要创建一个新用户lisi,并将其加入sudo和admin组

   ```
   useradd -G sudo,admin lisi
   ```

3. 从默认配置批量创建多个新用户

   ```
   useradd -D
   useradd wangwu
   useradd zhaoliu
   ```

   以上命令将详细介绍useradd的用法,希望可以帮助大家更好地掌握这个重要的Linux用户管理命令。用户的创建和管理是Linux系统管理中必备的重要技能。大家可以根据自己的需求选择适合的useradd命令选项组合,来创建和管理系统用户。 