---
icon: edit
date: 2022-05-26
category:
  - Java企业开发
tag:
  - ZK
star: false
---

# 1-Mac安装

> [https://blog.csdn.net/NickDeCodes/article/details/124342792](https://blog.csdn.net/NickDeCodes/article/details/124342792)

- brew安装
```shell
brew install zookeeper
```
```shell
# liuhongjiao @ liuhongjiaodeMacBook-Pro in ~/develop/soft [9:38:44]
$ brew install zookeeper
Running `brew update --preinstall`...
==> Downloading https://mirrors.aliyun.com/homebrew/homebrew-bottles/openjdk-18.0.1.catalina.bottle.tar.gz
######################################################################## 100.0%
==> Downloading https://mirrors.aliyun.com/homebrew/homebrew-bottles/zookeeper-3.7.0_1.catalina.bottle.tar.gz
######################################################################## 100.0%
==> Installing dependencies for zookeeper: openjdk
==> Installing zookeeper dependency: openjdk
==> Pouring openjdk-18.0.1.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/openjdk/18.0.1: 641 files, 307.9MB
==> Installing zookeeper
==> Pouring zookeeper-3.7.0_1.catalina.bottle.tar.gz
==> Caveats
To start zookeeper now and restart at login:
  brew services start zookeeper
Or, if you don't want/need a background service you can just run:
  zkServer start
==> Summary
🍺  /usr/local/Cellar/zookeeper/3.7.0_1: 1,074 files, 42.4MB
==> Running `brew cleanup zookeeper`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> zookeeper
To start zookeeper now and restart at login:
  brew services start zookeeper
Or, if you don't want/need a background service you can just run:
  zkServer start
```

1. 以服务启动
```shell
brew service start zookeeper
```

2. 不作为后台服务启动
```shell
zkServer start
```

3. 安装目录
```shell
/usr/local/Cellar/zookeeper/3.7.0_1
```

4. 配置文件目录
```shell
/usr/local/etc/zookeeper
```
