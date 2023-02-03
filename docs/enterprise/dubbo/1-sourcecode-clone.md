---
icon: edit
date: 2022-07-19
category:
  - Java企业开发
tag:
  - Dubbo
  - 源码学习
star: false
---

# Dubbo | 1-源码下载

# 代码签出
```shell
git clone https://github.com/apache/dubbo.git dubbo
```
## 构建
Dubbo 使用 [maven](http://maven.apache.org/) 作为构建工具。
要求

- Java 1.8 以上的版本
- Maven 2.2.1 或者以上的版本
### Intellij Idea 
```shell
mvn idea:idea
```
```shell
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] dubbo-build-tools .................................. SUCCESS [07:54 min]
[INFO] dubbo-common ....................................... SUCCESS [12:41 min]
[INFO] dubbo-container-api ................................ SUCCESS [  0.921 s]
[INFO] dubbo-container-spring ............................. SUCCESS [ 15.128 s]
[INFO] dubbo-container .................................... SUCCESS [  0.057 s]
[INFO] dubbo-test-check ................................... SUCCESS [01:44 min]
[INFO] dubbo-serialization-api ............................ SUCCESS [  1.260 s]
[INFO] dubbo-serialization-hessian2 ....................... SUCCESS [  4.145 s]
[INFO] dubbo-remoting-api ................................. SUCCESS [  8.463 s]
[INFO] dubbo-remoting-http ................................ SUCCESS [ 37.539 s]
[INFO] dubbo-remoting-netty ............................... SUCCESS [  5.884 s]
[INFO] dubbo-rpc-api ...................................... SUCCESS [  2.641 s]
[INFO] dubbo-cluster ...................................... SUCCESS [  6.300 s]
[INFO] dubbo-serialization-jdk ............................ SUCCESS [  0.941 s]
[INFO] dubbo-rpc-rest ..................................... SUCCESS [02:03 min]
[INFO] dubbo-test-common .................................. SUCCESS [  1.433 s]
[INFO] dubbo-remoting-zookeeper ........................... SUCCESS [ 17.362 s]
[INFO] dubbo-remoting-zookeeper-curator5 .................. SUCCESS [ 34.509 s]
[INFO] dubbo-remoting-netty4 .............................. SUCCESS [  1.299 s]
[INFO] dubbo-remoting ..................................... SUCCESS [  0.048 s]
[INFO] dubbo-rpc-dubbo .................................... SUCCESS [ 20.155 s]
[INFO] dubbo-rpc-injvm .................................... SUCCESS [  1.089 s]
[INFO] dubbo-rpc-grpc ..................................... SUCCESS [ 41.394 s]
[INFO] dubbo-rpc-triple ................................... SUCCESS [01:50 min]
[INFO] dubbo-rpc .......................................... SUCCESS [  0.031 s]
[INFO] dubbo-configcenter-zookeeper ....................... SUCCESS [  1.130 s]
[INFO] dubbo-metadata-api ................................. SUCCESS [  7.284 s]
[INFO] dubbo-registry-api ................................. SUCCESS [  2.244 s]
[INFO] dubbo-registry-multicast ........................... SUCCESS [  1.107 s]
[INFO] dubbo-registry-zookeeper ........................... SUCCESS [  1.345 s]
[INFO] dubbo-registry-nacos ............................... SUCCESS [01:31 min]
[INFO] dubbo-registry-multiple ............................ SUCCESS [  1.201 s]
[INFO] dubbo-registry ..................................... SUCCESS [  0.038 s]
[INFO] dubbo-monitor-api .................................. SUCCESS [  1.037 s]
[INFO] dubbo-monitor-default .............................. SUCCESS [  9.111 s]
[INFO] dubbo-monitor ...................................... SUCCESS [  0.027 s]
[INFO] dubbo-metadata-report-zookeeper .................... SUCCESS [  1.216 s]
[INFO] dubbo-metadata-report-redis ........................ SUCCESS [  7.676 s]
[INFO] dubbo-configcenter-nacos ........................... SUCCESS [  1.116 s]
[INFO] dubbo-filter-cache ................................. SUCCESS [  8.074 s]
[INFO] dubbo-filter-validation ............................ SUCCESS [ 21.571 s]
[INFO] dubbo-config-api ................................... SUCCESS [ 27.741 s]
[INFO] dubbo-config-spring ................................ SUCCESS [01:27 min]
[INFO] dubbo-config ....................................... SUCCESS [  0.027 s]
[INFO] dubbo-filter ....................................... SUCCESS [  0.026 s]
[INFO] dubbo-demo-interface ............................... SUCCESS [  1.120 s]
[INFO] dubbo-metadata-report-nacos ........................ SUCCESS [  1.213 s]
[INFO] dubbo-demo-xml-provider ............................ SUCCESS [04:25 min]
[INFO] dubbo-demo-xml-consumer ............................ SUCCESS [  1.818 s]
[INFO] dubbo-demo-xml ..................................... SUCCESS [  0.023 s]
[INFO] dubbo-demo-annotation-provider ..................... SUCCESS [  1.682 s]
[INFO] dubbo-demo-annotation-consumer ..................... SUCCESS [  1.639 s]
[INFO] dubbo-demo-annotation .............................. SUCCESS [  0.021 s]
[INFO] dubbo-demo-api-provider ............................ SUCCESS [  1.564 s]
[INFO] dubbo-demo-api-consumer ............................ SUCCESS [  1.540 s]
[INFO] dubbo-demo-api ..................................... SUCCESS [  0.023 s]
[INFO] dubbo-demo-generic-call ............................ SUCCESS [  1.247 s]
[INFO] dubbo-demo-triple .................................. SUCCESS [ 57.505 s]
[INFO] dubbo-demo-native-interface ........................ SUCCESS [  0.770 s]
[INFO] dubbo-demo-native-consumer ......................... SUCCESS [  1.387 s]
[INFO] dubbo-demo-native-provider ......................... SUCCESS [  1.263 s]
[INFO] dubbo-demo-native .................................. SUCCESS [  0.023 s]
[INFO] dubbo-demo-spring-boot-interface ................... SUCCESS [  0.823 s]
[INFO] dubbo-qos .......................................... SUCCESS [  1.838 s]
[INFO] dubbo-configcenter-apollo .......................... SUCCESS [03:12 min]
[INFO] dubbo-compatible ................................... SUCCESS [  2.390 s]
[INFO] dubbo-auth ......................................... SUCCESS [  1.121 s]
[INFO] dubbo .............................................. SUCCESS [04:11 min]
[INFO] dubbo-spring-boot-autoconfigure-compatible ......... SUCCESS [01:19 min]
[INFO] dubbo-spring-boot-autoconfigure .................... SUCCESS [01:09 min]
[INFO] dubbo-spring-boot-starter .......................... SUCCESS [  0.371 s]
[INFO] dubbo-demo-spring-boot-consumer .................... SUCCESS [  1.719 s]
[INFO] dubbo-demo-spring-boot-provider .................... SUCCESS [  1.544 s]
[INFO] dubbo-demo-spring-boot ............................. SUCCESS [  0.025 s]
[INFO] dubbo-demo ......................................... SUCCESS [  0.025 s]
[INFO] dubbo-plugin ....................................... SUCCESS [  0.032 s]
[INFO] dubbo-serialization ................................ SUCCESS [  0.028 s]
[INFO] dubbo-dependencies-bom ............................. SUCCESS [ 12.805 s]
[INFO] dubbo-bom .......................................... SUCCESS [  0.022 s]
[INFO] dubbo-distribution ................................. SUCCESS [  0.023 s]
[INFO] dubbo-configcenter ................................. SUCCESS [  0.033 s]
[INFO] dubbo-dependencies-zookeeper ....................... SUCCESS [  4.743 s]
[INFO] dubbo-dependencies-zookeeper-curator5 .............. SUCCESS [ 41.136 s]
[INFO] dubbo-dependencies ................................. SUCCESS [  0.020 s]
[INFO] dubbo-metadata-definition-protobuf ................. SUCCESS [ 12.943 s]
[INFO] dubbo-metadata-processor ........................... SUCCESS [  1.725 s]
[INFO] dubbo-metadata ..................................... SUCCESS [  0.021 s]
[INFO] dubbo-metrics-api .................................. SUCCESS [  0.423 s]
[INFO] dubbo-metrics-prometheus ........................... SUCCESS [  0.450 s]
[INFO] dubbo-metrics ...................................... SUCCESS [  0.032 s]
[INFO] dubbo-spring-boot-actuator-compatible .............. SUCCESS [ 35.431 s]
[INFO] dubbo-spring-boot-actuator ......................... SUCCESS [ 46.179 s]
[INFO] dubbo-spring-boot-compatible ....................... SUCCESS [  0.035 s]
[INFO] dubbo-spring-boot .................................. SUCCESS [  0.037 s]
[INFO] dubbo-native ....................................... SUCCESS [  1.781 s]
[INFO] dubbo-test-spring .................................. SUCCESS [ 13.833 s]
[INFO] dubbo-test-spring3.2 ............................... SUCCESS [  0.536 s]
[INFO] dubbo-test-spring4.1 ............................... SUCCESS [ 12.676 s]
[INFO] dubbo-test-spring4.2 ............................... SUCCESS [ 13.275 s]
[INFO] dubbo-test ......................................... SUCCESS [  0.022 s]
[INFO] dubbo-native-plugin ................................ SUCCESS [01:22 min]
[INFO] dubbo-parent ....................................... SUCCESS [  0.027 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 56:04 min
[INFO] Finished at: 2022-05-24T23:54:54+08:00
[INFO] Final Memory: 238M/890M
[INFO] ------------------------------------------------------------------------
```
