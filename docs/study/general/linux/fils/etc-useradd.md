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

# 文件 | /etc/default/useradd

## 一、文件简介

/etc/default/useradd 文件是 Linux 系统中控制用户添加行为的配置文件。当在系统中添加新用户时,useradd 命令会参考这个配置文件中的默认设置来添加用户。

## 二、配置参数详解

/etc/default/useradd 文件包含以下主要配置参数:

### 1. GROUP

指定新用户所属的初始组。
    GROUP=100
上例中,新用户的初始组将是 GID 为 100 的组。

### 2. HOME

指定新用户的家目录位置。
    HOME=/home
上例中,新用户的家目录将在 /home 目录下,名称为用户名。

### 3. INACTIVE

指定用户账户过期时间。如果用户在这段时间内没有登录,则账户会被禁用。单位为天。
    INACTIVE=30
上例中,用户如30天内未登录,账户将被禁用。

### 4. EXPIRE

指定用户密码过期时间。过期后用户需要修改密码。单位为天。
    EXPIRE=99999
上例中,密码过期时间为 99999 天。

### 5. SHELL

指定新用户的默认 Shell。
    SHELL=/bin/bash
上例中,新用户的默认 Shell 是 bash。

### 6. SKEL

指定骨架目录,新用户家目录会以该目录为模板。
    SKEL=/etc/skel
上例中,会用 /etc/skel 目录作为模板创建新用户家目录。

## 三、配置文件示例

根据上述参数说明,/etc/default/useradd 文件的典型配置如下:
    GROUP=100
    HOME=/home
    INACTIVE=30
    EXPIRE=99999
    SHELL=/bin/bash
    SKEL=/etc/skel
这样配置后,新建用户的主要默认设置为:

- 初始组为 GID 100 组
- 家目录为 /home/username
- 30 天不登录账户被禁用
- 密码过期时间为 99999 天
- 默认 Shell 为 bash
- 家目录结构参考 /etc/skel
  逐步详细的说明了 /etc/default/useradd 文件的常见参数和示例,需要注意修改配置后对新用户的影响。