---
icon: edit
date: 2022-04-26
category:
  - FE
tag:
  - Nginx
star: false
---

# Nginx | 4-安装篇-编译

![图 1](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993369530.png)  


## 一、下载
官网地址：[https://nginx.org/](https://nginx.org/)  ----download 

![图 2](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993407167.png)  


找到稳定版本，copy其地址： [https://nginx.org/download/nginx-1.20.2.tar.gz](https://nginx.org/download/nginx-1.20.2.tar.gz) 
```bash
wget  https://nginx.org/download/nginx-1.20.2.tar.gz 
tar -xzf nginx-1.20.2.tar.gz
cd nginx-1.20.2
ll -a 
```

![图 3](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993435502.png)  


## 二、vim中配置Nginx语法高亮
### 1-未配置前
vim conf/nginx.conf

![图 4](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993464124.png)  


### 2-配置后
```bash
cp -r contrib/vim/* /usr/share/vim/vimfiles/
```
![图 5](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993487839.png)  


## 三、编译
```bash
./configure --prefix=/usr/local/nginx
```
出现报错

![图 6](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993518114.png)  


安装pcre-devel解决问题
```bash
yum -y install pcre-devel
```
又报错

![图 7](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993540085.png)  


执行
```bash
yum -y install openssl openssl-devel
```
最后，再次执行 ./configure --prefix=/usr/local/nginx  安装完成

```bash
Configuration summary
  + using system PCRE library
  + OpenSSL library is not used
  + using system zlib library

  nginx path prefix: "/usr/local/nginx"
  nginx binary file: "/usr/local/nginx/sbin/nginx"
  nginx modules path: "/usr/local/nginx/modules"
  nginx configuration prefix: "/usr/local/nginx/conf"
  nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
  nginx pid file: "/usr/local/nginx/logs/nginx.pid"
  nginx error log file: "/usr/local/nginx/logs/error.log"
  nginx http access log file: "/usr/local/nginx/logs/access.log"
  nginx http client request body temporary files: "client_body_temp"
  nginx http proxy temporary files: "proxy_temp"
  nginx http fastcgi temporary files: "fastcgi_temp"
  nginx http uwsgi temporary files: "uwsgi_temp"
  nginx http scgi temporary files: "scgi_temp"
```
执行make编译
```bash
make
```
执行成功
```bash
sed -e "s|%%PREFIX%%|/usr/local/nginx|" \
        -e "s|%%PID_PATH%%|/usr/local/nginx/logs/nginx.pid|" \
        -e "s|%%CONF_PATH%%|/usr/local/nginx/conf/nginx.conf|" \
        -e "s|%%ERROR_LOG_PATH%%|/usr/local/nginx/logs/error.log|" \
        < man/nginx.8 > objs/nginx.8
make[1]: Leaving directory `/root/app/nginx-1.20.2'
```
再执行
```bash
make install
```
## 四、启动

```bash
cd /usr/local/nginx 
[root@liuhongjiao sbin]# ./nginx -s reload
```
报错
nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)

去logs目录下，查看确实没有nginx.pid文件
执行
```bash
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```
再次查看logs目录下已经生成nginx.pid文件

再次执行 

![图 8](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993560832.png)  

检查nginx进程，发现已经正常启动 

![图 9](https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993570627.png)  
