---
icon: edit
date: 2023-03-10
category:
  - Java企业开发
tag:
  - Docker
star: false
---

# 5-Docker File

 ## 什么是 Dockerfile？ 

 Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

 ## 使用 Dockerfile 定制镜像

 ## Docker file 指令
```shell
 FROM 这个镜像的妈妈是谁？（指定基础镜像）

 MAINTAINER 告诉别人，谁负责养它？（指定维护者信息，可以没有）

 RUN 你想让它干啥（在命令前加上RUN即可）

 ADD 添加宿主机的文件到容器内
 
 COPY 作用和ADD一样的，都是拷贝宿主机文件到容器内，但ADD会自动解压

 WORKDIR 我是cd,今天刚化了妆（设置当前工作目录）

 VOLUME 给它一个存放行李的地方（设置卷，挂载主机目录）

 EXPOSE 它要打开的门是啥（指定对外的端口）

 CMD 奔跑吧，兄弟！（指定容器启动后的要干的事情）

```

 其它指令
 ```perl

  ENV 环境变量

  ENTRYPOINT 容器启动后执行的命令
 ```

