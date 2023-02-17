---
icon: edit
date: 2022-05-05
category:
  - Java企业开发
tag:
  - ElasticSearch
star: false
---

# 6-cerebro可视化

# 一、背景
es本身没有提供一个可视化的工具来查看集群的信息，使用命令行工具不太方便查看，此处安装cerebro来查看集群中的一些信息。

# 二、安装步骤
## 1、下载并解压
```shell
# 下载
wget https://github.com/lmenezes/cerebro/releases/download/v0.9.4/cerebro-0.9.4.zip
# 解压
unzip cerebro-0.9.4.zip && cd cerebro-0.9.4
# 查看目录结构
tree cerebro-0.9.4
cerebro-0.9.4
├── README.md
├── bin
│   ├── cerebro (可执行文件)
│   └── cerebro.bat (window上的可执行文件)
├── conf
│   ├── application.conf (配置文件)
│   ├── eslint.json
│   ├── evolutions
│   │   └── default
│   │       └── 1.sql
│   ├── logback.xml (日志配置)
│   ├── reference.conf
│   └── routes
└── lib
    ├── *.jar

```
![图 1](https://cdn.liuhongjiao.cn/images/2023/02/16/6-cerebro-es/1676510162887.png)  

## 2、配置cerebro
```shell
vim conf/application.yml
```

```shell
# 设置pid文件的路径
pidfile.path="./cerebro.pid"
# 本地数据库的文件地址
data.path = "./cerebro.db"
# 修改端口
play {
    server.http.port = 9209
 }
 # 设置已知的集群
 hosts = [
  {
    host = "http://localhost:9200"
    name = "es-cluster"
    auth = {
      username = ""
      password = ""
    }
  }
]
```
## 3、启动 cerebro
```shell
/Users/huan/soft/elastic-stack/cerebro/cerebro-0.9.4/bin/cerebro &
```
## 4、启动界面

![图 2](https://cdn.liuhongjiao.cn/images/2023/02/16/6-cerebro-es/1676510185968.png)  


# 三、注意事项
1、jdk 的版本 新版的cerebro的jdk需要在11或以上的版本。

![图 3](https://cdn.liuhongjiao.cn/images/2023/02/16/6-cerebro-es/1676510203464.png)  

# 四、参考文档
1、[cerebro下载地址](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Flmenezes%2Fcerebro%2Freleases)
