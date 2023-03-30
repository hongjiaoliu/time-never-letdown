import{_ as l,V as p,W as i,X as n,Y as s,$ as e,Z as t,F as c}from"./framework-e5211252.js";const o={},u=n("h1",{id:"kubernetes详细教程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kubernetes详细教程","aria-hidden":"true"},"#"),s(" Kubernetes详细教程")],-1),d={href:"https://gitee.com/yooome/golang.git",target:"_blank",rel:"noopener noreferrer"},r=t('<h3 id="_1-kubernetes介绍" tabindex="-1"><a class="header-anchor" href="#_1-kubernetes介绍" aria-hidden="true">#</a> 1. Kubernetes介绍</h3><h4 id="_1-1-应用部署方式演变" tabindex="-1"><a class="header-anchor" href="#_1-1-应用部署方式演变" aria-hidden="true">#</a> 1.1 应用部署方式演变</h4><p>在部署应用程序的方式上，主要经历了三个时代：</p><ul><li><p><strong>传统部署</strong>：互联网早期，会直接将应用程序部署在物理机上</p><blockquote><p>优点：简单，不需要其它技术的参与</p><p>缺点：不能为应用程序定义资源使用边界，很难合理地分配计算资源，而且程序之间容易产生影响</p></blockquote></li><li><p><strong>虚拟化部署</strong>：可以在一台物理机上运行多个虚拟机，每个虚拟机都是独立的一个环境</p><blockquote><p>优点：程序环境不会相互产生影响，提供了一定程度的安全性</p><p>缺点：增加了操作系统，浪费了部分资源</p></blockquote></li><li><p><strong>容器化部署</strong>：与虚拟化类似，但是共享了操作系统</p><blockquote><p>优点：</p><p>可以保证每个容器拥有自己的文件系统、CPU、内存、进程空间等</p><p>运行应用程序所需要的资源都被容器包装，并和底层基础架构解耦</p><p>容器化的应用程序可以跨云服务商、跨Linux操作系统发行版进行部署</p></blockquote></li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680139854364.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><p>容器化部署方式给带来很多的便利，但是也会出现一些问题，比如说：</p><ul><li>一个容器故障停机了，怎么样让另外一个容器立刻启动去替补停机的容器</li><li>当并发访问量变大的时候，怎么样做到横向扩展容器数量</li></ul><p>这些容器管理的问题统称为<strong>容器编排</strong>问题，为了解决这些容器编排问题，就产生了一些容器编排的软件：</p><ul><li><strong>Swarm</strong>：Docker自己的容器编排工具</li><li><strong>Mesos</strong>：Apache的一个资源统一管控的工具，需要和Marathon结合使用</li><li><strong>Kubernetes</strong>：Google开源的的容器编排工具</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680139880172.png" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><h4 id="_1-2-kubernetes简介" tabindex="-1"><a class="header-anchor" href="#_1-2-kubernetes简介" aria-hidden="true">#</a> 1.2 kubernetes简介</h4><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680139901232.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><p>kubernetes，是一个全新的基于容器技术的分布式架构领先方案，是谷歌严格保密十几年的秘密武器----Borg系统的一个开源版本，于2014年9月发布第一个版本，2015年7月发布第一个正式版本。</p><p>kubernetes的本质是<strong>一组服务器集群</strong>，它可以在集群的每个节点上运行特定的程序，来对节点中的容器进行管理。目的是实现资源管理的自动化，主要提供了如下的主要功能：</p><ul><li><strong>自我修复</strong>：一旦某一个容器崩溃，能够在1秒中左右迅速启动新的容器</li><li><strong>弹性伸缩</strong>：可以根据需要，自动对集群中正在运行的容器数量进行调整</li><li><strong>服务发现</strong>：服务可以通过自动发现的形式找到它所依赖的服务</li><li><strong>负载均衡</strong>：如果一个服务起动了多个容器，能够自动实现请求的负载均衡</li><li><strong>版本回退</strong>：如果发现新发布的程序版本有问题，可以立即回退到原来的版本</li><li><strong>存储编排</strong>：可以根据容器自身的需求自动创建存储卷</li></ul><h4 id="_1-3-kubernetes组件" tabindex="-1"><a class="header-anchor" href="#_1-3-kubernetes组件" aria-hidden="true">#</a> 1.3 kubernetes组件</h4><p>一个kubernetes集群主要是由<strong>控制节点(master)</strong>、**工作节点(node)**构成，每个节点上都会安装不同的组件。</p><p><strong>master：集群的控制平面，负责集群的决策 ( 管理 )</strong></p><blockquote><p><strong>ApiServer</strong> : 资源操作的唯一入口，接收用户输入的命令，提供认证、授权、API注册和发现等机制</p><p><strong>Scheduler</strong> : 负责集群资源调度，按照预定的调度策略将Pod调度到相应的node节点上</p><p><strong>ControllerManager</strong> : 负责维护集群的状态，比如程序部署安排、故障检测、自动扩展、滚动更新等</p><p><strong>Etcd</strong> ：负责存储集群中各种资源对象的信息</p></blockquote><p><strong>node：集群的数据平面，负责为容器提供运行环境 ( 干活 )</strong></p><blockquote><p><strong>Kubelet</strong> : 负责维护容器的生命周期，即通过控制docker，来创建、更新、销毁容器</p><p><strong>KubeProxy</strong> : 负责提供集群内部的服务发现和负载均衡</p><p><strong>Docker</strong> : 负责节点上容器的各种操作</p></blockquote><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680139928836.png" alt="图 4" tabindex="0" loading="lazy"><figcaption>图 4</figcaption></figure><p>下面，以部署一个nginx服务来说明kubernetes系统各个组件调用关系：</p><ol><li><p>首先要明确，一旦kubernetes环境启动之后，master和node都会将自身的信息存储到etcd数据库中</p></li><li><p>一个nginx服务的安装请求会首先被发送到master节点的apiServer组件</p></li><li><p>apiServer组件会调用scheduler组件来决定到底应该把这个服务安装到哪个node节点上</p><p>在此时，它会从etcd中读取各个node节点的信息，然后按照一定的算法进行选择，并将结果告知apiServer</p></li><li><p>apiServer调用controller-manager去调度Node节点安装nginx服务</p></li><li><p>kubelet接收到指令后，会通知docker，然后由docker来启动一个nginx的pod</p><p>pod是kubernetes的最小操作单元，容器必须跑在pod中至此，</p></li><li><p>一个nginx服务就运行了，如果需要访问nginx，就需要通过kube-proxy来对pod产生访问的代理</p></li></ol><p>这样，外界用户就可以访问集群中的nginx服务了</p><h4 id="_1-4-kubernetes概念" tabindex="-1"><a class="header-anchor" href="#_1-4-kubernetes概念" aria-hidden="true">#</a> 1.4 kubernetes概念</h4><p><strong>Master</strong>：集群控制节点，每个集群需要至少一个master节点负责集群的管控</p><p><strong>Node</strong>：工作负载节点，由master分配容器到这些node工作节点上，然后node节点上的docker负责容器的运行</p><p><strong>Pod</strong>：kubernetes的最小控制单元，容器都是运行在pod中的，一个pod中可以有1个或者多个容器</p><p><strong>Controller</strong>：控制器，通过它来实现对pod的管理，比如启动pod、停止pod、伸缩pod的数量等等</p><p><strong>Service</strong>：pod对外服务的统一入口，下面可以维护者同一类的多个pod</p><p><strong>Label</strong>：标签，用于对pod进行分类，同一类pod会拥有相同的标签</p><p><strong>NameSpace</strong>：命名空间，用来隔离pod的运行环境</p><h3 id="_2-kubernetes集群环境搭建" tabindex="-1"><a class="header-anchor" href="#_2-kubernetes集群环境搭建" aria-hidden="true">#</a> 2. kubernetes集群环境搭建</h3><h4 id="_2-1-前置知识点" tabindex="-1"><a class="header-anchor" href="#_2-1-前置知识点" aria-hidden="true">#</a> 2.1 前置知识点</h4><p>目前生产部署Kubernetes 集群主要有两种方式：</p><p><strong>kubeadm</strong></p><p>Kubeadm 是一个K8s 部署工具，提供kubeadm init 和kubeadm join，用于快速部署Kubernetes 集群。</p>',38),m={href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p><strong>二进制包</strong></p><p>从github 下载发行版的二进制包，手动部署每个组件，组成Kubernetes 集群。</p><p>Kubeadm 降低部署门槛，但屏蔽了很多细节，遇到问题很难排查。如果想更容易可控，推荐使用二进制包部署Kubernetes 集群，虽然手动部署麻烦点，期间可以学习很多工作原理，也利于后期维护。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680139954745.png" alt="图 5" tabindex="0" loading="lazy"><figcaption>图 5</figcaption></figure><h4 id="_2-2-kubeadm-部署方式介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-kubeadm-部署方式介绍" aria-hidden="true">#</a> 2.2 kubeadm 部署方式介绍</h4><p>kubeadm 是官方社区推出的一个用于快速部署kubernetes 集群的工具，这个工具能通过两条指令完成一个kubernetes 集群的部署：</p><ul><li>创建一个Master 节点kubeadm init</li><li>将Node 节点加入到当前集群中$ kubeadm join &lt;Master 节点的IP 和端口&gt;</li></ul><h4 id="_2-3-安装要求" tabindex="-1"><a class="header-anchor" href="#_2-3-安装要求" aria-hidden="true">#</a> 2.3 安装要求</h4><p>在开始之前，部署Kubernetes 集群机器需要满足以下几个条件：</p><ul><li>一台或多台机器，操作系统CentOS7.x-86_x64</li><li>硬件配置：2GB 或更多RAM，2 个CPU 或更多CPU，硬盘30GB 或更多</li><li>集群中所有机器之间网络互通</li><li>可以访问外网，需要拉取镜像</li><li>禁止swap 分区</li></ul><h4 id="_2-4-最终目标" tabindex="-1"><a class="header-anchor" href="#_2-4-最终目标" aria-hidden="true">#</a> 2.4 最终目标</h4><ul><li>在所有节点上安装Docker 和kubeadm</li><li>部署Kubernetes Master</li><li>部署容器网络插件</li><li>部署Kubernetes Node，将节点加入Kubernetes 集群中</li><li>部署Dashboard Web 页面，可视化查看Kubernetes 资源</li></ul><h4 id="_2-5-准备环境" tabindex="-1"><a class="header-anchor" href="#_2-5-准备环境" aria-hidden="true">#</a> 2.5 准备环境</h4><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680139984762.png" alt="图 6" tabindex="0" loading="lazy"><figcaption>图 6</figcaption></figure><table><thead><tr><th style="text-align:left;">角色</th><th style="text-align:left;">IP地址</th><th style="text-align:left;">组件</th></tr></thead><tbody><tr><td style="text-align:left;">master01</td><td style="text-align:left;">192.168.5.3</td><td style="text-align:left;">docker，kubectl，kubeadm，kubelet</td></tr><tr><td style="text-align:left;">node01</td><td style="text-align:left;">192.168.5.4</td><td style="text-align:left;">docker，kubectl，kubeadm，kubelet</td></tr><tr><td style="text-align:left;">node02</td><td style="text-align:left;">192.168.5.5</td><td style="text-align:left;">docker，kubectl，kubeadm，kubelet</td></tr></tbody></table><h4 id="_2-6-环境初始化" tabindex="-1"><a class="header-anchor" href="#_2-6-环境初始化" aria-hidden="true">#</a> 2.6 环境初始化</h4><h5 id="_2-6-1-检查操作系统的版本" tabindex="-1"><a class="header-anchor" href="#_2-6-1-检查操作系统的版本" aria-hidden="true">#</a> 2.6.1 检查操作系统的版本</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 此方式下安装kubernetes集群要求Centos版本要在7.5或之上</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># cat /etc/redhat-release</span>
Centos Linux 7<span class="token punctuation">.</span>5<span class="token punctuation">.</span>1804 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-2-主机名解析" tabindex="-1"><a class="header-anchor" href="#_2-6-2-主机名解析" aria-hidden="true">#</a> 2.6.2 主机名解析</h5><p>为了方便集群节点间的直接调用，在这个配置一下主机名解析，企业中推荐使用内部DNS服务器</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 主机名成解析 编辑三台服务器的/etc/hosts文件，添加下面内容</span>
192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>90<span class="token punctuation">.</span>100 master
192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>90<span class="token punctuation">.</span>106 node1
192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>90<span class="token punctuation">.</span>107 node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-3-时间同步" tabindex="-1"><a class="header-anchor" href="#_2-6-3-时间同步" aria-hidden="true">#</a> 2.6.3 时间同步</h5><p>kubernetes要求集群中的节点时间必须精确一直，这里使用chronyd服务从网络同步时间</p><p>企业中建议配置内部的会见同步服务器</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 启动chronyd服务</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl start chronyd</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl enable chronyd</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># date</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-4-禁用iptable和firewalld服务" tabindex="-1"><a class="header-anchor" href="#_2-6-4-禁用iptable和firewalld服务" aria-hidden="true">#</a> 2.6.4 禁用iptable和firewalld服务</h5><p>kubernetes和docker 在运行的中会产生大量的iptables规则，为了不让系统规则跟它们混淆，直接关闭系统的规则</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1 关闭firewalld服务</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl stop firewalld</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl disable firewalld</span>
<span class="token comment"># 2 关闭iptables服务</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl stop iptables</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl disable iptables</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-5-禁用selinux" tabindex="-1"><a class="header-anchor" href="#_2-6-5-禁用selinux" aria-hidden="true">#</a> 2.6.5 禁用selinux</h5><p>selinux是linux系统下的一个安全服务，如果不关闭它，在安装集群中会产生各种各样的奇葩问题</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 编辑 /etc/selinux/config 文件，修改SELINUX的值为disable</span>
<span class="token comment"># 注意修改完毕之后需要重启linux服务</span>
SELINUX=disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-6-禁用swap分区" tabindex="-1"><a class="header-anchor" href="#_2-6-6-禁用swap分区" aria-hidden="true">#</a> 2.6.6 禁用swap分区</h5><p>swap分区指的是虚拟内存分区，它的作用是物理内存使用完，之后将磁盘空间虚拟成内存来使用，启用swap设备会对系统的性能产生非常负面的影响，因此kubernetes要求每个节点都要禁用swap设备，但是如果因为某些原因确实不能关闭swap分区，就需要在集群安装过程中通过明确的参数进行配置说明</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 编辑分区配置文件/etc/fstab，注释掉swap分区一行</span>
<span class="token comment"># 注意修改完毕之后需要重启linux服务</span>
vim <span class="token operator">/</span>etc/fstab
注释掉 <span class="token operator">/</span>dev/mapper/centos-swap swap
<span class="token comment"># /dev/mapper/centos-swap swap</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-7-修改linux的内核参数" tabindex="-1"><a class="header-anchor" href="#_2-6-7-修改linux的内核参数" aria-hidden="true">#</a> 2.6.7 修改linux的内核参数</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 修改linux的内核采纳数，添加网桥过滤和地址转发功能</span>
<span class="token comment"># 编辑/etc/sysctl.d/kubernetes.conf文件，添加如下配置：</span>
net<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>bridge-nf-call-ip6tables = 1
net<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>bridge-nf-call-iptables = 1
net<span class="token punctuation">.</span>ipv4<span class="token punctuation">.</span>ip_forward = 1

<span class="token comment"># 重新加载配置</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># sysctl -p</span>
<span class="token comment"># 加载网桥过滤模块</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># modprobe br_netfilter</span>
<span class="token comment"># 查看网桥过滤模块是否加载成功</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># lsmod | grep br_netfilter</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-8-配置ipvs功能" tabindex="-1"><a class="header-anchor" href="#_2-6-8-配置ipvs功能" aria-hidden="true">#</a> 2.6.8 配置ipvs功能</h5><p>在Kubernetes中Service有两种带来模型，一种是基于iptables的，一种是基于ipvs的两者比较的话，ipvs的性能明显要高一些，但是如果要使用它，需要手动载入ipvs模块</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1.安装ipset和ipvsadm</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># yum install ipset ipvsadm -y</span>
<span class="token comment"># 2.添加需要加载的模块写入脚本文件</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># cat &lt;&lt;EOF&gt; /etc/sysconfig/modules/ipvs.modules</span>
<span class="token comment">#!/bin/bash</span>
modprobe <span class="token operator">--</span> ip_vs
modprobe <span class="token operator">--</span> ip_vs_rr
modprobe <span class="token operator">--</span> ip_vs_wrr
modprobe <span class="token operator">--</span> ip_vs_sh
modprobe <span class="token operator">--</span> nf_conntrack_ipv4
EOF
<span class="token comment"># 3.为脚本添加执行权限</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># chmod +x /etc/sysconfig/modules/ipvs.modules</span>
<span class="token comment"># 4.执行脚本文件</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># /bin/bash /etc/sysconfig/modules/ipvs.modules</span>
<span class="token comment"># 5.查看对应的模块是否加载成功</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># lsmod | grep -e ip_vs -e nf_conntrack_ipv4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-9-安装docker" tabindex="-1"><a class="header-anchor" href="#_2-6-9-安装docker" aria-hidden="true">#</a> 2.6.9 安装docker</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1、切换镜像源</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo</span>

<span class="token comment"># 2、查看当前镜像源中支持的docker版本</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># yum list docker-ce --showduplicates</span>

<span class="token comment"># 3、安装特定版本的docker-ce</span>
<span class="token comment"># 必须制定--setopt=obsoletes=0，否则yum会自动安装更高版本</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># yum install --setopt=obsoletes=0 docker-ce-18.06.3.ce-3.el7 -y</span>

<span class="token comment"># 4、添加一个配置文件</span>
<span class="token comment">#Docker 在默认情况下使用Vgroup Driver为cgroupfs，而Kubernetes推荐使用systemd来替代cgroupfs</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># mkdir /etc/docker</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># cat &lt;&lt;EOF&gt; /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
	<span class="token string">&quot;exec-opts&quot;</span>: <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token string">&quot;registry-mirrors&quot;</span>: <span class="token punctuation">[</span><span class="token string">&quot;https://kn0t2bca.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF

<span class="token comment"># 5、启动dokcer</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl restart docker</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl enable docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-10-安装kubernetes组件" tabindex="-1"><a class="header-anchor" href="#_2-6-10-安装kubernetes组件" aria-hidden="true">#</a> 2.6.10 安装Kubernetes组件</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 1、由于kubernetes的镜像在国外，速度比较慢，这里切换成国内的镜像源</span>
<span class="token comment"># 2、编辑/etc/yum.repos.d/kubernetes.repo,添加下面的配置</span>
<span class="token namespace">[kubernetes]</span>
name=Kubernetes
baseurl=http:<span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgchech=0
repo_gpgcheck=0
gpgkey=http:<span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com/kubernetes/yum/doc/yum-key<span class="token punctuation">.</span>gpg
			http:<span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com/kubernetes/yum/doc/rpm-package-key<span class="token punctuation">.</span>gpg

<span class="token comment"># 3、安装kubeadm、kubelet和kubectl</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># yum install --setopt=obsoletes=0 kubeadm-1.17.4-0 kubelet-1.17.4-0 kubectl-1.17.4-0 -y</span>

<span class="token comment"># 4、配置kubelet的cgroup</span>
<span class="token comment">#编辑/etc/sysconfig/kubelet, 添加下面的配置</span>
KUBELET_CGROUP_ARGS=<span class="token string">&quot;--cgroup-driver=systemd&quot;</span>
KUBE_PROXY_MODE=<span class="token string">&quot;ipvs&quot;</span>

<span class="token comment"># 5、设置kubelet开机自启</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># systemctl enable kubelet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-11-准备集群镜像" tabindex="-1"><a class="header-anchor" href="#_2-6-11-准备集群镜像" aria-hidden="true">#</a> 2.6.11 准备集群镜像</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 在安装kubernetes集群之前，必须要提前准备好集群需要的镜像，所需镜像可以通过下面命令查看</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># kubeadm config images list</span>

<span class="token comment"># 下载镜像</span>
<span class="token comment"># 此镜像kubernetes的仓库中，由于网络原因，无法连接，下面提供了一种替换方案</span>
images=<span class="token punctuation">(</span>
	kube-apiserver:v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
	kube-controller-manager:v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
	kube-scheduler:v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
	kube-proxy:v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
	pause:3<span class="token punctuation">.</span>1
	etcd:3<span class="token punctuation">.</span>4<span class="token punctuation">.</span>3-0
	coredns:1<span class="token punctuation">.</span>6<span class="token punctuation">.</span>5
<span class="token punctuation">)</span>

<span class="token keyword">for</span> imageName in $<span class="token punctuation">{</span>images<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	docker pull registry<span class="token punctuation">.</span>cn-hangzhou<span class="token punctuation">.</span>aliyuncs<span class="token punctuation">.</span>com/google_containers/<span class="token variable">$imageName</span>
	docker tag registry<span class="token punctuation">.</span>cn-hangzhou<span class="token punctuation">.</span>aliyuncs<span class="token punctuation">.</span>com/google_containers/<span class="token variable">$imageName</span> k8s<span class="token punctuation">.</span>gcr<span class="token punctuation">.</span>io/<span class="token variable">$imageName</span>
	docker rmi registry<span class="token punctuation">.</span>cn-hangzhou<span class="token punctuation">.</span>aliyuncs<span class="token punctuation">.</span>com/google_containers/<span class="token variable">$imageName</span> 
done

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-11-集群初始化" tabindex="-1"><a class="header-anchor" href="#_2-6-11-集群初始化" aria-hidden="true">#</a> 2.6.11 集群初始化</h5><blockquote><p>下面的操作只需要在master节点上执行即可</p></blockquote><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 创建集群</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># kubeadm init \\</span>
	<span class="token operator">--</span>apiserver-advertise-address=192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>90<span class="token punctuation">.</span>100 \\
	<span class="token operator">--</span>image-repository registry<span class="token punctuation">.</span>aliyuncs<span class="token punctuation">.</span>com/google_containers \\
	<span class="token operator">--</span>kubernetes-version=v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4 \\
	<span class="token operator">--</span>service-cidr=10<span class="token punctuation">.</span>96<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0/12 \\
	<span class="token operator">--</span>pod-network-cidr=10<span class="token punctuation">.</span>244<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0/16
<span class="token comment"># 创建必要文件</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># mkdir -p $HOME/.kube</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># sudo chown $(id -u):$(id -g) $HOME/.kube/config</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下面的操作只需要在node节点上执行即可</p></blockquote><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubeadm join 192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>0<span class="token punctuation">.</span>100:6443 <span class="token operator">--</span>token awk15p<span class="token punctuation">.</span>t6bamck54w69u4s8 \\
    <span class="token operator">--</span>discovery-token-ca-cert-hash sha256:a94fa09562466d32d29523ab6cff122186f1127599fa4dcd5fa0152694f17117 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在master上查看节点信息</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token namespace">[root@master ~]</span><span class="token comment"># kubectl get nodes</span>
NAME    STATUS   ROLES     AGE   VERSION
master  NotReady  master   6m    v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
node1   NotReady   &lt;none&gt;  22s   v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
node2   NotReady   &lt;none&gt;  19s   v1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-13-安装网络插件-只在master节点操作即可" tabindex="-1"><a class="header-anchor" href="#_2-6-13-安装网络插件-只在master节点操作即可" aria-hidden="true">#</a> 2.6.13 安装网络插件，只在master节点操作即可</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>wget https:<span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com/coreos/flannel/master/Documentation/kube-flannel<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于外网不好访问，如果出现无法访问的情况，可以直接用下面的 记得文件名是kube-flannel.yml，位置：/root/kube-flannel.yml内容：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>https:<span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com/flannel-io/flannel/tree/master/Documentation/kube-flannel<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,56),v={href:"http://quay.io/coreos/flannel:v0.14.0",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><code>个人笔记</code> 若是集群状态一直是 notready,用下面语句查看原因， journalctl -f -u kubelet.service 若原因是： cni.go:237] Unable to update cni config: no networks found in /etc/cni/net.d mkdir -p /etc/cni/net.d #创建目录给flannel做配置文件 vim /etc/cni/net.d/10-flannel.conf #编写配置文件</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>
<span class="token punctuation">{</span>
 <span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;cbr0&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;cniVersion&quot;</span>:<span class="token string">&quot;0.3.1&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;type&quot;</span>:<span class="token string">&quot;flannel&quot;</span><span class="token punctuation">,</span>
 <span class="token string">&quot;deledate&quot;</span>:<span class="token punctuation">{</span>
    <span class="token string">&quot;hairpinMode&quot;</span>:true<span class="token punctuation">,</span>
    <span class="token string">&quot;isDefaultGateway&quot;</span>:true
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-14-使用kubeadm-reset重置集群" tabindex="-1"><a class="header-anchor" href="#_2-6-14-使用kubeadm-reset重置集群" aria-hidden="true">#</a> 2.6.14 使用kubeadm reset重置集群</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#在master节点之外的节点进行操作
kubeadm reset
systemctl stop kubelet
systemctl stop docker
rm -rf /var/lib/cni/
rm -rf /var/lib/kubelet/*
rm -rf /etc/cni/
ifconfig cni0 down
ifconfig flannel.1 down
ifconfig docker0 down
ip link delete cni0
ip link delete flannel.1
##重启kubelet
systemctl restart kubelet
##重启docker
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-6-15-重启kubelet和docker" tabindex="-1"><a class="header-anchor" href="#_2-6-15-重启kubelet和docker" aria-hidden="true">#</a> 2.6.15 重启kubelet和docker</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 重启kubelet</span>
systemctl restart kubelet
<span class="token comment"># 重启docker</span>
systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用配置文件启动fannel</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl apply <span class="token operator">-</span>f kube-flannel<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待它安装完毕 发现已经是 集群的状态已经是Ready</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140061508.png" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure><h5 id="_2-6-16-kubeadm中的命令" tabindex="-1"><a class="header-anchor" href="#_2-6-16-kubeadm中的命令" aria-hidden="true">#</a> 2.6.16 kubeadm中的命令</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 生成 新的token</span>
<span class="token namespace">[root@master ~]</span><span class="token comment"># kubeadm token create --print-join-command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-7-集群测试" tabindex="-1"><a class="header-anchor" href="#_2-7-集群测试" aria-hidden="true">#</a> 2.7 集群测试</h4><h5 id="_2-7-1-创建一个nginx服务" tabindex="-1"><a class="header-anchor" href="#_2-7-1-创建一个nginx服务" aria-hidden="true">#</a> 2.7.1 创建一个nginx服务</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl create deployment nginx  <span class="token operator">--</span>image=nginx:1<span class="token punctuation">.</span>14-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-7-2-暴露端口" tabindex="-1"><a class="header-anchor" href="#_2-7-2-暴露端口" aria-hidden="true">#</a> 2.7.2 暴露端口</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl expose deploy nginx  <span class="token operator">--</span>port=80 <span class="token operator">--</span>target-port=80  <span class="token operator">--</span><span class="token function">type</span>=NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-7-3-查看服务" tabindex="-1"><a class="header-anchor" href="#_2-7-3-查看服务" aria-hidden="true">#</a> 2.7.3 查看服务</h5><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl get pod<span class="token punctuation">,</span>svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-7-4-查看pod" tabindex="-1"><a class="header-anchor" href="#_2-7-4-查看pod" aria-hidden="true">#</a> 2.7.4 查看pod</h5><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140081961.png" alt="图 8" tabindex="0" loading="lazy"><figcaption>图 8</figcaption></figure><p>浏览器测试结果：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140100958.png" alt="图 9" tabindex="0" loading="lazy"><figcaption>图 9</figcaption></figure><h3 id="_3-资源管理" tabindex="-1"><a class="header-anchor" href="#_3-资源管理" aria-hidden="true">#</a> 3. 资源管理</h3><h4 id="_3-1-资源管理介绍" tabindex="-1"><a class="header-anchor" href="#_3-1-资源管理介绍" aria-hidden="true">#</a> 3.1 资源管理介绍</h4><p>在kubernetes中，所有的内容都抽象为资源，用户需要通过操作资源来管理kubernetes。</p><blockquote><p>kubernetes的本质上就是一个集群系统，用户可以在集群中部署各种服务，所谓的部署服务，其实就是在kubernetes集群中运行一个个的容器，并将指定的程序跑在容器中。</p><p>kubernetes的最小管理单元是pod而不是容器，所以只能将容器放在<code>Pod</code>中，而kubernetes一般也不会直接管理Pod，而是通过<code>Pod控制器</code>来管理Pod的。</p><p>Pod可以提供服务之后，就要考虑如何访问Pod中服务，kubernetes提供了<code>Service</code>资源实现这个功能。</p><p>当然，如果Pod中程序的数据需要持久化，kubernetes还提供了各种<code>存储</code>系统。</p></blockquote><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140135241.png" alt="图 10" tabindex="0" loading="lazy"><figcaption>图 10</figcaption></figure><blockquote><p>学习kubernetes的核心，就是学习如何对集群上的<code>Pod、Pod控制器、Service、存储</code>等各种资源进行操作</p></blockquote><h4 id="_3-2-yaml语言介绍" tabindex="-1"><a class="header-anchor" href="#_3-2-yaml语言介绍" aria-hidden="true">#</a> 3.2 YAML语言介绍</h4><p>YAML是一个类似 XML、JSON 的标记性语言。它强调以<strong>数据</strong>为中心，并不是以标识语言为重点。因而YAML本身的定义比较简单，号称&quot;一种人性化的数据格式语言&quot;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;heima&gt;
    &lt;age&gt;15&lt;/age&gt;
    &lt;address&gt;Beijing&lt;/address&gt;
&lt;/heima&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>heima:
  age: 15
  address: Beijing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YAML的语法比较简单，主要有下面几个：</p><ul><li>大小写敏感</li><li>使用缩进表示层级关系</li><li>缩进不允许使用tab，只允许空格( 低版本限制 )</li><li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li><li>&#39;#&#39;表示注释</li></ul><p>YAML支持以下几种数据类型：</p><ul><li>纯量：单个的、不可再分的值</li><li>对象：键值对的集合，又称为映射（mapping）/ 哈希（hash） / 字典（dictionary）</li><li>数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 纯量, 就是指的一个简单的值，字符串、布尔值、整数、浮点数、Null、时间、日期</span>
<span class="token comment"># 1 布尔类型</span>
<span class="token key atrule">c1</span><span class="token punctuation">:</span> true (或者True)
<span class="token comment"># 2 整型</span>
<span class="token key atrule">c2</span><span class="token punctuation">:</span> <span class="token number">234</span>
<span class="token comment"># 3 浮点型</span>
<span class="token key atrule">c3</span><span class="token punctuation">:</span> <span class="token number">3.14</span>
<span class="token comment"># 4 null类型 </span>
<span class="token key atrule">c4</span><span class="token punctuation">:</span> <span class="token null important">~</span>  <span class="token comment"># 使用~表示null</span>
<span class="token comment"># 5 日期类型</span>
<span class="token key atrule">c5</span><span class="token punctuation">:</span> <span class="token datetime number">2018-02-17</span>    <span class="token comment"># 日期必须使用ISO 8601格式，即yyyy-MM-dd</span>
<span class="token comment"># 6 时间类型</span>
<span class="token key atrule">c6</span><span class="token punctuation">:</span> <span class="token datetime number">2018-02-17T15:02:31+08:00</span>  <span class="token comment"># 时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区</span>
<span class="token comment"># 7 字符串类型</span>
<span class="token key atrule">c7</span><span class="token punctuation">:</span> heima     <span class="token comment"># 简单写法，直接写值 , 如果字符串中间有特殊字符，必须使用双引号或者单引号包裹 </span>
<span class="token key atrule">c8</span><span class="token punctuation">:</span> line1
    line2     <span class="token comment"># 字符串过多的情况可以拆成多行，每一行会被转化成一个空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 对象</span>
<span class="token comment"># 形式一(推荐):</span>
<span class="token key atrule">heima</span><span class="token punctuation">:</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">15</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span> Beijing
<span class="token comment"># 形式二(了解):</span>
<span class="token key atrule">heima</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span><span class="token key atrule">address</span><span class="token punctuation">:</span> Beijing<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 数组</span>
<span class="token comment"># 形式一(推荐):</span>
<span class="token key atrule">address</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 顺义
  <span class="token punctuation">-</span> 昌平  
<span class="token comment"># 形式二(了解):</span>
<span class="token key atrule">address</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>顺义<span class="token punctuation">,</span>昌平<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),g=n("p",null,"小提示：",-1),y=n("p",null,[s("1 书写yaml切记"),n("code",null,":"),s(" 后面要加一个空格")],-1),h=n("p",null,[s("2 如果需要将多段yaml配置放在一个文件中，中间要使用"),n("code",null,"---"),s("分隔")],-1),x=n("p",null,"3 下面是一个yaml转json的网站，可以通过它验证yaml是否书写正确",-1),f={href:"https://www.json2yaml.com/convert-yaml-to-json",target:"_blank",rel:"noopener noreferrer"},P=t(`<h4 id="_3-3-资源管理方式" tabindex="-1"><a class="header-anchor" href="#_3-3-资源管理方式" aria-hidden="true">#</a> 3.3 资源管理方式</h4><ul><li><p>命令式对象管理：直接使用命令去操作kubernetes资源</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl run nginx-pod <span class="token operator">--</span>image=nginx:1<span class="token punctuation">.</span>17<span class="token punctuation">.</span>1 <span class="token operator">--</span>port=80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>命令式对象配置：通过命令配置和配置文件去操作kubernetes资源</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl create/patch <span class="token operator">-</span>f nginx-pod<span class="token punctuation">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>声明式对象配置：通过apply命令和配置文件去操作kubernetes资源</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>kubectl apply <span class="token operator">-</span>f nginx-pod<span class="token punctuation">.</span>yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">操作对象</th><th style="text-align:left;">适用环境</th><th style="text-align:left;">优点</th><th style="text-align:left;">缺点</th></tr></thead><tbody><tr><td style="text-align:left;">命令式对象管理</td><td style="text-align:left;">对象</td><td style="text-align:left;">测试</td><td style="text-align:left;">简单</td><td style="text-align:left;">只能操作活动对象，无法审计、跟踪</td></tr><tr><td style="text-align:left;">命令式对象配置</td><td style="text-align:left;">文件</td><td style="text-align:left;">开发</td><td style="text-align:left;">可以审计、跟踪</td><td style="text-align:left;">项目大时，配置文件多，操作麻烦</td></tr><tr><td style="text-align:left;">声明式对象配置</td><td style="text-align:left;">目录</td><td style="text-align:left;">开发</td><td style="text-align:left;">支持目录操作</td><td style="text-align:left;">意外情况下难以调试</td></tr></tbody></table><h5 id="_3-3-1-命令式对象管理" tabindex="-1"><a class="header-anchor" href="#_3-3-1-命令式对象管理" aria-hidden="true">#</a> 3.3.1 命令式对象管理</h5><p><strong>kubectl命令</strong></p><p>kubectl是kubernetes集群的命令行工具，通过它能够对集群本身进行管理，并能够在集群上进行容器化应用的安装部署。kubectl命令的语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl [command] [type] [name] [flags]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>comand</strong>：指定要对资源执行的操作，例如create、get、delete</p><p><strong>type</strong>：指定资源类型，比如deployment、pod、service</p><p><strong>name</strong>：指定资源的名称，名称大小写敏感</p><p><strong>flags</strong>：指定额外的可选参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有pod</span>
kubectl get pod 

<span class="token comment"># 查看某个pod</span>
kubectl get pod pod_name

<span class="token comment"># 查看某个pod,以yaml格式展示结果</span>
kubectl get pod pod_name <span class="token parameter variable">-o</span> yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>资源类型</strong></p><p>kubernetes中所有的内容都抽象为资源，可以通过下面的命令进行查看:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl api-resources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>经常使用的资源有下面这些：</p><table><thead><tr><th style="text-align:left;">资源分类</th><th style="text-align:left;">资源名称</th><th style="text-align:left;">缩写</th><th style="text-align:left;">资源作用</th></tr></thead><tbody><tr><td style="text-align:left;">集群级别资源</td><td style="text-align:left;">nodes</td><td style="text-align:left;">no</td><td style="text-align:left;">集群组成部分</td></tr><tr><td style="text-align:left;">namespaces</td><td style="text-align:left;">ns</td><td style="text-align:left;">隔离Pod</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pod资源</td><td style="text-align:left;">pods</td><td style="text-align:left;">po</td><td style="text-align:left;">装载容器</td></tr><tr><td style="text-align:left;">pod资源控制器</td><td style="text-align:left;">replicationcontrollers</td><td style="text-align:left;">rc</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">replicasets</td><td style="text-align:left;">rs</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">deployments</td><td style="text-align:left;">deploy</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">daemonsets</td><td style="text-align:left;">ds</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">jobs</td><td style="text-align:left;"></td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">cronjobs</td><td style="text-align:left;">cj</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">horizontalpodautoscalers</td><td style="text-align:left;">hpa</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">statefulsets</td><td style="text-align:left;">sts</td><td style="text-align:left;">控制pod资源</td></tr><tr><td style="text-align:left;">服务发现资源</td><td style="text-align:left;">services</td><td style="text-align:left;">svc</td><td style="text-align:left;">统一pod对外接口</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">ingress</td><td style="text-align:left;">ing</td><td style="text-align:left;">统一pod对外接口</td></tr><tr><td style="text-align:left;">存储资源</td><td style="text-align:left;">volumeattachments</td><td style="text-align:left;"></td><td style="text-align:left;">存储</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">persistentvolumes</td><td style="text-align:left;">pv</td><td style="text-align:left;">存储</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">persistentvolumeclaims</td><td style="text-align:left;">pvc</td><td style="text-align:left;">存储</td></tr><tr><td style="text-align:left;">配置资源</td><td style="text-align:left;">configmaps</td><td style="text-align:left;">cm</td><td style="text-align:left;">配置</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">secrets</td><td style="text-align:left;"></td><td style="text-align:left;">配置</td></tr></tbody></table><p><strong>操作</strong></p><p>kubernetes允许对资源进行多种操作，可以通过--help查看详细的操作命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>经常使用的操作有下面这些：</p><table><thead><tr><th style="text-align:left;">命令分类</th><th style="text-align:left;">命令</th><th style="text-align:left;">翻译</th><th style="text-align:left;">命令作用</th></tr></thead><tbody><tr><td style="text-align:left;">基本命令</td><td style="text-align:left;">create</td><td style="text-align:left;">创建</td><td style="text-align:left;">创建一个资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">edit</td><td style="text-align:left;">编辑</td><td style="text-align:left;">编辑一个资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">get</td><td style="text-align:left;">获取</td><td style="text-align:left;">获取一个资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">patch</td><td style="text-align:left;">更新</td><td style="text-align:left;">更新一个资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">delete</td><td style="text-align:left;">删除</td><td style="text-align:left;">删除一个资源</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">explain</td><td style="text-align:left;">解释</td><td style="text-align:left;">展示资源文档</td></tr><tr><td style="text-align:left;">运行和调试</td><td style="text-align:left;">run</td><td style="text-align:left;">运行</td><td style="text-align:left;">在集群中运行一个指定的镜像</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">expose</td><td style="text-align:left;">暴露</td><td style="text-align:left;">暴露资源为Service</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">describe</td><td style="text-align:left;">描述</td><td style="text-align:left;">显示资源内部信息</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">logs</td><td style="text-align:left;">日志输出容器在 pod 中的日志</td><td style="text-align:left;">输出容器在 pod 中的日志</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">attach</td><td style="text-align:left;">缠绕进入运行中的容器</td><td style="text-align:left;">进入运行中的容器</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">exec</td><td style="text-align:left;">执行容器中的一个命令</td><td style="text-align:left;">执行容器中的一个命令</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">cp</td><td style="text-align:left;">复制</td><td style="text-align:left;">在Pod内外复制文件</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">rollout</td><td style="text-align:left;">首次展示</td><td style="text-align:left;">管理资源的发布</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">scale</td><td style="text-align:left;">规模</td><td style="text-align:left;">扩(缩)容Pod的数量</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">autoscale</td><td style="text-align:left;">自动调整</td><td style="text-align:left;">自动调整Pod的数量</td></tr><tr><td style="text-align:left;">高级命令</td><td style="text-align:left;">apply</td><td style="text-align:left;">rc</td><td style="text-align:left;">通过文件对资源进行配置</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">label</td><td style="text-align:left;">标签</td><td style="text-align:left;">更新资源上的标签</td></tr><tr><td style="text-align:left;">其他命令</td><td style="text-align:left;">cluster-info</td><td style="text-align:left;">集群信息</td><td style="text-align:left;">显示集群信息</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">version</td><td style="text-align:left;">版本</td><td style="text-align:left;">显示当前Server和Client的版本</td></tr></tbody></table><p>下面以一个namespace / pod的创建和删除简单演示下命令的使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl create namespace dev</span>
namespace/dev created

<span class="token comment"># 获取namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ns</span>
NAME              STATUS   AGE
default           Active   21h
dev               Active   21s
kube-node-lease   Active   21h
kube-public       Active   21h
kube-system       Active   21h

<span class="token comment"># 在此namespace下创建并运行一个nginx的Pod</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl run pod --image=nginx:latest -n dev</span>
kubectl run <span class="token parameter variable">--generator</span><span class="token operator">=</span>deployment/apps.v1 is DEPRECATED and will be removed <span class="token keyword">in</span> a future version. Use kubectl run <span class="token parameter variable">--generator</span><span class="token operator">=</span>run-pod/v1 or kubectl create instead.
deployment.apps/pod created

<span class="token comment"># 查看新创建的pod</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n dev</span>
NAME  READY   STATUS    RESTARTS   AGE
pod   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          21s

<span class="token comment"># 删除指定的pod</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod pod-864f9875b9-pcw7x</span>
pod <span class="token string">&quot;pod&quot;</span> deleted

<span class="token comment"># 删除指定的namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete ns dev</span>
namespace <span class="token string">&quot;dev&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-3-2-命令式对象配置" tabindex="-1"><a class="header-anchor" href="#_3-3-2-命令式对象配置" aria-hidden="true">#</a> 3.3.2 命令式对象配置</h5><p>命令式对象配置就是使用命令配合配置文件一起来操作kubernetes资源。</p><p>1） 创建一个nginxpod.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginxpod
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>containers
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）执行create命令，创建资源：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token namespace">[root@master ~]</span><span class="token comment"># kubectl create -f nginxpod.yaml</span>
namespace/dev created
pod/nginxpod created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时发现创建了两个资源对象，分别是namespace和pod</p><p>3）执行get命令，查看资源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get -f nginxpod.yaml</span>
NAME            STATUS   AGE
namespace/dev   Active   18s

NAME            READY   STATUS    RESTARTS   AGE
pod/nginxpod    <span class="token number">1</span>/1     Running   <span class="token number">0</span>          17s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就显示了两个资源对象的信息</p><p>4）执行delete命令，删除资源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f nginxpod.yaml</span>
namespace <span class="token string">&quot;dev&quot;</span> deleted
pod <span class="token string">&quot;nginxpod&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时发现两个资源对象被删除了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>总结:
    命令式对象配置的方式操作资源，可以简单的认为：命令  +  yaml配置文件（里面是命令需要的各种参数）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-3-3-声明式对象配置" tabindex="-1"><a class="header-anchor" href="#_3-3-3-声明式对象配置" aria-hidden="true">#</a> 3.3.3 声明式对象配置</h5><p>声明式对象配置跟命令式对象配置很相似，但是它只有一个命令apply。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 首先执行一次kubectl apply -f yaml文件，发现创建了资源</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment">#  kubectl apply -f nginxpod.yaml</span>
namespace/dev created
pod/nginxpod created

<span class="token comment"># 再次执行一次kubectl apply -f yaml文件，发现说资源没有变动</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment">#  kubectl apply -f nginxpod.yaml</span>
namespace/dev unchanged
pod/nginxpod unchanged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>总结:
    其实声明式对象配置就是使用apply描述一个资源最终的状态（在yaml中定义状态）
    使用apply操作资源：
        如果资源不存在，就创建，相当于 kubectl create
        如果资源已存在，就更新，相当于 kubectl patch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>扩展：kubectl可以在node节点上运行吗 ?</p></blockquote><p>kubectl的运行是需要进行配置的，它的配置文件是$HOME/.kube，如果想要在node节点运行此命令，需要将master上的.kube文件复制到node节点上，即在master节点上执行下面操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">scp</span>  <span class="token parameter variable">-r</span>  <span class="token environment constant">HOME</span>/.kube   node1: <span class="token environment constant">HOME</span>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>使用推荐: 三种方式应该怎么用 ?</p></blockquote><p>创建/更新资源 使用声明式对象配置 kubectl apply -f XXX.yaml</p><p>删除资源 使用命令式对象配置 kubectl delete -f XXX.yaml</p><p>查询资源 使用命令式对象管理 kubectl get(describe) 资源名称</p><h3 id="_4-实战入门" tabindex="-1"><a class="header-anchor" href="#_4-实战入门" aria-hidden="true">#</a> 4. 实战入门</h3><p>本章节将介绍如何在kubernetes集群中部署一个nginx服务，并且能够对其进行访问。</p><h4 id="_4-1-namespace" tabindex="-1"><a class="header-anchor" href="#_4-1-namespace" aria-hidden="true">#</a> 4.1 Namespace</h4><p>Namespace是kubernetes系统中的一种非常重要资源，它的主要作用是用来实现<strong>多套环境的资源隔离</strong>或者<strong>多租户的资源隔离</strong>。</p><p>默认情况下，kubernetes集群中的所有的Pod都是可以相互访问的。但是在实际中，可能不想让两个Pod之间进行互相的访问，那此时就可以将两个Pod划分到不同的namespace下。kubernetes通过将集群内部的资源分配到不同的Namespace中，可以形成逻辑上的&quot;组&quot;，以方便不同的组的资源进行隔离使用和管理。</p><p>可以通过kubernetes的授权机制，将不同的namespace交给不同租户进行管理，这样就实现了多租户的资源隔离。此时还能结合kubernetes的资源配额机制，限定不同租户能占用的资源，例如CPU使用量、内存使用量等等，来实现租户可用资源的管理。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140221360.png" alt="图 11" tabindex="0" loading="lazy"><figcaption>图 11</figcaption></figure><p>kubernetes在集群启动之后，会默认创建几个namespace</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl  get namespace</span>
NAME              STATUS   AGE
default           Active   45h     <span class="token comment">#  所有未指定Namespace的对象都会被分配在default命名空间</span>
kube-node-lease   Active   45h     <span class="token comment">#  集群节点之间的心跳维护，v1.13开始引入</span>
kube-public       Active   45h     <span class="token comment">#  此命名空间下的资源可以被所有人访问（包括未认证用户）</span>
kube-system       Active   45h     <span class="token comment">#  所有由Kubernetes系统创建的资源都处于这个命名空间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来看namespace资源的具体操作：</p><h5 id="_4-1-1-查看" tabindex="-1"><a class="header-anchor" href="#_4-1-1-查看" aria-hidden="true">#</a> 4.1.1 <strong>查看</strong></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1 查看所有的ns  命令：kubectl get ns</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ns</span>
NAME              STATUS   AGE
default           Active   45h
kube-node-lease   Active   45h
kube-public       Active   45h     
kube-system       Active   45h     

<span class="token comment"># 2 查看指定的ns   命令：kubectl get ns ns名称</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ns default</span>
NAME      STATUS   AGE
default   Active   45h

<span class="token comment"># 3 指定输出格式  命令：kubectl get ns ns名称  -o 格式参数</span>
<span class="token comment"># kubernetes支持的格式有很多，比较常见的是wide、json、yaml</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ns default -o yaml</span>
apiVersion: v1
kind: Namespace
metadata:
  creationTimestamp: <span class="token string">&quot;2021-05-08T04:44:16Z&quot;</span>
  name: default
  resourceVersion: <span class="token string">&quot;151&quot;</span>
  selfLink: /api/v1/namespaces/default
  uid: 7405f73a-e486-43d4-9db6-145f1409f090
spec:
  finalizers:
  - kubernetes
status:
  phase: Active
  
<span class="token comment"># 4 查看ns详情  命令：kubectl describe ns ns名称</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe ns default</span>
Name:         default
Labels:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Status:       Active  <span class="token comment"># Active 命名空间正在使用中  Terminating 正在删除命名空间</span>

<span class="token comment"># ResourceQuota 针对namespace做的资源限制</span>
<span class="token comment"># LimitRange针对namespace中的每个组件做的资源限制</span>
No resource quota.
No LimitRange resource.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-1-2-创建" tabindex="-1"><a class="header-anchor" href="#_4-1-2-创建" aria-hidden="true">#</a> 4.1.2 <strong>创建</strong></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl create ns dev</span>
namespace/dev created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-1-3-删除" tabindex="-1"><a class="header-anchor" href="#_4-1-3-删除" aria-hidden="true">#</a> 4.1.3 <strong>删除</strong></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete ns dev</span>
namespace <span class="token string">&quot;dev&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-1-4-配置方式" tabindex="-1"><a class="header-anchor" href="#_4-1-4-配置方式" aria-hidden="true">#</a> 4.1.4 <strong>配置方式</strong></h5><p>首先准备一个yaml文件：ns-dev.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以执行对应的创建和删除命令了：</p><p>创建：kubectl create -f ns-dev.yaml</p><p>删除：kubectl delete -f ns-dev.yaml</p><h4 id="_4-2-pod" tabindex="-1"><a class="header-anchor" href="#_4-2-pod" aria-hidden="true">#</a> 4.2 Pod</h4><p>Pod是kubernetes集群进行管理的最小单元，程序要运行必须部署在容器中，而容器必须存在于Pod中。</p><p>Pod可以认为是容器的封装，一个Pod中可以存在一个或者多个容器。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140258149.png" alt="图 12" tabindex="0" loading="lazy"><figcaption>图 12</figcaption></figure><p>kubernetes在集群启动之后，集群中的各个组件也都是以Pod方式运行的。可以通过下面命令查看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n kube-system</span>
NAMESPACE     NAME                             READY   STATUS    RESTARTS   AGE
kube-system   coredns-6955765f44-68g6v         <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   coredns-6955765f44-cs5r8         <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   etcd-master                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-apiserver-master            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-controller-manager-master   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-flannel-ds-amd64-47r25      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-flannel-ds-amd64-ls5lh      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-proxy-685tk                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-proxy-87spt                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
kube-system   kube-scheduler-master            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2d1h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-1-创建并运行" tabindex="-1"><a class="header-anchor" href="#_4-2-1-创建并运行" aria-hidden="true">#</a> 4.2.1 创建并运行</h5><p>kubernetes没有提供单独运行Pod的命令，都是通过Pod控制器来实现的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令格式： kubectl run (pod控制器名称) [参数] </span>
<span class="token comment"># --image  指定Pod的镜像</span>
<span class="token comment"># --port   指定端口</span>
<span class="token comment"># --namespace  指定namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl run nginx --image=nginx:latest --port=80 --namespace dev </span>
deployment.apps/nginx created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-2-查看pod信息" tabindex="-1"><a class="header-anchor" href="#_4-2-2-查看pod信息" aria-hidden="true">#</a> 4.2.2 查看pod信息</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看Pod基本信息</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME    READY   STATUS    RESTARTS   AGE
nginx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          43s

<span class="token comment"># 查看Pod的详细信息</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod nginx -n dev</span>
Name:         nginx
Namespace:    dev
Priority:     <span class="token number">0</span>
Node:         node1/192.168.5.4
Start Time:   Wed, 08 May <span class="token number">2021</span> 09:29:24 +0800
Labels:       pod-template-hash<span class="token operator">=</span>5ff7956ff6
              <span class="token assign-left variable">run</span><span class="token operator">=</span>nginx
Annotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Status:       Running
IP:           <span class="token number">10.244</span>.1.23
IPs:
  IP:           <span class="token number">10.244</span>.1.23
Controlled By:  ReplicaSet/nginx
Containers:
  nginx:
    Container ID:   docker://4c62b8c0648d2512380f4ffa5da2c99d16e05634979973449c98e9b829f6253c
    Image:          nginx:latest
    Image ID:       docker-pullable://nginx@sha256:485b610fefec7ff6c463ced9623314a04ed67e3945b9c08d7e53a47f6d108dc7
    Port:           <span class="token number">80</span>/TCP
    Host Port:      <span class="token number">0</span>/TCP
    State:          Running
      Started:      Wed, 08 May <span class="token number">2021</span> 09:30:01 +0800
    Ready:          True
    Restart Count:  <span class="token number">0</span>
    Environment:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-hwvvw <span class="token punctuation">(</span>ro<span class="token punctuation">)</span>
Conditions:
  Type              Status
  Initialized       True
  Ready             True
  ContainersReady   True
  PodScheduled      True
Volumes:
  default-token-hwvvw:
    Type:        Secret <span class="token punctuation">(</span>a volume populated by a Secret<span class="token punctuation">)</span>
    SecretName:  default-token-hwvvw
    Optional:    <span class="token boolean">false</span>
QoS Class:       BestEffort
Node-Selectors:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Tolerations:     node.kubernetes.io/not-ready:NoExecute <span class="token keyword">for</span> 300s
                 node.kubernetes.io/unreachable:NoExecute <span class="token keyword">for</span> 300s
Events:
  Type    Reason     Age        From               Message
  ----    ------     ----       ----               -------
  Normal  Scheduled  <span class="token operator">&lt;</span>unknown<span class="token operator">&gt;</span>  default-scheduler  Successfully assigned dev/nginx-5ff7956ff6-fg2db to node1
  Normal  Pulling    4m11s      kubelet, node1     Pulling image <span class="token string">&quot;nginx:latest&quot;</span>
  Normal  Pulled     3m36s      kubelet, node1     Successfully pulled image <span class="token string">&quot;nginx:latest&quot;</span>
  Normal  Created    3m36s      kubelet, node1     Created container nginx
  Normal  Started    3m36s      kubelet, node1     Started container nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-3-访问pod" tabindex="-1"><a class="header-anchor" href="#_4-2-3-访问pod" aria-hidden="true">#</a> 4.2.3 访问Pod</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取podIP</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME    READY   STATUS    RESTARTS   AGE    IP             NODE    <span class="token punctuation">..</span>. 
nginx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          190s   <span class="token number">10.244</span>.1.23   node1   <span class="token punctuation">..</span>.

<span class="token comment">#访问POD</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># curl http://10.244.1.23:80</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">&lt;</span>em<span class="token operator">&gt;</span>Thank you <span class="token keyword">for</span> using nginx.<span class="token operator">&lt;</span>/em<span class="token operator">&gt;</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-4-删除指定pod" tabindex="-1"><a class="header-anchor" href="#_4-2-4-删除指定pod" aria-hidden="true">#</a> 4.2.4 删除指定Pod</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除指定Pod</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod nginx -n dev</span>
pod <span class="token string">&quot;nginx&quot;</span> deleted

<span class="token comment"># 此时，显示删除Pod成功，但是再查询，发现又新产生了一个 </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME    READY   STATUS    RESTARTS   AGE
nginx   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          21s

<span class="token comment"># 这是因为当前Pod是由Pod控制器创建的，控制器会监控Pod状况，一旦发现Pod死亡，会立即重建</span>
<span class="token comment"># 此时要想删除Pod，必须删除Pod控制器</span>

<span class="token comment"># 先来查询一下当前namespace下的Pod控制器</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy -n  dev</span>
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
nginx   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           9m7s

<span class="token comment"># 接下来，删除此PodPod控制器</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete deploy nginx -n dev</span>
deployment.apps <span class="token string">&quot;nginx&quot;</span> deleted

<span class="token comment"># 稍等片刻，再查询Pod，发现Pod被删除了</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
No resources found <span class="token keyword">in</span> dev namespace.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-5-配置操作" tabindex="-1"><a class="header-anchor" href="#_4-2-5-配置操作" aria-hidden="true">#</a> 4.2.5 配置操作</h5><p>创建一个pod-nginx.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> pod
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以执行对应的创建和删除命令了：</p><p>创建：kubectl create -f pod-nginx.yaml</p><p>删除：kubectl delete -f pod-nginx.yaml</p><h4 id="_4-3-label" tabindex="-1"><a class="header-anchor" href="#_4-3-label" aria-hidden="true">#</a> 4.3 Label</h4><p>Label是kubernetes系统中的一个重要概念。它的作用就是在资源上添加标识，用来对它们进行区分和选择。</p><p>Label的特点：</p><ul><li>一个Label会以key/value键值对的形式附加到各种对象上，如Node、Pod、Service等等</li><li>一个资源对象可以定义任意数量的Label ，同一个Label也可以被添加到任意数量的资源对象上去</li><li>Label通常在资源对象定义时确定，当然也可以在对象创建后动态添加或者删除</li></ul><p>可以通过Label实现资源的多维度分组，以便灵活、方便地进行资源分配、调度、配置、部署等管理工作。</p><blockquote><p>一些常用的Label 示例如下：</p><ul><li>版本标签：&quot;version&quot;:&quot;release&quot;, &quot;version&quot;:&quot;stable&quot;......</li><li>环境标签：&quot;environment&quot;:&quot;dev&quot;，&quot;environment&quot;:&quot;test&quot;，&quot;environment&quot;:&quot;pro&quot;</li><li>架构标签：&quot;tier&quot;:&quot;frontend&quot;，&quot;tier&quot;:&quot;backend&quot;</li></ul></blockquote><p>标签定义完毕之后，还要考虑到标签的选择，这就要使用到Label Selector，即：</p><p>Label用于给某个资源对象定义标识</p><p>Label Selector用于查询和筛选拥有某些标签的资源对象</p><p>当前有两种Label Selector：</p><ul><li><p>基于等式的Label Selector</p><p>name = slave: 选择所有包含Label中key=&quot;name&quot;且value=&quot;slave&quot;的对象</p><p>env != production: 选择所有包括Label中的key=&quot;env&quot;且value不等于&quot;production&quot;的对象</p></li><li><p>基于集合的Label Selector</p><p>name in (master, slave): 选择所有包含Label中的key=&quot;name&quot;且value=&quot;master&quot;或&quot;slave&quot;的对象</p><p>name not in (frontend): 选择所有包含Label中的key=&quot;name&quot;且value不等于&quot;frontend&quot;的对象</p></li></ul><p>标签的选择条件可以使用多个，此时将多个Label Selector进行组合，使用逗号&quot;,&quot;进行分隔即可。例如：</p><p>name=slave，env!=production</p><p>name not in (frontend)，env!=production</p><h5 id="_4-3-1-命令方式" tabindex="-1"><a class="header-anchor" href="#_4-3-1-命令方式" aria-hidden="true">#</a> 4.3.1 命令方式</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为pod资源打标签</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl label pod nginx-pod version=1.0 -n dev</span>
pod/nginx-pod labeled

<span class="token comment"># 为pod资源更新标签</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl label pod nginx-pod version=2.0 -n dev --overwrite</span>
pod/nginx-pod labeled

<span class="token comment"># 查看标签</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod nginx-pod  -n dev --show-labels</span>
NAME        READY   STATUS    RESTARTS   AGE   LABELS
nginx-pod   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          10m   <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">2.0</span>

<span class="token comment"># 筛选标签</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n dev -l version=2.0  --show-labels</span>
NAME        READY   STATUS    RESTARTS   AGE   LABELS
nginx-pod   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          17m   <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">2.0</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n dev -l version!=2.0 --show-labels</span>
No resources found <span class="token keyword">in</span> dev namespace.

<span class="token comment">#删除标签</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl label pod nginx-pod version- -n dev</span>
pod/nginx-pod labeled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-3-2-配置方式" tabindex="-1"><a class="header-anchor" href="#_4-3-2-配置方式" aria-hidden="true">#</a> 4.3.2 配置方式</h5><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.0&quot;</span> 
    <span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> pod
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以执行对应的更新命令了：kubectl apply -f pod-nginx.yaml</p><h4 id="_4-4-deployment" tabindex="-1"><a class="header-anchor" href="#_4-4-deployment" aria-hidden="true">#</a> 4.4 Deployment</h4><p>在kubernetes中，Pod是最小的控制单元，但是kubernetes很少直接控制Pod，一般都是通过Pod控制器来完成的。Pod控制器用于pod的管理，确保pod资源符合预期的状态，当pod的资源出现故障时，会尝试进行重启或重建pod。</p><p>在kubernetes中Pod控制器的种类有很多，本章节只介绍一种：Deployment。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140301884.png" alt="图 13" tabindex="0" loading="lazy"><figcaption>图 13</figcaption></figure><h5 id="_4-4-1待操作。。。。。" tabindex="-1"><a class="header-anchor" href="#_4-4-1待操作。。。。。" aria-hidden="true">#</a> 4.4.1待操作。。。。。</h5><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 命令格式: kubectl create deployment 名称  [参数] </span>
<span class="token comment"># --image  指定pod的镜像</span>
<span class="token comment"># --port   指定端口</span>
<span class="token comment"># --replicas  指定创建pod数量</span>
<span class="token comment"># --namespace  指定namespace</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl run nginx --image=nginx:latest --port=80 --replicas=3 -n dev</span>
deployment.apps/nginx created

<span class="token comment"># 查看创建的Pod</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                     READY   STATUS    RESTARTS   AGE
nginx<span class="token punctuation">-</span>5ff7956ff6<span class="token punctuation">-</span>6k8cb   1/1     Running   0          19s
nginx<span class="token punctuation">-</span>5ff7956ff6<span class="token punctuation">-</span>jxfjt   1/1     Running   0          19s
nginx<span class="token punctuation">-</span>5ff7956ff6<span class="token punctuation">-</span>v6jqw   1/1     Running   0          19s

<span class="token comment"># 查看deployment的信息</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy -n dev</span>
NAME    READY   UP<span class="token punctuation">-</span>TO<span class="token punctuation">-</span>DATE   AVAILABLE   AGE
nginx   3/3     3            3           2m42s

<span class="token comment"># UP-TO-DATE：成功升级的副本数量</span>
<span class="token comment"># AVAILABLE：可用副本的数量</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy -n dev -o wide</span>
NAME    READY UP<span class="token punctuation">-</span>TO<span class="token punctuation">-</span>DATE  AVAILABLE   AGE     CONTAINERS   IMAGES              SELECTOR
nginx   3/3     3         3           2m51s   nginx        nginx<span class="token punctuation">:</span>latest        run=nginx

<span class="token comment"># 查看deployment的详细信息</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe deploy nginx -n dev</span>
<span class="token key atrule">Name</span><span class="token punctuation">:</span>                   nginx
<span class="token key atrule">Namespace</span><span class="token punctuation">:</span>              dev
<span class="token key atrule">CreationTimestamp</span><span class="token punctuation">:</span>      Wed<span class="token punctuation">,</span> 08 May 2021 11<span class="token punctuation">:</span>14<span class="token punctuation">:</span>14 +0800
<span class="token key atrule">Labels</span><span class="token punctuation">:</span>                 run=nginx
<span class="token key atrule">Annotations</span><span class="token punctuation">:</span>            <span class="token key atrule">deployment.kubernetes.io/revision</span><span class="token punctuation">:</span> <span class="token number">1</span>
<span class="token key atrule">Selector</span><span class="token punctuation">:</span>               run=nginx
<span class="token key atrule">Replicas</span><span class="token punctuation">:</span>               3 desired <span class="token punctuation">|</span> 3 updated <span class="token punctuation">|</span> 3 total <span class="token punctuation">|</span> 3 available <span class="token punctuation">|</span> 0 unavailable
<span class="token key atrule">StrategyType</span><span class="token punctuation">:</span>           RollingUpdate
<span class="token key atrule">MinReadySeconds</span><span class="token punctuation">:</span>        <span class="token number">0</span>
<span class="token key atrule">RollingUpdateStrategy</span><span class="token punctuation">:</span>  25% max unavailable<span class="token punctuation">,</span> 25% max 违规词汇
<span class="token key atrule">Pod Template</span><span class="token punctuation">:</span>
  <span class="token key atrule">Labels</span><span class="token punctuation">:</span>  run=nginx
  <span class="token key atrule">Containers</span><span class="token punctuation">:</span>
   <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">Image</span><span class="token punctuation">:</span>        nginx<span class="token punctuation">:</span>latest
    <span class="token key atrule">Port</span><span class="token punctuation">:</span>         80/TCP
    <span class="token key atrule">Host Port</span><span class="token punctuation">:</span>    0/TCP
    <span class="token key atrule">Environment</span><span class="token punctuation">:</span>  &lt;none<span class="token punctuation">&gt;</span>
    <span class="token key atrule">Mounts</span><span class="token punctuation">:</span>       &lt;none<span class="token punctuation">&gt;</span>
  <span class="token key atrule">Volumes</span><span class="token punctuation">:</span>        &lt;none<span class="token punctuation">&gt;</span>
<span class="token key atrule">Conditions</span><span class="token punctuation">:</span>
  Type           Status  Reason
  <span class="token punctuation">---</span><span class="token punctuation">-</span>           <span class="token punctuation">---</span><span class="token punctuation">---</span>  <span class="token punctuation">---</span><span class="token punctuation">---</span>
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
<span class="token key atrule">OldReplicaSets</span><span class="token punctuation">:</span>  &lt;none<span class="token punctuation">&gt;</span>
<span class="token key atrule">NewReplicaSet</span><span class="token punctuation">:</span>   nginx<span class="token punctuation">-</span>5ff7956ff6 (3/3 replicas created)
<span class="token key atrule">Events</span><span class="token punctuation">:</span>
  Type    Reason             Age    From                   Message
  <span class="token punctuation">---</span><span class="token punctuation">-</span>    <span class="token punctuation">---</span><span class="token punctuation">---</span>             <span class="token punctuation">---</span><span class="token punctuation">-</span>   <span class="token punctuation">---</span><span class="token punctuation">-</span>                   <span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">-</span>
  Normal  ScalingReplicaSet  5m43s  deployment<span class="token punctuation">-</span>controller  Scaled up replicaset nginx<span class="token punctuation">-</span>5ff7956ff6 to 3
  
<span class="token comment"># 删除 </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete deploy nginx -n dev</span>
deployment.apps &quot;nginx&quot; deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-4-2-配置操作" tabindex="-1"><a class="header-anchor" href="#_4-4-2-配置操作" aria-hidden="true">#</a> 4.4.2 配置操作</h5><p>创建一个deploy-nginx.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">run</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>latest
        <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以执行对应的创建和删除命令了：</p><p>创建：kubectl create -f deploy-nginx.yaml</p><p>删除：kubectl delete -f deploy-nginx.yaml</p><h4 id="_4-5-service" tabindex="-1"><a class="header-anchor" href="#_4-5-service" aria-hidden="true">#</a> 4.5 Service</h4><p>通过上节课的学习，已经能够利用Deployment来创建一组Pod来提供具有高可用性的服务。</p><p>虽然每个Pod都会分配一个单独的Pod IP，然而却存在如下两问题：</p><ul><li>Pod IP 会随着Pod的重建产生变化</li><li>Pod IP 仅仅是集群内可见的虚拟IP，外部无法访问</li></ul><p>这样对于访问这个服务带来了难度。因此，kubernetes设计了Service来解决这个问题。</p><p>Service可以看作是一组同类Pod<strong>对外的访问接口</strong>。借助Service，应用可以方便地实现服务发现和负载均衡。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140325343.png" alt="图 14" tabindex="0" loading="lazy"><figcaption>图 14</figcaption></figure><h5 id="_4-5-1-创建集群内部可访问的service" tabindex="-1"><a class="header-anchor" href="#_4-5-1-创建集群内部可访问的service" aria-hidden="true">#</a> 4.5.1 创建集群内部可访问的Service</h5><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code># 暴露Service
[root@master ~]# kubectl expose deploy nginx --name=svc-nginx1 --type=ClusterIP --port=80 --target-port=80 -n dev
service/svc-nginx1 exposed

# 查看service
[root@master ~]# kubectl get svc svc-nginx1 -n dev -o wide
NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE     SELECTOR
svc-nginx1   ClusterIP   10.109.179.231   &lt;none&gt;        80/TCP    3m51s   run=nginx

# 这里产生了一个CLUSTER-IP，这就是service的IP，在Service的生命周期中，这个地址是不会变动的
# 可以通过这个IP访问当前service对应的POD
[root@master ~]# curl 10.109.179.231:80
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Welcome to nginx!&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to nginx!&lt;/h1&gt;
.......
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-5-2-创建集群外部也可访问的service" tabindex="-1"><a class="header-anchor" href="#_4-5-2-创建集群外部也可访问的service" aria-hidden="true">#</a> 4.5.2 创建集群外部也可访问的Service</h5><div class="language-yacas line-numbers-mode" data-ext="yacas"><pre class="language-yacas"><code># 上面创建的Service的type类型为ClusterIP，这个ip地址只用集群内部可访问
# 如果需要创建外部也可以访问的Service，需要修改type为NodePort
[root@master ~]# kubectl expose deploy nginx --name=svc-nginx2 --type=NodePort --port=80 --target-port=80 -n dev
service/svc-nginx2 exposed

# 此时查看，会发现出现了NodePort类型的Service，而且有一对Port（80:31928/TC）
[root@master ~]# kubectl get svc  svc-nginx2  -n dev -o wide
NAME          TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE    SELECTOR
svc-nginx2    NodePort    10.100.94.0      &lt;none&gt;        80:31928/TCP   9s     run=nginx

# 接下来就可以通过集群外的主机访问 节点IP:31928访问服务了
# 例如在的电脑主机上通过浏览器访问下面的地址
http://192.168.90.100:31928/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-5-3-删除service" tabindex="-1"><a class="header-anchor" href="#_4-5-3-删除service" aria-hidden="true">#</a> 4.5.3 删除Service</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete svc svc-nginx-1 -n dev </span>
<span class="token function">service</span> <span class="token string">&quot;svc-nginx-1&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-5-4-配置方式" tabindex="-1"><a class="header-anchor" href="#_4-5-4-配置方式" aria-hidden="true">#</a> 4.5.4 配置方式</h5><p>创建一个svc-nginx.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> svc<span class="token punctuation">-</span>nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.109.179.231 <span class="token comment">#固定svc的内网ip</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">run</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以执行对应的创建和删除命令了：</p><p>创建：kubectl create -f svc-nginx.yaml</p><p>删除：kubectl delete -f svc-nginx.yaml</p><blockquote><p><strong>小结</strong></p><p>至此，已经掌握了Namespace、Pod、Deployment、Service资源的基本操作，有了这些操作，就可以在kubernetes集群中实现一个服务的简单部署和访问了，但是如果想要更好的使用kubernetes，就需要深入学习这几种资源的细节和原理。</p></blockquote><h3 id="_5-pod详解" tabindex="-1"><a class="header-anchor" href="#_5-pod详解" aria-hidden="true">#</a> 5. Pod详解</h3><h4 id="_5-1-pod介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-pod介绍" aria-hidden="true">#</a> 5.1 Pod介绍</h4><h5 id="_5-1-1-pod结构" tabindex="-1"><a class="header-anchor" href="#_5-1-1-pod结构" aria-hidden="true">#</a> 5.1.1 Pod结构</h5><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140359150.png" alt="图 15" tabindex="0" loading="lazy"><figcaption>图 15</figcaption></figure><p>每个Pod中都可以包含一个或者多个容器，这些容器可以分为两类：</p><ul><li><p>用户程序所在的容器，数量可多可少</p></li><li><p>Pause容器，这是每个Pod都会有的一个<strong>根容器</strong>，它的作用有两个：</p><ul><li><p>可以以它为依据，评估整个Pod的健康状态</p></li><li><p>可以在根容器上设置Ip地址，其它容器都此Ip（Pod IP），以实现Pod内部的网路通信</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这里是Pod内部的通讯，Pod的之间的通讯采用虚拟二层网络技术来实现，我们当前环境用的是Flannel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><h5 id="_5-1-2-pod定义" tabindex="-1"><a class="header-anchor" href="#_5-1-2-pod定义" aria-hidden="true">#</a> 5.1.2 Pod定义</h5><p>下面是Pod的资源清单：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1     <span class="token comment">#必选，版本号，例如v1</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod       　 <span class="token comment">#必选，资源类型，例如 Pod</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>       　 <span class="token comment">#必选，元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#必选，Pod名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> string  <span class="token comment">#Pod所属的命名空间,默认为&quot;default&quot;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>       　　  <span class="token comment">#自定义标签列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string      　          
<span class="token key atrule">spec</span><span class="token punctuation">:</span>  <span class="token comment">#必选，Pod中容器的详细定义</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>  <span class="token comment">#必选，Pod中容器列表</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string   <span class="token comment">#必选，容器名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> string  <span class="token comment">#必选，容器的镜像名称</span>
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> Always<span class="token punctuation">|</span>Never<span class="token punctuation">|</span>IfNotPresent <span class="token punctuation">]</span>  <span class="token comment">#获取镜像的策略 </span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>   <span class="token comment">#容器的启动命令列表，如不指定，使用打包时使用的启动命令</span>
    <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>      <span class="token comment">#容器的启动命令参数列表</span>
    <span class="token key atrule">workingDir</span><span class="token punctuation">:</span> string  <span class="token comment">#容器的工作目录</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>       <span class="token comment">#挂载到容器内部的存储卷配置</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string      <span class="token comment">#引用pod定义的共享存储卷的名称，需用volumes[]部分定义的的卷名</span>
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> string <span class="token comment">#存储卷在容器内mount的绝对路径，应少于512字符</span>
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> boolean <span class="token comment">#是否为只读模式</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment">#需要暴露的端口库号列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string        <span class="token comment">#端口的名称</span>
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> int  <span class="token comment">#容器需要监听的端口号</span>
      <span class="token key atrule">hostPort</span><span class="token punctuation">:</span> int       <span class="token comment">#容器所在主机需要监听的端口号，默认与Container相同</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> string    <span class="token comment">#端口协议，支持TCP和UDP，默认TCP</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span>   <span class="token comment">#容器运行前需设置的环境变量列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string  <span class="token comment">#环境变量名称</span>
      <span class="token key atrule">value</span><span class="token punctuation">:</span> string <span class="token comment">#环境变量的值</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment">#资源限制和请求的设置</span>
      <span class="token key atrule">limits</span><span class="token punctuation">:</span>  <span class="token comment">#资源限制的设置</span>
        <span class="token key atrule">cpu</span><span class="token punctuation">:</span> string     <span class="token comment">#Cpu的限制，单位为core数，将用于docker run --cpu-shares参数</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> string  <span class="token comment">#内存限制，单位可以为Mib/Gib，将用于docker run --memory参数</span>
      <span class="token key atrule">requests</span><span class="token punctuation">:</span> <span class="token comment">#资源请求的设置</span>
        <span class="token key atrule">cpu</span><span class="token punctuation">:</span> string    <span class="token comment">#Cpu请求，容器启动的初始可用数量</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> string <span class="token comment">#内存请求,容器启动的初始可用数量</span>
    <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span> <span class="token comment">#生命周期钩子</span>
        <span class="token key atrule">postStart</span><span class="token punctuation">:</span> <span class="token comment">#容器启动后立即执行此钩子,如果执行失败,会根据重启策略进行重启</span>
        <span class="token key atrule">preStop</span><span class="token punctuation">:</span> <span class="token comment">#容器终止前执行此钩子,无论结果如何,容器都会终止</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>  <span class="token comment">#对Pod内各容器健康检查的设置，当探测无响应几次后将自动重启该容器</span>
      <span class="token key atrule">exec</span><span class="token punctuation">:</span>       　 <span class="token comment">#对Pod容器内检查方式设置为exec方式</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>  <span class="token comment">#exec方式需要制定的命令或脚本</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>       <span class="token comment">#对Pod内个容器健康检查方法设置为HttpGet，需要制定Path、port</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> string
        <span class="token key atrule">port</span><span class="token punctuation">:</span> number
        <span class="token key atrule">host</span><span class="token punctuation">:</span> string
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> string
        <span class="token key atrule">HttpHeaders</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
          <span class="token key atrule">value</span><span class="token punctuation">:</span> string
      <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>     <span class="token comment">#对Pod内个容器健康检查方式设置为tcpSocket方式</span>
         <span class="token key atrule">port</span><span class="token punctuation">:</span> number
       <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>       <span class="token comment">#容器启动完成后首次探测的时间，单位为秒</span>
       <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> 0    　　    <span class="token comment">#对容器健康检查探测等待响应的超时时间，单位秒，默认1秒</span>
       <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> 0     　　    <span class="token comment">#对容器监控检查的定期探测时间设置，单位秒，默认10秒一次</span>
       <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">0</span>
       <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">0</span>
       <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
         <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Always <span class="token punctuation">|</span> Never <span class="token punctuation">|</span> OnFailure<span class="token punctuation">]</span>  <span class="token comment">#Pod的重启策略</span>
  <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> &lt;string<span class="token punctuation">&gt;</span> <span class="token comment">#设置NodeName表示将该Pod调度到指定到名称的node节点上</span>
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span> obeject <span class="token comment">#设置NodeSelector表示将该Pod调度到包含这个label的node上</span>
  <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span> <span class="token comment">#Pull镜像时使用的secret名称，以key：secretkey格式指定</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
  <span class="token key atrule">hostNetwork</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>   <span class="token comment">#是否使用主机网络模式，默认为false，如果设置为true，表示使用宿主机网络</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>   <span class="token comment">#在该pod上定义共享存储卷列表</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string    <span class="token comment">#共享存储卷名称 （volumes类型有很多种）</span>
    <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>       <span class="token comment">#类型为emtyDir的存储卷，与Pod同生命周期的一个临时目录。为空值</span>
    <span class="token key atrule">hostPath</span><span class="token punctuation">:</span> string   <span class="token comment">#类型为hostPath的存储卷，表示挂载Pod所在宿主机的目录</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> string      　　        <span class="token comment">#Pod所在宿主机的目录，将被用于同期中mount的目录</span>
    <span class="token key atrule">secret</span><span class="token punctuation">:</span>       　　　<span class="token comment">#类型为secret的存储卷，挂载集群与定义的secret对象到容器内部</span>
      <span class="token key atrule">scretname</span><span class="token punctuation">:</span> string  
      <span class="token key atrule">items</span><span class="token punctuation">:</span>     
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> string
        <span class="token key atrule">path</span><span class="token punctuation">:</span> string
    <span class="token key atrule">configMap</span><span class="token punctuation">:</span>         <span class="token comment">#类型为configMap的存储卷，挂载预定义的configMap对象到容器内部</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> string
      <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> string
        <span class="token key atrule">path</span><span class="token punctuation">:</span> string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#小提示：</span>
<span class="token comment">#   在这里，可通过一个命令来查看每种资源的可配置项</span>
<span class="token comment">#   kubectl explain 资源类型         查看某种资源可以配置的一级属性</span>
<span class="token comment">#   kubectl explain 资源类型.属性     查看属性的子属性</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl explain pod</span>
<span class="token key atrule">KIND</span><span class="token punctuation">:</span>     Pod
<span class="token key atrule">VERSION</span><span class="token punctuation">:</span>  v1
<span class="token key atrule">FIELDS</span><span class="token punctuation">:</span>
   apiVersion   &lt;string<span class="token punctuation">&gt;</span>
   kind &lt;string<span class="token punctuation">&gt;</span>
   metadata     &lt;Object<span class="token punctuation">&gt;</span>
   spec &lt;Object<span class="token punctuation">&gt;</span>
   status       &lt;Object<span class="token punctuation">&gt;</span>

<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl explain pod.metadata</span>
<span class="token key atrule">KIND</span><span class="token punctuation">:</span>     Pod
<span class="token key atrule">VERSION</span><span class="token punctuation">:</span>  v1
<span class="token key atrule">RESOURCE</span><span class="token punctuation">:</span> metadata &lt;Object<span class="token punctuation">&gt;</span>
<span class="token key atrule">FIELDS</span><span class="token punctuation">:</span>
   annotations  &lt;map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>string<span class="token punctuation">&gt;</span>
   clusterName  &lt;string<span class="token punctuation">&gt;</span>
   creationTimestamp    &lt;string<span class="token punctuation">&gt;</span>
   deletionGracePeriodSeconds   &lt;integer<span class="token punctuation">&gt;</span>
   deletionTimestamp    &lt;string<span class="token punctuation">&gt;</span>
   finalizers   &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">&gt;</span>
   generateName &lt;string<span class="token punctuation">&gt;</span>
   generation   &lt;integer<span class="token punctuation">&gt;</span>
   labels       &lt;map<span class="token punctuation">[</span>string<span class="token punctuation">]</span>string<span class="token punctuation">&gt;</span>
   managedFields        &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>Object<span class="token punctuation">&gt;</span>
   name &lt;string<span class="token punctuation">&gt;</span>
   namespace    &lt;string<span class="token punctuation">&gt;</span>
   ownerReferences      &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>Object<span class="token punctuation">&gt;</span>
   resourceVersion      &lt;string<span class="token punctuation">&gt;</span>
   selfLink     &lt;string<span class="token punctuation">&gt;</span>
   uid  &lt;string<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在kubernetes中基本所有资源的一级属性都是一样的，主要包含5部分：</p><ul><li>apiVersion版本，由kubernetes内部定义，版本号必须可以用 kubectl api-versions 查询到</li><li>kind类型，由kubernetes内部定义，版本号必须可以用 kubectl api-resources 查询到</li><li>metadata 元数据，主要是资源标识和说明，常用的有name、namespace、labels等</li><li>spec 描述，这是配置中最重要的一部分，里面是对各种资源配置的详细描述</li><li>status 状态信息，里面的内容不需要定义，由kubernetes自动生成</li></ul><p>在上面的属性中，spec是接下来研究的重点，继续看下它的常见子属性:</p><ul><li>containers 容器列表，用于定义容器的详细信息</li><li>nodeName 根据nodeName的值将pod调度到指定的Node节点上</li><li>nodeSelector 根据NodeSelector中定义的信息选择将该Pod调度到包含这些label的Node 上</li><li>hostNetwork 是否使用主机网络模式，默认为false，如果设置为true，表示使用宿主机网络</li><li>volumes 存储卷，用于定义Pod上面挂在的存储信息</li><li>restartPolicy 重启策略，表示Pod在遇到故障的时候的处理策略</li></ul><h4 id="_5-2-pod配置" tabindex="-1"><a class="header-anchor" href="#_5-2-pod配置" aria-hidden="true">#</a> 5.2 Pod配置</h4><p>本小节主要来研究<code>pod.spec.containers</code>属性，这也是pod配置中最为关键的一项配置。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl explain pod.spec.containers</span>
<span class="token key atrule">KIND</span><span class="token punctuation">:</span>     Pod
<span class="token key atrule">VERSION</span><span class="token punctuation">:</span>  v1
<span class="token key atrule">RESOURCE</span><span class="token punctuation">:</span> containers &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>Object<span class="token punctuation">&gt;</span>   <span class="token comment"># 数组，代表可以有多个容器</span>
<span class="token key atrule">FIELDS</span><span class="token punctuation">:</span>
   name  &lt;string<span class="token punctuation">&gt;</span>     <span class="token comment"># 容器名称</span>
   image &lt;string<span class="token punctuation">&gt;</span>     <span class="token comment"># 容器需要的镜像地址</span>
   imagePullPolicy  &lt;string<span class="token punctuation">&gt;</span> <span class="token comment"># 镜像拉取策略 </span>
   command  &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">&gt;</span> <span class="token comment"># 容器的启动命令列表，如不指定，使用打包时使用的启动命令</span>
   args     &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>string<span class="token punctuation">&gt;</span> <span class="token comment"># 容器的启动命令需要的参数列表</span>
   env      &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>Object<span class="token punctuation">&gt;</span> <span class="token comment"># 容器环境变量的配置</span>
   ports    &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>Object<span class="token punctuation">&gt;</span>     <span class="token comment"># 容器需要暴露的端口号列表</span>
   resources &lt;Object<span class="token punctuation">&gt;</span>      <span class="token comment"># 资源限制和资源请求的设置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-1-基本配置" tabindex="-1"><a class="header-anchor" href="#_5-2-1-基本配置" aria-hidden="true">#</a> 5.2.1 基本配置</h5><p>创建pod-base.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>base
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> heima
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140410710.png" alt="图 16" tabindex="0" loading="lazy"><figcaption>图 16</figcaption></figure><p>上面定义了一个比较简单Pod的配置，里面有两个容器：</p><ul><li>nginx：用1.17.1版本的nginx镜像创建，（nginx是一个轻量级web容器）</li><li>busybox：用1.30版本的busybox镜像创建，（busybox是一个小巧的linux命令集合）</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f pod-base.yaml</span>
pod/pod<span class="token punctuation">-</span>base created

<span class="token comment"># 查看Pod状况</span>
<span class="token comment"># READY 1/2 : 表示当前Pod中有2个容器，其中1个准备就绪，1个未就绪</span>
<span class="token comment"># RESTARTS  : 重启次数，因为有1个容器故障了，Pod一直在重启试图恢复它</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n dev</span>
NAME       READY   STATUS    RESTARTS   AGE
pod<span class="token punctuation">-</span>base   1/2     Running   4          95s

<span class="token comment"># 可以通过describe查看内部的详情</span>
<span class="token comment"># 此时已经运行起来了一个基本的Pod，虽然它暂时有问题</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod pod-base -n dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-2-镜像拉取" tabindex="-1"><a class="header-anchor" href="#_5-2-2-镜像拉取" aria-hidden="true">#</a> 5.2.2 镜像拉取</h5><p>创建pod-imagepullpolicy.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>imagepullpolicy
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Never <span class="token comment"># 用于设置镜像拉取策略</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140432065.png" alt="图 17" tabindex="0" loading="lazy"><figcaption>图 17</figcaption></figure><p>imagePullPolicy，用于设置镜像拉取策略，kubernetes支持配置三种拉取策略：</p><ul><li>Always：总是从远程仓库拉取镜像（一直远程下载）</li><li>IfNotPresent：本地有则使用本地镜像，本地没有则从远程仓库拉取镜像（本地有就本地 本地没远程下载）</li><li>Never：只使用本地镜像，从不去远程仓库拉取，本地没有就报错 （一直使用本地）</li></ul><blockquote><p>默认值说明：</p><p>如果镜像tag为具体版本号， 默认策略是：IfNotPresent</p><p>如果镜像tag为：latest（最终版本） ，默认策略是always</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-imagepullpolicy.yaml</span>
pod/pod<span class="token punctuation">-</span>imagepullpolicy created

<span class="token comment"># 查看Pod详情</span>
<span class="token comment"># 此时明显可以看到nginx镜像有一步Pulling image &quot;nginx:1.17.1&quot;的过程</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod pod-imagepullpolicy -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">Events</span><span class="token punctuation">:</span>
  Type     Reason     Age               From               Message
  <span class="token punctuation">---</span><span class="token punctuation">-</span>     <span class="token punctuation">---</span><span class="token punctuation">---</span>     <span class="token punctuation">---</span><span class="token punctuation">-</span>              <span class="token punctuation">---</span><span class="token punctuation">-</span>               <span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">-</span>
  Normal   Scheduled  &lt;unknown<span class="token punctuation">&gt;</span>         default<span class="token punctuation">-</span>scheduler  Successfully assigned dev/pod<span class="token punctuation">-</span>imagePullPolicy to node1
  Normal   Pulling    32s               kubelet<span class="token punctuation">,</span> node1     Pulling image &quot;nginx<span class="token punctuation">:</span>1.17.1&quot;
  Normal   Pulled     26s               kubelet<span class="token punctuation">,</span> node1     Successfully pulled image &quot;nginx<span class="token punctuation">:</span>1.17.1&quot;
  Normal   Created    26s               kubelet<span class="token punctuation">,</span> node1     Created container nginx
  Normal   Started    25s               kubelet<span class="token punctuation">,</span> node1     Started container nginx
  Normal   Pulled     7s (x3 over 25s)  kubelet<span class="token punctuation">,</span> node1     Container image &quot;busybox<span class="token punctuation">:</span>1.30&quot; already present on machine
  Normal   Created    7s (x3 over 25s)  kubelet<span class="token punctuation">,</span> node1     Created container busybox
  Normal   Started    7s (x3 over 25s)  kubelet<span class="token punctuation">,</span> node1     Started container busybox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-3-启动命令" tabindex="-1"><a class="header-anchor" href="#_5-2-3-启动命令" aria-hidden="true">#</a> 5.2.3 启动命令</h5><p>在前面的案例中，一直有一个问题没有解决，就是的busybox容器一直没有成功运行，那么到底是什么原因导致这个容器的故障呢？</p><p>原来busybox并不是一个程序，而是类似于一个工具类的集合，kubernetes集群启动管理后，它会自动关闭。解决方法就是让其一直在运行，这就用到了command配置。</p><p>创建pod-command.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>command
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;touch /tmp/hello.txt;while true;do /bin/echo $(date +%T) &gt;&gt; /tmp/hello.txt; sleep 3; done;&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140460722.png" alt="图 18" tabindex="0" loading="lazy"><figcaption>图 18</figcaption></figure><p>command，用于在pod中的容器初始化完毕之后运行一个命令。</p><blockquote><p>稍微解释下上面命令的意思：</p><p>&quot;/bin/sh&quot;,&quot;-c&quot;, 使用sh执行命令</p><p>touch /tmp/hello.txt; 创建一个/tmp/hello.txt 文件</p><p>while true;do /bin/echo $(date +%T) &gt;&gt; /tmp/hello.txt; sleep 3; done; 每隔3秒向文件中写入当前时间</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl create  -f pod-command.yaml</span>
pod/pod<span class="token punctuation">-</span>command created

<span class="token comment"># 查看Pod状态</span>
<span class="token comment"># 此时发现两个pod都正常运行了</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-command -n dev</span>
NAME          READY   STATUS   RESTARTS   AGE
pod<span class="token punctuation">-</span>command   2/2     Runing   0          2s

<span class="token comment"># 进入pod中的busybox容器，查看文件内容</span>
<span class="token comment"># 补充一个命令: kubectl exec  pod名称 -n 命名空间 -it -c 容器名称 /bin/sh  在容器内部执行命令</span>
<span class="token comment"># 使用这个命令就可以进入某个容器的内部，然后进行相关操作了</span>
<span class="token comment"># 比如，可以查看txt文件的内容</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 pod<span class="token punctuation">]</span><span class="token comment"># kubectl exec pod-command -n dev -it -c busybox /bin/sh</span>
/ <span class="token comment"># tail -f /tmp/hello.txt</span>
14<span class="token punctuation">:</span><span class="token datetime number">44:19</span>
14<span class="token punctuation">:</span><span class="token datetime number">44:22</span>
14<span class="token punctuation">:</span><span class="token datetime number">44:25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>特别说明：
    通过上面发现command已经可以完成启动命令和传递参数的功能，为什么这里还要提供一个args选项，用于传递参数呢<span class="token punctuation">?</span>这其实跟docker有点关系，kubernetes中的command、args两项其实是实现覆盖Dockerfile中ENTRYPOINT的功能。
 1 如果command和args均没有写，那么用Dockerfile的配置。
 2 如果command写了，但args没有写，那么Dockerfile默认的配置会被忽略，执行输入的command
 3 如果command没写，但args写了，那么Dockerfile中配置的ENTRYPOINT的命令会被执行，使用当前args的参数
 4 如果command和args都写了，那么Dockerfile的配置被忽略，执行command并追加上args参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-4-环境变量" tabindex="-1"><a class="header-anchor" href="#_5-2-4-环境变量" aria-hidden="true">#</a> 5.2.4 环境变量</h5><p>创建pod-env.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>env
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;while true;do /bin/echo $(date +%T);sleep 60; done;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span> <span class="token comment"># 设置环境变量列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;username&quot;</span>
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;admin&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;123456&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>env，环境变量，用于在pod中的容器设置环境变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-env.yaml</span>
pod/pod-env created

<span class="token comment"># 进入容器，输出环境变量</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec pod-env -n dev -c busybox -it /bin/sh</span>
/ <span class="token comment"># echo $username</span>
admin
/ <span class="token comment"># echo $password</span>
<span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式不是很推荐，推荐将这些配置单独存储在配置文件中，这种方式将在后面介绍。</p><h5 id="_5-2-5-端口设置" tabindex="-1"><a class="header-anchor" href="#_5-2-5-端口设置" aria-hidden="true">#</a> 5.2.5 端口设置</h5><p>本小节来介绍容器的端口设置，也就是containers的ports选项。</p><p>首先看下ports支持的子选项：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl explain pod.spec.containers.ports</span>
<span class="token key atrule">KIND</span><span class="token punctuation">:</span>     Pod
<span class="token key atrule">VERSION</span><span class="token punctuation">:</span>  v1
<span class="token key atrule">RESOURCE</span><span class="token punctuation">:</span> ports &lt;<span class="token punctuation">[</span><span class="token punctuation">]</span>Object<span class="token punctuation">&gt;</span>
<span class="token key atrule">FIELDS</span><span class="token punctuation">:</span>
   name         &lt;string<span class="token punctuation">&gt;</span>  <span class="token comment"># 端口名称，如果指定，必须保证name在pod中是唯一的		</span>
   containerPort&lt;integer<span class="token punctuation">&gt;</span> <span class="token comment"># 容器要监听的端口(0&lt;x&lt;65536)</span>
   hostPort     &lt;integer<span class="token punctuation">&gt;</span> <span class="token comment"># 容器要在主机上公开的端口，如果设置，主机上只能运行容器的一个副本(一般省略) </span>
   hostIP       &lt;string<span class="token punctuation">&gt;</span>  <span class="token comment"># 要将外部端口绑定到的主机IP(一般省略)</span>
   protocol     &lt;string<span class="token punctuation">&gt;</span>  <span class="token comment"># 端口协议。必须是UDP、TCP或SCTP。默认为“TCP”。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，编写一个测试案例，创建pod-ports.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>ports
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 设置容器暴露的端口列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-ports.yaml</span>
pod/pod-ports created

<span class="token comment"># 查看pod</span>
<span class="token comment"># 在下面可以明显看到配置信息</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-ports -n dev -o yaml</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
spec:
  containers:
  - image: nginx:1.17.1
    imagePullPolicy: IfNotPresent
    name: nginx
    ports:
    - containerPort: <span class="token number">80</span>
      name: nginx-port
      protocol: TCP
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问容器中的程序需要使用的是<code>Podip:containerPort</code></p><h5 id="_5-2-6-资源配额" tabindex="-1"><a class="header-anchor" href="#_5-2-6-资源配额" aria-hidden="true">#</a> 5.2.6 资源配额</h5><p>容器中的程序要运行，肯定是要占用一定资源的，比如cpu和内存等，如果不对某个容器的资源做限制，那么它就可能吃掉大量资源，导致其它容器无法运行。针对这种情况，kubernetes提供了对内存和cpu的资源进行配额的机制，这种机制主要通过resources选项实现，他有两个子选项：</p><ul><li>limits：用于限制运行时容器的最大占用资源，当容器占用资源超过limits时会被终止，并进行重启</li><li>requests ：用于设置容器需要的最小资源，如果环境资源不够，容器将无法启动</li></ul><p>可以通过上面两个选项设置资源的上下限。</p><p>接下来，编写一个测试案例，创建pod-resources.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>resources
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment"># 资源配额</span>
      <span class="token key atrule">limits</span><span class="token punctuation">:</span>  <span class="token comment"># 限制资源（上限）</span>
        <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span> <span class="token comment"># CPU限制，单位是core数</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;10Gi&quot;</span> <span class="token comment"># 内存限制</span>
      <span class="token key atrule">requests</span><span class="token punctuation">:</span> <span class="token comment"># 请求资源（下限）</span>
        <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>  <span class="token comment"># CPU限制，单位是core数</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> <span class="token string">&quot;10Mi&quot;</span>  <span class="token comment"># 内存限制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这对cpu和memory的单位做一个说明：</p><ul><li>cpu：core数，可以为整数或小数</li><li>memory： 内存大小，可以使用Gi、Mi、G、M等形式</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 运行Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create  -f pod-resources.yaml</span>
pod/pod<span class="token punctuation">-</span>resources created

<span class="token comment"># 查看发现pod运行正常</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-resources -n dev</span>
NAME            READY   STATUS    RESTARTS   AGE  
pod<span class="token punctuation">-</span>resources   1/1     Running   0          39s   

<span class="token comment"># 接下来，停止Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete  -f pod-resources.yaml</span>
pod &quot;pod<span class="token punctuation">-</span>resources&quot; deleted

<span class="token comment"># 编辑pod，修改resources.requests.memory的值为10Gi</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># vim pod-resources.yaml</span>

<span class="token comment"># 再次启动pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create  -f pod-resources.yaml</span>
pod/pod<span class="token punctuation">-</span>resources created

<span class="token comment"># 查看Pod状态，发现Pod启动失败</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-resources -n dev -o wide</span>
NAME            READY   STATUS    RESTARTS   AGE          
pod<span class="token punctuation">-</span>resources   0/1     Pending   0          20s    

<span class="token comment"># 查看pod详情会发现，如下提示</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod pod-resources -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">Warning  FailedScheduling  35s   default-scheduler  0/3 nodes are available</span><span class="token punctuation">:</span> 1 node(s) had taint <span class="token punctuation">{</span><span class="token key atrule">node-role.kubernetes.io/master</span><span class="token punctuation">:</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> that the pod didn&#39;t tolerate<span class="token punctuation">,</span> 2 Insufficient memory.(内存不足)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-pod生命周期" tabindex="-1"><a class="header-anchor" href="#_5-3-pod生命周期" aria-hidden="true">#</a> 5.3 Pod生命周期</h4><p>我们一般将pod对象从创建至终的这段时间范围称为pod的生命周期，它主要包含下面的过程：</p><ul><li>pod创建过程</li><li>运行初始化容器（init container）过程</li><li>运行主容器（main container） <ul><li>容器启动后钩子（post start）、容器终止前钩子（pre stop）</li><li>容器的存活性探测（liveness probe）、就绪性探测（readiness probe）</li></ul></li><li>pod终止过程</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140498024.png" alt="图 19" tabindex="0" loading="lazy"><figcaption>图 19</figcaption></figure><p>在整个生命周期中，Pod会出现5种<strong>状态</strong>（<strong>相位</strong>），分别如下：</p><ul><li>挂起（Pending）：apiserver已经创建了pod资源对象，但它尚未被调度完成或者仍处于下载镜像的过程中</li><li>运行中（Running）：pod已经被调度至某节点，并且所有容器都已经被kubelet创建完成</li><li>成功（Succeeded）：pod中的所有容器都已经成功终止并且不会被重启</li><li>失败（Failed）：所有容器都已经终止，但至少有一个容器终止失败，即容器返回了非0值的退出状态</li><li>未知（Unknown）：apiserver无法正常获取到pod对象的状态信息，通常由网络通信失败所导致</li></ul><h5 id="_5-3-1-创建和终止" tabindex="-1"><a class="header-anchor" href="#_5-3-1-创建和终止" aria-hidden="true">#</a> 5.3.1 创建和终止</h5><p><strong>pod的创建过程</strong></p><ol><li><p>用户通过kubectl或其他api客户端提交需要创建的pod信息给apiServer</p></li><li><p>apiServer开始生成pod对象的信息，并将信息存入etcd，然后返回确认信息至客户端</p></li><li><p>apiServer开始反映etcd中的pod对象的变化，其它组件使用watch机制来跟踪检查apiServer上的变动</p></li><li><p>scheduler发现有新的pod对象要创建，开始为Pod分配主机并将结果信息更新至apiServer</p></li><li><p>node节点上的kubelet发现有pod调度过来，尝试调用docker启动容器，并将结果回送至apiServer</p></li><li><p>apiServer将接收到的pod状态信息存入etcd中</p></li></ol><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140519245.png" alt="图 20" tabindex="0" loading="lazy"><figcaption>图 20</figcaption></figure><p><strong>pod的终止过程</strong></p><ol><li>用户向apiServer发送删除pod对象的命令</li><li>apiServcer中的pod对象信息会随着时间的推移而更新，在宽限期内（默认30s），pod被视为dead</li><li>将pod标记为terminating状态</li><li>kubelet在监控到pod对象转为terminating状态的同时启动pod关闭过程</li><li>端点控制器监控到pod对象的关闭行为时将其从所有匹配到此端点的service资源的端点列表中移除</li><li>如果当前pod对象定义了preStop钩子处理器，则在其标记为terminating后即会以同步的方式启动执行</li><li>pod对象中的容器进程收到停止信号</li><li>宽限期结束后，若pod中还存在仍在运行的进程，那么pod对象会收到立即终止的信号</li><li>kubelet请求apiServer将此pod资源的宽限期设置为0从而完成删除操作，此时pod对于用户已不可见</li></ol><h5 id="_5-3-2-初始化容器" tabindex="-1"><a class="header-anchor" href="#_5-3-2-初始化容器" aria-hidden="true">#</a> 5.3.2 初始化容器</h5><p>初始化容器是在pod的主容器启动之前要运行的容器，主要是做一些主容器的前置工作，它具有两大特征：</p><ol><li>初始化容器必须运行完成直至结束，若某初始化容器运行失败，那么kubernetes需要重启它直到成功完成</li><li>初始化容器必须按照定义的顺序执行，当且仅当前一个成功之后，后面的一个才能运行</li></ol><p>初始化容器有很多的应用场景，下面列出的是最常见的几个：</p><ul><li>提供主容器镜像中不具备的工具程序或自定义代码</li><li>初始化容器要先于应用容器串行启动并运行完成，因此可用于延后应用容器的启动直至其依赖的条件得到满足</li></ul><p>接下来做一个案例，模拟下面这个需求：</p><p>假设要以主容器来运行nginx，但是要求在运行nginx之前先要能够连接上mysql和redis所在服务器</p><p>为了简化测试，事先规定好mysql<code>(192.168.90.14)</code>和redis<code>(192.168.90.15)</code>服务器的地址</p><p>创建pod-initcontainer.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>initcontainer
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> main<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>mysql
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;until ping 192.168.90.14 -c 1 ; do echo waiting for mysql...; sleep 2; done;&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>redis
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;until ping 192.168.90.15 -c 1 ; do echo waiting for reids...; sleep 2; done;&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-initcontainer.yaml</span>
pod/pod<span class="token punctuation">-</span>initcontainer created

<span class="token comment"># 查看pod状态</span>
<span class="token comment"># 发现pod卡在启动第一个初始化容器过程中，后面的容器不会运行</span>
root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod  pod-initcontainer -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>..
<span class="token key atrule">Events</span><span class="token punctuation">:</span>
  Type    Reason     Age   From               Message
  <span class="token punctuation">---</span><span class="token punctuation">-</span>    <span class="token punctuation">---</span><span class="token punctuation">---</span>     <span class="token punctuation">---</span><span class="token punctuation">-</span>  <span class="token punctuation">---</span><span class="token punctuation">-</span>               <span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">-</span>
  Normal  Scheduled  49s   default<span class="token punctuation">-</span>scheduler  Successfully assigned dev/pod<span class="token punctuation">-</span>initcontainer to node1
  Normal  Pulled     48s   kubelet<span class="token punctuation">,</span> node1     Container image &quot;busybox<span class="token punctuation">:</span>1.30&quot; already present on machine
  Normal  Created    48s   kubelet<span class="token punctuation">,</span> node1     Created container test<span class="token punctuation">-</span>mysql
  Normal  Started    48s   kubelet<span class="token punctuation">,</span> node1     Started container test<span class="token punctuation">-</span>mysql

<span class="token comment"># 动态查看pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-initcontainer -n dev -w</span>
NAME                             READY   STATUS     RESTARTS   AGE
pod<span class="token punctuation">-</span>initcontainer                0/1     Init<span class="token punctuation">:</span>0/2   0          15s
pod<span class="token punctuation">-</span>initcontainer                0/1     Init<span class="token punctuation">:</span>1/2   0          52s
pod<span class="token punctuation">-</span>initcontainer                0/1     Init<span class="token punctuation">:</span>1/2   0          53s
pod<span class="token punctuation">-</span>initcontainer                0/1     PodInitializing   0          89s
pod<span class="token punctuation">-</span>initcontainer                1/1     Running           0          90s

<span class="token comment"># 接下来新开一个shell，为当前服务器新增两个ip，观察pod的变化</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig ens33:1 192.168.90.14 netmask 255.255.255.0 up</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig ens33:2 192.168.90.15 netmask 255.255.255.0 up</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-3-3-钩子函数" tabindex="-1"><a class="header-anchor" href="#_5-3-3-钩子函数" aria-hidden="true">#</a> 5.3.3 钩子函数</h5><p>钩子函数能够感知自身生命周期中的事件，并在相应的时刻到来时运行用户指定的程序代码。</p><p>kubernetes在主容器的启动之后和停止之前提供了两个钩子函数：</p><ul><li>post start：容器创建之后执行，如果失败了会重启容器</li><li>pre stop ：容器终止之前执行，执行完成之后容器将成功终止，在其完成之前会阻塞删除容器的操作</li></ul><p>钩子处理器支持使用下面三种方式定义动作：</p><ul><li><p>Exec命令：在容器内执行一次命令</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>……
  <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
    <span class="token key atrule">postStart</span><span class="token punctuation">:</span> 
      <span class="token key atrule">exec</span><span class="token punctuation">:</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> cat
        <span class="token punctuation">-</span> /tmp/healthy
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>TCPSocket：在当前容器尝试访问指定的socket</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>……      
  <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
    <span class="token key atrule">postStart</span><span class="token punctuation">:</span>
      <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTTPGet：在当前容器中向某url发起http请求</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>……
  <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
    <span class="token key atrule">postStart</span><span class="token punctuation">:</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> / <span class="token comment">#URI地址</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">#端口号</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.5.3 <span class="token comment">#主机地址</span>
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP <span class="token comment">#支持的协议，http或者https</span>
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>接下来，以exec方式为例，演示下钩子函数的使用，创建pod-hook-exec.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>hook<span class="token punctuation">-</span>exec
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> main<span class="token punctuation">-</span>container
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">lifecycle</span><span class="token punctuation">:</span>
      <span class="token key atrule">postStart</span><span class="token punctuation">:</span> 
        <span class="token key atrule">exec</span><span class="token punctuation">:</span> <span class="token comment"># 在容器启动的时候执行一个命令，修改掉nginx的默认首页内容</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;echo postStart... &gt; /usr/share/nginx/html/index.html&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">preStop</span><span class="token punctuation">:</span>
        <span class="token key atrule">exec</span><span class="token punctuation">:</span> <span class="token comment"># 在容器停止之前停止nginx服务</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/usr/sbin/nginx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-s&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;quit&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-hook-exec.yaml</span>
pod/pod<span class="token punctuation">-</span>hook<span class="token punctuation">-</span>exec created

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods  pod-hook-exec -n dev -o wide</span>
NAME           READY   STATUS     RESTARTS   AGE    IP            NODE    
pod<span class="token punctuation">-</span>hook<span class="token punctuation">-</span>exec  1/1     Running    0          29s    10.244.2.48   node2   

<span class="token comment"># 访问pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.244.2.48</span>
postStart<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-3-4-容器探测" tabindex="-1"><a class="header-anchor" href="#_5-3-4-容器探测" aria-hidden="true">#</a> 5.3.4 容器探测</h5><p>容器探测用于检测容器中的应用实例是否正常工作，是保障业务可用性的一种传统机制。如果经过探测，实例的状态不符合预期，那么kubernetes就会把该问题实例&quot; 摘除 &quot;，不承担业务流量。kubernetes提供了两种探针来实现容器探测，分别是：</p><ul><li>liveness probes：存活性探针，用于检测应用实例当前是否处于正常运行状态，如果不是，k8s会重启容器</li><li>readiness probes：就绪性探针，用于检测应用实例当前是否可以接收请求，如果不能，k8s不会转发流量</li></ul><blockquote><p>livenessProbe 决定是否重启容器，readinessProbe 决定是否将请求转发给容器。</p></blockquote><p>上面两种探针目前均支持三种探测方式：</p><ul><li><p>Exec命令：在容器内执行一次命令，如果命令执行的退出码为0，则认为程序正常，否则不正常</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>……
  <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">exec</span><span class="token punctuation">:</span>
      <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cat
      <span class="token punctuation">-</span> /tmp/healthy
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>TCPSocket：将会尝试访问一个用户容器的端口，如果能够建立这条连接，则认为程序正常，否则不正常</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>……      
  <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>HTTPGet：调用容器内Web应用的URL，如果返回的状态码在200和399之间，则认为程序正常，否则不正常</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>……
  <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
    <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> / <span class="token comment">#URI地址</span>
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">#端口号</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> 127.0.0.1 <span class="token comment">#主机地址</span>
      <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP <span class="token comment">#支持的协议，http或者https</span>
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>下面以liveness probes为例，做几个演示：</p><p><strong>方式一：Exec</strong></p><p>创建pod-liveness-exec.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>exec
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">exec</span><span class="token punctuation">:</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/cat&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;/tmp/hello.txt&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 执行一个查看文件的命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pod，观察效果</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-liveness-exec.yaml</span>
pod/pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>exec created

<span class="token comment"># 查看Pod详情</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pods pod-liveness-exec -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
  Normal   Created    20s (x2 over 50s)  kubelet<span class="token punctuation">,</span> node1     Created container nginx
  Normal   Started    20s (x2 over 50s)  kubelet<span class="token punctuation">,</span> node1     Started container nginx
  Normal   Killing    20s                kubelet<span class="token punctuation">,</span> node1     Container nginx failed liveness probe<span class="token punctuation">,</span> will be restarted
  Warning  Unhealthy  0s (x5 over 40s)   kubelet<span class="token punctuation">,</span> <span class="token key atrule">node1     Liveness probe failed</span><span class="token punctuation">:</span> <span class="token key atrule">cat</span><span class="token punctuation">:</span> <span class="token key atrule">can&#39;t open &#39;/tmp/hello11.txt&#39;</span><span class="token punctuation">:</span> No such file or directory
  
<span class="token comment"># 观察上面的信息就会发现nginx容器启动之后就进行了健康检查</span>
<span class="token comment"># 检查失败之后，容器被kill掉，然后尝试进行重启（这是重启策略的作用，后面讲解）</span>
<span class="token comment"># 稍等一会之后，再观察pod信息，就可以看到RESTARTS不再是0，而是一直增长</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-liveness-exec -n dev</span>
NAME                READY   STATUS             RESTARTS   AGE
pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>exec   0/1     CrashLoopBackOff   2          3m19s

<span class="token comment"># 当然接下来，可以修改成一个存在的文件，比如/tmp/hello.txt，再试，结果就正常了......</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式二：TCPSocket</strong></p><p>创建pod-liveness-tcpsocket.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>tcpsocket
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment"># 尝试访问8080端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pod，观察效果</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-liveness-tcpsocket.yaml</span>
pod/pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>tcpsocket created

<span class="token comment"># 查看Pod详情</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pods pod-liveness-tcpsocket -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
  Normal   Scheduled  31s                            default<span class="token punctuation">-</span>scheduler  Successfully assigned dev/pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>tcpsocket to node2
  Normal   Pulled     &lt;invalid<span class="token punctuation">&gt;</span>                      kubelet<span class="token punctuation">,</span> node2     Container image &quot;nginx<span class="token punctuation">:</span>1.17.1&quot; already present on machine
  Normal   Created    &lt;invalid<span class="token punctuation">&gt;</span>                      kubelet<span class="token punctuation">,</span> node2     Created container nginx
  Normal   Started    &lt;invalid<span class="token punctuation">&gt;</span>                      kubelet<span class="token punctuation">,</span> node2     Started container nginx
  Warning  Unhealthy  &lt;invalid<span class="token punctuation">&gt;</span> (x2 over &lt;invalid<span class="token punctuation">&gt;</span>)  kubelet<span class="token punctuation">,</span> <span class="token key atrule">node2     Liveness probe failed</span><span class="token punctuation">:</span> <span class="token key atrule">dial tcp 10.244.2.44:8080</span><span class="token punctuation">:</span> <span class="token key atrule">connect</span><span class="token punctuation">:</span> connection refused
  
<span class="token comment"># 观察上面的信息，发现尝试访问8080端口,但是失败了</span>
<span class="token comment"># 稍等一会之后，再观察pod信息，就可以看到RESTARTS不再是0，而是一直增长</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-liveness-tcpsocket  -n dev</span>
NAME                     READY   STATUS             RESTARTS   AGE
pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>tcpsocket   0/1     CrashLoopBackOff   2          3m19s

<span class="token comment"># 当然接下来，可以修改成一个可以访问的端口，比如80，再试，结果就正常了......</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方式三：HTTPGet</strong></p><p>创建pod-liveness-httpget.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>httpget
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>  <span class="token comment"># 其实就是访问http://127.0.0.1:80/hello  </span>
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP <span class="token comment">#支持的协议，http或者https</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">#端口号</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /hello <span class="token comment">#URI地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pod，观察效果</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-liveness-httpget.yaml</span>
pod/pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>httpget created

<span class="token comment"># 查看Pod详情</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod pod-liveness-httpget -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>.
  Normal   Pulled     6s (x3 over 64s)  kubelet<span class="token punctuation">,</span> node1     Container image &quot;nginx<span class="token punctuation">:</span>1.17.1&quot; already present on machine
  Normal   Created    6s (x3 over 64s)  kubelet<span class="token punctuation">,</span> node1     Created container nginx
  Normal   Started    6s (x3 over 63s)  kubelet<span class="token punctuation">,</span> node1     Started container nginx
  Warning  Unhealthy  6s (x6 over 56s)  kubelet<span class="token punctuation">,</span> <span class="token key atrule">node1     Liveness probe failed</span><span class="token punctuation">:</span> <span class="token key atrule">HTTP probe failed with statuscode</span><span class="token punctuation">:</span> <span class="token number">404</span>
  Normal   Killing    6s (x2 over 36s)  kubelet<span class="token punctuation">,</span> node1     Container nginx failed liveness probe<span class="token punctuation">,</span> will be restarted
  
<span class="token comment"># 观察上面信息，尝试访问路径，但是未找到,出现404错误</span>
<span class="token comment"># 稍等一会之后，再观察pod信息，就可以看到RESTARTS不再是0，而是一直增长</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-liveness-httpget -n dev</span>
NAME                   READY   STATUS    RESTARTS   AGE
pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>httpget   1/1     Running   5          3m17s

<span class="token comment"># 当然接下来，可以修改成一个可以访问的路径path，比如/，再试，结果就正常了......</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，已经使用liveness Probe演示了三种探测方式，但是查看livenessProbe的子属性，会发现除了这三种方式，还有一些其他的配置，在这里一并解释下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl explain pod.spec.containers.livenessProbe</span>
<span class="token key atrule">FIELDS</span><span class="token punctuation">:</span>
   exec &lt;Object<span class="token punctuation">&gt;</span>  
   tcpSocket    &lt;Object<span class="token punctuation">&gt;</span>
   httpGet      &lt;Object<span class="token punctuation">&gt;</span>
   initialDelaySeconds  &lt;integer<span class="token punctuation">&gt;</span>  <span class="token comment"># 容器启动后等待多少秒执行第一次探测</span>
   timeoutSeconds       &lt;integer<span class="token punctuation">&gt;</span>  <span class="token comment"># 探测超时时间。默认1秒，最小1秒</span>
   periodSeconds        &lt;integer<span class="token punctuation">&gt;</span>  <span class="token comment"># 执行探测的频率。默认是10秒，最小1秒</span>
   failureThreshold     &lt;integer<span class="token punctuation">&gt;</span>  <span class="token comment"># 连续探测失败多少次才被认定为失败。默认是3。最小值是1</span>
   successThreshold     &lt;integer<span class="token punctuation">&gt;</span>  <span class="token comment"># 连续探测成功多少次才被认定为成功。默认是1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面稍微配置两个，演示下效果即可：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># more pod-liveness-httpget.yaml</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>liveness<span class="token punctuation">-</span>httpget
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> 
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /
      <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment"># 容器启动后30s开始探测</span>
      <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 探测超时时间为5s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-3-5-重启策略" tabindex="-1"><a class="header-anchor" href="#_5-3-5-重启策略" aria-hidden="true">#</a> 5.3.5 重启策略</h5><p>在上一节中，一旦容器探测出现了问题，kubernetes就会对容器所在的Pod进行重启，其实这是由pod的重启策略决定的，pod的重启策略有 3 种，分别如下：</p><ul><li>Always ：容器失效时，自动重启该容器，这也是默认值。</li><li>OnFailure ： 容器终止运行且退出码不为0时重启</li><li>Never ： 不论状态为何，都不重启该容器</li></ul><p>重启策略适用于pod对象中的所有容器，首次需要重启的容器，将在其需要时立即进行重启，随后再次需要重启的操作将由kubelet延迟一段时间后进行，且反复的重启操作的延迟时长以此为10s、20s、40s、80s、160s和300s，300s是最大延迟时长。</p><p>创建pod-restartpolicy.yaml：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>restartpolicy
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>port
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> /hello
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never <span class="token comment"># 设置重启策略为Never</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行Pod测试</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-restartpolicy.yaml</span>
pod/pod<span class="token punctuation">-</span>restartpolicy created

<span class="token comment"># 查看Pod详情，发现nginx容器失败</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl  describe pods pod-restartpolicy  -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
  Warning  Unhealthy  15s (x3 over 35s)  kubelet<span class="token punctuation">,</span> <span class="token key atrule">node1     Liveness probe failed</span><span class="token punctuation">:</span> <span class="token key atrule">HTTP probe failed with statuscode</span><span class="token punctuation">:</span> <span class="token number">404</span>
  Normal   Killing    15s                kubelet<span class="token punctuation">,</span> node1     Container nginx failed liveness probe
  
<span class="token comment"># 多等一会，再观察pod的重启次数，发现一直是0，并未重启   </span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl  get pods pod-restartpolicy -n dev</span>
NAME                   READY   STATUS    RESTARTS   AGE
pod<span class="token punctuation">-</span>restartpolicy      0/1     Running   0          5min42s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-4-pod调度" tabindex="-1"><a class="header-anchor" href="#_5-4-pod调度" aria-hidden="true">#</a> 5.4 Pod调度</h4><p>在默认情况下，一个Pod在哪个Node节点上运行，是由Scheduler组件采用相应的算法计算出来的，这个过程是不受人工控制的。但是在实际使用中，这并不满足的需求，因为很多情况下，我们想控制某些Pod到达某些节点上，那么应该怎么做呢？这就要求了解kubernetes对Pod的调度规则，kubernetes提供了四大类调度方式：</p><ul><li>自动调度：运行在哪个节点上完全由Scheduler经过一系列的算法计算得出</li><li>定向调度：NodeName、NodeSelector</li><li>亲和性调度：NodeAffinity、PodAffinity、PodAntiAffinity</li><li>污点（容忍）调度：Taints、Toleration</li></ul><h5 id="_5-4-1-定向调度" tabindex="-1"><a class="header-anchor" href="#_5-4-1-定向调度" aria-hidden="true">#</a> 5.4.1 定向调度</h5><p>定向调度，指的是利用在pod上声明nodeName或者nodeSelector，以此将Pod调度到期望的node节点上。注意，这里的调度是强制的，这就意味着即使要调度的目标Node不存在，也会向上面进行调度，只不过pod运行失败而已。</p><p><strong>NodeName</strong></p><p>NodeName用于强制约束将Pod调度到指定的Name的Node节点上。这种方式，其实是直接跳过Scheduler的调度逻辑，直接将Pod调度到指定名称的节点。</p><p>接下来，实验一下：创建一个pod-nodename.yaml文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>nodename
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> node1 <span class="token comment"># 指定调度到node1节点上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodename.yaml</span>
pod/pod<span class="token punctuation">-</span>nodename created

<span class="token comment">#查看Pod调度到NODE属性，确实是调度到了node1节点上</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-nodename -n dev -o wide</span>
NAME           READY   STATUS    RESTARTS   AGE   IP            NODE      <span class="token punctuation">...</span><span class="token punctuation">...</span>
pod<span class="token punctuation">-</span>nodename   1/1     Running   0          56s   10.244.1.87   node1     <span class="token punctuation">...</span><span class="token punctuation">...</span>   

<span class="token comment"># 接下来，删除pod，修改nodeName的值为node3（并没有node3节点）</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pod-nodename.yaml</span>
pod &quot;pod<span class="token punctuation">-</span>nodename&quot; deleted
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># vim pod-nodename.yaml</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodename.yaml</span>
pod/pod<span class="token punctuation">-</span>nodename created

<span class="token comment">#再次查看，发现已经向Node3节点调度，但是由于不存在node3节点，所以pod无法正常运行</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-nodename -n dev -o wide</span>
NAME           READY   STATUS    RESTARTS   AGE   IP       NODE    <span class="token punctuation">...</span><span class="token punctuation">...</span>
pod<span class="token punctuation">-</span>nodename   0/1     Pending   0          6s    &lt;none<span class="token punctuation">&gt;</span>   node3   <span class="token punctuation">...</span><span class="token punctuation">...</span>           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NodeSelector</strong></p><p>NodeSelector用于将pod调度到添加了指定标签的node节点上。它是通过kubernetes的label-selector机制实现的，也就是说，在pod创建之前，会由scheduler使用MatchNodeSelector调度策略进行label匹配，找出目标node，然后将pod调度到目标节点，该匹配规则是强制约束。</p><p>接下来，实验一下：</p><p>1 首先分别为node节点添加标签</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl label nodes node1 nodeenv=pro</span>
node/node2 labeled
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl label nodes node2 nodeenv=test</span>
node/node2 labeled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 创建一个pod-nodeselector.yaml文件，并使用它创建Pod</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>nodeselector
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span> 
    <span class="token key atrule">nodeenv</span><span class="token punctuation">:</span> pro <span class="token comment"># 指定调度到具有nodeenv=pro标签的节点上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#创建Pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodeselector.yaml</span>
pod/pod<span class="token punctuation">-</span>nodeselector created

<span class="token comment">#查看Pod调度到NODE属性，确实是调度到了node1节点上</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-nodeselector -n dev -o wide</span>
NAME               READY   STATUS    RESTARTS   AGE     IP          NODE    <span class="token punctuation">...</span><span class="token punctuation">...</span>
pod<span class="token punctuation">-</span>nodeselector   1/1     Running   0          47s   10.244.1.87   node1   <span class="token punctuation">...</span><span class="token punctuation">...</span>

<span class="token comment"># 接下来，删除pod，修改nodeSelector的值为nodeenv: xxxx（不存在打有此标签的节点）</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pod-nodeselector.yaml</span>
pod &quot;pod<span class="token punctuation">-</span>nodeselector&quot; deleted
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># vim pod-nodeselector.yaml</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodeselector.yaml</span>
pod/pod<span class="token punctuation">-</span>nodeselector created

<span class="token comment">#再次查看，发现pod无法正常运行,Node的值为none</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME               READY   STATUS    RESTARTS   AGE     IP       NODE    
pod<span class="token punctuation">-</span>nodeselector   0/1     Pending   0          2m20s   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>

<span class="token comment"># 查看详情,发现node selector匹配失败的提示</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pods pod-nodeselector -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>.
<span class="token key atrule">Events</span><span class="token punctuation">:</span>
  Type     Reason            Age        From               Message
  <span class="token punctuation">---</span><span class="token punctuation">-</span>     <span class="token punctuation">---</span><span class="token punctuation">---</span>            <span class="token punctuation">---</span><span class="token punctuation">-</span>       <span class="token punctuation">---</span><span class="token punctuation">-</span>               <span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">-</span>
  <span class="token key atrule">Warning  FailedScheduling  &lt;unknown&gt;  default-scheduler  0/3 nodes are available</span><span class="token punctuation">:</span> 3 node(s) didn&#39;t match node selector.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-4-2-亲和性调度" tabindex="-1"><a class="header-anchor" href="#_5-4-2-亲和性调度" aria-hidden="true">#</a> 5.4.2 亲和性调度</h5><p>上一节，介绍了两种定向调度的方式，使用起来非常方便，但是也有一定的问题，那就是如果没有满足条件的Node，那么Pod将不会被运行，即使在集群中还有可用Node列表也不行，这就限制了它的使用场景。</p><p>基于上面的问题，kubernetes还提供了一种亲和性调度（Affinity）。它在NodeSelector的基础之上的进行了扩展，可以通过配置的形式，实现优先选择满足条件的Node进行调度，如果没有，也可以调度到不满足条件的节点上，使调度更加灵活。</p><p>Affinity主要分为三类：</p><ul><li>nodeAffinity(node亲和性）: 以node为目标，解决pod可以调度到哪些node的问题</li><li>podAffinity(pod亲和性) : 以pod为目标，解决pod可以和哪些已存在的pod部署在同一个拓扑域中的问题</li><li>podAntiAffinity(pod反亲和性) : 以pod为目标，解决pod不能和哪些已存在pod部署在同一个拓扑域中的问题</li></ul><blockquote><p>关于亲和性(反亲和性)使用场景的说明：</p><p><strong>亲和性</strong>：如果两个应用频繁交互，那就有必要利用亲和性让两个应用的尽可能的靠近，这样可以减少因网络通信而带来的性能损耗。</p><p><strong>反亲和性</strong>：当应用的采用多副本部署时，有必要采用反亲和性让各个应用实例打散分布在各个node上，这样可以提高服务的高可用性。</p></blockquote><p><strong>NodeAffinity</strong></p><p>首先来看一下<code>NodeAffinity</code>的可配置项：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>pod.spec.affinity.nodeAffinity
  requiredDuringSchedulingIgnoredDuringExecution  Node节点必须满足指定的所有规则才可以，相当于硬限制
    nodeSelectorTerms  节点选择列表
      matchFields   按节点字段列出的节点选择器要求列表
      matchExpressions   按节点标签列出的节点选择器要求列表(推荐)
        key    键
        values 值
        operat or 关系符 支持Exists, DoesNotExist, In, NotIn, Gt, Lt
  preferredDuringSchedulingIgnoredDuringExecution 优先调度到满足指定的规则的Node，相当于软限制 (倾向)
    preference   一个节点选择器项，与相应的权重相关联
      matchFields   按节点字段列出的节点选择器要求列表
      matchExpressions   按节点标签列出的节点选择器要求列表(推荐)
        key    键
        values 值
        operator 关系符 支持In, NotIn, Exists, DoesNotExist, Gt, Lt
	weight 倾向权重，在范围1-100。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">关系符的使用说明</span><span class="token punctuation">:</span>

<span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> nodeenv              <span class="token comment"># 匹配存在标签的key为nodeenv的节点</span>
    <span class="token key atrule">operator</span><span class="token punctuation">:</span> Exists
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> nodeenv              <span class="token comment"># 匹配标签的key为nodeenv,且value是&quot;xxx&quot;或&quot;yyy&quot;的节点</span>
    <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
    <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> nodeenv              <span class="token comment"># 匹配标签的key为nodeenv,且value大于&quot;xxx&quot;的节点</span>
    <span class="token key atrule">operator</span><span class="token punctuation">:</span> Gt
    <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token string">&quot;xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来首先演示一下<code>requiredDuringSchedulingIgnoredDuringExecution</code> ,</p><p>创建pod-nodeaffinity-required.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>required
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>  <span class="token comment">#亲和性设置</span>
    <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span> <span class="token comment">#设置node亲和性</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span> <span class="token comment"># 硬限制</span>
        <span class="token key atrule">nodeSelectorTerms</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># 匹配env的值在[&quot;xxx&quot;,&quot;yyy&quot;]中的标签</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> nodeenv
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodeaffinity-required.yaml</span>
pod/pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>required created

<span class="token comment"># 查看pod状态 （运行失败）</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-nodeaffinity-required -n dev -o wide</span>
NAME                        READY   STATUS    RESTARTS   AGE   IP       NODE    <span class="token punctuation">...</span><span class="token punctuation">...</span> 
pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>required   0/1     Pending   0          16s   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>  <span class="token punctuation">...</span><span class="token punctuation">...</span>

<span class="token comment"># 查看Pod的详情</span>
<span class="token comment"># 发现调度失败，提示node选择失败</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pod pod-nodeaffinity-required -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
  <span class="token key atrule">Warning  FailedScheduling  &lt;unknown&gt;  default-scheduler  0/3 nodes are available</span><span class="token punctuation">:</span> 3 node(s) didn&#39;t match node selector.
  <span class="token key atrule">Warning  FailedScheduling  &lt;unknown&gt;  default-scheduler  0/3 nodes are available</span><span class="token punctuation">:</span> 3 node(s) didn&#39;t match node selector.

<span class="token comment">#接下来，停止pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pod-nodeaffinity-required.yaml</span>
pod &quot;pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>required&quot; deleted

<span class="token comment"># 修改文件，将values: [&quot;xxx&quot;,&quot;yyy&quot;]------&gt; [&quot;pro&quot;,&quot;yyy&quot;]</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># vim pod-nodeaffinity-required.yaml</span>

<span class="token comment"># 再次启动</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodeaffinity-required.yaml</span>
pod/pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>required created

<span class="token comment"># 此时查看，发现调度成功，已经将pod调度到了node1上</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-nodeaffinity-required -n dev -o wide</span>
NAME                        READY   STATUS    RESTARTS   AGE   IP            NODE  <span class="token punctuation">...</span><span class="token punctuation">...</span> 
pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>required   1/1     Running   0          11s   10.244.1.89   node1 <span class="token punctuation">...</span><span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来再演示一下<code>requiredDuringSchedulingIgnoredDuringExecution</code> ,</p><p>创建pod-nodeaffinity-preferred.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>preferred
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>  <span class="token comment">#亲和性设置</span>
    <span class="token key atrule">nodeAffinity</span><span class="token punctuation">:</span> <span class="token comment">#设置node亲和性</span>
      <span class="token key atrule">preferredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span> <span class="token comment"># 软限制</span>
      <span class="token punctuation">-</span> <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span>
        <span class="token key atrule">preference</span><span class="token punctuation">:</span>
          <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># 匹配env的值在[&quot;xxx&quot;,&quot;yyy&quot;]中的标签(当前环境没有)</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> nodeenv
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-nodeaffinity-preferred.yaml</span>
pod/pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>preferred created

<span class="token comment"># 查看pod状态 （运行成功）</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-nodeaffinity-preferred -n dev</span>
NAME                         READY   STATUS    RESTARTS   AGE
pod<span class="token punctuation">-</span>nodeaffinity<span class="token punctuation">-</span>preferred   1/1     Running   0          40s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NodeAffinity规则设置的注意事项：
    1 如果同时定义了nodeSelector和nodeAffinity，那么必须两个条件都得到满足，Pod才能运行在指定的Node上
    2 如果nodeAffinity指定了多个nodeSelectorTerms，那么只需要其中一个能够匹配成功即可
    3 如果一个nodeSelectorTerms中有多个matchExpressions ，则一个节点必须满足所有的才能匹配成功
    4 如果一个pod所在的Node在Pod运行期间其标签发生了改变，不再符合该Pod的节点亲和性需求，则系统将忽略此变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PodAffinity</strong></p><p>PodAffinity主要实现以运行的Pod为参照，实现让新创建的Pod跟参照pod在一个区域的功能。</p><p>首先来看一下<code>PodAffinity</code>的可配置项：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>pod.spec.affinity.podAffinity
  requiredDuringSchedulingIgnoredDuringExecution  硬限制
    namespaces       指定参照pod的namespace
    topologyKey      指定调度作用域
    labelSelector    标签选择器
      matchExpressions  按节点标签列出的节点选择器要求列表(推荐)
        key    键
        values 值
        operator 关系符 支持In, NotIn, Exists, DoesNotExist.
      matchLabels    指多个matchExpressions映射的内容
  preferredDuringSchedulingIgnoredDuringExecution 软限制
    podAffinityTerm  选项
      namespaces      
      topologyKey
      labelSelector
        matchExpressions  
          key    键
          values 值
          operator
        matchLabels 
    weight 倾向权重，在范围1-100
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>topologyKey用于指定调度时作用域,例如:
    如果指定为kubernetes.io/hostname，那就是以Node节点为区分范围
	如果指定为beta.kubernetes.io/os,则以Node节点的操作系统类型来区分
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，演示下<code>requiredDuringSchedulingIgnoredDuringExecution</code>,</p><p>1）首先创建一个参照Pod，pod-podaffinity-target.yaml：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>target
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">podenv</span><span class="token punctuation">:</span> pro <span class="token comment">#设置标签</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> node1 <span class="token comment"># 将目标pod名确指定到node1上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动目标pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-podaffinity-target.yaml</span>
pod/pod-podaffinity-target created

<span class="token comment"># 查看pod状况</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods  pod-podaffinity-target -n dev</span>
NAME                     READY   STATUS    RESTARTS   AGE
pod-podaffinity-target   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）创建pod-podaffinity-required.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>required
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>  <span class="token comment">#亲和性设置</span>
    <span class="token key atrule">podAffinity</span><span class="token punctuation">:</span> <span class="token comment">#设置pod亲和性</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span> <span class="token comment"># 硬限制</span>
      <span class="token punctuation">-</span> <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
          <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># 匹配env的值在[&quot;xxx&quot;,&quot;yyy&quot;]中的标签</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> podenv
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyy&quot;</span><span class="token punctuation">]</span>
        <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置表达的意思是：新Pod必须要与拥有标签nodeenv=xxx或者nodeenv=yyy的pod在同一Node上，显然现在没有这样pod，接下来，运行测试一下。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 启动pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-podaffinity-required.yaml</span>
pod/pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>required created

<span class="token comment"># 查看pod状态，发现未运行</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-podaffinity-required -n dev</span>
NAME                       READY   STATUS    RESTARTS   AGE
pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>required   0/1     Pending   0          9s

<span class="token comment"># 查看详细信息</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe pods pod-podaffinity-required  -n dev</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">Events</span><span class="token punctuation">:</span>
  Type     Reason            Age        From               Message
  <span class="token punctuation">---</span><span class="token punctuation">-</span>     <span class="token punctuation">---</span><span class="token punctuation">---</span>            <span class="token punctuation">---</span><span class="token punctuation">-</span>       <span class="token punctuation">---</span><span class="token punctuation">-</span>               <span class="token punctuation">---</span><span class="token punctuation">---</span><span class="token punctuation">-</span>
  <span class="token key atrule">Warning  FailedScheduling  &lt;unknown&gt;  default-scheduler  0/3 nodes are available</span><span class="token punctuation">:</span> 2 node(s) didn&#39;t match pod affinity rules<span class="token punctuation">,</span> 1 node(s) had taints that the pod didn&#39;t tolerate.

<span class="token comment"># 接下来修改  values: [&quot;xxx&quot;,&quot;yyy&quot;]-----&gt;values:[&quot;pro&quot;,&quot;yyy&quot;]</span>
<span class="token comment"># 意思是：新Pod必须要与拥有标签nodeenv=xxx或者nodeenv=yyy的pod在同一Node上</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># vim pod-podaffinity-required.yaml</span>

<span class="token comment"># 然后重新创建pod，查看效果</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f  pod-podaffinity-required.yaml</span>
pod &quot;pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>required&quot; de leted
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-podaffinity-required.yaml</span>
pod/pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>required created

<span class="token comment"># 发现此时Pod运行正常</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-podaffinity-required -n dev</span>
NAME                       READY   STATUS    RESTARTS   AGE   LABELS
pod<span class="token punctuation">-</span>podaffinity<span class="token punctuation">-</span>required   1/1     Running   0          6s    &lt;none<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于<code>PodAffinity</code>的 <code>preferredDuringSchedulingIgnoredDuringExecution</code>，这里不再演示。</p><p><strong>PodAntiAffinity</strong></p><p>PodAntiAffinity主要实现以运行的Pod为参照，让新创建的Pod跟参照pod不在一个区域中的功能。</p><p>它的配置方式和选项跟PodAffinty是一样的，这里不再做详细解释，直接做一个测试案例。</p><p>1）继续使用上个案例中目标pod</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide --show-labels</span>
NAME                     READY   STATUS    RESTARTS   AGE     IP            NODE    LABELS
pod-podaffinity-required <span class="token number">1</span>/1     Running   <span class="token number">0</span>          3m29s   <span class="token number">10.244</span>.1.38   node1   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>     
pod-podaffinity-target   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          9m25s   <span class="token number">10.244</span>.1.37   node1   <span class="token assign-left variable">podenv</span><span class="token operator">=</span>pro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）创建pod-podantiaffinity-required.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>podantiaffinity<span class="token punctuation">-</span>required
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">affinity</span><span class="token punctuation">:</span>  <span class="token comment">#亲和性设置</span>
    <span class="token key atrule">podAntiAffinity</span><span class="token punctuation">:</span> <span class="token comment">#设置pod亲和性</span>
      <span class="token key atrule">requiredDuringSchedulingIgnoredDuringExecution</span><span class="token punctuation">:</span> <span class="token comment"># 硬限制</span>
      <span class="token punctuation">-</span> <span class="token key atrule">labelSelector</span><span class="token punctuation">:</span>
          <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># 匹配podenv的值在[&quot;pro&quot;]中的标签</span>
          <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> podenv
            <span class="token key atrule">operator</span><span class="token punctuation">:</span> In
            <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pro&quot;</span><span class="token punctuation">]</span>
        <span class="token key atrule">topologyKey</span><span class="token punctuation">:</span> kubernetes.io/hostname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置表达的意思是：新Pod必须要与拥有标签nodeenv=pro的pod不在同一Node上，运行测试一下。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-podantiaffinity-required.yaml</span>
pod/pod<span class="token punctuation">-</span>podantiaffinity<span class="token punctuation">-</span>required created

<span class="token comment"># 查看pod</span>
<span class="token comment"># 发现调度到了node2上</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods pod-podantiaffinity-required -n dev -o wide</span>
NAME                           READY   STATUS    RESTARTS   AGE   IP            NODE   .. 
pod<span class="token punctuation">-</span>podantiaffinity<span class="token punctuation">-</span>required   1/1     Running   0          30s   10.244.1.96   node2  ..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-4-3-污点和容忍" tabindex="-1"><a class="header-anchor" href="#_5-4-3-污点和容忍" aria-hidden="true">#</a> 5.4.3 污点和容忍</h5><p><strong>污点（Taints）</strong></p><p>前面的调度方式都是站在Pod的角度上，通过在Pod上添加属性，来确定Pod是否要调度到指定的Node上，其实我们也可以站在Node的角度上，通过在Node上添加<strong>污点</strong>属性，来决定是否允许Pod调度过来。</p><p>Node被设置上污点之后就和Pod之间存在了一种相斥的关系，进而拒绝Pod调度进来，甚至可以将已经存在的Pod驱逐出去。</p><p>污点的格式为：<code>key=value:effect</code>, key和value是污点的标签，effect描述污点的作用，支持如下三个选项：</p><ul><li>PreferNoSchedule：kubernetes将尽量避免把Pod调度到具有该污点的Node上，除非没有其他节点可调度</li><li>NoSchedule：kubernetes将不会把Pod调度到具有该污点的Node上，但不会影响当前Node上已存在的Pod</li><li>NoExecute：kubernetes将不会把Pod调度到具有该污点的Node上，同时也会将Node上已存在的Pod驱离</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140601343.png" alt="图 21" tabindex="0" loading="lazy"><figcaption>图 21</figcaption></figure><p>使用kubectl设置和去除污点的命令示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置污点</span>
kubectl taint nodes node1 <span class="token assign-left variable">key</span><span class="token operator">=</span>value:effect

<span class="token comment"># 去除污点</span>
kubectl taint nodes node1 key:effect-

<span class="token comment"># 去除所有污点</span>
kubectl taint nodes node1 key-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，演示下污点的效果：</p><ol><li>准备节点node1（为了演示效果更加明显，暂时停止node2节点）</li><li>为node1节点设置一个污点: <code>tag=heima:PreferNoSchedule</code>；然后创建pod1( pod1 可以 )</li><li>修改为node1节点设置一个污点: <code>tag=heima:NoSchedule</code>；然后创建pod2( pod1 正常 pod2 失败 )</li><li>修改为node1节点设置一个污点: <code>tag=heima:NoExecute</code>；然后创建pod3 ( 3个pod都失败 )</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 为node1设置污点(PreferNoSchedule)</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl taint nodes node1 tag=heima:PreferNoSchedule</span>

<span class="token comment"># 创建pod1</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl run taint1 --image=nginx:1.17.1 -n dev</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME                      READY   STATUS    RESTARTS   AGE     IP           NODE   
taint1<span class="token punctuation">-</span>7665f7fd85<span class="token punctuation">-</span>574h4   1/1     Running   0          2m24s   10.244.1.59   node1    

<span class="token comment"># 为node1设置污点(取消PreferNoSchedule，设置NoSchedule)</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl taint nodes node1 tag:PreferNoSchedule-</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl taint nodes node1 tag=heima:NoSchedule</span>

<span class="token comment"># 创建pod2</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl run taint2 --image=nginx:1.17.1 -n dev</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods taint2 -n dev -o wide</span>
NAME                      READY   STATUS    RESTARTS   AGE     IP            NODE
taint1<span class="token punctuation">-</span>7665f7fd85<span class="token punctuation">-</span>574h4   1/1     Running   0          2m24s   10.244.1.59   node1 
taint2<span class="token punctuation">-</span>544694789<span class="token punctuation">-</span>6zmlf    0/1     Pending   0          21s     &lt;none<span class="token punctuation">&gt;</span>        &lt;none<span class="token punctuation">&gt;</span>   

<span class="token comment"># 为node1设置污点(取消NoSchedule，设置NoExecute)</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl taint nodes node1 tag:NoSchedule-</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl taint nodes node1 tag=heima:NoExecute</span>

<span class="token comment"># 创建pod3</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl run taint3 --image=nginx:1.17.1 -n dev</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME                      READY   STATUS    RESTARTS   AGE   IP       NODE     NOMINATED 
taint1<span class="token punctuation">-</span>7665f7fd85<span class="token punctuation">-</span>htkmp   0/1     Pending   0          35s   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>    
taint2<span class="token punctuation">-</span>544694789<span class="token punctuation">-</span>bn7wb    0/1     Pending   0          35s   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>     
taint3<span class="token punctuation">-</span>6d78dbd749<span class="token punctuation">-</span>tktkq   0/1     Pending   0          6s    &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>小提示：
    使用kubeadm搭建的集群，默认就会给master节点添加一个污点标记,所以pod就不会调度到master节点上.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>容忍（Toleration）</strong></p><p>上面介绍了污点的作用，我们可以在node上添加污点用于拒绝pod调度上来，但是如果就是想将一个pod调度到一个有污点的node上去，这时候应该怎么做呢？这就要使用到<strong>容忍</strong>。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140621547.png" alt="图 22" tabindex="0" loading="lazy"><figcaption>图 22</figcaption></figure><blockquote><p>污点就是拒绝，容忍就是忽略，Node通过污点拒绝pod调度上去，Pod通过容忍忽略拒绝</p></blockquote><p>下面先通过一个案例看下效果：</p><ol><li>上一小节，已经在node1节点上打上了<code>NoExecute</code>的污点，此时pod是调度不上去的</li><li>本小节，可以通过给pod添加容忍，然后将其调度上去</li></ol><p>创建pod-toleration.yaml,内容如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>toleration
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
  <span class="token key atrule">tolerations</span><span class="token punctuation">:</span>      <span class="token comment"># 添加容忍</span>
  <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> <span class="token string">&quot;tag&quot;</span>        <span class="token comment"># 要容忍的污点的key</span>
    <span class="token key atrule">operator</span><span class="token punctuation">:</span> <span class="token string">&quot;Equal&quot;</span> <span class="token comment"># 操作符</span>
    <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;heima&quot;</span>    <span class="token comment"># 容忍的污点的value</span>
    <span class="token key atrule">effect</span><span class="token punctuation">:</span> <span class="token string">&quot;NoExecute&quot;</span>   <span class="token comment"># 添加容忍的规则，这里必须和标记的污点规则相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 添加容忍之前的pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME             READY   STATUS    RESTARTS   AGE   IP       NODE     NOMINATED 
pod<span class="token punctuation">-</span>toleration   0/1     Pending   0          3s    &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>   &lt;none<span class="token punctuation">&gt;</span>           

<span class="token comment"># 添加容忍之后的pod</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME             READY   STATUS    RESTARTS   AGE   IP            NODE    NOMINATED
pod<span class="token punctuation">-</span>toleration   1/1     Running   0          3s    10.244.1.62   node1   &lt;none<span class="token punctuation">&gt;</span>        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面看一下容忍的详细配置:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl explain pod.spec.tolerations</span>
<span class="token punctuation">...</span><span class="token punctuation">...</span>
<span class="token key atrule">FIELDS</span><span class="token punctuation">:</span>
   key       <span class="token comment"># 对应着要容忍的污点的键，空意味着匹配所有的键</span>
   value     <span class="token comment"># 对应着要容忍的污点的值</span>
   operator  <span class="token comment"># key-value的运算符，支持Equal和Exists（默认）</span>
   effect    <span class="token comment"># 对应污点的effect，空意味着匹配所有影响</span>
   tolerationSeconds   <span class="token comment"># 容忍时间, 当effect为NoExecute时生效，表示pod在Node上的停留时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-pod控制器详解" tabindex="-1"><a class="header-anchor" href="#_6-pod控制器详解" aria-hidden="true">#</a> 6. Pod控制器详解</h3><h4 id="_6-1-pod控制器介绍" tabindex="-1"><a class="header-anchor" href="#_6-1-pod控制器介绍" aria-hidden="true">#</a> 6.1 Pod控制器介绍</h4><p>Pod是kubernetes的最小管理单元，在kubernetes中，按照pod的创建方式可以将其分为两类：</p><ul><li>自主式pod：kubernetes直接创建出来的Pod，这种pod删除后就没有了，也不会重建</li><li>控制器创建的pod：kubernetes通过控制器创建的pod，这种pod删除了之后还会自动重建</li></ul><blockquote><p><strong><code>什么是Pod控制器</code></strong></p><p>Pod控制器是管理pod的中间层，使用Pod控制器之后，只需要告诉Pod控制器，想要多少个什么样的Pod就可以了，它会创建出满足条件的Pod并确保每一个Pod资源处于用户期望的目标状态。如果Pod资源在运行中出现故障，它会基于指定策略重新编排Pod。</p></blockquote><p>在kubernetes中，有很多类型的pod控制器，每种都有自己的适合的场景，常见的有下面这些：</p><ul><li>ReplicationController：比较原始的pod控制器，已经被废弃，由ReplicaSet替代</li><li>ReplicaSet：保证副本数量一直维持在期望值，并支持pod数量扩缩容，镜像版本升级</li><li>Deployment：通过控制ReplicaSet来控制Pod，并支持滚动升级、回退版本</li><li>Horizontal Pod Autoscaler：可以根据集群负载自动水平调整Pod的数量，实现削峰填谷</li><li>DaemonSet：在集群中的指定Node上运行且仅运行一个副本，一般用于守护进程类的任务</li><li>Job：它创建出来的pod只要完成任务就立即退出，不需要重启或重建，用于执行一次性任务</li><li>Cronjob：它创建的Pod负责周期性任务控制，不需要持续后台运行</li><li>StatefulSet：管理有状态应用</li></ul><h4 id="_6-2-replicaset-rs" tabindex="-1"><a class="header-anchor" href="#_6-2-replicaset-rs" aria-hidden="true">#</a> 6.2 ReplicaSet(RS)</h4><p>ReplicaSet的主要作用是<strong>保证一定数量的pod正常运行</strong>，它会持续监听这些Pod的运行状态，一旦Pod发生故障，就会重启或重建。同时它还支持对pod数量的扩缩容和镜像版本的升降级。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140645042.png" alt="图 23" tabindex="0" loading="lazy"><figcaption>图 23</figcaption></figure><p>ReplicaSet的资源清单文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment"># 版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ReplicaSet <span class="token comment"># 类型       </span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token comment"># rs名称 </span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token comment"># 所属命名空间 </span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#标签</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> rs
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 详情描述</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 副本数量</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器，通过它指定该控制器管理哪些pod</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>      <span class="token comment"># Labels匹配规则</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># Expressions匹配规则</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">key</span><span class="token punctuation">:</span> app<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> In<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>nginx<span class="token punctuation">-</span>pod<span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 模板，当副本数量不足时，会根据下面的模板创建pod副本</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里面，需要新了解的配置项就是<code>spec</code>下面几个选项：</p><ul><li><p>replicas：指定副本数量，其实就是当前rs创建出来的pod的数量，默认为1</p></li><li><p>selector：选择器，它的作用是建立pod控制器和pod之间的关联关系，采用的Label Selector机制</p><p>在pod模板上定义label，在控制器上定义选择器，就可以表明当前控制器能管理哪些pod了</p></li><li><p>template：模板，就是当前控制器创建pod所使用的模板板，里面其实就是前一章学过的pod的定义</p></li></ul><p><strong>创建ReplicaSet</strong></p><p>创建pc-replicaset.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ReplicaSet   
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>replicaset
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> 
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建rs</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pc-replicaset.yaml</span>
replicaset.apps/pc-replicaset created

<span class="token comment"># 查看rs</span>
<span class="token comment"># DESIRED:期望副本数量  </span>
<span class="token comment"># CURRENT:当前副本数量  </span>
<span class="token comment"># READY:已经准备好提供服务的副本数量</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs pc-replicaset -n dev -o wide</span>
NAME          DESIRED   CURRENT READY AGE   CONTAINERS   IMAGES             SELECTOR
pc-replicaset <span class="token number">3</span>         <span class="token number">3</span>       <span class="token number">3</span>     22s   nginx        nginx:1.17.1       <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod

<span class="token comment"># 查看当前控制器创建出来的pod</span>
<span class="token comment"># 这里发现控制器创建出来的pod的名称是在控制器名称后面拼接了-xxxxx随机码</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n dev</span>
NAME                          READY   STATUS    RESTARTS   AGE
pc-replicaset-6vmvt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          54s
pc-replicaset-fmb8f   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          54s
pc-replicaset-snrk2   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          54s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩缩容</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑rs的副本数量，修改spec:replicas: 6即可</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl edit rs pc-replicaset -n dev</span>
replicaset.apps/pc-replicaset edited

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                          READY   STATUS    RESTARTS   AGE
pc-replicaset-6vmvt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          114m
pc-replicaset-cftnp   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          10s
pc-replicaset-fjlm6   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          10s
pc-replicaset-fmb8f   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          114m
pc-replicaset-s2whj   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          10s
pc-replicaset-snrk2   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          114m

<span class="token comment"># 当然也可以直接使用命令实现</span>
<span class="token comment"># 使用scale命令实现扩缩容， 后面--replicas=n直接指定目标数量即可</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl scale rs pc-replicaset --replicas=2 -n dev</span>
replicaset.apps/pc-replicaset scaled

<span class="token comment"># 命令运行完毕，立即查看，发现已经有4个开始准备退出了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                       READY   STATUS        RESTARTS   AGE
pc-replicaset-6vmvt   <span class="token number">0</span>/1     Terminating   <span class="token number">0</span>          118m
pc-replicaset-cftnp   <span class="token number">0</span>/1     Terminating   <span class="token number">0</span>          4m17s
pc-replicaset-fjlm6   <span class="token number">0</span>/1     Terminating   <span class="token number">0</span>          4m17s
pc-replicaset-fmb8f   <span class="token number">1</span>/1     Running       <span class="token number">0</span>          118m
pc-replicaset-s2whj   <span class="token number">0</span>/1     Terminating   <span class="token number">0</span>          4m17s
pc-replicaset-snrk2   <span class="token number">1</span>/1     Running       <span class="token number">0</span>          118m

<span class="token comment">#稍等片刻，就只剩下2个了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                       READY   STATUS    RESTARTS   AGE
pc-replicaset-fmb8f   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          119m
pc-replicaset-snrk2   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          119m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>镜像升级</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑rs的容器镜像 - image: nginx:1.17.2</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl edit rs pc-replicaset -n dev</span>
replicaset.apps/pc-replicaset edited

<span class="token comment"># 再次查看，发现镜像版本已经变更了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs -n dev -o wide</span>
NAME                DESIRED  CURRENT   READY   AGE    CONTAINERS   IMAGES        <span class="token punctuation">..</span>.
pc-replicaset       <span class="token number">2</span>        <span class="token number">2</span>         <span class="token number">2</span>       140m   nginx         nginx:1.17.2  <span class="token punctuation">..</span>.

<span class="token comment"># 同样的道理，也可以使用命令完成这个工作</span>
<span class="token comment"># kubectl set image rs rs名称 容器=镜像版本 -n namespace</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl set image rs pc-replicaset nginx=nginx:1.17.1  -n dev</span>
replicaset.apps/pc-replicaset image updated

<span class="token comment"># 再次查看，发现镜像版本已经变更了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs -n dev -o wide</span>
NAME                 DESIRED  CURRENT   READY   AGE    CONTAINERS   IMAGES            <span class="token punctuation">..</span>.
pc-replicaset        <span class="token number">2</span>        <span class="token number">2</span>         <span class="token number">2</span>       145m   nginx        nginx:1.17.1 <span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除ReplicaSet</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用kubectl delete命令会删除此RS以及它管理的Pod</span>
<span class="token comment"># 在kubernetes删除RS前，会将RS的replicasclear调整为0，等待所有的Pod被删除后，在执行RS对象的删除</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete rs pc-replicaset -n dev</span>
replicaset.apps <span class="token string">&quot;pc-replicaset&quot;</span> deleted
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n dev -o wide</span>
No resources found <span class="token keyword">in</span> dev namespace.

<span class="token comment"># 如果希望仅仅删除RS对象（保留Pod），可以使用kubectl delete命令时添加--cascade=false选项（不推荐）。</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete rs pc-replicaset -n dev --cascade=false</span>
replicaset.apps <span class="token string">&quot;pc-replicaset&quot;</span> deleted
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                  READY   STATUS    RESTARTS   AGE
pc-replicaset-cl82j   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          75s
pc-replicaset-dslhb   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          75s

<span class="token comment"># 也可以使用yaml直接删除(推荐)</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pc-replicaset.yaml</span>
replicaset.apps <span class="token string">&quot;pc-replicaset&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-deployment-deploy" tabindex="-1"><a class="header-anchor" href="#_6-3-deployment-deploy" aria-hidden="true">#</a> 6.3 Deployment(Deploy)</h4><p>为了更好的解决服务编排的问题，kubernetes在V1.2版本开始，引入了Deployment控制器。值得一提的是，这种控制器并不直接管理pod，而是通过管理ReplicaSet来简介管理Pod，即：Deployment管理ReplicaSet，ReplicaSet管理Pod。所以Deployment比ReplicaSet功能更加强大。</p><p>为了更好的解决服务编排的问题，kubernetes在V1.2版本开始，引入了Deployment控制器。值得一提的是，这种控制器并不直接管理pod，而是通过管理ReplicaSet来简介管理Pod，即：Deployment管理ReplicaSet，ReplicaSet管理Pod。所以Deployment比ReplicaSet功能更加强大。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140667749.png" alt="图 24" tabindex="0" loading="lazy"><figcaption>图 24</figcaption></figure><p>Deployment主要功能有下面几个：</p><ul><li>支持ReplicaSet的所有功能</li><li>支持发布的停止、继续</li><li>支持滚动升级和回滚版本</li></ul><p>Deployment的资源清单文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment"># 版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment <span class="token comment"># 类型       </span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token comment"># rs名称 </span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token comment"># 所属命名空间 </span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#标签</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> deploy
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 详情描述</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 副本数量</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 保留历史版本</span>
  <span class="token key atrule">paused</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 暂停部署，默认是false</span>
  <span class="token key atrule">progressDeadlineSeconds</span><span class="token punctuation">:</span> <span class="token number">600</span> <span class="token comment"># 部署超时时间（s），默认是600</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token comment"># 策略</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate <span class="token comment"># 滚动更新策略</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span> <span class="token comment"># 滚动更新</span>
      <span class="token key atrule">违规词汇</span><span class="token punctuation">:</span> 30% <span class="token comment"># 最大额外可以存在的副本数，可以为百分比，也可以为整数</span>
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> 30% <span class="token comment"># 最大不可用状态的 Pod 的最大值，可以为百分比，也可以为整数</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器，通过它指定该控制器管理哪些pod</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>      <span class="token comment"># Labels匹配规则</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># Expressions匹配规则</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">key</span><span class="token punctuation">:</span> app<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> In<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>nginx<span class="token punctuation">-</span>pod<span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 模板，当副本数量不足时，会根据下面的模板创建pod副本</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-3-1-创建deployment" tabindex="-1"><a class="header-anchor" href="#_6-3-1-创建deployment" aria-hidden="true">#</a> 6.3.1 创建deployment</h5><p>创建pc-deployment.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment      
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>deployment
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-3-2-扩缩容" tabindex="-1"><a class="header-anchor" href="#_6-3-2-扩缩容" aria-hidden="true">#</a> 6.3.2 扩缩容</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 变更副本数量为5个</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl scale deploy pc-deployment --replicas=5  -n dev</span>
deployment.apps/pc-deployment scaled

<span class="token comment"># 查看deployment</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy pc-deployment -n dev</span>
NAME            READY   UP-TO-DATE   AVAILABLE   AGE
pc-deployment   <span class="token number">5</span>/5     <span class="token number">5</span>            <span class="token number">5</span>           2m

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get pods -n dev</span>
NAME                             READY   STATUS    RESTARTS   AGE
pc-deployment-6696798b78-d2c8n   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m19s
pc-deployment-6696798b78-jxmdq   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          94s
pc-deployment-6696798b78-mktqv   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          93s
pc-deployment-6696798b78-smpvp   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m19s
pc-deployment-6696798b78-wvjd8   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          4m19s

<span class="token comment"># 编辑deployment的副本数量，修改spec:replicas: 4即可</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl edit deploy pc-deployment -n dev</span>
deployment.apps/pc-deployment edited

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                             READY   STATUS    RESTARTS   AGE
pc-deployment-6696798b78-d2c8n   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m23s
pc-deployment-6696798b78-jxmdq   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2m38s
pc-deployment-6696798b78-smpvp   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m23s
pc-deployment-6696798b78-wvjd8   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m23s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>镜像更新</strong></p><p>deployment支持两种更新策略:<code>重建更新</code>和<code>滚动更新</code>,可以通过<code>strategy</code>指定策略类型,支持两个属性:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>strategy：指定新的Pod替换旧的Pod的策略， 支持两个属性：
  type：指定策略类型，支持两种策略
    Recreate：在创建出新的Pod之前会先杀掉所有已存在的Pod
    RollingUpdate：滚动更新，就是杀死一部分，就启动一部分，在更新过程中，存在两个版本Pod
  rollingUpdate：当type为RollingUpdate时生效，用于为RollingUpdate设置参数，支持两个属性：
    maxUnavailable：用来指定在升级过程中不可用Pod的最大数量，默认为25%。
    违规词汇： 用来指定在升级过程中可以超过期望的Pod的最大数量，默认为25%。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重建更新</p><ol><li>编辑pc-deployment.yaml,在spec节点下添加更新策略</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token comment"># 策略</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> Recreate <span class="token comment"># 重建更新</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建deploy进行验证</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 变更镜像</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl set image deployment pc-deployment nginx=nginx:1.17.2 -n dev</span>
deployment.apps/pc-deployment image updated

<span class="token comment"># 观察升级过程</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get pods -n dev -w</span>
NAME                             READY   STATUS    RESTARTS   AGE
pc-deployment-5d89bdfbf9-65qcw   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31s
pc-deployment-5d89bdfbf9-w5nzv   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31s
pc-deployment-5d89bdfbf9-xpt7w   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31s

pc-deployment-5d89bdfbf9-xpt7w   <span class="token number">1</span>/1     Terminating   <span class="token number">0</span>          41s
pc-deployment-5d89bdfbf9-65qcw   <span class="token number">1</span>/1     Terminating   <span class="token number">0</span>          41s
pc-deployment-5d89bdfbf9-w5nzv   <span class="token number">1</span>/1     Terminating   <span class="token number">0</span>          41s

pc-deployment-675d469f8b-grn8z   <span class="token number">0</span>/1     Pending       <span class="token number">0</span>          0s
pc-deployment-675d469f8b-hbl4v   <span class="token number">0</span>/1     Pending       <span class="token number">0</span>          0s
pc-deployment-675d469f8b-67nz2   <span class="token number">0</span>/1     Pending       <span class="token number">0</span>          0s

pc-deployment-675d469f8b-grn8z   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-deployment-675d469f8b-hbl4v   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-deployment-675d469f8b-67nz2   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s

pc-deployment-675d469f8b-grn8z   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          1s
pc-deployment-675d469f8b-67nz2   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          1s
pc-deployment-675d469f8b-hbl4v   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>滚动更新</p><ol><li>编辑pc-deployment.yaml,在spec节点下添加更新策略</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token comment"># 策略</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate <span class="token comment"># 滚动更新策略</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>
      <span class="token key atrule">违规词汇</span><span class="token punctuation">:</span> 25% 
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> 25%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建deploy进行验证</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 变更镜像</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl set image deployment pc-deployment nginx=nginx:1.17.3 -n dev </span>
deployment.apps/pc-deployment image updated

<span class="token comment"># 观察升级过程</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -w</span>
NAME                           READY   STATUS    RESTARTS   AGE
pc-deployment-c848d767-8rbzt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31m
pc-deployment-c848d767-h4p68   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31m
pc-deployment-c848d767-hlmz4   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31m
pc-deployment-c848d767-rrqcn   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          31m

pc-deployment-966bf7f44-226rx   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-deployment-966bf7f44-226rx   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-deployment-966bf7f44-226rx   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          1s
pc-deployment-c848d767-h4p68    <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m

pc-deployment-966bf7f44-cnd44   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-deployment-966bf7f44-cnd44   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-deployment-966bf7f44-cnd44   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
pc-deployment-c848d767-hlmz4    <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m

pc-deployment-966bf7f44-px48p   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-deployment-966bf7f44-px48p   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-deployment-966bf7f44-px48p   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          0s
pc-deployment-c848d767-8rbzt    <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m

pc-deployment-966bf7f44-dkmqp   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-deployment-966bf7f44-dkmqp   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-deployment-966bf7f44-dkmqp   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
pc-deployment-c848d767-rrqcn    <span class="token number">0</span>/1     Terminating         <span class="token number">0</span>          34m

<span class="token comment"># 至此，新版本的pod创建完毕，就版本的pod销毁完毕</span>
<span class="token comment"># 中间过程是滚动进行的，也就是边销毁边创建</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>滚动更新的过程：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140701201.png" alt="图 25" tabindex="0" loading="lazy"><figcaption>图 25</figcaption></figure><p>镜像更新中rs的变化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看rs,发现原来的rs的依旧存在，只是pod数量变为了0，而后又新产生了一个rs，pod数量为4</span>
<span class="token comment"># 其实这就是deployment能够进行版本回退的奥妙所在，后面会详细解释</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs -n dev</span>
NAME                       DESIRED   CURRENT   READY   AGE
pc-deployment-6696798b78   <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       7m37s
pc-deployment-6696798b11   <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       5m37s
pc-deployment-c848d76789   <span class="token number">4</span>         <span class="token number">4</span>         <span class="token number">4</span>       72s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-3-3-版本回退" tabindex="-1"><a class="header-anchor" href="#_6-3-3-版本回退" aria-hidden="true">#</a> 6.3.3 版本回退</h5><p>deployment支持版本升级过程中的暂停、继续功能以及版本回退等诸多功能，下面具体来看.</p><p>kubectl rollout： 版本升级相关功能，支持下面的选项：</p><ul><li>status 显示当前升级状态</li><li>history 显示 升级历史记录</li><li>pause 暂停版本升级过程</li><li>resume 继续已经暂停的版本升级过程</li><li>restart 重启版本升级过程</li><li>undo 回滚到上一级版本（可以使用--to-revision回滚到指定版本）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前升级版本的状态</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl rollout status deploy pc-deployment -n dev</span>
deployment <span class="token string">&quot;pc-deployment&quot;</span> successfully rolled out

<span class="token comment"># 查看升级历史记录</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl rollout history deploy pc-deployment -n dev</span>
deployment.apps/pc-deployment
REVISION  CHANGE-CAUSE
<span class="token number">1</span>         kubectl create <span class="token parameter variable">--filename</span><span class="token operator">=</span>pc-deployment.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">2</span>         kubectl create <span class="token parameter variable">--filename</span><span class="token operator">=</span>pc-deployment.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token number">3</span>         kubectl create <span class="token parameter variable">--filename</span><span class="token operator">=</span>pc-deployment.yaml <span class="token parameter variable">--record</span><span class="token operator">=</span>true
<span class="token comment"># 可以发现有三次版本记录，说明完成过两次升级</span>

<span class="token comment"># 版本回滚</span>
<span class="token comment"># 这里直接使用--to-revision=1回滚到了1版本， 如果省略这个选项，就是回退到上个版本，就是2版本</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl rollout undo deployment pc-deployment --to-revision=1 -n dev</span>
deployment.apps/pc-deployment rolled back

<span class="token comment"># 查看发现，通过nginx镜像版本可以发现到了第一版</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deploy -n dev -o wide</span>
NAME            READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS   IMAGES         
pc-deployment   <span class="token number">4</span>/4     <span class="token number">4</span>            <span class="token number">4</span>           74m   nginx        nginx:1.17.1   

<span class="token comment"># 查看rs，发现第一个rs中有4个pod运行，后面两个版本的rs中pod为运行</span>
<span class="token comment"># 其实deployment之所以可是实现版本的回滚，就是通过记录下历史rs来实现的，</span>
<span class="token comment"># 一旦想回滚到哪个版本，只需要将当前版本pod数量降为0，然后将回滚版本的pod提升为目标数量就可以了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs -n dev</span>
NAME                       DESIRED   CURRENT   READY   AGE
pc-deployment-6696798b78   <span class="token number">4</span>         <span class="token number">4</span>         <span class="token number">4</span>       78m
pc-deployment-966bf7f44    <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       37m
pc-deployment-c848d767     <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       71m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-3-4-金丝雀发布" tabindex="-1"><a class="header-anchor" href="#_6-3-4-金丝雀发布" aria-hidden="true">#</a> 6.3.4 金丝雀发布</h5><p>Deployment控制器支持控制更新过程中的控制，如“暂停(pause)”或“继续(resume)”更新操作。</p><p>比如有一批新的Pod资源创建完成后立即暂停更新过程，此时，仅存在一部分新版本的应用，主体部分还是旧的版本。然后，再筛选一小部分的用户请求路由到新版本的Pod应用，继续观察能否稳定地按期望的方式运行。确定没问题之后再继续完成余下的Pod资源滚动更新，否则立即回滚更新操作。这就是所谓的金丝雀发布。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新deployment的版本，并配置暂停deployment</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl set image deploy pc-deployment nginx=nginx:1.17.4 -n dev &amp;&amp; kubectl rollout pause deployment pc-deployment  -n dev</span>
deployment.apps/pc-deployment image updated
deployment.apps/pc-deployment paused

<span class="token comment">#观察更新状态</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl rollout status deploy pc-deployment -n dev　</span>
Waiting <span class="token keyword">for</span> deployment <span class="token string">&quot;pc-deployment&quot;</span> rollout to finish: <span class="token number">2</span> out of <span class="token number">4</span> new replicas have been updated<span class="token punctuation">..</span>.

<span class="token comment"># 监控更新的过程，可以看到已经新增了一个资源，但是并未按照预期的状态去删除一个旧的资源，就是因为使用了pause暂停命令</span>

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs -n dev -o wide</span>
NAME                       DESIRED   CURRENT   READY   AGE     CONTAINERS   IMAGES         
pc-deployment-5d89bdfbf9   <span class="token number">3</span>         <span class="token number">3</span>         <span class="token number">3</span>       19m     nginx        nginx:1.17.1   
pc-deployment-675d469f8b   <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       14m     nginx        nginx:1.17.2   
pc-deployment-6c9f56fcfb   <span class="token number">2</span>         <span class="token number">2</span>         <span class="token number">2</span>       3m16s   nginx        nginx:1.17.4   
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                             READY   STATUS    RESTARTS   AGE
pc-deployment-5d89bdfbf9-rj8sq   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m33s
pc-deployment-5d89bdfbf9-ttwgg   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m35s
pc-deployment-5d89bdfbf9-v4wvc   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          7m34s
pc-deployment-6c9f56fcfb-996rt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          3m31s
pc-deployment-6c9f56fcfb-j2gtj   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          3m31s

<span class="token comment"># 确保更新的pod没问题了，继续更新</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl rollout resume deploy pc-deployment -n dev</span>
deployment.apps/pc-deployment resumed

<span class="token comment"># 查看最后的更新情况</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get rs -n dev -o wide</span>
NAME                       DESIRED   CURRENT   READY   AGE     CONTAINERS   IMAGES         
pc-deployment-5d89bdfbf9   <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       21m     nginx        nginx:1.17.1   
pc-deployment-675d469f8b   <span class="token number">0</span>         <span class="token number">0</span>         <span class="token number">0</span>       16m     nginx        nginx:1.17.2   
pc-deployment-6c9f56fcfb   <span class="token number">4</span>         <span class="token number">4</span>         <span class="token number">4</span>       5m11s   nginx        nginx:1.17.4   

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                             READY   STATUS    RESTARTS   AGE
pc-deployment-6c9f56fcfb-7bfwh   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          37s
pc-deployment-6c9f56fcfb-996rt   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m27s
pc-deployment-6c9f56fcfb-j2gtj   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m27s
pc-deployment-6c9f56fcfb-rf84v   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          37s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除Deployment</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除deployment，其下的rs和pod也将被删除</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pc-deployment.yaml</span>
deployment.apps <span class="token string">&quot;pc-deployment&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-horizontal-pod-autoscaler-hpa" tabindex="-1"><a class="header-anchor" href="#_6-4-horizontal-pod-autoscaler-hpa" aria-hidden="true">#</a> 6.4 Horizontal Pod Autoscaler(HPA)</h4><p>在前面的课程中，我们已经可以实现通过手工执行<code>kubectl scale</code>命令实现Pod扩容或缩容，但是这显然不符合Kubernetes的定位目标--自动化、智能化。 Kubernetes期望可以实现通过监测Pod的使用情况，实现pod数量的自动调整，于是就产生了Horizontal Pod Autoscaler（HPA）这种控制器。</p><p>HPA可以获取每个Pod利用率，然后和HPA中定义的指标进行对比，同时计算出需要伸缩的具体值，最后实现Pod的数量的调整。其实HPA与之前的Deployment一样，也属于一种Kubernetes资源对象，它通过追踪分析RC控制的所有目标Pod的负载变化情况，来确定是否需要针对性地调整目标Pod的副本数，这是HPA的实现原理。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140733846.png" alt="图 26" tabindex="0" loading="lazy"><figcaption>图 26</figcaption></figure><p>接下来，我们来做一个实验</p><h5 id="_6-4-1-安装metrics-server" tabindex="-1"><a class="header-anchor" href="#_6-4-1-安装metrics-server" aria-hidden="true">#</a> 6.4.1 安装metrics-server</h5><p>metrics-server可以用来收集集群中的资源使用情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装git</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># yum install git -y</span>
<span class="token comment"># 获取metrics-server, 注意使用的版本</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># git clone -b v0.3.6 https://github.com/kubernetes-incubator/metrics-server</span>
<span class="token comment"># 修改deployment, 注意修改的是镜像和初始化参数</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># cd /root/metrics-server/deploy/1.8+/</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># vim metrics-server-deployment.yaml</span>
按图中添加下面选项
hostNetwork: <span class="token boolean">true</span>
image: registry.cn-hangzhou.aliyuncs.com/google_containers/metrics-server-amd64:v0.3.6
args:
- --kubelet-insecure-tls
- --kubelet-preferred-address-types<span class="token operator">=</span>InternalIP,Hostname,InternalDNS,ExternalDNS,ExternalIP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140755570.png" alt="图 27" tabindex="0" loading="lazy"><figcaption>图 27</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装metrics-server</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f ./</span>

<span class="token comment"># 查看pod运行情况</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl get pod -n kube-system</span>
metrics-server-6b976979db-2xwbj   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          90s

<span class="token comment"># 使用kubectl top node 查看资源使用情况</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl top node</span>
NAME           CPU<span class="token punctuation">(</span>cores<span class="token punctuation">)</span>   CPU%   MEMORY<span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>   MEMORY%
k8s-master01   289m         <span class="token number">14</span>%    1582Mi          <span class="token number">54</span>%       
k8s-node01     81m          <span class="token number">4</span>%     1195Mi          <span class="token number">40</span>%       
k8s-node02     72m          <span class="token number">3</span>%     1211Mi          <span class="token number">41</span>%  
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl top pod -n kube-system</span>
NAME                              CPU<span class="token punctuation">(</span>cores<span class="token punctuation">)</span>   MEMORY<span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
coredns-6955765f44-7ptsb          3m           9Mi
coredns-6955765f44-vcwr5          3m           8Mi
etcd-master                       14m          145Mi
<span class="token punctuation">..</span>.
<span class="token comment"># 至此,metrics-server安装完成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-4-2-准备deployment和servie" tabindex="-1"><a class="header-anchor" href="#_6-4-2-准备deployment和servie" aria-hidden="true">#</a> 6.4.2 准备deployment和servie</h5><p>创建pc-hpa-pod.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span> <span class="token comment"># 策略</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate <span class="token comment"># 滚动更新策略</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
        <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment"># 资源配额</span>
          <span class="token key atrule">limits</span><span class="token punctuation">:</span>  <span class="token comment"># 限制资源（上限）</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span> <span class="token comment"># CPU限制，单位是core数</span>
          <span class="token key atrule">requests</span><span class="token punctuation">:</span> <span class="token comment"># 请求资源（下限）</span>
            <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token string">&quot;100m&quot;</span>  <span class="token comment"># CPU限制，单位是core数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建deployment</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl run nginx --image=nginx:1.17.1 --requests=cpu=100m -n dev</span>
<span class="token comment"># 创建service</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl expose deployment nginx --type=NodePort --port=80 -n dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl get deployment,pod,svc -n dev</span>
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           47s

NAME                         READY   STATUS    RESTARTS   AGE
pod/nginx-7df9756ccc-bh8dr   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          47s

NAME            TYPE       CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
service/nginx   NodePort   <span class="token number">10.101</span>.18.29   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:31830/TCP   35s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-4-3-部署hpa" tabindex="-1"><a class="header-anchor" href="#_6-4-3-部署hpa" aria-hidden="true">#</a> 6.4.3 部署HPA</h5><p>创建pc-hpa.yaml文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> autoscaling/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> HorizontalPodAutoscaler
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>hpa
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">minReplicas</span><span class="token punctuation">:</span> <span class="token number">1</span>  <span class="token comment">#最小pod数量</span>
  <span class="token key atrule">maxReplicas</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment">#最大pod数量</span>
  <span class="token key atrule">targetCPUUtilizationPercentage</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># CPU使用率指标</span>
  <span class="token key atrule">scaleTargetRef</span><span class="token punctuation">:</span>   <span class="token comment"># 指定要控制的nginx信息</span>
    <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span>  apps/v1
    <span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建hpa</span>
<span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pc-hpa.yaml</span>
horizontalpodautoscaler.autoscaling/pc-hpa created

<span class="token comment"># 查看hpa</span>
    <span class="token punctuation">[</span>root@k8s-master01 <span class="token number">1.8</span>+<span class="token punctuation">]</span><span class="token comment"># kubectl get hpa -n dev</span>
NAME     REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
pc-hpa   Deployment/nginx   <span class="token number">0</span>%/3%     <span class="token number">1</span>         <span class="token number">10</span>        <span class="token number">1</span>          62s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-4-4-测试" tabindex="-1"><a class="header-anchor" href="#_6-4-4-测试" aria-hidden="true">#</a> 6.4.4 测试</h5><p>使用压测工具对service地址<code>192.168.5.4:31830</code>进行压测，然后通过控制台查看hpa和pod的变化</p><p>hpa变化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get hpa -n dev -w</span>
NAME   REFERENCE      TARGETS  MINPODS  MAXPODS  REPLICAS  AGE
pc-hpa  Deployment/nginx  <span class="token number">0</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">1</span>      4m11s
pc-hpa  Deployment/nginx  <span class="token number">0</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">1</span>      5m19s
pc-hpa  Deployment/nginx  <span class="token number">22</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">1</span>      6m50s
pc-hpa  Deployment/nginx  <span class="token number">22</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">4</span>      7m5s
pc-hpa  Deployment/nginx  <span class="token number">22</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">8</span>      7m21s
pc-hpa  Deployment/nginx  <span class="token number">6</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">8</span>      7m51s
pc-hpa  Deployment/nginx  <span class="token number">0</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">8</span>      9m6s
pc-hpa  Deployment/nginx  <span class="token number">0</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">8</span>      13m
pc-hpa  Deployment/nginx  <span class="token number">0</span>%/3%   <span class="token number">1</span>     <span class="token number">10</span>     <span class="token number">1</span>      14m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>deployment变化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deployment -n dev -w</span>
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
nginx   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           11m
nginx   <span class="token number">1</span>/4     <span class="token number">1</span>            <span class="token number">1</span>           13m
nginx   <span class="token number">1</span>/4     <span class="token number">1</span>            <span class="token number">1</span>           13m
nginx   <span class="token number">1</span>/4     <span class="token number">1</span>            <span class="token number">1</span>           13m
nginx   <span class="token number">1</span>/4     <span class="token number">4</span>            <span class="token number">1</span>           13m
nginx   <span class="token number">1</span>/8     <span class="token number">4</span>            <span class="token number">1</span>           14m
nginx   <span class="token number">1</span>/8     <span class="token number">4</span>            <span class="token number">1</span>           14m
nginx   <span class="token number">1</span>/8     <span class="token number">4</span>            <span class="token number">1</span>           14m
nginx   <span class="token number">1</span>/8     <span class="token number">8</span>            <span class="token number">1</span>           14m
nginx   <span class="token number">2</span>/8     <span class="token number">8</span>            <span class="token number">2</span>           14m
nginx   <span class="token number">3</span>/8     <span class="token number">8</span>            <span class="token number">3</span>           14m
nginx   <span class="token number">4</span>/8     <span class="token number">8</span>            <span class="token number">4</span>           14m
nginx   <span class="token number">5</span>/8     <span class="token number">8</span>            <span class="token number">5</span>           14m
nginx   <span class="token number">6</span>/8     <span class="token number">8</span>            <span class="token number">6</span>           14m
nginx   <span class="token number">7</span>/8     <span class="token number">8</span>            <span class="token number">7</span>           14m
nginx   <span class="token number">8</span>/8     <span class="token number">8</span>            <span class="token number">8</span>           15m
nginx   <span class="token number">8</span>/1     <span class="token number">8</span>            <span class="token number">8</span>           20m
nginx   <span class="token number">8</span>/1     <span class="token number">8</span>            <span class="token number">8</span>           20m
nginx   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           20m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pod变化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@k8s-master01 ~]# kubectl get pods -n dev -w
NAME                     READY   STATUS    RESTARTS   AGE
nginx-7df9756ccc-bh8dr   1/1     Running   0          11m
nginx-7df9756ccc-cpgrv   0/1     Pending   0          0s
nginx-7df9756ccc-8zhwk   0/1     Pending   0          0s
nginx-7df9756ccc-rr9bn   0/1     Pending   0          0s
nginx-7df9756ccc-cpgrv   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-8zhwk   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-rr9bn   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-m9gsj   0/1     Pending             0          0s
nginx-7df9756ccc-g56qb   0/1     Pending             0          0s
nginx-7df9756ccc-sl9c6   0/1     Pending             0          0s
nginx-7df9756ccc-fgst7   0/1     Pending             0          0s
nginx-7df9756ccc-g56qb   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-m9gsj   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-sl9c6   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-fgst7   0/1     ContainerCreating   0          0s
nginx-7df9756ccc-8zhwk   1/1     Running             0          19s
nginx-7df9756ccc-rr9bn   1/1     Running             0          30s
nginx-7df9756ccc-m9gsj   1/1     Running             0          21s
nginx-7df9756ccc-cpgrv   1/1     Running             0          47s
nginx-7df9756ccc-sl9c6   1/1     Running             0          33s
nginx-7df9756ccc-g56qb   1/1     Running             0          48s
nginx-7df9756ccc-fgst7   1/1     Running             0          66s
nginx-7df9756ccc-fgst7   1/1     Terminating         0          6m50s
nginx-7df9756ccc-8zhwk   1/1     Terminating         0          7m5s
nginx-7df9756ccc-cpgrv   1/1     Terminating         0          7m5s
nginx-7df9756ccc-g56qb   1/1     Terminating         0          6m50s
nginx-7df9756ccc-rr9bn   1/1     Terminating         0          7m5s
nginx-7df9756ccc-m9gsj   1/1     Terminating         0          6m50s
nginx-7df9756ccc-sl9c6   1/1     Terminating         0          6m50s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-5-daemonset-ds" tabindex="-1"><a class="header-anchor" href="#_6-5-daemonset-ds" aria-hidden="true">#</a> 6.5 DaemonSet(DS)</h4><p>DaemonSet类型的控制器可以保证在集群中的每一台（或指定）节点上都运行一个副本。一般适用于日志收集、节点监控等场景。也就是说，如果一个Pod提供的功能是节点级别的（每个节点都需要且只需要一个），那么这类Pod就适合使用DaemonSet类型的控制器创建。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140788602.png" alt="图 28" tabindex="0" loading="lazy"><figcaption>图 28</figcaption></figure><p>DaemonSet控制器的特点：</p><ul><li>每当向集群中添加一个节点时，指定的 Pod 副本也将添加到该节点上</li><li>当节点从集群中移除时，Pod 也就被垃圾回收了</li></ul><p>下面先来看下DaemonSet的资源清单文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment"># 版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet <span class="token comment"># 类型       </span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token comment"># rs名称 </span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token comment"># 所属命名空间 </span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#标签</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> daemonset
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 详情描述</span>
  <span class="token key atrule">revisionHistoryLimit</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 保留历史版本</span>
  <span class="token key atrule">updateStrategy</span><span class="token punctuation">:</span> <span class="token comment"># 更新策略</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> RollingUpdate <span class="token comment"># 滚动更新策略</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span> <span class="token comment"># 滚动更新</span>
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 最大不可用状态的 Pod 的最大值，可以为百分比，也可以为整数</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器，通过它指定该控制器管理哪些pod</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>      <span class="token comment"># Labels匹配规则</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># Expressions匹配规则</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">key</span><span class="token punctuation">:</span> app<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> In<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>nginx<span class="token punctuation">-</span>pod<span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 模板，当副本数量不足时，会根据下面的模板创建pod副本</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pc-daemonset.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DaemonSet      
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>daemonset
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建daemonset</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f  pc-daemonset.yaml</span>
daemonset.apps/pc-daemonset created

<span class="token comment"># 查看daemonset</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get ds -n dev -o wide</span>
NAME        DESIRED  CURRENT  READY  UP-TO-DATE  AVAILABLE   AGE   CONTAINERS   IMAGES         
pc-daemonset   <span class="token number">2</span>        <span class="token number">2</span>        <span class="token number">2</span>      <span class="token number">2</span>           <span class="token number">2</span>        24s   nginx        nginx:1.17.1   

<span class="token comment"># 查看pod,发现在每个Node上都运行一个pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get pods -n dev -o wide</span>
NAME                 READY   STATUS    RESTARTS   AGE   IP            NODE    
pc-daemonset-9bck8   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          37s   <span class="token number">10.244</span>.1.43   node1     
pc-daemonset-k224w   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          37s   <span class="token number">10.244</span>.2.74   node2      

<span class="token comment"># 删除daemonset</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pc-daemonset.yaml</span>
daemonset.apps <span class="token string">&quot;pc-daemonset&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-6-job" tabindex="-1"><a class="header-anchor" href="#_6-6-job" aria-hidden="true">#</a> 6.6 Job</h4><p>Job，主要用于负责**批量处理(一次要处理指定数量任务)<strong>短暂的</strong>一次性(每个任务仅运行一次就结束)**任务。Job特点如下：</p><ul><li>当Job创建的pod执行成功结束时，Job将记录成功结束的pod数量</li><li>当成功结束的pod达到指定的数量时，Job将完成执行</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140806400.png" alt="图 29" tabindex="0" loading="lazy"><figcaption>图 29</figcaption></figure><p>Job的资源清单文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1 <span class="token comment"># 版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Job <span class="token comment"># 类型       </span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token comment"># rs名称 </span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token comment"># 所属命名空间 </span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#标签</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> job
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 详情描述</span>
  <span class="token key atrule">completions</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 指定job需要成功运行Pods的次数。默认值: 1</span>
  <span class="token key atrule">parallelism</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment"># 指定job在任一时刻应该并发运行Pods的数量。默认值: 1</span>
  <span class="token key atrule">activeDeadlineSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment"># 指定job可运行的时间期限，超过时间还未结束，系统将会尝试进行终止。</span>
  <span class="token key atrule">backoffLimit</span><span class="token punctuation">:</span> <span class="token number">6</span> <span class="token comment"># 指定job失败后进行重试的次数。默认是6</span>
  <span class="token key atrule">manualSelector</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 是否可以使用selector选择器选择pod，默认是false</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器，通过它指定该控制器管理哪些pod</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>      <span class="token comment"># Labels匹配规则</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> counter<span class="token punctuation">-</span>pod
    <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> <span class="token comment"># Expressions匹配规则</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">key</span><span class="token punctuation">:</span> app<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> In<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>counter<span class="token punctuation">-</span>pod<span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 模板，当副本数量不足时，会根据下面的模板创建pod副本</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> counter<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never <span class="token comment"># 重启策略只能设置为Never或者OnFailure</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> counter
        <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 2;done&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>关于重启策略设置的说明：
    如果指定为OnFailure，则job会在pod出现故障时重启容器，而不是创建pod，failed次数不变
    如果指定为Never，则job会在pod出现故障时创建新的pod，并且故障pod不会消失，也不会重启，failed次数加1
    如果指定为Always的话，就意味着一直重启，意味着job任务会重复去执行了，当然不对，所以不能设置为Always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pc-job.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Job      
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>job
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">manualSelector</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> counter<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> counter<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> counter
        <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 3;done&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建job</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pc-job.yaml</span>
job.batch/pc-job created

<span class="token comment"># 查看job</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get job -n dev -o wide  -w</span>
NAME     COMPLETIONS   DURATION   AGE   CONTAINERS   IMAGES         SELECTOR
pc-job   <span class="token number">0</span>/1           21s        21s   counter      busybox:1.30   <span class="token assign-left variable">app</span><span class="token operator">=</span>counter-pod
pc-job   <span class="token number">1</span>/1           31s        79s   counter      busybox:1.30   <span class="token assign-left variable">app</span><span class="token operator">=</span>counter-pod

<span class="token comment"># 通过观察pod状态可以看到，pod在运行完毕任务后，就会变成Completed状态</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -w</span>
NAME           READY   STATUS     RESTARTS      AGE
pc-job-rxg96   <span class="token number">1</span>/1     Running     <span class="token number">0</span>            29s
pc-job-rxg96   <span class="token number">0</span>/1     Completed   <span class="token number">0</span>            33s

<span class="token comment"># 接下来，调整下pod运行的总数量和并行数量 即：在spec下设置下面两个选项</span>
<span class="token comment">#  completions: 6 # 指定job需要成功运行Pods的次数为6</span>
<span class="token comment">#  parallelism: 3 # 指定job并发运行Pods的数量为3</span>
<span class="token comment">#  然后重新运行job，观察效果，此时会发现，job会每次运行3个pod，总共执行了6个pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -w</span>
NAME           READY   STATUS    RESTARTS   AGE
pc-job-684ft   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5s
pc-job-jhj49   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5s
pc-job-pfcvh   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5s
pc-job-684ft   <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          11s
pc-job-v7rhr   <span class="token number">0</span>/1     Pending     <span class="token number">0</span>          0s
pc-job-v7rhr   <span class="token number">0</span>/1     Pending     <span class="token number">0</span>          0s
pc-job-v7rhr   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-job-jhj49   <span class="token number">0</span>/1     Completed           <span class="token number">0</span>          11s
pc-job-fhwf7   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-job-fhwf7   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-job-pfcvh   <span class="token number">0</span>/1     Completed           <span class="token number">0</span>          11s
pc-job-5vg2j   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-job-fhwf7   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-job-5vg2j   <span class="token number">0</span>/1     Pending             <span class="token number">0</span>          0s
pc-job-5vg2j   <span class="token number">0</span>/1     ContainerCreating   <span class="token number">0</span>          0s
pc-job-fhwf7   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
pc-job-v7rhr   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          2s
pc-job-5vg2j   <span class="token number">1</span>/1     Running             <span class="token number">0</span>          3s
pc-job-fhwf7   <span class="token number">0</span>/1     Completed           <span class="token number">0</span>          12s
pc-job-v7rhr   <span class="token number">0</span>/1     Completed           <span class="token number">0</span>          12s
pc-job-5vg2j   <span class="token number">0</span>/1     Completed           <span class="token number">0</span>          12s

<span class="token comment"># 删除job</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f pc-job.yaml</span>
job.batch <span class="token string">&quot;pc-job&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7-cronjob-cj" tabindex="-1"><a class="header-anchor" href="#_6-7-cronjob-cj" aria-hidden="true">#</a> 6.7 CronJob(CJ)</h4><p>CronJob控制器以 Job控制器资源为其管控对象，并借助它管理pod资源对象，Job控制器定义的作业任务在其控制器资源创建之后便会立即执行，但CronJob可以以类似于Linux操作系统的周期性任务作业计划的方式控制其运行<strong>时间点</strong>及<strong>重复运行</strong>的方式。也就是说，<strong>CronJob可以在特定的时间点(反复的)去运行job任务</strong>。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140826967.png" alt="图 30" tabindex="0" loading="lazy"><figcaption>图 30</figcaption></figure><p>CronJob的资源清单文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1beta1 <span class="token comment"># 版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> CronJob <span class="token comment"># 类型       </span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token comment"># rs名称 </span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token comment"># 所属命名空间 </span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#标签</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> cronjob
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 详情描述</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span> <span class="token comment"># cron格式的作业调度运行时间点,用于控制任务在什么时间执行</span>
  <span class="token key atrule">concurrencyPolicy</span><span class="token punctuation">:</span> <span class="token comment"># 并发执行策略，用于定义前一次作业运行尚未完成时是否以及如何运行后一次的作业</span>
  <span class="token key atrule">failedJobHistoryLimit</span><span class="token punctuation">:</span> <span class="token comment"># 为失败的任务执行保留的历史记录数，默认为1</span>
  <span class="token key atrule">successfulJobHistoryLimit</span><span class="token punctuation">:</span> <span class="token comment"># 为成功的任务执行保留的历史记录数，默认为3</span>
  <span class="token key atrule">startingDeadlineSeconds</span><span class="token punctuation">:</span> <span class="token comment"># 启动作业错误的超时时长</span>
  <span class="token key atrule">jobTemplate</span><span class="token punctuation">:</span> <span class="token comment"># job控制器模板，用于为cronjob控制器生成job对象;下面其实就是job的定义</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">completions</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">parallelism</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">activeDeadlineSeconds</span><span class="token punctuation">:</span> <span class="token number">30</span>
      <span class="token key atrule">backoffLimit</span><span class="token punctuation">:</span> <span class="token number">6</span>
      <span class="token key atrule">manualSelector</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">selector</span><span class="token punctuation">:</span>
        <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
          <span class="token key atrule">app</span><span class="token punctuation">:</span> counter<span class="token punctuation">-</span>pod
        <span class="token key atrule">matchExpressions</span><span class="token punctuation">:</span> 规则
          <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">key</span><span class="token punctuation">:</span> app<span class="token punctuation">,</span> <span class="token key atrule">operator</span><span class="token punctuation">:</span> In<span class="token punctuation">,</span> <span class="token key atrule">values</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>counter<span class="token punctuation">-</span>pod<span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
          <span class="token key atrule">labels</span><span class="token punctuation">:</span>
            <span class="token key atrule">app</span><span class="token punctuation">:</span> counter<span class="token punctuation">-</span>pod
        <span class="token key atrule">spec</span><span class="token punctuation">:</span>
          <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never 
          <span class="token key atrule">containers</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> counter
            <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
            <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 20;done&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>需要重点解释的几个选项：
schedule: cron表达式，用于指定任务的执行时间
    <span class="token italic"><span class="token punctuation">*</span><span class="token content">/1    </span><span class="token punctuation">*</span></span>      <span class="token italic"><span class="token punctuation">*</span><span class="token content">    </span><span class="token punctuation">*</span></span>     *
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>分钟</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>小时</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>日</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>月份</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>星期</span><span class="token punctuation">&gt;</span></span>

<span class="token code keyword">    分钟 值从 0 到 59.
    小时 值从 0 到 23.
    日 值从 1 到 31.
    月 值从 1 到 12.
    星期 值从 0 到 6, 0 代表星期日
    多个时间可以用逗号隔开； 范围可以用连字符给出；*可以作为通配符； /表示每...</span>
concurrencyPolicy:
    Allow:   允许Jobs并发运行(默认)
    Forbid:  禁止并发运行，如果上一次运行尚未完成，则跳过下一次运行
    Replace: 替换，取消当前正在运行的作业并用新作业替换它
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建pc-cronjob.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> batch/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> CronJob
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>cronjob
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">controller</span><span class="token punctuation">:</span> cronjob
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span> <span class="token string">&quot;*/1 * * * *&quot;</span>
  <span class="token key atrule">jobTemplate</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">template</span><span class="token punctuation">:</span>
        <span class="token key atrule">spec</span><span class="token punctuation">:</span>
          <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never
          <span class="token key atrule">containers</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> counter
            <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
            <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;for i in 9 8 7 6 5 4 3 2 1; do echo $i;sleep 3;done&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建cronjob</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pc-cronjob.yaml</span>
cronjob.batch/pc-cronjob created

<span class="token comment"># 查看cronjob</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get cronjobs -n dev</span>
NAME         SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
pc-cronjob   */1 * * * *   False     <span class="token number">0</span>        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>          6s

<span class="token comment"># 查看job</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get jobs -n dev</span>
NAME                    COMPLETIONS   DURATION   AGE
pc-cronjob-1592587800   <span class="token number">1</span>/1           28s        3m26s
pc-cronjob-1592587860   <span class="token number">1</span>/1           28s        2m26s
pc-cronjob-1592587920   <span class="token number">1</span>/1           28s        86s

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
pc-cronjob-1592587800-x4tsm   <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          2m24s
pc-cronjob-1592587860-r5gv4   <span class="token number">0</span>/1     Completed   <span class="token number">0</span>          84s
pc-cronjob-1592587920-9dxxq   <span class="token number">1</span>/1     Running     <span class="token number">0</span>          24s


<span class="token comment"># 删除cronjob</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl  delete -f pc-cronjob.yaml</span>
cronjob.batch <span class="token string">&quot;pc-cronjob&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-service详解" tabindex="-1"><a class="header-anchor" href="#_7-service详解" aria-hidden="true">#</a> 7. Service详解</h3><h4 id="_7-1-service介绍" tabindex="-1"><a class="header-anchor" href="#_7-1-service介绍" aria-hidden="true">#</a> 7.1 Service介绍</h4><p>在kubernetes中，pod是应用程序的载体，我们可以通过pod的ip来访问应用程序，但是pod的ip地址不是固定的，这也就意味着不方便直接采用pod的ip对服务进行访问。</p><p>为了解决这个问题，kubernetes提供了Service资源，Service会对提供同一个服务的多个pod进行聚合，并且提供一个统一的入口地址。通过访问Service的入口地址就能访问到后面的pod服务。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140847768.png" alt="图 31" tabindex="0" loading="lazy"><figcaption>图 31</figcaption></figure><p>Service在很多情况下只是一个概念，真正起作用的其实是kube-proxy服务进程，每个Node节点上都运行着一个kube-proxy服务进程。当创建Service的时候会通过api-server向etcd写入创建的service的信息，而kube-proxy会基于监听的机制发现这种Service的变动，然后<strong>它会将最新的Service信息转换成对应的访问规则</strong>。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140857316.png" alt="图 32" tabindex="0" loading="lazy"><figcaption>图 32</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 10.97.97.97:80 是service提供的访问入口
# 当访问这个入口的时候，可以发现后面有三个pod的服务在等待调用，
# kube-proxy会基于rr（轮询）的策略，将请求分发到其中一个pod上去
# 这个规则会同时在集群内的所有节点上都生成，所以在任何一个节点，访问都可以。
[root@node1 ~]# ipvsadm -Ln
IP Virtual Server version 1.2.1 (size=4096)
Prot LocalAddress:Port Scheduler Flags
  -&gt; RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  10.97.97.97:80 rr
  -&gt; 10.244.1.39:80               Masq    1      0          0
  -&gt; 10.244.1.40:80               Masq    1      0          0
  -&gt; 10.244.2.33:80               Masq    1      0          0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>kube-proxy目前支持三种工作模式:</p><p>kube-proxy目前支持三种工作模式:</p><h5 id="_7-1-1-userspace-模式" tabindex="-1"><a class="header-anchor" href="#_7-1-1-userspace-模式" aria-hidden="true">#</a> 7.1.1 userspace 模式</h5><p>userspace模式下，kube-proxy会为每一个Service创建一个监听端口，发向Cluster IP的请求被Iptables规则重定向到kube-proxy监听的端口上，kube-proxy根据LB算法选择一个提供服务的Pod并和其建立链接，以将请求转发到Pod上。 该模式下，kube-proxy充当了一个四层负责均衡器的角色。由于kube-proxy运行在userspace中，在进行转发处理时会增加内核和用户空间之间的数据拷贝，虽然比较稳定，但是效率比较低。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140876186.png" alt="图 33" tabindex="0" loading="lazy"><figcaption>图 33</figcaption></figure><h5 id="_7-1-2-iptables-模式" tabindex="-1"><a class="header-anchor" href="#_7-1-2-iptables-模式" aria-hidden="true">#</a> 7.1.2 iptables 模式</h5><p>iptables模式下，kube-proxy为service后端的每个Pod创建对应的iptables规则，直接将发向Cluster IP的请求重定向到一个Pod IP。 该模式下kube-proxy不承担四层负责均衡器的角色，只负责创建iptables规则。该模式的优点是较userspace模式效率更高，但不能提供灵活的LB策略，当后端Pod不可用时也无法进行重试。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140885267.png" alt="图 34" tabindex="0" loading="lazy"><figcaption>图 34</figcaption></figure><h5 id="_7-1-3-ipvs-模式" tabindex="-1"><a class="header-anchor" href="#_7-1-3-ipvs-模式" aria-hidden="true">#</a> 7.1.3 ipvs 模式</h5><p>ipvs模式和iptables类似，kube-proxy监控Pod的变化并创建相应的ipvs规则。ipvs相对iptables转发效率更高。除此以外，ipvs支持更多的LB算法。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140900716.png" alt="图 35" tabindex="0" loading="lazy"><figcaption>图 35</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 此模式必须安装ipvs内核模块，否则会降级为iptables</span>
<span class="token comment"># 开启ipvs</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl edit cm kube-proxy -n kube-system</span>
<span class="token comment"># 修改mode: &quot;ipvs&quot;</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod -l k8s-app=kube-proxy -n kube-system</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ipvsadm -Ln</span>
IP Virtual Server version <span class="token number">1.2</span>.1 <span class="token punctuation">(</span>size<span class="token operator">=</span><span class="token number">4096</span><span class="token punctuation">)</span>
Prot LocalAddress:Port Scheduler Flags
  -<span class="token operator">&gt;</span> RemoteAddress:Port           Forward Weight ActiveConn InActConn
TCP  <span class="token number">10.97</span>.97.97:80 rr
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.39:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.40:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.2.33:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-service类型" tabindex="-1"><a class="header-anchor" href="#_7-2-service类型" aria-hidden="true">#</a> 7.2 Service类型</h4><p>Service的资源清单文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service  <span class="token comment"># 资源类型</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1  <span class="token comment"># 资源版本</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> service <span class="token comment"># 资源名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev <span class="token comment"># 命名空间</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 描述</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 标签选择器，用于确定当前service代理哪些pod</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token comment"># Service类型，指定service的访问方式</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span>  <span class="token comment"># 虚拟服务的ip地址</span>
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> <span class="token comment"># session亲和性，支持ClientIP、None两个选项</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment"># 端口信息</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP 
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3017</span>  <span class="token comment"># service端口</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">5003</span> <span class="token comment"># pod端口</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31122</span> <span class="token comment"># 主机端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ClusterIP：默认值，它是Kubernetes系统自动分配的虚拟IP，只能在集群内部访问</li><li>NodePort：将Service通过指定的Node上的端口暴露给外部，通过此方法，就可以在集群外部访问服务</li><li>LoadBalancer：使用外接负载均衡器完成到服务的负载分发，注意此模式需要外部云环境支持</li><li>ExternalName： 把集群外部的服务引入集群内部，直接使用</li></ul><h4 id="_7-3-service使用" tabindex="-1"><a class="header-anchor" href="#_7-3-service使用" aria-hidden="true">#</a> 7.3 Service使用</h4><h5 id="_7-3-1-实验环境准备" tabindex="-1"><a class="header-anchor" href="#_7-3-1-实验环境准备" aria-hidden="true">#</a> 7.3.1 实验环境准备</h5><p>在使用service之前，首先利用Deployment创建出3个pod，注意要为pod设置<code>app=nginx-pod</code>的标签</p><p>创建deployment.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment      
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pc<span class="token punctuation">-</span>deployment
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f deployment.yaml</span>
deployment.apps/pc-deployment created

<span class="token comment"># 查看pod详情</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide --show-labels</span>
NAME                             READY   STATUS     IP            NODE     LABELS
pc-deployment-66cb59b984-8p84h   <span class="token number">1</span>/1     Running    <span class="token number">10.244</span>.1.39   node1    <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod
pc-deployment-66cb59b984-vx8vx   <span class="token number">1</span>/1     Running    <span class="token number">10.244</span>.2.33   node2    <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod
pc-deployment-66cb59b984-wnncx   <span class="token number">1</span>/1     Running    <span class="token number">10.244</span>.1.40   node1    <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod

<span class="token comment"># 为了方便后面的测试，修改下三台nginx的index.html页面（三台修改的IP地址不一致）</span>
<span class="token comment"># kubectl exec -it pc-deployment-66cb59b984-8p84h -n dev /bin/sh</span>
<span class="token comment"># echo &quot;10.244.1.39&quot; &gt; /usr/share/nginx/html/index.html</span>

<span class="token comment">#修改完毕之后，访问测试</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.244.1.39</span>
<span class="token number">10.244</span>.1.39
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.244.2.33</span>
<span class="token number">10.244</span>.2.33
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.244.1.40</span>
<span class="token number">10.244</span>.1.40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-3-2-clusterip类型的service" tabindex="-1"><a class="header-anchor" href="#_7-3-2-clusterip类型的service" aria-hidden="true">#</a> 7.3.2 ClusterIP类型的Service</h5><p>创建service-clusterip.yaml文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> service<span class="token punctuation">-</span>clusterip
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.97.97.97 <span class="token comment"># service的ip地址，如果不写，默认会生成一个</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>  <span class="token comment"># Service端口       </span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># pod端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f service-clusterip.yaml</span>
service/service-clusterip created

<span class="token comment"># 查看service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -n dev -o wide</span>
NAME                TYPE        CLUSTER-IP    EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE   SELECTOR
service-clusterip   ClusterIP   <span class="token number">10.97</span>.97.97   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP    13s   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod

<span class="token comment"># 查看service的详细信息</span>
<span class="token comment"># 在这里有一个Endpoints列表，里面就是当前service可以负载到的服务入口</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe svc service-clusterip -n dev</span>
Name:              service-clusterip
Namespace:         dev
Labels:            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Selector:          <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod
Type:              ClusterIP
IP:                <span class="token number">10.97</span>.97.97
Port:              <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>  <span class="token number">80</span>/TCP
TargetPort:        <span class="token number">80</span>/TCP
Endpoints:         <span class="token number">10.244</span>.1.39:80,10.244.1.40:80,10.244.2.33:80
Session Affinity:  None
Events:            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token comment"># 查看ipvs的映射规则</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># ipvsadm -Ln</span>
TCP  <span class="token number">10.97</span>.97.97:80 rr
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.39:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.40:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.2.33:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>

<span class="token comment"># 访问10.97.97.97:80观察效果</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.97.97.97:80</span>
<span class="token number">10.244</span>.2.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-3-3-endpoint" tabindex="-1"><a class="header-anchor" href="#_7-3-3-endpoint" aria-hidden="true">#</a> 7.3.3 Endpoint</h5><p>Endpoint是kubernetes中的一个资源对象，存储在etcd中，用来记录一个service对应的所有pod的访问地址，它是根据service配置文件中selector描述产生的。</p><p>一个Service由一组Pod组成，这些Pod通过Endpoints暴露出来，<strong>Endpoints是实现实际服务的端点集合</strong>。换句话说，service和pod之间的联系是通过endpoints实现的。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140931929.png" alt="图 36" tabindex="0" loading="lazy"><figcaption>图 36</figcaption></figure><p><strong>负载分发策略</strong></p><p>对Service的访问被分发到了后端的Pod上去，目前kubernetes提供了两种负载分发策略：</p><ul><li><p>如果不定义，默认使用kube-proxy的策略，比如随机、轮询</p></li><li><p>基于客户端地址的会话保持模式，即来自同一个客户端发起的所有请求都会转发到固定的一个Pod上</p><p>此模式可以使在spec中添加<code>sessionAffinity:ClientIP</code>选项</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看ipvs的映射规则【rr 轮询】</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># ipvsadm -Ln</span>
TCP  <span class="token number">10.97</span>.97.97:80 rr
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.39:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.40:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.2.33:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>

<span class="token comment"># 循环访问测试</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># while true;do curl 10.97.97.97:80; sleep 5; done;</span>
<span class="token number">10.244</span>.1.40
<span class="token number">10.244</span>.1.39
<span class="token number">10.244</span>.2.33
<span class="token number">10.244</span>.1.40
<span class="token number">10.244</span>.1.39
<span class="token number">10.244</span>.2.33

<span class="token comment"># 修改分发策略----sessionAffinity:ClientIP</span>

<span class="token comment"># 查看ipvs规则【persistent 代表持久】</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># ipvsadm -Ln</span>
TCP  <span class="token number">10.97</span>.97.97:80 rr persistent <span class="token number">10800</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.39:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.1.40:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>
  -<span class="token operator">&gt;</span> <span class="token number">10.244</span>.2.33:80               Masq    <span class="token number">1</span>      <span class="token number">0</span>          <span class="token number">0</span>

<span class="token comment"># 循环访问测试</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># while true;do curl 10.97.97.97; sleep 5; done;</span>
<span class="token number">10.244</span>.2.33
<span class="token number">10.244</span>.2.33
<span class="token number">10.244</span>.2.33
  
<span class="token comment"># 删除service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl delete -f service-clusterip.yaml</span>
<span class="token function">service</span> <span class="token string">&quot;service-clusterip&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-3-4-headliness类型的service" tabindex="-1"><a class="header-anchor" href="#_7-3-4-headliness类型的service" aria-hidden="true">#</a> 7.3.4 HeadLiness类型的Service</h5><p>在某些场景中，开发人员可能不想使用Service提供的负载均衡功能，而希望自己来控制负载均衡策略，针对这种情况，kubernetes提供了HeadLiness Service，这类Service不会分配Cluster IP，如果想要访问service，只能通过service的域名进行查询。</p><p>创建service-headliness.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> service<span class="token punctuation">-</span>headliness
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None <span class="token comment"># 将clusterIP设置为None，即可创建headliness Service</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>    
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f service-headliness.yaml</span>
service/service-headliness created

<span class="token comment"># 获取service， 发现CLUSTER-IP未分配</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc service-headliness -n dev -o wide</span>
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>   AGE   SELECTOR
service-headliness   ClusterIP   None         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP    11s   <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod

<span class="token comment"># 查看service详情</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe svc service-headliness  -n dev</span>
Name:              service-headliness
Namespace:         dev
Labels:            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Selector:          <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod
Type:              ClusterIP
IP:                None
Port:              <span class="token operator">&lt;</span>unset<span class="token operator">&gt;</span>  <span class="token number">80</span>/TCP
TargetPort:        <span class="token number">80</span>/TCP
Endpoints:         <span class="token number">10.244</span>.1.39:80,10.244.1.40:80,10.244.2.33:80
Session Affinity:  None
Events:            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

<span class="token comment"># 查看域名的解析情况</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it pc-deployment-66cb59b984-8p84h -n dev /bin/sh</span>
/ <span class="token comment"># cat /etc/resolv.conf</span>
nameserver <span class="token number">10.96</span>.0.10
search dev.svc.cluster.local svc.cluster.local cluster.local

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># dig @10.96.0.10 service-headliness.dev.svc.cluster.local</span>
service-headliness.dev.svc.cluster.local. <span class="token number">30</span> IN A <span class="token number">10.244</span>.1.40
service-headliness.dev.svc.cluster.local. <span class="token number">30</span> IN A <span class="token number">10.244</span>.1.39
service-headliness.dev.svc.cluster.local. <span class="token number">30</span> IN A <span class="token number">10.244</span>.2.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-3-5-nodeport类型的service" tabindex="-1"><a class="header-anchor" href="#_7-3-5-nodeport类型的service" aria-hidden="true">#</a> 7.3.5 NodePort类型的Service</h5><p>在之前的样例中，创建的Service的ip地址只有集群内部才可以访问，如果希望将Service暴露给集群外部使用，那么就要使用到另外一种类型的Service，称为NodePort类型。NodePort的工作原理其实就是<strong>将service的端口映射到Node的一个端口上</strong>，然后就可以通过<code>NodeIp:NodePort</code>来访问service了。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140954833.png" alt="图 37" tabindex="0" loading="lazy"><figcaption>图 37</figcaption></figure><p>创建service-nodeport.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> service<span class="token punctuation">-</span>nodeport
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment"># service类型</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30002</span> <span class="token comment"># 指定绑定的node的端口(默认的取值范围是：30000-32767), 如果不指定，会默认分配</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f service-nodeport.yaml</span>
service/service-nodeport created

<span class="token comment"># 查看service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -n dev -o wide</span>
NAME               TYPE       CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>       SELECTOR
service-nodeport   NodePort   <span class="token number">10.105</span>.64.191   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30002/TCP  <span class="token assign-left variable">app</span><span class="token operator">=</span>nginx-pod

<span class="token comment"># 接下来可以通过电脑主机的浏览器去访问集群中任意一个nodeip的30002端口，即可访问到pod</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-3-6-loadbalancer类型的service" tabindex="-1"><a class="header-anchor" href="#_7-3-6-loadbalancer类型的service" aria-hidden="true">#</a> 7.3.6 LoadBalancer类型的Service</h5><p>LoadBalancer和NodePort很相似，目的都是向外部暴露一个端口，区别在于LoadBalancer会在集群的外部再来做一个负载均衡设备，而这个设备需要外部环境支持的，外部服务发送到这个设备上的请求，会被设备负载之后转发到集群中。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140973217.png" alt="图 38" tabindex="0" loading="lazy"><figcaption>图 38</figcaption></figure><h5 id="_7-3-7-externalname类型的service" tabindex="-1"><a class="header-anchor" href="#_7-3-7-externalname类型的service" aria-hidden="true">#</a> 7.3.7 ExternalName类型的Service</h5><p>ExternalName类型的Service用于引入集群外部的服务，它通过<code>externalName</code>属性指定外部一个服务的地址，然后在集群内部访问此service就可以访问到外部的服务了。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680140987411.png" alt="图 39" tabindex="0" loading="lazy"><figcaption>图 39</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>apiVersion: v1
kind: Service
metadata:
  name: service-externalname
  namespace: dev
spec:
  type: ExternalName <span class="token comment"># service类型</span>
  externalName: www.baidu.com  <span class="token comment">#改成ip地址也可以</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建service</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl  create -f service-externalname.yaml</span>
service/service-externalname created

<span class="token comment"># 域名解析</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># dig @10.96.0.10 service-externalname.dev.svc.cluster.local</span>
service-externalname.dev.svc.cluster.local. <span class="token number">30</span> IN CNAME www.baidu.com.
www.baidu.com.          <span class="token number">30</span>      IN      CNAME   www.a.shifen.com.
www.a.shifen.com.       <span class="token number">30</span>      IN      A       <span class="token number">39.156</span>.66.18
www.a.shifen.com.       <span class="token number">30</span>      IN      A       <span class="token number">39.156</span>.66.14
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-4-ingress介绍" tabindex="-1"><a class="header-anchor" href="#_7-4-ingress介绍" aria-hidden="true">#</a> 7.4 Ingress介绍</h4><p>在前面课程中已经提到，Service对集群之外暴露服务的主要方式有两种：NotePort和LoadBalancer，但是这两种方式，都有一定的缺点：</p><ul><li>NodePort方式的缺点是会占用很多集群机器的端口，那么当集群服务变多的时候，这个缺点就愈发明显</li><li>LB方式的缺点是每个service需要一个LB，浪费、麻烦，并且需要kubernetes之外设备的支持</li></ul><p>基于这种现状，kubernetes提供了Ingress资源对象，Ingress只需要一个NodePort或者一个LB就可以满足暴露多个Service的需求。工作机制大致如下图表示：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141007436.png" alt="图 40" tabindex="0" loading="lazy"><figcaption>图 40</figcaption></figure><p>实际上，Ingress相当于一个7层的负载均衡器，是kubernetes对反向代理的一个抽象，它的工作原理类似于Nginx，可以理解成在<strong>Ingress里建立诸多映射规则，Ingress Controller通过监听这些配置规则并转化成Nginx的反向代理配置 , 然后对外部提供服务</strong>。在这里有两个核心概念：</p><ul><li>ingress：kubernetes中的一个对象，作用是定义请求如何转发到service的规则</li><li>ingress controller：具体实现反向代理及负载均衡的程序，对ingress定义的规则进行解析，根据配置的规则来实现请求转发，实现方式有很多，比如Nginx, Contour, Haproxy等等</li></ul><p>Ingress（以Nginx为例）的工作原理如下：</p><ol><li>用户编写Ingress规则，说明哪个域名对应kubernetes集群中的哪个Service</li><li>Ingress控制器动态感知Ingress服务规则的变化，然后生成一段对应的Nginx反向代理配置</li><li>Ingress控制器会将生成的Nginx配置写入到一个运行着的Nginx服务中，并动态更新</li><li>到此为止，其实真正在工作的就是一个Nginx了，内部配置了用户定义的请求转发规则</li></ol><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141029215.png" alt="图 41" tabindex="0" loading="lazy"><figcaption>图 41</figcaption></figure><h4 id="_7-5-ingress使用" tabindex="-1"><a class="header-anchor" href="#_7-5-ingress使用" aria-hidden="true">#</a> 7.5 Ingress使用</h4><h5 id="_7-5-1-环境准备-搭建ingress环境" tabindex="-1"><a class="header-anchor" href="#_7-5-1-环境准备-搭建ingress环境" aria-hidden="true">#</a> 7.5.1 环境准备 搭建ingress环境</h5><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token comment"># 创建文件夹</span>
[root<span class="token operator">@</span>k8s-master01 ~]<span class="token comment"># mkdir ingress-controller</span>
[root<span class="token operator">@</span>k8s-master01 ~]<span class="token comment"># cd ingress-controller/</span>

<span class="token comment"># 获取ingress-nginx，本次案例使用的是0.30版本</span>
[root<span class="token operator">@</span>k8s-master01 ingress-controller]<span class="token comment"># wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/mandatory.yaml</span>
[root<span class="token operator">@</span>k8s-master01 ingress-controller]<span class="token comment"># wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/provider/baremetal/service-nodeport.yaml</span>

<span class="token comment"># 修改mandatory.yaml文件中的仓库</span>
<span class="token comment"># 修改quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.30.0</span>
<span class="token comment"># 为quay-mirror.qiniu.com/kubernetes-ingress-controller/nginx-ingress-controller:0.30.0</span>
<span class="token comment"># 创建ingress-nginx</span>
[root<span class="token operator">@</span>k8s-master01 ingress-controller]<span class="token comment"># kubectl apply -f ./</span>

<span class="token comment"># 查看ingress-nginx</span>
[root<span class="token operator">@</span>k8s-master01 ingress-controller]<span class="token comment"># kubectl get pod -n ingress-nginx</span>
NAME                                           READY   STATUS    RESTARTS   AGE
pod/nginx-ingress-controller-fbf967dd5-4qpbp   1/1     Running   0          12h

<span class="token comment"># 查看service</span>
[root<span class="token operator">@</span>k8s-master01 ingress-controller]<span class="token comment"># kubectl get svc -n ingress-nginx</span>
NAME            TYPE       CLUSTER-IP     EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                      AGE
<span class="token target symbol">ingress-nginx   NodePort   10.98.75.163   &lt;none&gt;        80</span><span class="token punctuation">:</span>32240/TCP,443<span class="token punctuation">:</span>31335/TCP   11h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-5-2-准备service和pod" tabindex="-1"><a class="header-anchor" href="#_7-5-2-准备service和pod" aria-hidden="true">#</a> 7.5.2 准备service和pod</h5><p>为了后面的实验比较方便，创建如下图所示的模型</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141060152.png" alt="图 42" tabindex="0" loading="lazy"><figcaption>图 42</figcaption></figure><p>创建tomcat-nginx.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>deployment
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>pod
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>pod
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat
        <span class="token key atrule">image</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">:</span>8.5<span class="token punctuation">-</span>jre10<span class="token punctuation">-</span>slim
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>service
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pod
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>service
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>pod
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f tomcat-nginx.yaml</span>

<span class="token comment"># 查看</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get svc -n dev</span>
NAME             TYPE        CLUSTER-IP   EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>    AGE
nginx-service    ClusterIP   None         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>/TCP     48s
tomcat-service   ClusterIP   None         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8080</span>/TCP   48s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-5-3-http代理" tabindex="-1"><a class="header-anchor" href="#_7-5-3-http代理" aria-hidden="true">#</a> 7.5.3 Http代理</h5><p>创建ingress-http.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> extensions/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>http
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> nginx.itheima.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>service
          <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> tomcat.itheima.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>service
          <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f ingress-http.yaml</span>
ingress.extensions/ingress-http created

<span class="token comment"># 查看</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ing ingress-http -n dev</span>
NAME           HOSTS                                  ADDRESS   PORTS   AGE
ingress-http   nginx.itheima.com,tomcat.itheima.com             <span class="token number">80</span>      22s

<span class="token comment"># 查看详情</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe ing ingress-http  -n dev</span>
<span class="token punctuation">..</span>.
Rules:
Host                Path  Backends
----                ----  --------
nginx.itheima.com   / nginx-service:80 <span class="token punctuation">(</span><span class="token number">10.244</span>.1.96:80,10.244.1.97:80,10.244.2.112:80<span class="token punctuation">)</span>
tomcat.itheima.com  / tomcat-service:8080<span class="token punctuation">(</span><span class="token number">10.244</span>.1.94:8080,10.244.1.95:8080,10.244.2.111:8080<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.

<span class="token comment"># 接下来,在本地电脑上配置host文件,解析上面的两个域名到192.168.109.100(master)上</span>
<span class="token comment"># 然后,就可以分别访问tomcat.itheima.com:32240  和  nginx.itheima.com:32240 查看效果了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-5-4-https代理" tabindex="-1"><a class="header-anchor" href="#_7-5-4-https代理" aria-hidden="true">#</a> 7.5.4 Https代理</h5><p>创建证书</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成证书</span>
openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-keyout</span> tls.key <span class="token parameter variable">-out</span> tls.crt <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=BJ/L=BJ/O=nginx/CN=itheima.com&quot;</span>

<span class="token comment"># 创建密钥</span>
kubectl create secret tls tls-secret <span class="token parameter variable">--key</span> tls.key <span class="token parameter variable">--cert</span> tls.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建ingress-https.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> extensions/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>https
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">tls</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx.itheima.com
      <span class="token punctuation">-</span> tomcat.itheima.com
      <span class="token key atrule">secretName</span><span class="token punctuation">:</span> tls<span class="token punctuation">-</span>secret <span class="token comment"># 指定秘钥</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> nginx.itheima.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>service
          <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> tomcat.itheima.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> tomcat<span class="token punctuation">-</span>service
          <span class="token key atrule">servicePort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f ingress-https.yaml</span>
ingress.extensions/ingress-https created

<span class="token comment"># 查看</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get ing ingress-https -n dev</span>
NAME            HOSTS                                  ADDRESS         PORTS     AGE
ingress-https   nginx.itheima.com,tomcat.itheima.com   <span class="token number">10.104</span>.184.38   <span class="token number">80</span>, <span class="token number">443</span>   2m42s

<span class="token comment"># 查看详情</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe ing ingress-https -n dev</span>
<span class="token punctuation">..</span>.
TLS:
  tls-secret terminates nginx.itheima.com,tomcat.itheima.com
Rules:
Host              Path Backends
----              ---- --------
nginx.itheima.com  /  nginx-service:80 <span class="token punctuation">(</span><span class="token number">10.244</span>.1.97:80,10.244.1.98:80,10.244.2.119:80<span class="token punctuation">)</span>
tomcat.itheima.com /  tomcat-service:8080<span class="token punctuation">(</span><span class="token number">10.244</span>.1.99:8080,10.244.2.117:8080,10.244.2.120:8080<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.

<span class="token comment"># 下面可以通过浏览器访问https://nginx.itheima.com:31335 和 https://tomcat.itheima.com:31335来查看了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-数据存储" tabindex="-1"><a class="header-anchor" href="#_8-数据存储" aria-hidden="true">#</a> 8. 数据存储</h3><p>在前面已经提到，容器的生命周期可能很短，会被频繁地创建和销毁。那么容器在销毁时，保存在容器中的数据也会被清除。这种结果对用户来说，在某些情况下是不乐意看到的。为了持久化保存容器的数据，kubernetes引入了Volume的概念。</p><p>Volume是Pod中能够被多个容器访问的共享目录，它被定义在Pod上，然后被一个Pod里的多个容器挂载到具体的文件目录下，kubernetes通过Volume实现同一个Pod中不同容器之间的数据共享以及数据的持久化存储。Volume的生命容器不与Pod中单个容器的生命周期相关，当容器终止或者重启时，Volume中的数据也不会丢失。</p><p>kubernetes的Volume支持多种类型，比较常见的有下面几个：</p><ul><li>简单存储：EmptyDir、HostPath、NFS</li><li>高级存储：PV、PVC</li><li>配置存储：ConfigMap、Secret</li></ul><h4 id="_8-1-基本存储" tabindex="-1"><a class="header-anchor" href="#_8-1-基本存储" aria-hidden="true">#</a> 8.1 基本存储</h4><h5 id="_8-1-1-emptydir" tabindex="-1"><a class="header-anchor" href="#_8-1-1-emptydir" aria-hidden="true">#</a> 8.1.1 EmptyDir</h5><p>EmptyDir是最基础的Volume类型，一个EmptyDir就是Host上的一个空目录。</p><p>EmptyDir是在Pod被分配到Node时创建的，它的初始内容为空，并且无须指定宿主机上对应的目录文件，因为kubernetes会自动分配一个目录，当Pod销毁时， EmptyDir中的数据也会被永久删除。 EmptyDir用途如下：</p><ul><li>临时空间，例如用于某些应用程序运行时所需的临时目录，且无须永久保留</li><li>一个容器需要从另一个容器中获取数据的目录（多容器共享目录）</li></ul><p>接下来，通过一个容器之间文件共享的案例来使用一下EmptyDir。</p><p>在一个Pod中准备两个容器nginx和busybox，然后声明一个Volume分别挂在到两个容器的目录中，然后nginx容器负责向Volume中写日志，busybox中通过命令将日志内容读到控制台。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141091427.png" alt="图 43" tabindex="0" loading="lazy"><figcaption>图 43</figcaption></figure><p>创建一个volume-emptydir.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>emptydir
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 将logs-volume挂在到nginx容器中，对应的目录为 /var/log/nginx</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/nginx
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tail -f /logs/access.log&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 初始命令，动态读取指定文件中内容</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>  <span class="token comment"># 将logs-volume 挂在到busybox容器中，对应的目录为 /logs</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /logs
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 声明volume， name为logs-volume，类型为emptyDir</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
    <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f volume-emptydir.yaml</span>
pod/volume-emptydir created

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods volume-emptydir -n dev -o wide</span>
NAME                  READY   STATUS    RESTARTS   AGE      IP       NODE   <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span> 
volume-emptydir       <span class="token number">2</span>/2     Running   <span class="token number">0</span>          97s   <span class="token number">10.42</span>.2.9   node1  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment"># 通过podIp访问nginx</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.42.2.9</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment"># 通过kubectl logs命令查看指定容器的标准输出</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl logs -f volume-emptydir -n dev -c busybox</span>
<span class="token number">10.42</span>.1.0 - - <span class="token punctuation">[</span><span class="token number">27</span>/Jun/2021:15:08:54 +0000<span class="token punctuation">]</span> <span class="token string">&quot;GET / HTTP/1.1&quot;</span> <span class="token number">200</span> <span class="token number">612</span> <span class="token string">&quot;-&quot;</span> <span class="token string">&quot;curl/7.29.0&quot;</span> <span class="token string">&quot;-&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-1-2-hostpath" tabindex="-1"><a class="header-anchor" href="#_8-1-2-hostpath" aria-hidden="true">#</a> 8.1.2 HostPath</h5><p>上节课提到，EmptyDir中数据不会被持久化，它会随着Pod的结束而销毁，如果想简单的将数据持久化到主机中，可以选择HostPath。</p><p>HostPath就是将Node主机中一个实际目录挂在到Pod中，以供容器使用，这样的设计就可以保证Pod销毁了，但是数据依据可以存在于Node主机上。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141114201.png" alt="图 44" tabindex="0" loading="lazy"><figcaption>图 44</figcaption></figure><p>创建一个volume-hostpath.yaml：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>hostpath
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/nginx
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tail -f /logs/access.log&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /logs
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
    <span class="token key atrule">hostPath</span><span class="token punctuation">:</span> 
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/logs
      <span class="token key atrule">type</span><span class="token punctuation">:</span> DirectoryOrCreate  <span class="token comment"># 目录存在就使用，不存在就先创建后使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>关于type的值的一点说明：
    DirectoryOrCreate 目录存在就使用，不存在就先创建后使用
    Directory   目录必须存在
    FileOrCreate  文件存在就使用，不存在就先创建后使用
    File 文件必须存在 
    Socket  unix套接字必须存在
    CharDevice  字符设备必须存在
    BlockDevice 块设备必须存在
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建Pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f volume-hostpath.yaml</span>
pod/volume-hostpath created

<span class="token comment"># 查看Pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods volume-hostpath -n dev -o wide</span>
NAME                  READY   STATUS    RESTARTS   AGE   IP             NODE   <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
pod-volume-hostpath   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          16s   <span class="token number">10.42</span>.2.10     node1  <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment">#访问nginx</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.42.2.10</span>

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl logs -f volume-emptydir -n dev -c busybox</span>

<span class="token comment"># 接下来就可以去host的/root/logs目录下查看存储的文件了</span>
<span class="token comment">###  注意: 下面的操作需要到Pod所在的节点运行（案例中是node1）</span>
<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># ls /root/logs/</span>
access.log  error.log

<span class="token comment"># 同样的道理，如果在此目录下创建一个文件，到容器中也是可以看到的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-1-3-nfs" tabindex="-1"><a class="header-anchor" href="#_8-1-3-nfs" aria-hidden="true">#</a> 8.1.3 NFS</h5><p>HostPath可以解决数据持久化的问题，但是一旦Node节点故障了，Pod如果转移到了别的节点，又会出现问题了，此时需要准备单独的网络存储系统，比较常用的用NFS、CIFS。</p><p>NFS是一个网络文件存储系统，可以搭建一台NFS服务器，然后将Pod中的存储直接连接到NFS系统上，这样的话，无论Pod在节点上怎么转移，只要Node跟NFS的对接没问题，数据就可以成功访问。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141134947.png" alt="图 45" tabindex="0" loading="lazy"><figcaption>图 45</figcaption></figure><p>1）首先要准备nfs的服务器，这里为了简单，直接是master节点做nfs服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在nfs上安装nfs服务</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># yum install nfs-utils -y</span>

<span class="token comment"># 准备一个共享目录</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># mkdir /root/data/nfs -pv</span>

<span class="token comment"># 将共享目录以读写权限暴露给192.168.5.0/24网段中的所有主机</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/exports</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># more /etc/exports</span>
/root/data/nfs     <span class="token number">192.168</span>.5.0/24<span class="token punctuation">(</span>rw,no_root_squash<span class="token punctuation">)</span>

<span class="token comment"># 启动nfs服务</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart nfs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）接下来，要在的每个node节点上都安装下nfs，这样的目的是为了node节点可以驱动nfs设备</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在node上安装nfs服务，注意不需要启动</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># yum install nfs-utils -y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3）接下来，就可以编写pod的配置文件了，创建volume-nfs.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> volume<span class="token punctuation">-</span>nfs
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/log/nginx
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;tail -f /logs/access.log&quot;</span><span class="token punctuation">]</span> 
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /logs
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> logs<span class="token punctuation">-</span>volume
    <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
      <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.5.6  <span class="token comment">#nfs服务器地址</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/data/nfs <span class="token comment">#共享文件路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）最后，运行下pod，观察结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f volume-nfs.yaml</span>
pod/volume-nfs created

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods volume-nfs -n dev</span>
NAME                  READY   STATUS    RESTARTS   AGE
volume-nfs        <span class="token number">2</span>/2     Running   <span class="token number">0</span>          2m9s

<span class="token comment"># 查看nfs服务器上的共享目录，发现已经有文件了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># ls /root/data/</span>
access.log  error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-高级存储" tabindex="-1"><a class="header-anchor" href="#_8-2-高级存储" aria-hidden="true">#</a> 8.2 高级存储</h4><p>前面已经学习了使用NFS提供存储，此时就要求用户会搭建NFS系统，并且会在yaml配置nfs。由于kubernetes支持的存储系统有很多，要求客户全都掌握，显然不现实。为了能够屏蔽底层存储实现的细节，方便用户使用， kubernetes引入PV和PVC两种资源对象。</p><ul><li><p>PV（Persistent Volume）是持久化卷的意思，是对底层的共享存储的一种抽象。一般情况下PV由kubernetes管理员进行创建和配置，它与底层具体的共享存储技术有关，并通过插件完成与共享存储的对接。</p></li><li><p>PVC（Persistent Volume Claim）是持久卷声明的意思，是用户对于存储需求的一种声明。换句话说，PVC其实就是用户向kubernetes系统发出的一种资源需求申请。</p></li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141155640.png" alt="图 46" tabindex="0" loading="lazy"><figcaption>图 46</figcaption></figure><p>使用了PV和PVC之后，工作可以得到进一步的细分：</p><ul><li>存储：存储工程师维护</li><li>PV： kubernetes管理员维护</li><li>PVC：kubernetes用户维护</li></ul><h5 id="_8-2-1-pv" tabindex="-1"><a class="header-anchor" href="#_8-2-1-pv" aria-hidden="true">#</a> 8.2.1 PV</h5><p>PV是存储资源的抽象，下面是资源清单文件:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1  
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pv2
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span> <span class="token comment"># 存储类型，与底层真正存储对应</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span>  <span class="token comment"># 存储能力，目前只支持存储空间的设置</span>
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 2Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>  <span class="token comment"># 访问模式</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> <span class="token comment"># 存储类别</span>
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> <span class="token comment"># 回收策略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PV 的关键配置参数说明：</p><ul><li><p><strong>存储类型</strong></p><p>底层实际存储的类型，kubernetes支持多种存储类型，每种存储类型的配置都有所差异</p></li><li><p><strong>存储能力（capacity）</strong></p></li></ul><p>目前只支持存储空间的设置( storage=1Gi )，不过未来可能会加入IOPS、吞吐量等指标的配置</p><ul><li><p><strong>访问模式（accessModes）</strong></p><p>用于描述用户应用对存储资源的访问权限，访问权限包括下面几种方式：</p><ul><li>ReadWriteOnce（RWO）：读写权限，但是只能被单个节点挂载</li><li>ReadOnlyMany（ROX）： 只读权限，可以被多个节点挂载</li><li>ReadWriteMany（RWX）：读写权限，可以被多个节点挂载</li></ul><p><code>需要注意的是，底层不同的存储类型可能支持的访问模式不同</code></p></li><li><p><strong>回收策略（persistentVolumeReclaimPolicy）</strong></p><p>当PV不再被使用了之后，对其的处理方式。目前支持三种策略：</p><ul><li>Retain （保留） 保留数据，需要管理员手工清理数据</li><li>Recycle（回收） 清除 PV 中的数据，效果相当于执行 rm -rf /thevolume/*</li><li>Delete （删除） 与 PV 相连的后端存储完成 volume 的删除操作，当然这常见于云服务商的存储服务</li></ul><p><code>需要注意的是，底层不同的存储类型可能支持的回收策略不同</code></p></li><li><p><strong>存储类别</strong></p><p>PV可以通过storageClassName参数指定一个存储类别</p><ul><li>具有特定类别的PV只能与请求了该类别的PVC进行绑定</li><li>未设定类别的PV则只能与不请求任何类别的PVC进行绑定</li></ul></li><li><p><strong>状态（status）</strong></p><p>一个 PV 的生命周期中，可能会处于4中不同的阶段：</p><ul><li>Available（可用）： 表示可用状态，还未被任何 PVC 绑定</li><li>Bound（已绑定）： 表示 PV 已经被 PVC 绑定</li><li>Released（已释放）： 表示 PVC 被删除，但是资源还未被集群重新声明</li><li>Failed（失败）： 表示该 PV 的自动回收失败</li></ul></li></ul><p><strong>实验</strong></p><p>使用NFS作为存储，来演示PV的使用，创建3个PV，对应NFS中的3个暴露的路径。</p><ol><li>准备NFS环境</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># mkdir /root/data/{pv1,pv2,pv3} -pv</span>

<span class="token comment"># 暴露服务</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># more /etc/exports</span>
/root/data/pv1     <span class="token number">192.168</span>.5.0/24<span class="token punctuation">(</span>rw,no_root_squash<span class="token punctuation">)</span>
/root/data/pv2     <span class="token number">192.168</span>.5.0/24<span class="token punctuation">(</span>rw,no_root_squash<span class="token punctuation">)</span>
/root/data/pv3     <span class="token number">192.168</span>.5.0/24<span class="token punctuation">(</span>rw,no_root_squash<span class="token punctuation">)</span>

<span class="token comment"># 重启服务</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment">#  systemctl restart nfs</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建pv.yaml</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span>  pv1
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span> 
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/data/pv1
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.5.6

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span>  pv2
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span> 
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 2Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/data/pv2
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.5.6
    
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span>  pv3
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span> 
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 3Gi
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain
  <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/data/pv3
    <span class="token key atrule">server</span><span class="token punctuation">:</span> 192.168.5.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 pv</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pv.yaml</span>
persistentvolume/pv1 created
persistentvolume/pv2 created
persistentvolume/pv3 created

<span class="token comment"># 查看pv</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pv -o wide</span>
NAME   CAPACITY   ACCESS MODES  RECLAIM POLICY  STATUS      AGE   VOLUMEMODE
pv1    1Gi        RWX            Retain        Available    10s   Filesystem
pv2    2Gi        RWX            Retain        Available    10s   Filesystem
pv3    3Gi        RWX            Retain        Available    9s    Filesystem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-2-2-pvc" tabindex="-1"><a class="header-anchor" href="#_8-2-2-pvc" aria-hidden="true">#</a> 8.2.2 PVC</h5><p>PVC是资源的申请，用来声明对存储空间、访问模式、存储类别需求信息。下面是资源清单文件:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> <span class="token comment"># 访问模式</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 采用标签对PV选择</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> <span class="token comment"># 存储类别</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token comment"># 请求空间</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 5Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PVC 的关键配置参数说明：</p><ul><li><strong>访问模式（accessModes）</strong></li></ul><p>用于描述用户应用对存储资源的访问权限</p><ul><li><p><strong>选择条件（selector）</strong></p><p>通过Label Selector的设置，可使PVC对于系统中己存在的PV进行筛选</p></li><li><p><strong>存储类别（storageClassName）</strong></p><p>PVC在定义时可以设定需要的后端存储的类别，只有设置了该class的pv才能被系统选出</p></li><li><p><strong>资源请求（Resources ）</strong></p><p>描述对存储资源的请求</p></li></ul><p><strong>实验</strong></p><ol><li>创建pvc.yaml，申请pv</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc1
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc2
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc3
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Gi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建pvc</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pvc.yaml</span>
persistentvolumeclaim/pvc1 created
persistentvolumeclaim/pvc2 created
persistentvolumeclaim/pvc3 created

<span class="token comment"># 查看pvc</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pvc  -n dev -o wide</span>
NAME   STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE   VOLUMEMODE
pvc1   Bound    pv1      1Gi        RWX                           15s   Filesystem
pvc2   Bound    pv2      2Gi        RWX                           15s   Filesystem
pvc3   Bound    pv3      3Gi        RWX                           15s   Filesystem

<span class="token comment"># 查看pv</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pv -o wide</span>
NAME  CAPACITY ACCESS MODES  RECLAIM POLICY  STATUS    CLAIM       AGE     VOLUMEMODE
pv1    1Gi        RWx        Retain          Bound    dev/pvc1    3h37m    Filesystem
pv2    2Gi        RWX        Retain          Bound    dev/pvc2    3h37m    Filesystem
pv3    3Gi        RWX        Retain          Bound    dev/pvc3    3h37m    Filesystem   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建pods.yaml, 使用pv</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod1
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;while true;do echo pod1 &gt;&gt; /root/out.txt; sleep 10; done;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /root/
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> volume
      <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
        <span class="token key atrule">claimName</span><span class="token punctuation">:</span> pvc1
        <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod2
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.30</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;while true;do echo pod2 &gt;&gt; /root/out.txt; sleep 10; done;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> volume
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /root/
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> volume
      <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
        <span class="token key atrule">claimName</span><span class="token punctuation">:</span> pvc2
        <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pods.yaml</span>
pod/pod1 created
pod/pod2 created

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev -o wide</span>
NAME   READY   STATUS    RESTARTS   AGE   IP            NODE   
pod1   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14s   <span class="token number">10.244</span>.1.69   node1   
pod2   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14s   <span class="token number">10.244</span>.1.70   node1  

<span class="token comment"># 查看pvc</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pvc -n dev -o wide</span>
NAME   STATUS   VOLUME   CAPACITY   ACCESS MODES      AGE   VOLUMEMODE
pvc1   Bound    pv1      1Gi        RWX               94m   Filesystem
pvc2   Bound    pv2      2Gi        RWX               94m   Filesystem
pvc3   Bound    pv3      3Gi        RWX               94m   Filesystem

<span class="token comment"># 查看pv</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pv -n dev -o wide</span>
NAME   CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM       AGE     VOLUMEMODE
pv1    1Gi        RWX            Retain           Bound    dev/pvc1    5h11m   Filesystem
pv2    2Gi        RWX            Retain           Bound    dev/pvc2    5h11m   Filesystem
pv3    3Gi        RWX            Retain           Bound    dev/pvc3    5h11m   Filesystem

<span class="token comment"># 查看nfs中的文件存储</span>
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># more /root/data/pv1/out.txt</span>
node1
node1
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># more /root/data/pv2/out.txt</span>
node2
node2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-2-3-生命周期" tabindex="-1"><a class="header-anchor" href="#_8-2-3-生命周期" aria-hidden="true">#</a> 8.2.3 生命周期</h5><p>PVC和PV是一一对应的，PV和PVC之间的相互作用遵循以下生命周期：</p><ul><li><p><strong>资源供应</strong>：管理员手动创建底层存储和PV</p></li><li><p><strong>资源绑定</strong>：用户创建PVC，kubernetes负责根据PVC的声明去寻找PV，并绑定</p><p>在用户定义好PVC之后，系统将根据PVC对存储资源的请求在已存在的PV中选择一个满足条件的</p><ul><li>一旦找到，就将该PV与用户定义的PVC进行绑定，用户的应用就可以使用这个PVC了</li><li>如果找不到，PVC则会无限期处于Pending状态，直到等到系统管理员创建了一个符合其要求的PV</li></ul><p>PV一旦绑定到某个PVC上，就会被这个PVC独占，不能再与其他PVC进行绑定了</p></li><li><p><strong>资源使用</strong>：用户可在pod中像volume一样使用pvc</p><p>Pod使用Volume的定义，将PVC挂载到容器内的某个路径进行使用。</p></li><li><p><strong>资源释放</strong>：用户删除pvc来释放pv</p><p>当存储资源使用完毕后，用户可以删除PVC，与该PVC绑定的PV将会被标记为“已释放”，但还不能立刻与其他PVC进行绑定。通过之前PVC写入的数据可能还被留在存储设备上，只有在清除之后该PV才能再次使用。</p></li><li><p><strong>资源回收</strong>：kubernetes根据pv设置的回收策略进行资源的回收</p><p>对于PV，管理员可以设定回收策略，用于设置与之绑定的PVC释放资源之后如何处理遗留数据的问题。只有PV的存储空间完成回收，才能供新的PVC绑定和使用</p></li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141198910.png" alt="图 47" tabindex="0" loading="lazy"><figcaption>图 47</figcaption></figure><h4 id="_8-3-配置存储" tabindex="-1"><a class="header-anchor" href="#_8-3-配置存储" aria-hidden="true">#</a> 8.3 配置存储</h4><h5 id="_8-3-1-configmap" tabindex="-1"><a class="header-anchor" href="#_8-3-1-configmap" aria-hidden="true">#</a> 8.3.1 ConfigMap</h5><p>ConfigMap是一种比较特殊的存储卷，它的主要作用是用来存储配置信息的。</p><p>创建configmap.yaml，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> configmap
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">info</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    username:admin
    password:123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，使用此配置文件创建configmap</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建configmap</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f configmap.yaml</span>
configmap/configmap created

<span class="token comment"># 查看configmap详情</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe cm configmap -n dev</span>
Name:         configmap
Namespace:    dev
Labels:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

Data
<span class="token operator">==</span><span class="token operator">==</span>
info:
----
username:admin
password:123456

Events:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来创建一个pod-configmap.yaml，将上面创建的configmap挂载进去</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>configmap
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># 将configmap挂载到目录</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /configmap/config
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># 引用configmap</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
    <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> configmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-configmap.yaml</span>
pod/pod-configmap created

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-configmap -n dev</span>
NAME            READY   STATUS    RESTARTS   AGE
pod-configmap   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          6s

<span class="token comment">#进入容器</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it pod-configmap -n dev /bin/sh</span>
<span class="token comment"># cd /configmap/config/</span>
<span class="token comment"># ls</span>
info
<span class="token comment"># more info</span>
username:admin
password:123456

<span class="token comment"># 可以看到映射已经成功，每个configmap都映射成了一个目录</span>
<span class="token comment"># key---&gt;文件     value----&gt;文件中的内容</span>
<span class="token comment"># 此时如果更新configmap的内容, 容器中的值也会动态更新</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-3-2-secret" tabindex="-1"><a class="header-anchor" href="#_8-3-2-secret" aria-hidden="true">#</a> 8.3.2 Secret</h5><p>在kubernetes中，还存在一种和ConfigMap非常类似的对象，称为Secret对象。它主要用于存储敏感信息，例如密码、秘钥、证书等等。</p><ol><li>首先使用base64对数据进行编码</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># echo -n &#39;admin&#39; | base64 #准备username</span>
<span class="token assign-left variable">YWRtaW4</span><span class="token operator">=</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># echo -n &#39;123456&#39; | base64 #准备password</span>
MTIzNDU2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>接下来编写secret.yaml，并创建Secret</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> secret
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> YWRtaW4=
  <span class="token key atrule">password</span><span class="token punctuation">:</span> MTIzNDU2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建secret</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f secret.yaml</span>
secret/secret created

<span class="token comment"># 查看secret详情</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe secret secret -n dev</span>
Name:         secret
Namespace:    dev
Labels:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Type:  Opaque
Data
<span class="token operator">==</span><span class="token operator">==</span>
password:  <span class="token number">6</span> bytes
username:  <span class="token number">5</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建pod-secret.yaml，将上面创建的secret挂载进去：</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pod<span class="token punctuation">-</span>secret
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.17.1
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> <span class="token comment"># 将secret挂载到目录</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /secret/config
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config
    <span class="token key atrule">secret</span><span class="token punctuation">:</span>
      <span class="token key atrule">secretName</span><span class="token punctuation">:</span> secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f pod-secret.yaml</span>
pod/pod-secret created

<span class="token comment"># 查看pod</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod pod-secret -n dev</span>
NAME            READY   STATUS    RESTARTS   AGE
pod-secret      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2m28s

<span class="token comment"># 进入容器，查看secret信息，发现已经自动解码了</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it pod-secret /bin/sh -n dev</span>
/ <span class="token comment"># ls /secret/config/</span>
password  username
/ <span class="token comment"># more /secret/config/username</span>
admin
/ <span class="token comment"># more /secret/config/password</span>
<span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，已经实现了利用secret实现了信息的编码。</p><h3 id="_9-安全认证" tabindex="-1"><a class="header-anchor" href="#_9-安全认证" aria-hidden="true">#</a> 9. 安全认证</h3><h4 id="_9-1-访问控制概述" tabindex="-1"><a class="header-anchor" href="#_9-1-访问控制概述" aria-hidden="true">#</a> 9.1 访问控制概述</h4><p>Kubernetes作为一个分布式集群的管理工具，保证集群的安全性是其一个重要的任务。所谓的安全性其实就是保证对Kubernetes的各种<strong>客户端</strong>进行<strong>认证和鉴权</strong>操作。</p><p><strong>客户端</strong></p><p>在Kubernetes集群中，客户端通常有两类：</p><ul><li><strong>User Account</strong>：一般是独立于kubernetes之外的其他服务管理的用户账号。</li><li><strong>Service Account</strong>：kubernetes管理的账号，用于为Pod中的服务进程在访问Kubernetes时提供身份标识。</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141229278.png" alt="图 48" tabindex="0" loading="lazy"><figcaption>图 48</figcaption></figure><p><strong>认证、授权与准入控制</strong></p><p>ApiServer是访问及管理资源对象的唯一入口。任何一个请求访问ApiServer，都要经过下面三个流程：</p><ul><li>Authentication（认证）：身份鉴别，只有正确的账号才能够通过认证</li><li>Authorization（授权）： 判断用户是否有权限对访问的资源执行特定的动作</li><li>Admission Control（准入控制）：用于补充授权机制以实现更加精细的访问控制功能。</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141245370.png" alt="图 49" tabindex="0" loading="lazy"><figcaption>图 49</figcaption></figure><h4 id="_9-2-认证管理" tabindex="-1"><a class="header-anchor" href="#_9-2-认证管理" aria-hidden="true">#</a> 9.2 认证管理</h4><p>Kubernetes集群安全的最关键点在于如何识别并认证客户端身份，它提供了3种客户端身份认证方式：</p><ul><li><p>HTTP Base认证：通过用户名+密码的方式认证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    这种认证方式是把“用户名:密码”用BASE64算法进行编码后的字符串放在HTTP请求中的Header Authorization域里发送给服务端。服务端收到后进行解码，获取用户名及密码，然后进行用户身份认证的过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>HTTP Token认证：通过一个Token来识别合法用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    这种认证方式是用一个很长的难以被模仿的字符串--Token来表明客户身份的一种方式。每个Token对应一个用户名，当客户端发起API调用请求时，需要在HTTP Header里放入Token，API Server接到Token后会跟服务器中保存的token进行比对，然后进行用户身份认证的过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>HTTPS证书认证：基于CA根证书签名的双向数字证书认证方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    这种认证方式是安全性最高的一种方式，但是同时也是操作起来最麻烦的一种方式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141263449.png" alt="图 50" tabindex="0" loading="lazy"><figcaption>图 50</figcaption></figure><p><strong>HTTPS认证大体分为3个过程：</strong></p><ol><li><p>证书申请和下发</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  HTTPS通信双方的服务器向CA机构申请证书，CA机构下发根证书、服务端证书及私钥给申请者
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>客户端和服务端的双向认证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  1&gt; 客户端向服务器端发起请求，服务端下发自己的证书给客户端，
     客户端接收到证书后，通过私钥解密证书，在证书中获得服务端的公钥，
     客户端利用服务器端的公钥认证证书中的信息，如果一致，则认可这个服务器
  2&gt; 客户端发送自己的证书给服务器端，服务端接收到证书后，通过私钥解密证书，
     在证书中获得客户端的公钥，并用该公钥认证证书信息，确认客户端是否合法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>服务器端和客户端进行通信</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  服务器端和客户端协商好加密方案后，客户端会产生一个随机的秘钥并加密，然后发送到服务器端。
  服务器端接收这个秘钥后，双方接下来通信的所有内容都通过该随机秘钥加密
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>注意: Kubernetes允许同时配置多种认证方式，只要其中任意一个方式认证通过即可</p></blockquote><h4 id="_9-3-授权管理" tabindex="-1"><a class="header-anchor" href="#_9-3-授权管理" aria-hidden="true">#</a> 9.3 授权管理</h4><p>授权发生在认证成功之后，通过认证就可以知道请求用户是谁， 然后Kubernetes会根据事先定义的授权策略来决定用户是否有权限访问，这个过程就称为授权。</p><p>每个发送到ApiServer的请求都带上了用户和资源的信息：比如发送请求的用户、请求的路径、请求的动作等，授权就是根据这些信息和授权策略进行比较，如果符合策略，则认为授权通过，否则会返回错误。</p><p>API Server目前支持以下几种授权策略：</p><ul><li>AlwaysDeny：表示拒绝所有请求，一般用于测试</li><li>AlwaysAllow：允许接收所有请求，相当于集群不需要授权流程（Kubernetes默认的策略）</li><li>ABAC：基于属性的访问控制，表示使用用户配置的授权规则对用户请求进行匹配和控制</li><li>Webhook：通过调用外部REST服务对用户进行授权</li><li>Node：是一种专用模式，用于对kubelet发出的请求进行访问控制</li><li>RBAC：基于角色的访问控制（kubeadm安装方式下的默认选项）</li></ul><p>RBAC(Role-Based Access Control) 基于角色的访问控制，主要是在描述一件事情：<strong>给哪些对象授予了哪些权限</strong></p><p>其中涉及到了下面几个概念：</p><ul><li>对象：User、Groups、ServiceAccount</li><li>角色：代表着一组定义在资源上的可操作动作(权限)的集合</li><li>绑定：将定义好的角色跟用户绑定在一起</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141284447.png" alt="图 51" tabindex="0" loading="lazy"><figcaption>图 51</figcaption></figure><p>RBAC引入了4个顶级资源对象：</p><ul><li>Role、ClusterRole：角色，用于指定一组权限</li><li>RoleBinding、ClusterRoleBinding：角色绑定，用于将角色（权限）赋予给对象</li></ul><p><strong>Role、ClusterRole</strong></p><p>一个角色就是一组权限的集合，这里的权限都是许可形式的（白名单）。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Role只能对命名空间内的资源进行授权，需要指定nameapce</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>role
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># 支持的API组列表,&quot;&quot; 空字符串，表示核心API群</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 支持的资源对象列表</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span> <span class="token comment"># 允许的对资源对象的操作方法列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ClusterRole可以对集群范围内资源、跨namespaces的范围资源、非资源类型进行授权</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>clusterrole
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要详细说明的是，rules中的参数：</p><ul><li><p>apiGroups: 支持的API组列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;&quot;</span>,<span class="token string">&quot;apps&quot;</span>, <span class="token string">&quot;autoscaling&quot;</span>, <span class="token string">&quot;batch&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>resources：支持的资源对象列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;services&quot;</span>, <span class="token string">&quot;endpoints&quot;</span>, <span class="token string">&quot;pods&quot;</span>,<span class="token string">&quot;secrets&quot;</span>,<span class="token string">&quot;configmaps&quot;</span>,<span class="token string">&quot;crontabs&quot;</span>,<span class="token string">&quot;deployments&quot;</span>,<span class="token string">&quot;jobs&quot;</span>,
<span class="token string">&quot;nodes&quot;</span>,<span class="token string">&quot;rolebindings&quot;</span>,<span class="token string">&quot;clusterroles&quot;</span>,<span class="token string">&quot;daemonsets&quot;</span>,<span class="token string">&quot;replicasets&quot;</span>,<span class="token string">&quot;statefulsets&quot;</span>,
<span class="token string">&quot;horizontalpodautoscalers&quot;</span>,<span class="token string">&quot;replicationcontrollers&quot;</span>,<span class="token string">&quot;cronjobs&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>verbs：对资源对象的操作方法列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;get&quot;</span>, <span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;watch&quot;</span>, <span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;update&quot;</span>, <span class="token string">&quot;patch&quot;</span>, <span class="token string">&quot;delete&quot;</span>, <span class="token string">&quot;exec&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><strong>RoleBinding、ClusterRoleBinding</strong></p><p>角色绑定用来把一个角色绑定到一个目标对象上，绑定目标可以是User、Group或者ServiceAccount。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># RoleBinding可以将同一namespace中的subject绑定到某个Role下，则此subject即具有该Role定义的权限</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>role<span class="token punctuation">-</span>binding
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> User
  <span class="token key atrule">name</span><span class="token punctuation">:</span> heima
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>role
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># ClusterRoleBinding在整个集群级别和所有namespaces将特定的subject与ClusterRole绑定，授予权限</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>clusterrole<span class="token punctuation">-</span>binding
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> User
  <span class="token key atrule">name</span><span class="token punctuation">:</span> heima
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>clusterrole
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RoleBinding引用ClusterRole进行授权</strong></p><p>RoleBinding可以引用ClusterRole，对属于同一命名空间内ClusterRole定义的资源主体进行授权。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    一种很常用的做法就是，集群管理员为集群范围预定义好一组角色（ClusterRole），然后在多个命名空间中重复使用这些ClusterRole。这样可以大幅提高授权管理工作效率，也使得各个命名空间下的基础性授权规则与使用体验保持一致。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 虽然authorization-clusterrole是一个集群角色，但是因为使用了RoleBinding</span>
<span class="token comment"># 所以heima只能读取dev命名空间中的资源</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>role<span class="token punctuation">-</span>binding<span class="token punctuation">-</span>ns
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> User
  <span class="token key atrule">name</span><span class="token punctuation">:</span> heima
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>clusterrole
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实战：创建一个只能管理dev空间下Pods资源的账号</strong></p><ol><li>创建账号</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1) 创建证书</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># cd /etc/kubernetes/pki/</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># (umask 077;openssl genrsa -out devman.key 2048)</span>

<span class="token comment"># 2) 用apiserver的证书去签署</span>
<span class="token comment"># 2-1) 签名申请，申请的用户是devman,组是devgroup</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># openssl req -new -key devman.key -out devman.csr -subj &quot;/CN=devman/O=devgroup&quot;     </span>
<span class="token comment"># 2-2) 签署证书</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># openssl x509 -req -in devman.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out devman.crt -days 3650</span>

<span class="token comment"># 3) 设置集群、用户、上下文信息</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config set-cluster kubernetes --embed-certs=true --certificate-authority=/etc/kubernetes/pki/ca.crt --server=https://192.168.109.100:6443</span>

<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config set-credentials devman --embed-certs=true --client-certificate=/etc/kubernetes/pki/devman.crt --client-key=/etc/kubernetes/pki/devman.key</span>

<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config set-context devman@kubernetes --cluster=kubernetes --user=devman</span>

<span class="token comment"># 切换账户到devman</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config use-context devman@kubernetes</span>
Switched to context <span class="token string">&quot;devman@kubernetes&quot;</span><span class="token builtin class-name">.</span>

<span class="token comment"># 查看dev下pod，发现没有权限</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
Error from server <span class="token punctuation">(</span>Forbidden<span class="token punctuation">)</span>: pods is forbidden: User <span class="token string">&quot;devman&quot;</span> cannot list resource <span class="token string">&quot;pods&quot;</span> <span class="token keyword">in</span> API group <span class="token string">&quot;&quot;</span> <span class="token keyword">in</span> the namespace <span class="token string">&quot;dev&quot;</span>

<span class="token comment"># 切换到admin账户</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config use-context kubernetes-admin@kubernetes</span>
Switched to context <span class="token string">&quot;kubernetes-admin@kubernetes&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2） 创建Role和RoleBinding，为devman用户授权</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>role
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span>
  
<span class="token punctuation">---</span>

<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1beta1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> authorization<span class="token punctuation">-</span>role<span class="token punctuation">-</span>binding
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> dev
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> User
  <span class="token key atrule">name</span><span class="token punctuation">:</span> devman
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev<span class="token punctuation">-</span>role
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl create -f dev-role.yaml</span>
role.rbac.authorization.k8s.io/dev-role created
rolebinding.rbac.authorization.k8s.io/authorization-role-binding created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>切换账户，再次验证</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换账户到devman</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config use-context devman@kubernetes</span>
Switched to context <span class="token string">&quot;devman@kubernetes&quot;</span><span class="token builtin class-name">.</span>

<span class="token comment"># 再次查看</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n dev</span>
NAME                                 READY   STATUS             RESTARTS   AGE
nginx-deployment-66cb59b984-8wp2k    <span class="token number">1</span>/1     Running            <span class="token number">0</span>          4d1h
nginx-deployment-66cb59b984-dc46j    <span class="token number">1</span>/1     Running            <span class="token number">0</span>          4d1h
nginx-deployment-66cb59b984-thfck    <span class="token number">1</span>/1     Running            <span class="token number">0</span>          4d1h

<span class="token comment"># 为了不影响后面的学习,切回admin账户</span>
<span class="token punctuation">[</span>root@k8s-master01 pki<span class="token punctuation">]</span><span class="token comment"># kubectl config use-context kubernetes-admin@kubernetes</span>
Switched to context <span class="token string">&quot;kubernetes-admin@kubernetes&quot;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-4-准入控制" tabindex="-1"><a class="header-anchor" href="#_9-4-准入控制" aria-hidden="true">#</a> 9.4 准入控制</h4><p>通过了前面的认证和授权之后，还需要经过准入控制处理通过之后，apiserver才会处理这个请求。</p><p>准入控制是一个可配置的控制器列表，可以通过在Api-Server上通过命令行设置选择执行哪些准入控制器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--admission-control=NamespaceLifecycle,LimitRanger,ServiceAccount,PersistentVolumeLabel,
                      DefaultStorageClass,ResourceQuota,DefaultTolerationSeconds
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只有当所有的准入控制器都检查通过之后，apiserver才执行该请求，否则返回拒绝。</p><p>当前可配置的Admission Control准入控制如下：</p><ul><li>AlwaysAdmit：允许所有请求</li><li>AlwaysDeny：禁止所有请求，一般用于测试</li><li>AlwaysPullImages：在启动容器之前总去下载镜像</li><li>DenyExecOnPrivileged：它会拦截所有想在Privileged Container上执行命令的请求</li><li>ImagePolicyWebhook：这个插件将允许后端的一个Webhook程序来完成admission controller的功能。</li><li>Service Account：实现ServiceAccount实现了自动化</li><li>SecurityContextDeny：这个插件将使用SecurityContext的Pod中的定义全部失效</li><li>ResourceQuota：用于资源配额管理目的，观察所有请求，确保在namespace上的配额不会超标</li><li>LimitRanger：用于资源限制管理，作用于namespace上，确保对Pod进行资源限制</li><li>InitialResources：为未设置资源请求与限制的Pod，根据其镜像的历史资源的使用情况进行设置</li><li>NamespaceLifecycle：如果尝试在一个不存在的namespace中创建资源对象，则该创建请求将被拒绝。当删除一个namespace时，系统将会删除该namespace中所有对象。</li><li>DefaultStorageClass：为了实现共享存储的动态供应，为未指定StorageClass或PV的PVC尝试匹配默认的StorageClass，尽可能减少用户在申请PVC时所需了解的后端存储细节</li><li>DefaultTolerationSeconds：这个插件为那些没有设置forgiveness tolerations并具有notready:NoExecute和unreachable:NoExecute两种taints的Pod设置默认的“容忍”时间，为5min</li><li>PodSecurityPolicy：这个插件用于在创建或修改Pod时决定是否根据Pod的security context和可用的PodSecurityPolicy对Pod的安全策略进行控制</li></ul><h3 id="_10-dashboard" tabindex="-1"><a class="header-anchor" href="#_10-dashboard" aria-hidden="true">#</a> 10. DashBoard</h3><p>之前在kubernetes中完成的所有操作都是通过命令行工具kubectl完成的。其实，为了提供更丰富的用户体验，kubernetes还开发了一个基于web的用户界面（Dashboard）。用户可以使用Dashboard部署容器化的应用，还可以监控应用的状态，执行故障排查以及管理kubernetes中各种资源。</p><h4 id="_10-1-部署dashboard" tabindex="-1"><a class="header-anchor" href="#_10-1-部署dashboard" aria-hidden="true">#</a> 10.1 部署Dashboard</h4><ol><li>下载yaml，并运行Dashboard</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载yaml</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># wget  https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml</span>

<span class="token comment"># 修改kubernetes-dashboard的Service类型</span>
kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  type: NodePort  <span class="token comment"># 新增</span>
  ports:
    - port: <span class="token number">443</span>
      targetPort: <span class="token number">8443</span>
      nodePort: <span class="token number">30009</span>  <span class="token comment"># 新增</span>
  selector:
    k8s-app: kubernetes-dashboard

<span class="token comment"># 部署</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create -f recommended.yaml</span>

<span class="token comment"># 查看namespace下的kubernetes-dashboard下的资源</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pod,svc -n kubernetes-dashboard</span>
NAME                                            READY   STATUS    RESTARTS   AGE
pod/dashboard-metrics-scraper-c79c65bb7-zwfvw   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          111s
pod/kubernetes-dashboard-56484d4c5-z95z5        <span class="token number">1</span>/1     Running   <span class="token number">0</span>          111s

NAME                               TYPE       CLUSTER-IP      EXTERNAL-IP  PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>         AGE
service/dashboard-metrics-scraper  ClusterIP  <span class="token number">10.96</span>.89.218    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>       <span class="token number">8000</span>/TCP        111s
service/kubernetes-dashboard       NodePort   <span class="token number">10.104</span>.178.171  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>       <span class="token number">443</span>:30009/TCP   111s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）创建访问账户，获取token</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建账号</span>
<span class="token punctuation">[</span>root@k8s-master01-1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create serviceaccount dashboard-admin -n kubernetes-dashboard</span>

<span class="token comment"># 授权</span>
<span class="token punctuation">[</span>root@k8s-master01-1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl create clusterrolebinding dashboard-admin-rb --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:dashboard-admin</span>

<span class="token comment"># 获取账号token</span>
<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment">#  kubectl get secrets -n kubernetes-dashboard | grep dashboard-admin</span>
dashboard-admin-token-xbqhh        kubernetes.io/service-account-token   <span class="token number">3</span>      2m35s

<span class="token punctuation">[</span>root@k8s-master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe secrets dashboard-admin-token-xbqhh -n kubernetes-dashboard</span>
Name:         dashboard-admin-token-xbqhh
Namespace:    kubernetes-dashboard
Labels:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:  kubernetes.io/service-account.name: dashboard-admin
              kubernetes.io/service-account.uid: 95d84d80-be7a-4d10-a2e0-68f90222d039

Type:  kubernetes.io/service-account-token

Data
<span class="token operator">==</span><span class="token operator">==</span>
namespace:  <span class="token number">20</span> bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6ImJrYkF4bW5XcDhWcmNGUGJtek5NODFuSXl1aWptMmU2M3o4LTY5a2FKS2cifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4teGJxaGgiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiOTVkODRkODAtYmU3YS00ZDEwLWEyZTAtNjhmOTAyMjJkMDM5Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmVybmV0ZXMtZGFzaGJvYXJkOmRhc2hib2FyZC1hZG1pbiJ9.NAl7e8ZfWWdDoPxkqzJzTB46sK9E8iuJYnUI9vnBaY3Jts7T1g1msjsBnbxzQSYgAG--cV0WYxjndzJY_UWCwaGPrQrt_GunxmOK9AUnzURqm55GR2RXIZtjsWVP2EBatsDgHRmuUbQvTFOvdJB4x3nXcYLN2opAaMqg3rnU2rr-A8zCrIuX_eca12wIp_QiuP3SF-tzpdLpsyRfegTJZl6YnSGyaVkC9id-cxZRb307qdCfXPfCHR_2rt5FVfxARgg_C0e3eFHaaYQO7CitxsnIoIXpOFNAR8aUrmopJyODQIPqBWUehb7FhlU1DCduHnIIXVC_UICZ-MKYewBDLw
ca.crt:     <span class="token number">1025</span> bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）通过浏览器访问Dashboard的UI</p><p>在登录页面上输入上面的token</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141322298.png" alt="图 52" tabindex="0" loading="lazy"><figcaption>图 52</figcaption></figure><p>出现下面的页面代表成功</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141337049.png" alt="图 53" tabindex="0" loading="lazy"><figcaption>图 53</figcaption></figure><h4 id="_10-2-使用dashboard" tabindex="-1"><a class="header-anchor" href="#_10-2-使用dashboard" aria-hidden="true">#</a> 10.2 使用DashBoard</h4><p>本章节以Deployment为例演示DashBoard的使用</p><p><strong>查看</strong></p><p>选择指定的命名空间<code>dev</code>，然后点击<code>Deployments</code>，查看dev空间下的所有deployment</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141352269.png" alt="图 54" tabindex="0" loading="lazy"><figcaption>图 54</figcaption></figure><p><strong>扩缩容</strong></p><p>在<code>Deployment</code>上点击<code>规模</code>，然后指定<code>目标副本数量</code>，点击确定</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141368802.png" alt="图 55" tabindex="0" loading="lazy"><figcaption>图 55</figcaption></figure><p><strong>编辑</strong></p><p>在<code>Deployment</code>上点击<code>编辑</code>，然后修改<code>yaml文件</code>，点击确定</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141383882.png" alt="图 56" tabindex="0" loading="lazy"><figcaption>图 56</figcaption></figure><p><strong>查看Pod</strong></p><p>点击<code>Pods</code>, 查看pods列表</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141397793.png" alt="图 57" tabindex="0" loading="lazy"><figcaption>图 57</figcaption></figure><p><strong>操作Pod</strong></p><p>选中某个Pod，可以对其执行日志（logs）、进入执行（exec）、编辑、删除操作</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/30/4-k8s-overview/1680141410793.png" alt="图 58" tabindex="0" loading="lazy"><figcaption>图 58</figcaption></figure><blockquote><p>Dashboard提供了kubectl的绝大部分功能，这里不再一一演示</p></blockquote>`,752);function S(A,E){const a=c("ExternalLinkIcon");return p(),i("div",null,[u,n("blockquote",null,[n("p",null,[s("转自："),n("a",d,[s("https://gitee.com/yooome/golang.git"),e(a)])])]),r,n("p",null,[s("官方地址："),n("a",m,[s("https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/"),e(a)])]),k,n("p",null,[s("也可手动拉取指定版本 docker pull "),n("a",v,[s("quay.io/coreos/flannel:v0.14.0"),e(a)]),s(" #拉取flannel网络，三台主机 docker images #查看仓库是否拉去下来")]),b,n("blockquote",null,[g,y,h,x,n("p",null,[n("a",f,[s("https://www.json2yaml.com/convert-yaml-to-json"),e(a)])])]),P])}const q=l(o,[["render",S],["__file","4-k8s-overview.html.vue"]]);export{q as default};
