---
icon: edit
date: 2023-10-07
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | 组管理

## 什么是组

Linux系统中,可以将多个用户划分到一个组中,组是对用户进行分类管理的一种方式。
组有如下特点:

- 每个用户必须属于一个组
- 每个用户可以属于多个组
- 用户的文件和进程会继承所在组的权限

## 组管理相关命令

### 1. 添加组:groupadd

使用`groupadd`命令可以添加一个新的组,语法为:

```bash
groupadd 组名
```

例如,添加一个新组dev:

```bash
groupadd dev
```



### 2. 删除组:groupdel

使用`groupdel`命令可以删除一个组,语法为:

```bash
groupdel 组名
```

例如,删除组dev:

```bash
groupdel dev
```



### 3. 修改组:groupmod

使用`groupmod`命令可以修改组的信息,常用来修改组名称,语法为:

```bash
groupmod [选项] 组名
```

选项:

- -n:指定新的组名
  例如,将组dev修改为devel:

  ```bash
  groupmod -n devel dev
  ```

  

### 4. 查看所有组:cat /etc/group

/etc/group文件中记录了所有组的信息,使用`cat /etc/group`可以查看所有组信息。
示例:

```bash
cat /etc/group
```



### 5. 查看指定组信息:groups

使用`groups`命令可以查看指定组的信息,语法为:

```bash
groups [组名]
```

例如,查看组dev的信息:

```bash
groups dev
```



### 6. 查看用户所在的组:id

使用`id`命令可以查看用户所属的组,语法为:

```bash
id 用户名
```

例如,查看user1用户的组信息:

```bash
id user1
```



### 7. 将用户添加到组:usermod

使用`usermod`命令可以将用户添加到指定的组中,语法为:

```bash
usermod -aG 组名 用户名
```

例如,将user1添加到devel组:

```bash
usermod -aG devel user1
```



### 8. 将用户从组中删除:gpasswd

使用`gpasswd`命令可以从组中删除指定用户,语法为:

```bash
gpasswd -d 用户 组名
```

例如,从devel组中删除user1:

```bash
gpasswd -d user1 devel
```



## 总结

组的使用可以对用户进行分类管理,提高Linux系统的管理灵活性。要熟练使用组管理命令,如添加组、删除组、修改组、查看组和组用户等。组管理是Linux系统管理的重要内容。
以上讲解了Linux组管理的常用命令,内容涵盖组管理的入门知识到熟练运用,通过详细的语法解释、示例代码以及实际场景举例,可以帮助读者全面了解Linux组管理。