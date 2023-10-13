---
icon: edit
date: 2023-10-13
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基础 | sudo

sudo(substitute user do)命令允许系统管理员让普通用户执行一些或者全部需要root权限的命令。通过sudo,系统管理员可以精细地控制每个用户的权限。
## 一、sudo 命令简介
sudo 命令的格式如下:
sudo [-AbEHhikPrS] [-g group] [-p prompt] [-u user] command
其中:
- -A :以环境变量的形式保存当下的认证信息,以方便后续的命令调用
- -b :在后台模式下运行命令
- -E :保留当前环境变量,并传递给后面的命令
- -H :设置HOME环境变量为要成为的用户
- -h :显示帮助信息并退出
- -i :以登录的用户身份执行命令
- -k :销毁当前用户的认证信息
- -v：validate, 刷新密码有效时间戳，让有效期延长5分钟
- -P :保留用户的路径设置
- -p :提示符,默认为"Password:"
- -r :转到root用户执行命令 
- -S :从标准输入读取密码
- -u :指定用户执行命令
sudo 命令允许授权用户以安全的方式临时使用超级用户权限执行命令。
## 二、配置sudo
### 1. 安装sudo
大多数Linux发行版默认已经安装了sudo,如果没有安装,可以使用包管理器安装:

```bash
Debian/Ubuntu: 
apt-get install sudo

CentOS/RHEL:  
yum install sudo
```

### 2. 添加sudo用户
默认配置下,只有root用户属于sudo用户组,可以使用sudo。要给其他用户授权使用sudo,需要将用户添加到sudo组:

``` bash
usermod -aG sudo username
```

### 3. 配置sudoers文件
sudo的配置文件是/etc/sudoers,它使用了sudoers语法。该文件只能由root用户修改。
注意,/etc/sudoers文件需要用visudo命令来编辑,而不能直接编辑,这可以防止语法错误。
sudoers文件中的每个条目都表示一个用户的sudo权限,常见的参数包括:

- 用户或者组，携带%代表是用户组
- 第一个ALL： 可以允许在哪些主机上使用sudo
- 第二个ALL：可以以哪些身份执行命令
- 第三个ALL：可以执行哪些命令

```bash
# User privilege specification

root    ALL=(ALL) ALL   # 允许root用户从任意主机以任意用户身份执行任意命令

# Allow members of group sudo to execute any command

%sudo   ALL=(ALL) ALL  

# Allow user1 to run commands as any user but only on localhost

user1 localhost=/sbin/shutdown -h now
```

### 4. 设置密码认证
默认情况下,sudo要求输入当前用户的密码后才能执行命令。
可以通过编辑/etc/sudoers文件修改:

```bash
# Disable sudo password prompt

Defaults!sudoInsults timestamp_timeout=0 
也可以在命令行临时禁用密码:
sudo -n command  # 省略密码提示
sudo -S command  # 从标准输入读取密码
```

## 三、sudo命令示例
### 1. 以其他用户身份执行命令

```bash
# 以user1身份执行命令

sudo -u user1 whoami  

# 以root身份执行命令 

sudo -u root whoami
```

### 2. 配置环境变量

```bash
# 保留当前环境变量

sudo -E vim /etc/hosts  

# 定义环境变量

sudo -H PASSWD=newpasswd bash
```

### 3. 提权修改系统文件

```bash
# 修改权限为600的文件

sudo chmod 600 /etc/file.conf 

# 创建新用户

sudo useradd jerry

# 安装软件包 

sudo apt install nginx
```

### 4. 禁止用户使用sudo

```bash
# 从sudoers配置文件中删除用户

sudo visudo

# 暂时禁用用户sudo权限

sudo -k username
```



