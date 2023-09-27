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

# 文件 | /etc/shadow

## 1. 简介

/etc/shadow 文件保存着 Linux 系统中的用户账号密码信息,只允许 root 用户读写。该文件可以提高系统安全性,防止非授权用户访问密码。

## 2. 文件格式

/etc/shadow 每行记录对应一个用户账号,共九个字段,使用冒号(:)分割:

```shell
用户名:加密密码:最后修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:保留字段
```

- 用户名 - 用户账号名称
- 加密密码 - 使用 DES、MD5、SHA-512 等算法加密的密码
- 最后修改时间 - 上次修改密码的时间,1970年1月1日开始算
- 最小时间间隔 - 两次修改密码之间的最小天数
- 最大时间间隔 - 强制用户修改密码的最大天数
- 警告时间 - 密码过期前多少天开始警告
- 不活动时间 - 密码过期后多少天账号失效
- 失效时间 - 账号失效的日期,YYYY-MM-DD格式
- 保留字段 - 保留未使用

## 3. 加密密码

Linux 使用 crypt() 函数基于用户提供的密码和随机salt值生成加密密码。常见的加密算法有:

- DES - 已不安全,不推荐使用

- MD5 - 128位哈希算法

- SHA-256/512 - 更安全的哈希算法

- Blowfish/BSDi - 开源加密算法
  生成加密密码的命令:

  ```bash
  # MD5
  openssl passwd -1 "plaintextpassword"
  
  # SHA-512  
  openssl passwd -6 "plaintextpassword"
  ```

  检查已加密的密码:

  ```bash
  openssl passwd -1 -salt xyz "encryptedpassword"
  ```

## 4. 密码策略

通过 /etc/login.defs 和 /etc/default/useradd 配置文件可以定义密码复杂度和更改周期策略:

```bash
# 最小密码长度
PASS_MIN_LEN 8

# 密码最少包含大写字母个数
PASS_MIN_UPPER 2

# 强制PASSWORD_DAYS天后用户修改密码 
PASS_MAX_DAYS 90
```

## 5. 用户和密码管理

添加用户时会同时创建 /etc/shadow entrada:

```bash
# 创建新用户
useradd username 

# 设置密码 
passwd username
```

删除用户时对应的 shadow 文件记录也会删除:

```bash
# 删除用户
userdel username
```

只需要修改 /etc/shadow 可以手动重置用户密码:

```bash
# 生成密码加密 - $6$使用SHA-512算法
cryptedpassword=$(openssl passwd -6 newpassword)

# 修改shadow文件更改加密密码
sed -i "s/^username:.*/$username:$cryptedpassword:/" /etc/shadow
```



## 6. 总结

- /etc/shadow 文件保存着 Linux 用户账号密码信息,只允许 root 访问

- 记录格式包含9个字段,使用冒号分隔,第二字段是加密后的密码

- 密码使用 crypt() 函数加密,常见算法有 DES、MD5、SHA-512等

- 可以配置最小密码长度、复杂度和更改周期策略

- useradd 和 passwd 命令可以管理用户和密码,直接编辑 /etc/shadow 文件也可以修改密码

  了解 /etc/shadow 的格式和管理对于保护 Linux 系统安全至关重要。