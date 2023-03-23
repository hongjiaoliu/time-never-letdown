---
icon: edit
date: 2023-03-23
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

## FROM 

指定基础镜像。一般格式如下，`[]`括号内容可省略：

```perl
FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
```

特别需要注意的是`FROM`在一个dockerfile中可以多次出现，以实现多阶段构建。并且可以和ARG 参数交互。

```shell
ARG  CODE_VERSION=latest
FROM base:${CODE_VERSION}
CMD  /code/run-app
​
FROM extras:${CODE_VERSION}
CMD  /code/run-extras
```

## RUN

RUN的两种形式

- RUN 首选， (命令在shell中运行,即默认为/bin/sh -c )
- RUN ["exec",param1,param2]

RUN命令主要是在镜像构建时执行，形成新层。比如我们经常会看到在构建镜像时安装相关软件。

```
RUN yum install -y gcc 
```

当我们不想使用默认shell是可以采用exec形式实现

```
RUN ["/bin/bash","-c","yum install -y gcc"]
```

当然，exec形式可以不使用shell

```
RUN ["yum","install","-y","gcc"]
```

*EXEC*形式被解析为一个JSON阵列，所以必须使用双引号

## CMD

`CMD`指令有三种形式：

- `CMD ["executable","param1","param2"]`（*exec*形式，这是首选形式）

- `CMD ["param1","param2"]`（作为*ENTRYPOINT 的默认参数*）

- `CMD command param1 param2`（shell形式）

一个dockerfile中，应该只写一个CMD，如果有多个只有最后一个生效。在实际编写dockerfie时CMD命令常常用于为*ENTRYPOINT*提供默认值，后面我们会讲到。

**与RUN相比，CMD在构建时不会执行任何操作，主要用于指定镜像的启动命令。CMD的启动命令可以被docker run 参数代替。**

我们在dockerfile中添加如下CMD命令

```shell
CMD echo hello
```

构建镜像后，docker run 不添加参数，启动容器

```shell
[root@localhost dockerfiles]# docker run centos:v1
hello
```

当我们在docker run 添加参数后

```shell
[root@localhost dockerfiles]# docker run centos_env:v1 echo container
container 
```

显然我们CMD命令echo hello已被docker run中的参数echo container取代。

## LABEL

label用于添加镜像的元数据，采用key-value的形式。

```shell
LABEL <key>=<value>
```

比如我们添加如下LABEL

```shell
LABEL "miantainer"="iqsing.github.io"
LABEL "version"="v1.2"
LABEL "author"="waterman&&iqsing"
```

为了防止创建三层，我们最好通过一个标签来写。

```shell
LABEL "miantainer"="iqsing.github.io" \
      "version"="v1.2" \
      "author"="waterman&&iqsing"
```

我们通过docker inspect 来查看镜像label信息

```shell
#docker inspect centos_labels:v1
​
"Labels": {
    "author": "waterman&&iqsing",
    "miantainer": "iqsing.github.io",
    "org.label-schema.build-date": "20201204",
    "org.label-schema.license": "GPLv2",
    "org.label-schema.name": "CentOS Base Image",
    "org.label-schema.schema-version": "1.0",
    "org.label-schema.vendor": "CentOS",
    "version": "v1.2"
}
​
```

## EXPOSE

```shell
EXPOSE 80/tcp
EXPOSE 161/udp
```

注意，EXPOSE只是告诉dockerfile的阅读者，我们构建的镜像需要暴露哪些端口，只是一个信息。在容器中还是需要通过`-p`选项来暴露端口。

## ENV

```shell
ENV <key>=<value> ... 首先方式
或
ENV <key>  <value>
```

通过ENV指定环境变量，将作用于在构建阶段的所有后续指令的环境中。

```shell
ENV username="iqsing"
```

这样当我们启动这个容器后可以查看到容器信息已经附带了`ENV`环境变量

```shell
"Env": [
"PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
"username=iqsing"
],
```

当然我们也可以在启动容器时添加环境变量

```shell
docker run --env <key>=<value>
```

另外如果只需要在镜像构建期间使用环境变量，更好的选择是使用`ARG`参数来处理

## ADD && COPY

ADD和COPY格式相似，有两种形式,包含空格的路径需要后一种形式：

```shell
ADD [--chown=<user>:<group>] <src>... <dest>
ADD [--chown=<user>:<group>] ["<src>",... "<dest>"]
​
COPY [--chown=<user>:<group>] <src>... <dest>
COPY [--chown=<user>:<group>] ["<src>",... "<dest>"]
```

在linux平台中可以对添加到远程目录或文件设置所属用户和组。

`<SRC>`指复制新文件、目录或远程文件 URL，每`<src>`可以包含通配符，如下：

```shell
ADD hom* /mydir/
ADD hom?.txt /mydir/
```

一般使用中，ADD、COPY都遵守以下规则：

- `<src>`路径必须是内部*语境*的构建; 你不能`COPY ../something /something`，因为 `docker build`是将上下文目录（和子目录）发送到 docker 守护进程。
- 如果`<src>`是目录，则复制目录的全部内容，包括文件系统元数据。
- 如果`<src>`是任何其他类型的文件，则将其与其元数据一起单独复制。在这种情况下，如果`<dest>`以斜杠结尾`/`，它将被视为一个目录，其内容`<src>`将被写入`<dest>/base(<src>)`。
- 如果`<src>`直接指定了多个资源，或者由于使用了通配符，则`<dest>`必须是目录，并且必须以斜杠结尾`/`。
- 如果`<dest>`不以斜杠结尾，则将其视为常规文件，并将其内容`<src>`写入`<dest>`.
- 如果`<dest>`不存在，则在其路径中创建所有丢失的目录。

**特别的，当是可识别的压缩包如gzip、bzip2等tar包时，首先会将包添加到镜像中，然后自动解压。这可以说是与COPY命令在使用中的最大的区别。**

## ENTRYPOINT

exec首选和shell形式:

```perl
ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2
```

**ENTRYPOINT 和CMD很相似，都是指定启动命令，不同之处在于ENTRYPOINT 指定的命令无法被docker run 参数取代。**

我们在dockerfile中添加ENTRYPOINT

```perl
ENTRYPOINT echo hello container
```

构建镜像并启动容器，可以看到docker run 中的参数并未取代ENTRYPOINT

```perl
[root@localhost dockerfiles]# docker run centos_entrtpoint:v1 echo hello docker
hello container
```

**这指令优秀的另一个地方在于可以和CMD指令做交互。让容器以应用或者服务运行。**

经典操作：`ENTRYPOINT` + `CMD` = 默认容器命令参数

## VOLUME

```perl
VOLUME ["/data"]
```

volume指令可以用于创建存储卷，我来看一下实例：

```perl
FROM centos
RUN mkdir /volume
RUN echo "hello world" > /volume/greeting
VOLUME /volume
```

构建镜像后，创建一个容器

```perl
[root@localhost dockerfiles]# docker create   --name centos_volume  centos_volue:v1
[root@localhost dockerfiles]# docker inspect centos_volume 
​
 "Mounts": [
            {
                "Type": "volume",
                "Name": "494cdb193984680045c36a16bbc2b759cf568b55c7e9b0852ccf6dff8bf79c46",
                "Source": "/var/lib/docker/volumes/494cdb193984680045c36a16bbc2b759cf568b55c7e9b0852ccf6dff8bf79c46/_data",
                "Destination": "/volume",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
​
```

这样我们就通过VOLUME指令创建一个存储卷，你可以通过`--volumes-from`共享这个容器

## USER

指定指令集所属用户和组。组默认为root。可以作用于`RUN`，`CMD`和 `ENTRYPOINT`它们后面的指令。

```perl
USER <user>[:<group>]
或
USER <UID>[:<GID>]
```

## WORKDIR

指定指令集所在的工作目录，若目录不存在将会自动创建。可作用于`RUN`，`CMD`， `ENTRYPOINT`，`COPY`和`ADD`

```perl
WORKDIR /path/to/workdir
```

## ARG

```perl
ARG <name>[=<default value>]
```

`ARG`指令定义了一个变量，我们可以在`docker build`通过使用`--build-arg <varname>=<value>` 标志的命令将其传递给构建器。

- 如果`ARG`指令具有默认值并且在构建时没有传递任何值，则构建器使用默认值。
- 在多阶段构建应该添加多个ARG
- ENV变量会覆盖ARG变量
- 与ENV变量相比，ARG变量多用于构建，无法驻留在镜像中。

## STOPSIGNAL

配置容器退出时的系统调用

```perl
STOPSIGNAL signal
```

## HEALTHCHECK

`HEALTHCHECK`指令有两种形式：

- `HEALTHCHECK [OPTIONS] CMD command` （通过在容器内运行命令来检查容器健康状况）
- `HEALTHCHECK NONE` （禁用从基础镜像继承的任何健康检查）

OPTIONS支持如下参数：

- `--interval=DURATION`（默认值：`30s`）
- `--timeout=DURATION`（默认值：`30s`）
- `--start-period=DURATION`（默认值：`0s`）
- `--retries=N`（默认值：`3`）

比如我们可以添加如下参数用于检查web服务：

```perl
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost/ || exit 1
```

每五分钟左右检查一次web服务器能否在3s内响应。如果失败则返回状态码1

命令的退出状态指示容器的健康状态。可能的值为：

- 0：成功 - 容器运行良好，可以使用
- 1：不健康 - 容器无法正常工作
- 2：reserved - 不要使用这个退出代码























