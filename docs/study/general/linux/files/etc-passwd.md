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

# 文件 | /etc/passwd

## 1. /etc/passwd文件概览

/etc/passwd文件用来存储所有系统用户的信息,它的内容非常重要。每个系统用户都在这个文件中有对应的记录行。
/etc/passwd文件每一行代表一个用户,共7个字段,字段之间使用':'分隔,格式如下:
```
用户名:密码占位符:用户ID:用户组ID:注释性描述:主目录:命令解释器
```
下面对每个字段进行说明:

- 用户名 - 登录系统的用户名
- 密码占位符 - 通常是'x',表示密码存放在/etc/shadow文件中
- 用户ID (UID) - 用户的数字型ID,从0开始计数
- 用户组ID (GID) - 用户所在组的数字型ID
- 注释性描述 - 一般填写用户的全名
- 主目录 - 用户的主文件夹路径
- 命令解释器 - 用户登录后使用的Shell程序
  示例:/etc/passwd文件中的一行:
  ```
  root:x:0:0:root:/root:/bin/bash
  ```
  表示:
  用户名为root,密码在/etc/shadow文件中,UID和GID都是0,注释是"root",主目录是/root,使用的Shell是/bin/bash。

## 2. 添加系统用户

要想添加新的系统用户,需要修改/etc/passwd文件。步骤如下:

1. 使用任意文本编辑器(例如vim)打开/etc/passwd文件
  ```
   vim /etc/passwd
   ```
2. 在文件末尾添加新的用户信息,格式同上。例如添加一个新用户tom:
```
tom:x:1010:1010::/home/tom:/bin/bash
```
这将添加一个UID和GID都是1010的用户tom,主目录在/home/tom,使用bash作为shell。

3. 同时需要创建用户的主目录:
   ```
   mkdir /home/tom
   ```
4. 最后设置好用户的密码:
    ```
   passwd tom
   ```
   输入两遍密码后tom用户就成功添加了。

## 3. 修改用户属性

如果要修改某个已存在的用户属性,直接编辑/etc/passwd文件,找到对应用户行后修改即可。例如把tom的UID改为1011:
```
vim /etc/passwd
```
找到tom那一行,把1010改为1011,保存退出即可。

## 4. 删除用户

删除用户的步骤:

1. 编辑/etc/passwd,删除需要删除用户的记录行
2. 删除用户主目录
   例如要删除tom用户:
   ```
   vim /etc/passwd 
   ```
   删除tom那一行
   ```
   rm -r /home/tom
   ```
   删除主目录
   这样就完成了删除用户的操作。

## 5. /etc/passwd文件访问权限

/etc/passwd文件的访问权限非常重要,必须设置正确,否则会导致系统安全问题。
建议设置为:
```
-rw-r--r-- 1 root root
```
即root用户可读写,其他用户只读。
这可以最大程度保证安全。

## 总结

/etc/passwd是Linux系统中非常重要的核心文件,记录用户信息。要熟练掌握用户管理就需要熟悉它的格式与使用方法。这里我详细介绍了/etc/passwd的格式、添加用户、修改用户、删除用户以及访问权限控制等内容。掌握这些将大大提高对Linux用户管理的能力。