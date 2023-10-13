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

## 一、hostname命令简介
hostname命令用于查看或者设置当前系统的主机名。
主机名是区分不同Linux系统的一个重要标识。
## 二、hostname命令语法
```bash
hostname(选项)(参数)
```


选项:

- -V:显示版本信息并退出
- -h:显示帮助信息并退出
- -i:显示主机的所有网络地址
- -s:只显示主机名,不显示域名
- -f:显示FQDN(完全限定域名)
参数:
主机名
## 三、hostname命令使用示例
1. 查看当前主机名
  ```bash
  hostname
  ```

  设置主机名为myhost
  ```bash
  hostname myhost
  ```
2. 显示FQDN
  ```bash
  hostname -f
  ```
3. 只显示主机名,不显示域名
  ```bash
  hostname -s
  ```

4. 显示版本信息
  ```bash
  hostname -V
  ```
## 四、hostname命令注意事项
- hostname命令设置的主机名是暂时的,重启后会还原
- 要永久修改主机名需要修改/etc/hostname文件
## 五、hostname命令与hosts文件
hosts文件中存储着主机名与IP地址的映射关系。hostname命令与hosts文件经常配合使用来确认主机名与IP地址的对应关系。
1. 在hosts文件中添加记录

  ```bash
  192.168.1.101 myhost
  ```

2. 使用hostname命令查看主机名与IP地址
  ```bash
  hostname -i
  ```


  以上为hostname命令的详细用法介绍。欢迎大家在使用中遇到任何问题都可以在评论区讨论。