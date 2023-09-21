---
icon: edit
date: 2023-09-21
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | ln

## 一、ln 命令简介

ln 命令用于在 Linux 系统中创建链接。使用 ln 命令可以给文件创建硬链接和符号链接。

## 二、ln 命令语法

ln 的基本语法如下:
```shell
ln [OPTION]... [-T] TARGET LINK_NAME   (1st form)
ln [OPTION]... TARGET                  (2nd form)
ln [OPTION]... TARGET... DIRECTORY     (3rd form)
ln [OPTION]... -t DIRECTORY TARGET...  (4th form)
```
常见参数:

- -s:创建符号链接
- -f:强制创建链接
- -i:交互模式,覆盖前询问用户
- -v:显示创建链接的过程

## 三、ln 命令使用示例

### 1. 创建硬链接

```shell

# 原始文件

$ ls -l file.txt 
-rw-r--r-- 1 root root 19 Mar  3 15:05 file.txt

# 创建硬链接

$ ln file.txt hardlink.txt

# 查看硬链接文件

$ ls -l 
-rw-r--r-- 2 root root 19 Mar  3 15:05 file.txt
-rw-r--r-- 2 root root 19 Mar  3 15:05 hardlink.txt

```
### 2. 创建符号链接

```shell

# 原始文件

$ ls -l file.txt
-rw-r--r-- 1 root root 19 Mar  3 15:05 file.txt

# 创建符号链接 

$ ln -s file.txt symlink.txt

# 查看符号链接文件

$ ls -l
-rw-r--r-- 1 root root 19 Mar  3 15:05 file.txt
lrwxrwxrwx 1 root root  9 Mar  3 15:07 symlink.txt -> file.txt

```

### 3. 链接目录

```shell

# 创建目录

$ mkdir dir

# 链接目录

$ ln -s dir symdir

# 查看目录链接

$ ls -ld dir symdir
drwxr-xr-x 2 root root 4096 Mar  3 15:10 dir
lrwxrwxrwx 1 root root    3 Mar  3 15:10 symdir -> dir

```

### 4. 强制创建链接

```bash

# 目标文件已存在,使用 -f 参数强制创建

$ ln -sf file.txt newfile.txt

```

### 5. 交互模式创建链接

```bash 

# 目标文件已存在,使用 -i 参数交互确认是否覆盖

$ ln -i file.txt newfile.txt
override newfile.txt? (y/n [n]) y

```

## 四、ln 命令总结

- ln 命令用于在 Linux 中创建链接文件
- 常用于创建硬链接和符号链接
- 主要选项:-s 创建符号链接,-f 强制创建,-i 交互模式
- 使用方法灵活,可以方便地组织文件结构


  ln 是 Linux 系统中非常重要和常用的命令,掌握 ln 的用法可以大大提高在 Linux 下组织文件和管理数据的效率。