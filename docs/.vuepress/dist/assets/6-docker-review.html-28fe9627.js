import{_ as n,V as s,W as e,Z as a}from"./framework-e5211252.js";const i={},l=a(`<h1 id="_6-docker小结" tabindex="-1"><a class="header-anchor" href="#_6-docker小结" aria-hidden="true">#</a> 6-Docker小结</h1><h2 id="docker容器" tabindex="-1"><a class="header-anchor" href="#docker容器" aria-hidden="true">#</a> Docker容器</h2><p>容器是docker的核心概念，容器是一个或者一组应用，它的运行状态如下：</p><ul><li>docker 利用容器运行应用程序</li><li>容器是镜像的运行实例，可以被run、start、stop、rm</li><li>每个容器都是相互隔离，保证平台安全</li><li>容器可以看作是一个简易版Linux环境（有root权限，进程，用户空间，网络）</li><li>镜像是只读的，容器在启动的时候创建一层可写层</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/24/6-docker-container/1679619077871.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><p>dockerfile面向开发，docker image作为交付标准，docker container涉及部署和运维，三者合起来完成docker体系。</p><p>上图可以理解成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM ubuntu:14.04   选择基础镜像
ADD run.sh                添加文件进镜像，这一层镜像只有一个内容，就是这个文件
VOLUME /data         设定存储目录，并未添加文件，只是更新了镜像的json文件，便于启动时候读取该层信息
CMD <span class="token punctuation">[</span><span class="token string">&quot;./run.sh&quot;</span><span class="token punctuation">]</span>       更新json文件，设定程序入口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker容器管理总结" tabindex="-1"><a class="header-anchor" href="#docker容器管理总结" aria-hidden="true">#</a> Docker容器管理总结</h2><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># 运行镜像，且进入容器内</span>
docker run <span class="token operator">-</span>it ubuntu bash 

<span class="token comment"># 容器运行web程序</span>
<span class="token comment"># 注意端口使用，数字大一些，8000以后开始使用</span>
docker run <span class="token operator">--</span>name my_nginx <span class="token operator">-d</span> <span class="token operator">--</span>restart<span class="token operator">=</span>always <span class="token operator">-p</span> <span class="token number">7070</span><span class="token punctuation">:</span><span class="token number">80</span> nginx 
docker ps 

<span class="token comment"># docker run 镜像id  是前台运行容器</span>

<span class="token comment">#查看容器内的日志，实时刷新</span>
docker logs <span class="token operator">-f</span>  容器id 

<span class="token comment">#查看运行时，以及挂掉的容器记录</span>
docker ps 在运行的容器
<span class="token comment">#  等同于 </span>
docker container ls 

docker ps <span class="token operator">-</span>a 挂掉以及存活的容器
<span class="token comment"># 等同于</span>
docker container ls <span class="token operator">-</span>a 

<span class="token comment"># 停止启动 </span>
docker start 
docker stop 

<span class="token comment">#  进入容器内 </span>
docker exec <span class="token operator">-</span>it 容器id bash 

<span class="token comment"># 删除容器</span>
docker rm 容器id 
docker rm <span class="token string">\`docker ps -aq\`</span>
<span class="token comment">#强制删除容器</span>
docker rm <span class="token operator">-f</span> 容器id 

<span class="token comment">#查看容器内进程资源信息的命令</span>
docker top  容器id 

<span class="token comment"># 查看容器内资源</span>
docker stats 容器id 

<span class="token comment">#查看容器的具体信息 </span>
docker inspect 容器id  

<span class="token comment"># 获取容器内的ip地址,容器的格式化参数</span>
docker inspect <span class="token operator">--</span>format <span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span>  容器id 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker run 启动容器的时候，docker后台操作流程是：</p><ul><li>检查本地是否有改镜像，没有就下载</li><li>利用镜像创建且启动一个容器</li><li>分配容器文件系统，在只读的镜像层挂载读写层</li><li>宿主机的网桥接口会分配一个虚拟接口到容器中</li><li>容器获得地址池里的ip地址</li><li>执行用户指定的程序</li><li>若程序没有进程在运行，容器执行完毕后立即终止</li></ul><blockquote><p>docker start 可以启动一个出于stop状态的容器</p></blockquote>`,13),d=[l];function c(r,o){return s(),e("div",null,d)}const p=n(i,[["render",c],["__file","6-docker-review.html.vue"]]);export{p as default};
