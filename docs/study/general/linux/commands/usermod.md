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

# 基本 | usermod

usermod命令用于修改用户账号的信息。它可以修改用户的名称、用户ID、初始组、家目录、登录shell等信息。

## 基本语法

usermod [选项] 用户名

## 常用选项

- -c:修改用户的注释信息
- -d:修改用户的家目录
- -e:修改用户账号的有效期限
- -g:修改用户的初始登录组
- -G:修改用户的辅助组
- -l:修改用户名
- -s:修改用户的登录Shell
- -u:修改用户的用户ID

## 示例

1. 修改用户名

    ```
    usermod -l newUserName oldUserName    
    ```

这将把oldUserName修改为newUserName。

2. 修改用户主组

    ```bash
        usermod -g newGroupUserName userName
    ```

​    这将把userName的主组改为newGroupUserName。
   

3. 修改用户的登录shell

   ```bash
    usermod -s /bin/bash userName
   ```

​    这将把userName的登录shell改为bash。

4. 修改用户的家目录

    ```bash
    usermod -d /home/newHome userName
    ```

​    这将把userName的家目录改为/home/newHome。
​    

5. 为用户添加辅助组

    ```bash
    usermod -G group1,group2 userName
    ```

​    这将用户userName添加到group1和group2组。
   

## 小结

usermod命令是一个非常实用的用户管理命令,通过它可以灵活地修改用户的各种信息,比如用户名、组、家目录等。在修改用户信息的时候,要注意用root用户执行。另外修改重要信息的时候也要注意备份、测试,避免造成无法登录等问题。