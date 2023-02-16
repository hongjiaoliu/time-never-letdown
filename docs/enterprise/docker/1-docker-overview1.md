---
icon: edit
date: 2022-12-21
category:
  - Java企业开发
tag:
  - Docker
star: false
---

# 1-Docker入门实战（上）

# 一、Docker 概述
Docker 是一个用于开发、发布和运行应用程序的开放平台。Docker 使您能够将应用程序与基础架构分离，以便您可以快速交付软件。使用 Docker，您可以像管理应用程序一样管理基础设施。
## Docker 能做什么？

---

- 快速、一致地交付您的应用程序
- 响应式部署和扩展
- 在相同硬件上运行更多工作负载
## Docker 架构

---

Docker 使用客户端-服务器架构。Docker Client 与 Docker Daemon 通信，后者负责构建、运行和分发 Docker 容器的繁重工作。

![图 1](https://cdn.liuhongjiao.cn/images/2023/02/16/1-docker-overview1/1676510523466.png)  



- **Client**：客户端，负责与 Docker Daemon 进行通信，用户通过 Docker Clinet 与 Docker Daemon 进行交互。
- **Docker Daemon**：服务端，Docker 主机上的守护进程，监听 Docker API 请求并管理 Docker 对象。
- **Images**：镜像，它包含了容器运行时所需要的所有基础文件和配置信息，是一个只读的模板。
- **Containers**：容器，镜像的可运行实例。
- **Registry**：仓库，类似代码仓库，用来存储和分发 Docker 镜像。
## 容器与虚拟机的区别？

---

容器是应用层的抽象，它将代码和依赖项打包在一起。多个容器可以在同一台机器上运行，并与其他容器共享操作系统内核，每个容器在用户空间中作为独立进程运行。与 VM 相比，容器占用的空间更少（大小通常为MB级别），占用的资源更少，启动速度也更快，可以运行更多的应用程序。
虚拟机 (VM) 是物理硬件的抽象，可将一台服务器变成多台服务器。管理程序允许多个虚拟机在单台机器上运行。每个 VM 都包含完整的操作系统、应用程序、必要的二进制文件和库等（大小通常为GB级别），占用的资源更多，启动速度也更慢。

![图 2](https://cdn.liuhongjiao.cn/images/2023/02/16/1-docker-overview1/1676510537355.png)  


# 二、Docker 安装
## 卸载旧版本
```shell
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```
注意：这里的旧版本是指非 docker-ce 的版本。
## 设置存储库
```shell
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```
这里使用的阿里云的地址，没有使用官方提供的 [地址](https://link.juejin.cn/?target=https%3A%2F%2Fdownload.docker.com%2Flinux%2Fcentos%2Fdocker-ce.repo)，防止出现无法访问的问题。
## 安装 Docker
安装最新版本的 Docker Engine 和 containerd，执行如下命令：
```shell
sudo yum install docker-ce docker-ce-cli containerd.io
```
如果需要安装指定版本的 Docker Engine，可以先列出仓库中的可用版本：
```shell
yum list docker-ce --showduplicates | sort -r

docker-ce.x86_64            3:20.10.9-3.el7                     docker-ce-stable
docker-ce.x86_64            3:20.10.8-3.el7                     docker-ce-stable
docker-ce.x86_64            3:20.10.7-3.el7                     docker-ce-stable
docker-ce.x86_64            3:20.10.6-3.el7                     docker-ce-stable
docker-ce.x86_64            3:20.10.5-3.el7                     docker-ce-stable
```
然后选择并安装指定版本：
```shell
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
```
其中 <VERSION_STRING> 填 20.10.9 这一部分。
## 启动并验证 Docker
启动 Docker 引擎：
```shell
systemctl enable docker --now
```
验证 Docker 版本信息：
```shell
docker version

Client: Docker Engine - Community
 Version:           20.10.12
 API version:       1.41
 Go version:        go1.16.12
 Git commit:        e91ed57
 Built:             Mon Dec 13 11:45:41 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.12
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.12
  Git commit:       459d0df
  Built:            Mon Dec 13 11:44:05 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.12
  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d
 runc:
  Version:          1.0.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```
运行 hello-world 验证 Docker 引擎是否正确安装：
```shell
docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:97a379f4f88575512824f3b352bc03cd75e239179eea0fecc38e597b2209f49a
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
## 卸载 Docker
卸载 Docker 引擎、CLI 和 Containerd 软件包：
```shell
sudo yum remove docker-ce docker-ce-cli containerd.io
```
主机上的镜像、容器、卷或自定义配置文件不会自动删除。要删除所有镜像、容器和卷：
```shell
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```
## 阿里云镜像加速
登录阿里云的 [镜像加速器](https://link.juejin.cn/?target=https%3A%2F%2Fcr.console.aliyun.com%2Fcn-hangzhou%2Finstances%2Fmirrors)，找到对应的镜像加速器地址进行配置，然后重启服务。
```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [""]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```
执行 docker info 命令，看到 Registry Mirrors 对应的镜像地址正确，则代表配置成功。

