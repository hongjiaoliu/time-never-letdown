---
icon: edit
date: 2022-05-04
category:
  - FE
tag:
  - Nginx
star: false
---

# Nginx | 5-安装篇-Docker

> 这里介绍如何使用 docker 安装 nginx，首先我们先启动一个临时的 nginx，将它的配置拷贝到我们将要挂载的本机 nginx 配置目录中，之后再创建一个新的我们要用的 nginx 容器。

## 1. 创建要挂载的配置目录
```shell
mkdir -p /mydata/nginx/conf
```
## 2. 启动临时nginx容器
```shell
docker run -p 80:80 --name nginx -d nginx:1.10
```
## 3. 拷贝出 Nginx 容器的配置
```shell
# 将nginx容器中的nginx目录复制到本机的/mydata/nginx/conf目录
docker container cp nginx:/etc/nginx /mydata/nginx/conf

# 复制的是nginx目录，将该目录的所有文件移动到 > 这里介绍如何使用 docker 安装 nginx，首先我们先启动一个临时的 nginx，将它的配置拷贝到我们将要挂载的本机 nginx 配置目录中，之后再创建一个新的我们要用的 nginx 容器。

## 1. 创建要挂载的配置目录
```shell
mkdir -p /mydata/nginx/conf
```
## 2. 启动临时nginx容器
```shell
docker run -p 80:80 --name nginx -d nginx:1.10
```
## 3. 拷贝出 Nginx 容器的配置
```shell
# 将nginx容器中的nginx目录复制到本机的/mydata/nginx/conf目录
docker container cp nginx:/etc/nginx /mydata/nginx/conf

# 复制的是nginx目录，将该目录的所有文件移动到 conf 目录
mv /mydata/nginx/conf/nginx/* /mydata/nginx/conf/

# 删除多余的 /mydata/nginx/conf/nginx目录
rm -rf /mydata/nginx/conf/nginx
```
## 4. 删除临时nginx容器
```shell
# 停止运行 nginx 容器
docker stop nginx

# 删除 nginx 容器
docker rm nginx
```
## 5. 启动 nginx 容器
```shell
docker run -p 80:80 --name nginx \
-v /mydata/nginx/html:/usr/share/nginx/html \
-v /mydata/nginx/logs:/var/log/nginx \
-v /mydata/nginx/conf/:/etc/nginx \
-d nginx:1.10
```
## 6. 设置 nginx 随 Docker 启动
```shell
docker update nginx --restart=always
```
## 7. 测试 nginx
```shell
echo '<h1><a target="_blank" href="https://github.com/zsy0216/guli-mall">谷粒商城源码</a></h1>' \
>/mydata/nginx/html/index.html
```
打开：[http://192.168.163.131/](http://192.168.163.131/) 可以看到下面内容说明安装成功
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12568777/1615427904611-9eb096c6-bbda-41a8-bc80-7a3b35429a83.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_20%2Ctext_RXDmtYHoi48%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10#height=118&id=WfusQ&name=image.png&originHeight=236&originWidth=703&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17696&status=done&style=none&title=&width=351.5)
conf 目录
mv /mydata/nginx/conf/nginx/* /mydata/nginx/conf/

# 删除多余的 /mydata/nginx/conf/nginx目录
rm -rf /mydata/nginx/conf/nginx
```
## 4. 删除临时nginx容器
```shell
# 停止运行 nginx 容器
docker stop nginx

# 删除 nginx 容器
docker rm nginx
```
## 5. 启动 nginx 容器
```shell
docker run -p 80:80 --name nginx \
-v /mydata/nginx/html:/usr/share/nginx/html \
-v /mydata/nginx/logs:/var/log/nginx \
-v /mydata/nginx/conf/:/etc/nginx \
-d nginx:1.10
```
## 6. 设置 nginx 随 Docker 启动
```shell
docker update nginx --restart=always
```
## 7. 测试 nginx
```shell
echo '<h1><a target="_blank" href="https://github.com/zsy0216/guli-mall">谷粒商城源码</a></h1>' \
>/mydata/nginx/html/index.html
```
打开：[http://192.168.163.131/](http://192.168.163.131/) 可以看到下面内容说明安装成功
![image.png](https://cdn.nlark.com/yuque/0/2021/png/12568777/1615427904611-9eb096c6-bbda-41a8-bc80-7a3b35429a83.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_20%2Ctext_RXDmtYHoi48%3D%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10#height=118&id=WfusQ&name=image.png&originHeight=236&originWidth=703&originalType=binary&ratio=1&rotation=0&showTitle=false&size=17696&status=done&style=none&title=&width=351.5)
