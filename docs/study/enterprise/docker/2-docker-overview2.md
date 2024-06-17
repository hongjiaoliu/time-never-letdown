---
icon: edit
date: 2022-12-22
category:
  - Java企业开发
tag:
  - Docker
star: false
---

# 2-Docker入门实战（下）

![图 1](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157709009.png)  

## 摘要
平时经常使用Docker来搭建各种环境，简单又好用！但是有时候往往会忘记命令，总结了一套非常实用的Docker命令，对于Java开发来说基本上够用了，希望对大家有所帮助！
## Docker简介
Docker是一个开源的应用容器引擎，让开发者可以打包应用及依赖包到一个可移植的镜像中，然后发布到任何流行的Linux或Windows机器上。使用Docker可以更方便地打包、测试以及部署应用程序。
## Docker环境安装

- 安装yum-utils；
  
```
yum install -y yum-utils device-mapper-persistent-data lvm2 复制代码
```

- 为yum源添加docker仓库位置；
```
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 复制代码
```
- 安装docker服务；
```
yum install docker-ce 复制代码
```
- 启动docker服务。
```
systemctl start docker 复制代码
```
## Docker镜像常用命令
### 搜索镜像
```
docker search java 复制代码
```
![图 2](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157749267.png)  

### 下载镜像

```
docker pull java:8 复制代码

docker pull [OPTIONS] NAME[:TAG|@DIGEST]

# 拉取最新版本镜像
docker pull tomcat:latest

# 等同 docker pull tomcat:latest
docker pull tomcat

# 拉取指定版本镜像
docker pull tomcat:8.5.75
```

详情访问官网：[docker pull](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Freference%2Fcommandline%2Fpull%2F)

### 查看镜像版本
由于docker search命令只能查找出是否有该镜像，不能找到该镜像支持的版本，所以我们需要通过Docker Hub来搜索支持的版本。

- 进入Docker Hub的官网，地址：[hub.docker.com](https://link.juejin.cn?target=https%3A%2F%2Fhub.docker.com)
- 然后搜索需要的镜像：

![图 3](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157790282.png)  

- 查看镜像支持的版本：
  
![图 4](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157813623.png)  

- 进行镜像的下载操作：
```
docker pull nginx:1.17.0 复制代码
```
### 列出镜像
```shell
docker images [OPTIONS] [REPOSITORY[:TAG]]

# 列出本地所有镜像（默认会隐藏中间镜像，可以使用 -a 查看中间镜像）
docker images

REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        8.5.75    77cfff2e1fe4   3 days ago     679MB
tomcat        latest    fb5657adc892   7 weeks ago    680MB
hello-world   latest    feb5d9fea6a5   4 months ago   13.3kB


# 只显示镜像ID
docker images -q

77cfff2e1fe4
fb5657adc892
feb5d9fea6a5
```

docker images 复制代码
![图 5](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157847241.png)  

- **REPOSITORY**：镜像仓库名
- **TAG**：镜像标签名
- **IMAGE ID**：镜像ID
- **CREATED**：镜像创建时间
- **SIZE**：镜像大小

详情访问官网：[docker images](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Freference%2Fcommandline%2Fimages%2F)
### 删除镜像
```shell
docker rmi [OPTIONS] IMAGE [IMAGE...]

# 通过镜像ID删除单个
docker rmi feb5d9fea6a5

# 通过镜像ID删除多个
docker rmi feb5d9fea6a5 16ecd2772934

# 通过仓库名:标签名删除
docker rmi hello-world:latest

# 强制删除（镜像存在容器实例则无法删除，需要强制删除）
docker rmi -f feb5d9fea6a5

# 删除全部镜像
docker rmi -f $(docker images -qa)
```

- 指定名称删除镜像：
```
docker rmi java:8 复制代码
```

- 指定名称删除镜像（强制）：
```
docker rmi -f java:8 复制代码
```
- 删除所有没有引用的镜像：
```
docker rmi `docker images | grep none | awk '{print $3}'` 复制代码
```
- 强制删除所有镜像：
```
docker rmi -f $(docker images) 复制代码
```
详情访问官网：[docker rmi](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Freference%2Fcommandline%2Frmi%2F)

### 导出镜像

```shell
docker image save centos:7.8.2003 > /opt/centos7.8.2003.tgz
```

### 导入镜像
```shell
docker image load -i /opt/centos7.8.2003.tgz
```

### 打包镜像

```shell
 -t 表示指定镜像仓库名称/镜像名称:镜像标签 .表示使用当前目录下的Dockerfile文件 
 docker build -t mall/mall-admin:1.0-SNAPSHOT 
```

### 提交容器

```shell
docker commit 容器id 新的镜像名（dockerhub账号/新的镜像名）

```

## Docker容器常用命令
### 新建并启动容器
```
docker run -p 80:80 --name nginx \ -e TZ="Asia/Shanghai" \ -v /mydata/nginx/html:/usr/share/nginx/html \ -d nginx:1.17.0 
```

- -p：将宿主机和容器端口进行映射，格式为：宿主机端口:容器端口；
- --name：指定容器名称，之后可以通过容器名称来操作容器；
- -e：设置容器的环境变量，这里设置的是时区；
- -v：将宿主机上的文件挂载到宿主机上，格式为：宿主机文件目录:容器文件目录；
- -d：表示容器以后台方式运行。
### 列出容器

- 列出运行中的容器：
  
```
docker ps 复制代码
```

![图 6](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157872623.png)  

- 列出所有容器：
```
docker ps -a 复制代码
```
![图 7](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157882771.png)  

### 停止容器
```
注意：$ContainerName 表示容器名称，$ContainerId 表示容器ID，可以使用容器名称的命令，基本也支持使用容器ID，比如下面的停止容器命令。
```

```
docker stop $ContainerName(or $ContainerId) 复制代码
```
例如：
```
docker stop nginx #或者 docker stop c5f5d5125587
```
### 强制停止容器
```
docker kill $ContainerName
```
### 启动容器
```
docker start $ContainerName
```
### 进入容器

- 先查询出容器的pid：
```
docker inspect --format "{{.State.Pid}}" $ContainerName 
```

- 根据容器的pid进入容器：
```
nsenter --target "$pid" --mount --uts --ipc --net --pid
```
![图 8](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157902304.png)  

- 进入容器的命令
```shell
docker exec -it 容器id bash 
```



### 删除容器

- 删除指定容器：
```
docker rm $ContainerName
```

- 按名称通配符删除容器，比如删除以名称mall-开头的容器：
```
docker rm `docker ps -a | grep mall-* | awk '{print $1}'` 复制代码
```
- 强制删除所有容器；
```
docker rm -f $(docker ps -a -q)
```
### 查看容器的日志

- 查看容器产生的全部日志：
```
docker logs $ContainerName
```
![图 9](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157920317.png)  

- 动态查看容器产生的日志：
```
docker logs -f $ContainerName
```
### 查看容器的IP地址
```
docker inspect --format '{{ .NetworkSettings.IPAddress }}' $ContainerName
```
![图 10](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157940673.png)  

### 修改容器的启动方式

```shell
将容器启动方式改为
always docker container update --restart=always $ContainerName
```
### 同步宿主机时间到容器
```
docker cp /etc/localtime $ContainerName:/etc/ 
```
### 指定容器时区
```
docker run -p 80:80 --name nginx \ -e TZ="Asia/Shanghai" \ -d nginx:1.17.0 
```
### 查看容器资源占用状况

- 查看指定容器资源占用状况，比如cpu、内存、网络、io状态：

```
docker stats $ContainerName 复制代码
```

![图 17](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678160547984.png)  


- 查看所有容器资源占用情况：
```
docker stats -a 复制代码
```
![图 11](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157960408.png)  

### 查看容器磁盘使用情况
```
docker system df
```
![图 12](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157970511.png)  

### 执行容器内部命令
```
docker exec -it $ContainerName /bin/bash 复制代码
```
![图 13](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157982213.png)  

### 指定账号进入容器内部
使用root账号进入容器内部
```
 docker exec -it --user root $ContainerName /bin/bash 复制代码
```
### 查看所有网络 
```
docker network ls 复制代码
[root@local-linux ~]# docker network ls NETWORK ID          NAME                     DRIVER              SCOPE 59b309a5c12f        bridge                   bridge              local ef34fe69992b        host                     host                local a65be030c632        none      
```

### 创建外部网络
```
docker network create -d bridge my-bridge-network 复制代码
```
### 指定容器网络
```
docker run -p 80:80 --name nginx \ --network my-bridge-network \ -d nginx:1.17.0 复制代码
```
## 修改镜像的存放位置

- 查看Docker镜像的存放位置：
```
docker info | grep "Docker Root Dir" 复制代码
```
![图 14](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678158000125.png)  

- 关闭Docker服务：
```
systemctl stop docker 复制代码
```
- 先将原镜像目录移动到目标目录：
```
mv /var/lib/docker /mydata/docker 复制代码
```
- 建立软连接：
```
ln -s /mydata/docker /var/lib/docker 复制代码
```
![图 15](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678158016402.png)  

- 再次查看可以发现镜像存放位置已经更改。
![图 16](https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678158029679.png)  


作者：MacroZheng
链接：https://juejin.cn/post/6895888125886332941
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
