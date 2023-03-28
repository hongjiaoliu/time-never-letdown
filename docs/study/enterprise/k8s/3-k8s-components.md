---
icon: edit
date: 2023-03-27
category:
  - Java企业开发
tag:
  - K8S
star: false
---

# Kubernetes 组件

## K8S核心组件

1. etcd：Kubernetes 的分布式键值存储系统，用于存储配置数据和状态信息。
2. kube-apiserver：Kubernetes 的 API 服务器，是 Kubernetes 的控制面板的前端，处理所有 API 请求。
3. kube-controller-manager：Kubernetes 控制器的主要组件，用于管理集群状态，如副本数、滚动升级等。
4. kube-scheduler：Kubernetes 的调度器，负责将容器部署到节点上，并根据负载均衡策略来分配资源。
5. kubelet：Kubernetes 的节点代理，负责在节点上启动和停止容器，同时与 kube-apiserver 通信。
6. kube-proxy：Kubernetes 的网络代理，用于管理网络规则和负载均衡。
7. Container runtime：容器运行时，如 Docker、rkt 等，用于运行容器镜像。
8. kubectl: 命令行接口，用于对kubernetes集群运行命令

这些组件共同工作，使 Kubernetes 能够实现自动化容器编排和管理。



## 组件架构图

## 面试题：Pod是如何被创建到目标机器上的，组件走向
![图 1](https://cdn.liuhongjiao.cn/images/2023/03/27/3-k8s-components/1679908268941.png)  



## Pod

在 Kubernetes 中，Pod 是最小的可部署对象，由一个或多个紧密关联的容器组成，共享同一个网络命名空间和存储卷。Pod 通常被用于运行一个应用程序的实例。

以下是 Pod 的一些特点：

1. 多容器：Pod 可以包含多个容器，这些容器可以共享同一个命名空间和卷，并能够相互通信。
2. 网络：Pod 中的容器共享同一个 IP 地址和端口空间，它们可以使用 localhost 来相互访问。
3. 存储：Pod 可以共享同一个存储卷，这个存储卷中的数据对于 Pod 中的所有容器都是可见的。
4. 生命周期：Pod 具有自己的生命周期，可以被创建、启动、暂停、恢复和销毁。Pod 的生命周期由 Kubernetes 控制器管理。
5. 调度：Pod 由 Kubernetes 调度器进行调度，可以根据各种条件（如资源需求、节点选择器等）进行筛选和分配。

Pod 是 Kubernetes 中最基本的部署单位，可以将多个容器组合在一个 Pod 中，这些容器可以协同工作，共享资源和通信。Pod 也是水平扩展和部署应用程序的基础。

