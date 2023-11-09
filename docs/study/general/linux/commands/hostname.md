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

# 基础 | hostname
## 基本信息

hostname命令用于查看或临时设置主机名。要永久修改主机名需要修改相关配置文件。

## 基础用法

- 查看当前主机名
  hostname
- 临时设置主机名(重启后失效)
  hostname newhostname

## 永久修改主机名

### CentOS/RHEL

修改/etc/sysconfig/network文件,添加HOSTNAME=newhostname
vim /etc/sysconfig/network

HOSTNAME=newhostname

### Ubuntu/Debian

修改/etc/hostname文件,并修改/etc/hosts文件,将127.0.0.1对应的主机名改为新主机名。
vim /etc/hostname

newhostname

vim /etc/hosts

127.0.0.1   newhostname

### openSUSE

修改/etc/HOSTNAME文件,并修改/etc/hosts文件。
vim /etc/HOSTNAME

newhostname

vim /etc/hosts

127.0.0.1   newhostname

### Arch Linux

修改/etc/hostname文件,并修改/etc/hosts文件。
vim /etc/hostname 

newhostname

vim /etc/hosts

127.0.0.1   newhostname

## 推荐方式

使用hostnamectl命令设置主机名:
hostnamectl set-hostname newhostname
hostnamectl在多数新版本Linux中可用,是更推荐的设置主机名的方式。

## 其他高级用法

- 查看主机域名
  hostname -d
- 查看IP地址
  hostname -i

- 查看所有网络地址
  hostname -I
- 查看完整主机名和域名
  hostname --fqdn

## 总结

hostname命令功能单一实用,是Linux系统管理的基础。要注意不同发行版的配置文件路径可能有差异。推荐使用hostnamectl统一设置主机名。