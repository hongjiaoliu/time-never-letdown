import{_ as r,V as c,W as l,X as e,Y as n,$ as i,Z as s,F as o}from"./framework-e5211252.js";const d={},t=s(`<h1 id="_1-docker入门实战-上" tabindex="-1"><a class="header-anchor" href="#_1-docker入门实战-上" aria-hidden="true">#</a> 1-Docker入门实战（上）</h1><h1 id="一、docker-概述" tabindex="-1"><a class="header-anchor" href="#一、docker-概述" aria-hidden="true">#</a> 一、Docker 概述</h1><p>Docker 是一个用于开发、发布和运行应用程序的开放平台。Docker 使您能够将应用程序与基础架构分离，以便您可以快速交付软件。使用 Docker，您可以像管理应用程序一样管理基础设施。</p><h2 id="docker-能做什么" tabindex="-1"><a class="header-anchor" href="#docker-能做什么" aria-hidden="true">#</a> Docker 能做什么？</h2><hr><ul><li>快速、一致地交付您的应用程序</li><li>响应式部署和扩展</li><li>在相同硬件上运行更多工作负载</li></ul><h2 id="docker-架构" tabindex="-1"><a class="header-anchor" href="#docker-架构" aria-hidden="true">#</a> Docker 架构</h2><hr><p>Docker 使用客户端-服务器架构。Docker Client 与 Docker Daemon 通信，后者负责构建、运行和分发 Docker 容器的繁重工作。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/16/1-docker-overview1/1676510523466.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><ul><li><strong>Client</strong>：客户端，负责与 Docker Daemon 进行通信，用户通过 Docker Clinet 与 Docker Daemon 进行交互。</li><li><strong>Docker Daemon</strong>：服务端，Docker 主机上的守护进程，监听 Docker API 请求并管理 Docker 对象。</li><li><strong>Images</strong>：镜像，它包含了容器运行时所需要的所有基础文件和配置信息，是一个只读的模板。</li><li><strong>Containers</strong>：容器，镜像的可运行实例。</li><li><strong>Registry</strong>：仓库，类似代码仓库，用来存储和分发 Docker 镜像。</li></ul><h2 id="容器与虚拟机的区别" tabindex="-1"><a class="header-anchor" href="#容器与虚拟机的区别" aria-hidden="true">#</a> 容器与虚拟机的区别？</h2><hr><p>容器是应用层的抽象，它将代码和依赖项打包在一起。多个容器可以在同一台机器上运行，并与其他容器共享操作系统内核，每个容器在用户空间中作为独立进程运行。与 VM 相比，容器占用的空间更少（大小通常为MB级别），占用的资源更少，启动速度也更快，可以运行更多的应用程序。 虚拟机 (VM) 是物理硬件的抽象，可将一台服务器变成多台服务器。管理程序允许多个虚拟机在单台机器上运行。每个 VM 都包含完整的操作系统、应用程序、必要的二进制文件和库等（大小通常为GB级别），占用的资源更多，启动速度也更慢。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/16/1-docker-overview1/1676510537355.png" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><h1 id="二、docker-安装" tabindex="-1"><a class="header-anchor" href="#二、docker-安装" aria-hidden="true">#</a> 二、Docker 安装</h1><h2 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里的旧版本是指非 docker-ce 的版本。</p><h2 id="设置存储库" tabindex="-1"><a class="header-anchor" href="#设置存储库" aria-hidden="true">#</a> 设置存储库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),u={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdownload.docker.com%2Flinux%2Fcentos%2Fdocker-ce.repo",target:"_blank",rel:"noopener noreferrer"},p=s(`<h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a> 安装 Docker</h2><p>安装最新版本的 Docker Engine 和 containerd，执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果需要安装指定版本的 Docker Engine，可以先列出仓库中的可用版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

docker-ce.x86_64            <span class="token number">3</span>:20.10.9-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.8-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.7-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.6-3.el7                     docker-ce-stable
docker-ce.x86_64            <span class="token number">3</span>:20.10.5-3.el7                     docker-ce-stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后选择并安装指定版本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> docker-ce-cli-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中 &lt;VERSION_STRING&gt; 填 20.10.9 这一部分。</p><h2 id="启动并验证-docker" tabindex="-1"><a class="header-anchor" href="#启动并验证-docker" aria-hidden="true">#</a> 启动并验证 Docker</h2><p>启动 Docker 引擎：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> <span class="token parameter variable">--now</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证 Docker 版本信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version

Client: Docker Engine - Community
 Version:           <span class="token number">20.10</span>.12
 API version:       <span class="token number">1.41</span>
 Go version:        go1.16.12
 Git commit:        e91ed57
 Built:             Mon Dec <span class="token number">13</span> <span class="token number">11</span>:45:41 <span class="token number">2021</span>
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      <span class="token boolean">true</span>

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">20.10</span>.12
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.16.12
  Git commit:       459d0df
  Built:            Mon Dec <span class="token number">13</span> <span class="token number">11</span>:44:05 <span class="token number">2021</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.4</span>.12
  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d
 runc:
  Version:          <span class="token number">1.0</span>.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 hello-world 验证 Docker 引擎是否正确安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world

Unable to <span class="token function">find</span> image <span class="token string">&#39;hello-world:latest&#39;</span> locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:97a379f4f88575512824f3b352bc03cd75e239179eea0fecc38e597b2209f49a
Status: Downloaded newer image <span class="token keyword">for</span> hello-world:latest

Hello from Docker<span class="token operator">!</span>
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 <span class="token number">1</span>. The Docker client contacted the Docker daemon.
 <span class="token number">2</span>. The Docker daemon pulled the <span class="token string">&quot;hello-world&quot;</span> image from the Docker Hub.
    <span class="token punctuation">(</span>amd64<span class="token punctuation">)</span>
 <span class="token number">3</span>. The Docker daemon created a new container from that image <span class="token function">which</span> runs the
    executable that produces the output you are currently reading.
 <span class="token number">4</span>. The Docker daemon streamed that output to the Docker client, <span class="token function">which</span> sent it
    to your terminal.

To try something <span class="token function">more</span> ambitious, you can run an Ubuntu container with:
 $ <span class="token function">docker</span> run <span class="token parameter variable">-it</span> ubuntu <span class="token function">bash</span>

Share images, automate workflows, and <span class="token function">more</span> with a <span class="token function">free</span> Docker ID:
 https://hub.docker.com/

For <span class="token function">more</span> examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-docker" tabindex="-1"><a class="header-anchor" href="#卸载-docker" aria-hidden="true">#</a> 卸载 Docker</h2><p>卸载 Docker 引擎、CLI 和 Containerd 软件包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>主机上的镜像、容器、卷或自定义配置文件不会自动删除。要删除所有镜像、容器和卷：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="阿里云镜像加速" tabindex="-1"><a class="header-anchor" href="#阿里云镜像加速" aria-hidden="true">#</a> 阿里云镜像加速</h2>`,21),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcr.console.aliyun.com%2Fcn-hangzhou%2Finstances%2Fmirrors",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;&quot;]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 docker info 命令，看到 Registry Mirrors 对应的镜像地址正确，则代表配置成功。</p>`,2);function b(k,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[t,e("p",null,[n("这里使用的阿里云的地址，没有使用官方提供的 "),e("a",u,[n("地址"),i(a)]),n("，防止出现无法访问的问题。")]),p,e("p",null,[n("登录阿里云的 "),e("a",v,[n("镜像加速器"),i(a)]),n("，找到对应的镜像加速器地址进行配置，然后重启服务。")]),m])}const f=r(d,[["render",b],["__file","1-docker-overview1.html.vue"]]);export{f as default};
