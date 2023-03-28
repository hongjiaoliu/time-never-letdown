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

##  Label

在 Kubernetes 中，Label 是一种用于对资源进行分类和选择的标签。Label 是由键值对组成的元数据，可以附加到 Kubernetes 中的各种对象上，例如 Pod、Service、ReplicationController、Deployment 等。Label 可以根据不同的需求和场景进行定义和使用，通常用于：

1. 选择器：使用 Label Selector 可以根据 Label 对资源进行选择和筛选。例如，可以使用 Label Selector 来选择一组特定的 Pod 并对它们进行操作。
2. 组织：使用 Label 可以对资源进行分类和组织。例如，可以使用 Label 来标识一组应用程序、环境或者团队。
3. 监控：使用 Label 可以为资源添加监控指标和标签。例如，可以使用 Label 来标识一组 Pod 并对它们进行监控。

以下是一些 Label 的使用示例：

```perl
app: nginx
env: prod
tier: frontend
```

上面的示例中，Label 包括应用程序名称、环境名称和层级（例如前端或后端）。

在 Kubernetes 中，Label 是一种非常强大和灵活的元数据，可以帮助您管理和组织复杂的应用程序和服务架构。通过使用 Label，您可以轻松地对资源进行选择、分类和监控，并在需要时对它们进行操作和管理。

## Namespace

在 Kubernetes 中，Namespace 是用于将集群内的资源划分为多个虚拟集群的一种机制。Namespace 可以将一个大型的 Kubernetes 集群划分为多个逻辑集群，每个集群具有自己的资源配额、网络策略和安全机制。这样可以使不同的团队或应用程序之间相互隔离，减少资源冲突和安全问题。

在 Kubernetes 中，有以下几种默认的 Namespace：

- default: 默认 Namespace，没有指定 Namespace 的资源都会被分配到该 Namespace 中。
- kube-system: 用于存储 Kubernetes 系统组件的 Namespace。
- kube-public: 存储公共数据的 Namespace，该 Namespace 中的数据可以被所有用户和 Pod 访问。

您还可以创建自己的 Namespace，例如创建一个 Namespace 用于存储生产环境的应用程序，另一个 Namespace 用于存储测试环境的应用程序等等。

以下是一些 Namespace 的使用场景：

1. 多租户架构：使用 Namespace 可以将 Kubernetes 集群划分为多个租户，每个租户都有自己的 Namespace，可以进行资源配额和隔离。
2. 多环境部署：使用 Namespace 可以将不同的环境（例如开发、测试、生产）划分到不同的 Namespace 中，可以进行资源配额和隔离，并且可以使用不同的配置文件和镜像。
3. 资源隔离：使用 Namespace 可以对不同的资源进行隔离，例如对于不同的团队或应用程序进行隔离。

在 Kubernetes 中，Namespace 是一种非常有用和灵活的机制，可以将一个大型的 Kubernetes 集群划分为多个虚拟集群，每个集群具有自己的资源配额、网络策略和安全机制。这可以使不同的团队或应用程序之间相互隔离，减少资源冲突和安全问题。

在 Kubernetes 中，有很多命令可以用于管理和操作 Namespace。以下是一些常用的命令：

1. 创建 Namespace：

```perl
kubectl create namespace <namespace-name>
```

该命令可以创建一个新的 Namespace。

2. 列出 Namespace：

```perl
kubectl get namespaces
```

该命令可以列出 Kubernetes 集群中的所有 Namespace。

3. 切换 Namespace：

```perl
kubectl config set-context $(kubectl config current-context) --namespace=<namespace-name>
```

该命令可以将当前的上下文切换到指定的 Namespace。

4. 删除 Namespace：

```perl
kubectl delete namespace <namespace-name>
```

该命令可以删除指定的 Namespace。

5. 在 Namespace 中创建 Pod：

```per
kubectl run <pod-name> --image=<image-name> --namespace=<namespace-name>
```

该命令可以在指定的 Namespace 中创建一个新的 Pod。

6. 列出 Namespace 中的资源：

```perl
kubectl get <resource-type> --namespace=<namespace-name>
```

该命令可以列出指定 Namespace 中的资源，例如 Pod、Service、Deployment 等。

7. 查看 Namespace 中的详细信息：

```perl
kubectl describe namespace <namespace-name>
```

该命令可以查看指定 Namespace 的详细信息，包括 Namespace 的标签、资源配额和网络策略等。
