---
icon: edit
date: 2022-05-01
category:
  - Java企业开发
tag:
  - ElasticSearch
star: false
---

# 1-介绍与安装

全文搜索属于最常见的需求，开源的 [Elasticsearch](https://www.elastic.co/) （以下简称 Elastic）是目前全文搜索引擎的首选。它可以快速地储存、搜索和分析海量数据。
Elastic 的底层是开源库 Lucene。但是，你没法直接用 Lucene，必须自己写代码去调用它的接口。Elastic 是 Lucene 的封装，提供了 REST API 的操作接口，开箱即用。
# 基本概念
## Index（索引）
Elastic 会索引所有字段，经过处理后写入一个反向索引（Inverted Index）。查找数据的时候，直接查找该索引。
所以，Elastic 数据管理的顶层单位就叫做 Index（索引）。它是单个数据库的同义词。每个 Index （即数据库）的名字必须是小写。

- 动词，相当于mysql的insert
- 名词，相当于mysql的database
## Type（类型）
在 Index（索引）中，可以定义一个或多个类型。
类似于 MySQL 的 Table，每一种类    型的数据存放在一起。

**在Elasticsearch6.0之后，Type 类型被移除。**
![图 1](https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425232940.png)  

## Document（文档）
保存在某个 Index（索引）下，某种 Type（类型）的一个数据，Document（文档）是JSON格式的，Document 就像是 MySQL 中某个 Table 里面每一行的数据，字段就是Document里的属性。
![图 2](https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425246068.png)  

## 倒排索引
![图 3](https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425258944.png)  

# Docker安装Elasticsearch、Kibana
## 1. 下载镜像文件
```shell
# 存储和检索数据
docker pull elasticsearch:7.4.2

# 可视化检索数据
docker pull kibana:7.4.2
```
## 2. 配置挂载数据文件夹
```shell
# 创建配置文件目录
mkdir -p /mydata/elasticsearch/config

# 创建数据目录
mkdir -p /mydata/elasticsearch/data

# 将/mydata/elasticsearch/文件夹中文件都可读可写
chmod -R 777 /mydata/elasticsearch/

# 配置任意机器可以访问 elasticsearch
echo "http.host: 0.0.0.0" >/mydata/elasticsearch/config/elasticsearch.yml
```
## 3. 启动Elasticsearch
命令后面的 \是换行符，注意前面有空格
```shell
docker run --name elasticsearch -p 9200:9200 -p 9300:9300 \
-e  "discovery.type=single-node" \
-e ES_JAVA_OPTS="-Xms64m -Xmx512m" \
-v /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-v /mydata/elasticsearch/data:/usr/share/elasticsearch/data \
-v  /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-d elasticsearch:7.4.2 
```

- `-p 9200:9200 -p 9300:9300`：向外暴露两个端口，9200用于HTTP REST API请求，9300 ES 在分布式集群状态下 ES 之间的通信端口；
- `-e  "discovery.type=single-node"`：es 以单节点运行
- `-e ES_JAVA_OPTS="-Xms64m -Xmx512m"`：设置启动占用内存，不设置可能会占用当前系统所有内存
- -v：挂载容器中的配置文件、数据文件、插件数据到本机的文件夹；
- `-d elasticsearch:7.6.2`：指定要启动的镜像

访问 IP:9200 看到返回的 json 数据说明启动成功。
![图 4](https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425285221.png)  

## 4. 设置 Elasticsearch 随Docker启动
```shell
# 当前 Docker 开机自启，所以 ES 现在也是开机自启
docker update elasticsearch --restart=always
```
## 5. 启动可视化Kibana
```shell
docker run --name kibana \
-e ELASTICSEARCH_HOSTS=http://192.168.163.131:9200 \
-p 5601:5601 \
-d kibana:7.4.2
```
`-e ELASTICSEARCH_HOSTS=``http://192.168.163.131:9200`: **这里要设置成自己的虚拟机IP地址**
**浏览器输入**192.168.163.131:5601 测试：
![图 5](https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425308810.png)  

## 6. 设置 Kibana 随Docker启动
```shell
# 当前 Docker 开机自启，所以 kibana 现在也是开机自启
docker update kibana --restart=always
```
