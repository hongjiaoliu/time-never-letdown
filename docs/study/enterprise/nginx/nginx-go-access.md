---
icon: edit
date: 2022-04-25
category:
  - FE
tag:
  - Nginx
star: false
---
# Nginx | 6-Go Access 分析日志


# 一：下载
地址：[https://goaccess.io/download](https://goaccess.io/download)
```bash
$ wget https://tar.goaccess.io/goaccess-1.5.6.tar.gz
$ tar -xzvf goaccess-1.5.6.tar.gz
$ cd goaccess-1.5.6/
$ ./configure --enable-utf8 --enable-geoip=mmdb
$ make
# make install
```
执行第4步，报错
Missing development files for libmaxminddb library（--enable-geoip=mmdb依赖项）
原因是未安装libmaxminddb
```bash
$ wget https://github.com/maxmind/libmaxminddb/releases/download/1.6.0/libmaxminddb-1.6.0.tar.gz
$ tar -xzvf libmaxminddb-1.6.0.tar.gz
$ cd libmaxminddb-1.6.0
$ ./configure
$ make
$ make install
```
然后重新执行第4步，操作如下：
configure: error: *** Missing development libraries for ncursesw（--enable-utf8依赖项）
原因是没有安装ncursesw
```bash
yum install ncurses-devel
```
再次执行第4步，成功
```bash
Your build configuration:

  Prefix         : /usr/local
  Package        : goaccess
  Version        : 1.5.6
  Compiler flags :  -pthread
  Linker flags   : -lnsl -lncursesw -lmaxminddb -lpthread  
  UTF-8 support  : yes
  Dynamic buffer : no
  Geolocation    : GeoIP2
  Storage method : In-Memory with On-Disk Persistent Storage
  TLS/SSL        : no
  Bugs           : hello@goaccess.io
```
然后执行第5步，报错
```bash
make: *** [src/tpls.h] Error 127
[root@liuhongjiao goaccess-1.5.6]# sudo make 
cat ./resources/tpls.html | sed "s/^[[:space:]]*//" | sed "/^$/d" | tr -d "\r\n" > ./resources/tpls.html.tmp
./bin2c ./resources/tpls.html.tmp src/tpls.h tpls
./bin2c: error while loading shared libraries: libmaxminddb.so.0: cannot open shared object file: No such file or directory
make: *** [src/tpls.h] Error 127
```
核心报错是：./bin2c: error while loading shared libraries: libmaxminddb.so.0: cannot open shared object file: No such file or directory
原因：执行某些外部程序的时候可能会提示找不到共享库的错误
解决方案：[系统问题-3](https://www.yuque.com/maohou/wkdvge/tqprdn)

然后重新执行第5步，成功
然后执行第6步，成功

至此，go access 安装成功

# 二、使用
## 1、生成report.html 
```bash
goaccess logs/access.log -o html/report.html --real-time-html --time-format='%H:%M:%S' --date-format='d%/%b/%Y' --log-format=COMBINED
```
执行结果：
```bash
 [PARSING logs/access.log] {0} @ {0/s}
WebSocket server ready to accept new client connections
```

如果要后台执行，在命令行加上  --daemonize  会输出

```
Daemonized GoAccess: 15449
```

## 2、配置report.html代理
打开日志配置
```bash
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

access_log  logs/access.log  main;
```
配置代理
```bash
location /report.html {
            alias /usr/local/nginx/html/report.html;
        }
```
## 3、goaccess界面

![图 1](https://cdn.liuhongjiao.cn/images/2023/02/13/nginx-go-access/1676250082877.png)  

## 遗留问题：
### 1、发现参数-real-time-html无法实时刷新html
默认goaccess在开启实时real-time-html后会监听端口7890的websocket，如果服务器不允许请求7890端口，你就看不到那个页面是实时更新的——你会发现访问的页面最后更新时间始终不变。这一点人很多忽略了，很多人以为是哪个生成html静态文件是实时更新的，其实根本不是，那个文件本身一旦生成就不动了，真正更新的实时内容是从websocket过来的
[
](https://blog.csdn.net/m0_37732829/article/details/117999475)
