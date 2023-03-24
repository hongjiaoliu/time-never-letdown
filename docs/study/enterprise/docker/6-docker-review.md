---
icon: edit
date: 2023-03-24
category:
  - Java企业开发
tag:
  - Docker
star: false
---

# 6-Docker小结

## Docker容器

容器是docker的核心概念，容器是一个或者一组应用，它的运行状态如下：

- docker 利用容器运行应用程序
- 容器是镜像的运行实例，可以被run、start、stop、rm 
- 每个容器都是相互隔离，保证平台安全
- 容器可以看作是一个简易版Linux环境（有root权限，进程，用户空间，网络）
- 镜像是只读的，容器在启动的时候创建一层可写层

![图 1](https://cdn.liuhongjiao.cn/images/2023/03/24/6-docker-container/1679619077871.png)  

dockerfile面向开发，docker image作为交付标准，docker container涉及部署和运维，三者合起来完成docker体系。

上图可以理解成：

```shell
FROM ubuntu:14.04   选择基础镜像
ADD run.sh                添加文件进镜像，这一层镜像只有一个内容，就是这个文件
VOLUME /data         设定存储目录，并未添加文件，只是更新了镜像的json文件，便于启动时候读取该层信息
CMD ["./run.sh"]       更新json文件，设定程序入口
```

## Docker容器管理总结

```perl
# 运行镜像，且进入容器内
docker run -it ubuntu bash 

# 容器运行web程序
# 注意端口使用，数字大一些，8000以后开始使用
docker run --name my_nginx -d --restart=always -p 7070:80 nginx 
docker ps 

# docker run 镜像id  是前台运行容器

#查看容器内的日志，实时刷新
docker logs -f  容器id 

#查看运行时，以及挂掉的容器记录
docker ps 在运行的容器
#  等同于 
docker container ls 

docker ps -a 挂掉以及存活的容器
# 等同于
docker container ls -a 

# 停止启动 
docker start 
docker stop 

#  进入容器内 
docker exec -it 容器id bash 

# 删除容器
docker rm 容器id 
docker rm `docker ps -aq`
#强制删除容器
docker rm -f 容器id 

#查看容器内进程资源信息的命令
docker top  容器id 

# 查看容器内资源
docker stats 容器id 

#查看容器的具体信息 
docker inspect 容器id  

# 获取容器内的ip地址,容器的格式化参数
docker inspect --format '{{.NetworkSettings.IPAddress}}'  容器id 

```

docker run 启动容器的时候，docker后台操作流程是：

- 检查本地是否有改镜像，没有就下载
- 利用镜像创建且启动一个容器
- 分配容器文件系统，在只读的镜像层挂载读写层
- 宿主机的网桥接口会分配一个虚拟接口到容器中
- 容器获得地址池里的ip地址
- 执行用户指定的程序
- 若程序没有进程在运行，容器执行完毕后立即终止

> docker start 可以启动一个出于stop状态的容器









