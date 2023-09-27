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

# 文件 | /etc/group

## 一、/etc/group文件简介

/etc/group文件用于定义Linux系统中的用户组信息。每个组的信息占据/etc/group文件的一行,每行包含4个字段,字段之间使用冒号(:)分隔,格式如下:
组名:口令:组ID:组成员

- 组名:用户组的名称

- 口令:组的密码,通常为空

- 组ID:组的数字ID

- 组成员:属于这个组的用户名列表
  示例:/etc/group文件中的一行

  ```bash
  admin:x:1010:root,bob
  ```

  ​	这个组的名称是admin,密码为空,组ID是1010,组成员有root和bob两个用户。

## 二、/etc/group文件字段详解

### 1. 组名

用户组的名称,用于标识一个用户组,必须唯一。常见的组名有root、daemon、sys等。
添加组:

```bash
groupadd 组名
```

删除组:

```
groupdel 组名 

```

### 2. 口令

组的密码,用于通过组密码验证组身份。
但Linux系统很少使用组密码,通常此字段为空。若要设置口令,可以使用gpasswd命令:

```
gpasswd 组名
```

然后会提示输入新密码。

### 3. 组ID

组ID是一个数字,用于在系统内部标识组,必须唯一。
系统默认分配的组ID范围是500-60000。
也可以指定ID添加组:

```
groupadd -g ID 组名
```

### 4. 组成员

属于这个组的用户名,多个用户名之间用逗号隔开。
想给组添加用户,可以使用usermod命令:

```
usermod -G 组名 用户名
```

从组删除用户:

```
gpasswd -d 用户名 组名
```

## 三、/etc/group文件的维护

### 1. 查看组信息

使用groups命令可以查看某用户属于哪些组:

```
groups 用户名
```


使用getent命令可以查看组信息:

```
getent group 组名
```

### 2. 修改组

使用groupmod命令可以修改组信息:

```bash
groupmod -n 新组名 旧组名 #修改组名
groupmod -g 新ID 组名 #修改组ID
```

### 3. 删除组

使用groupdel命令可以删除组:

```bash
groupdel 组名需要确认组内无用户才能删除该组。
```

## 四、/etc/group文件相关工具

/etc/group文件还有一些相关的工具:

- gpasswd:用于组密码管理
- newgrp:变更当前用户的组
- vigr:用于交互式编辑/etc/group文件
  这些工具配合使用可以方便管理组和用户。