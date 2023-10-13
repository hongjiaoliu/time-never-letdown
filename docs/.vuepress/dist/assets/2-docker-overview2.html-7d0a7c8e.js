import{_ as d,V as l,W as r,X as e,Y as a,Z as i,$ as s,F as t}from"./framework-2197e39d.js";const c={},o=s(`<h1 id="_2-docker入门实战-下" tabindex="-1"><a class="header-anchor" href="#_2-docker入门实战-下" aria-hidden="true">#</a> 2-Docker入门实战（下）</h1><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157709009.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h2><p>平时经常使用Docker来搭建各种环境，简单又好用！但是有时候往往会忘记命令，总结了一套非常实用的Docker命令，对于Java开发来说基本上够用了，希望对大家有所帮助！</p><h2 id="docker简介" tabindex="-1"><a class="header-anchor" href="#docker简介" aria-hidden="true">#</a> Docker简介</h2><p>Docker是一个开源的应用容器引擎，让开发者可以打包应用及依赖包到一个可移植的镜像中，然后发布到任何流行的Linux或Windows机器上。使用Docker可以更方便地打包、测试以及部署应用程序。</p><h2 id="docker环境安装" tabindex="-1"><a class="header-anchor" href="#docker环境安装" aria-hidden="true">#</a> Docker环境安装</h2><ul><li>安装yum-utils；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y yum-utils device-mapper-persistent-data lvm2 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>为yum源添加docker仓库位置；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装docker服务；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install docker-ce 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动docker服务。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker镜像常用命令" tabindex="-1"><a class="header-anchor" href="#docker镜像常用命令" aria-hidden="true">#</a> Docker镜像常用命令</h2><h3 id="搜索镜像" tabindex="-1"><a class="header-anchor" href="#搜索镜像" aria-hidden="true">#</a> 搜索镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search java 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157749267.png" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><h3 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull java:8 复制代码

docker pull [OPTIONS] NAME[:TAG|@DIGEST]

# 拉取最新版本镜像
docker pull tomcat:latest

# 等同 docker pull tomcat:latest
docker pull tomcat

# 拉取指定版本镜像
docker pull tomcat:8.5.75
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),u={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Freference%2Fcommandline%2Fpull%2F",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"查看镜像版本",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#查看镜像版本","aria-hidden":"true"},"#"),a(" 查看镜像版本")],-1),v=e("p",null,"由于docker search命令只能查找出是否有该镜像，不能找到该镜像支持的版本，所以我们需要通过Docker Hub来搜索支持的版本。",-1),g={href:"https://link.juejin.cn?target=https%3A%2F%2Fhub.docker.com",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"然后搜索需要的镜像：",-1),h=s(`<figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157790282.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><ul><li>查看镜像支持的版本：</li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157813623.png" alt="图 4" tabindex="0" loading="lazy"><figcaption>图 4</figcaption></figure><ul><li>进行镜像的下载操作：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull nginx:1.17.0 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="列出镜像" tabindex="-1"><a class="header-anchor" href="#列出镜像" aria-hidden="true">#</a> 列出镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token comment"># 列出本地所有镜像（默认会隐藏中间镜像，可以使用 -a 查看中间镜像）</span>
<span class="token function">docker</span> images

REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        <span class="token number">8.5</span>.75    77cfff2e1fe4   <span class="token number">3</span> days ago     679MB
tomcat        latest    fb5657adc892   <span class="token number">7</span> weeks ago    680MB
hello-world   latest    feb5d9fea6a5   <span class="token number">4</span> months ago   <span class="token number">13</span>.3kB


<span class="token comment"># 只显示镜像ID</span>
<span class="token function">docker</span> images <span class="token parameter variable">-q</span>

77cfff2e1fe4
fb5657adc892
feb5d9fea6a5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker images 复制代码 <img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157847241.png" alt="图 5" loading="lazy"></p><ul><li><strong>REPOSITORY</strong>：镜像仓库名</li><li><strong>TAG</strong>：镜像标签名</li><li><strong>IMAGE ID</strong>：镜像ID</li><li><strong>CREATED</strong>：镜像创建时间</li><li><strong>SIZE</strong>：镜像大小</li></ul>`,9),b={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Freference%2Fcommandline%2Fimages%2F",target:"_blank",rel:"noopener noreferrer"},x=s(`<h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 通过镜像ID删除单个</span>
<span class="token function">docker</span> rmi feb5d9fea6a5

<span class="token comment"># 通过镜像ID删除多个</span>
<span class="token function">docker</span> rmi feb5d9fea6a5 16ecd2772934

<span class="token comment"># 通过仓库名:标签名删除</span>
<span class="token function">docker</span> rmi hello-world:latest

<span class="token comment"># 强制删除（镜像存在容器实例则无法删除，需要强制删除）</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> feb5d9fea6a5

<span class="token comment"># 删除全部镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>指定名称删除镜像：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi java:8 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>指定名称删除镜像（强制）：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi -f java:8 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除所有没有引用的镜像：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi \`docker images | grep none | awk &#39;{print $3}&#39;\` 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>强制删除所有镜像：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi -f $(docker images) 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),k={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.docker.com%2Fengine%2Freference%2Fcommandline%2Frmi%2F",target:"_blank",rel:"noopener noreferrer"},f=s(`<h3 id="导出镜像" tabindex="-1"><a class="header-anchor" href="#导出镜像" aria-hidden="true">#</a> 导出镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image save centos:7.8.2003 <span class="token operator">&gt;</span> /opt/centos7.8.2003.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="导入镜像" tabindex="-1"><a class="header-anchor" href="#导入镜像" aria-hidden="true">#</a> 导入镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image load <span class="token parameter variable">-i</span> /opt/centos7.8.2003.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打包镜像" tabindex="-1"><a class="header-anchor" href="#打包镜像" aria-hidden="true">#</a> 打包镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token parameter variable">-t</span> 表示指定镜像仓库名称/镜像名称:镜像标签 .表示使用当前目录下的Dockerfile文件 
 <span class="token function">docker</span> build <span class="token parameter variable">-t</span> mall/mall-admin:1.0-SNAPSHOT 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交容器" tabindex="-1"><a class="header-anchor" href="#提交容器" aria-hidden="true">#</a> 提交容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit 容器id 新的镜像名（dockerhub账号/新的镜像名）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker容器常用命令" tabindex="-1"><a class="header-anchor" href="#docker容器常用命令" aria-hidden="true">#</a> Docker容器常用命令</h2><h3 id="新建并启动容器" tabindex="-1"><a class="header-anchor" href="#新建并启动容器" aria-hidden="true">#</a> 新建并启动容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 80:80 --name nginx \\ -e TZ=&quot;Asia/Shanghai&quot; \\ -v /mydata/nginx/html:/usr/share/nginx/html \\ -d nginx:1.17.0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-p：将宿主机和容器端口进行映射，格式为：宿主机端口:容器端口；</li><li>--name：指定容器名称，之后可以通过容器名称来操作容器；</li><li>-e：设置容器的环境变量，这里设置的是时区；</li><li>-v：将宿主机上的文件挂载到宿主机上，格式为：宿主机文件目录:容器文件目录；</li><li>-d：表示容器以后台方式运行。</li></ul><h3 id="列出容器" tabindex="-1"><a class="header-anchor" href="#列出容器" aria-hidden="true">#</a> 列出容器</h3><ul><li>列出运行中的容器：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157872623.png" alt="图 6" tabindex="0" loading="lazy"><figcaption>图 6</figcaption></figure><ul><li>列出所有容器：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -a 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157882771.png" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure><h3 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> 停止容器</h3>`,20),_=e("p",null,[a("注意："),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"C"),e("mi",null,"o"),e("mi",null,"n"),e("mi",null,"t"),e("mi",null,"a"),e("mi",null,"i"),e("mi",null,"n"),e("mi",null,"e"),e("mi",null,"r"),e("mi",null,"N"),e("mi",null,"a"),e("mi",null,"m"),e("mi",null,"e"),e("mtext",null,"表示容器名称，")]),e("annotation",{encoding:"application/x-tex"},"ContainerName表示容器名称，")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),e("span",{class:"mord mathnormal"},"o"),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mord mathnormal"},"t"),e("span",{class:"mord mathnormal"},"ain"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"er"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.10903em"}},"N"),e("span",{class:"mord mathnormal"},"am"),e("span",{class:"mord mathnormal"},"e"),e("span",{class:"mord cjk_fallback"},"表示容器名称，")])])]),a("ContainerId表示容器ID，可以使用容器名称的命令，基本也支持使用容器ID，比如下面的停止容器命令。")],-1),w=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop $ContainerName(or $ContainerId) 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop nginx #或者 docker stop c5f5d5125587
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="强制停止容器" tabindex="-1"><a class="header-anchor" href="#强制停止容器" aria-hidden="true">#</a> 强制停止容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker kill $ContainerName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start $ContainerName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><ul><li>先查询出容器的pid：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker inspect --format &quot;{{.State.Pid}}&quot; $ContainerName 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>根据容器的pid进入容器：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nsenter --target &quot;$pid&quot; --mount --uts --ipc --net --pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157902304.png" alt="图 8" tabindex="0" loading="lazy"><figcaption>图 8</figcaption></figure><ul><li>进入容器的命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器id <span class="token function">bash</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h3><ul><li>删除指定容器：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm $ContainerName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>按名称通配符删除容器，比如删除以名称mall-开头的容器：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm \`docker ps -a | grep mall-* | awk &#39;{print $1}&#39;\` 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>强制删除所有容器；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm -f $(docker ps -a -q)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看容器的日志" tabindex="-1"><a class="header-anchor" href="#查看容器的日志" aria-hidden="true">#</a> 查看容器的日志</h3><ul><li>查看容器产生的全部日志：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs $ContainerName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157920317.png" alt="图 9" tabindex="0" loading="lazy"><figcaption>图 9</figcaption></figure><ul><li>动态查看容器产生的日志：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs -f $ContainerName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看容器的ip地址" tabindex="-1"><a class="header-anchor" href="#查看容器的ip地址" aria-hidden="true">#</a> 查看容器的IP地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker inspect --format &#39;{{ .NetworkSettings.IPAddress }}&#39; $ContainerName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157940673.png" alt="图 10" tabindex="0" loading="lazy"><figcaption>图 10</figcaption></figure><h3 id="修改容器的启动方式" tabindex="-1"><a class="header-anchor" href="#修改容器的启动方式" aria-hidden="true">#</a> 修改容器的启动方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>将容器启动方式改为
always <span class="token function">docker</span> container update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token variable">$ContainerName</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步宿主机时间到容器" tabindex="-1"><a class="header-anchor" href="#同步宿主机时间到容器" aria-hidden="true">#</a> 同步宿主机时间到容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker cp /etc/localtime $ContainerName:/etc/ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定容器时区" tabindex="-1"><a class="header-anchor" href="#指定容器时区" aria-hidden="true">#</a> 指定容器时区</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 80:80 --name nginx \\ -e TZ=&quot;Asia/Shanghai&quot; \\ -d nginx:1.17.0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看容器资源占用状况" tabindex="-1"><a class="header-anchor" href="#查看容器资源占用状况" aria-hidden="true">#</a> 查看容器资源占用状况</h3><ul><li>查看指定容器资源占用状况，比如cpu、内存、网络、io状态：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stats $ContainerName 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678160547984.png" alt="图 17" tabindex="0" loading="lazy"><figcaption>图 17</figcaption></figure><ul><li>查看所有容器资源占用情况：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stats -a 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157960408.png" alt="图 11" tabindex="0" loading="lazy"><figcaption>图 11</figcaption></figure><h3 id="查看容器磁盘使用情况" tabindex="-1"><a class="header-anchor" href="#查看容器磁盘使用情况" aria-hidden="true">#</a> 查看容器磁盘使用情况</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker system df
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157970511.png" alt="图 12" tabindex="0" loading="lazy"><figcaption>图 12</figcaption></figure><h3 id="执行容器内部命令" tabindex="-1"><a class="header-anchor" href="#执行容器内部命令" aria-hidden="true">#</a> 执行容器内部命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it $ContainerName /bin/bash 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678157982213.png" alt="图 13" tabindex="0" loading="lazy"><figcaption>图 13</figcaption></figure><h3 id="指定账号进入容器内部" tabindex="-1"><a class="header-anchor" href="#指定账号进入容器内部" aria-hidden="true">#</a> 指定账号进入容器内部</h3><p>使用root账号进入容器内部</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> docker exec -it --user root $ContainerName /bin/bash 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看所有网络" tabindex="-1"><a class="header-anchor" href="#查看所有网络" aria-hidden="true">#</a> 查看所有网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network ls 复制代码
[root@local-linux ~]# docker network ls NETWORK ID          NAME                     DRIVER              SCOPE 59b309a5c12f        bridge                   bridge              local ef34fe69992b        host                     host                local a65be030c632        none      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建外部网络" tabindex="-1"><a class="header-anchor" href="#创建外部网络" aria-hidden="true">#</a> 创建外部网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network create -d bridge my-bridge-network 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定容器网络" tabindex="-1"><a class="header-anchor" href="#指定容器网络" aria-hidden="true">#</a> 指定容器网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 80:80 --name nginx \\ --network my-bridge-network \\ -d nginx:1.17.0 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改镜像的存放位置" tabindex="-1"><a class="header-anchor" href="#修改镜像的存放位置" aria-hidden="true">#</a> 修改镜像的存放位置</h2><ul><li>查看Docker镜像的存放位置：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker info | grep &quot;Docker Root Dir&quot; 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678158000125.png" alt="图 14" tabindex="0" loading="lazy"><figcaption>图 14</figcaption></figure><ul><li>关闭Docker服务：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop docker 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>先将原镜像目录移动到目标目录：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /var/lib/docker /mydata/docker 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>建立软连接：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ln -s /mydata/docker /var/lib/docker 复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678158016402.png" alt="图 15" tabindex="0" loading="lazy"><figcaption>图 15</figcaption></figure><ul><li>再次查看可以发现镜像存放位置已经更改。 <img src="https://cdn.liuhongjiao.cn/images/2023/03/07/2-docker-overview2/1678158029679.png" alt="图 16" loading="lazy"></li></ul>`,71),y={href:"https://juejin.cn/post/6895888125886332941",target:"_blank",rel:"noopener noreferrer"};function j(D,I){const n=t("ExternalLinkIcon");return l(),r("div",null,[o,e("p",null,[a("详情访问官网："),e("a",u,[a("docker pull"),i(n)])]),m,v,e("ul",null,[e("li",null,[a("进入Docker Hub的官网，地址："),e("a",g,[a("hub.docker.com"),i(n)])]),p]),h,e("p",null,[a("详情访问官网："),e("a",b,[a("docker images"),i(n)])]),x,e("p",null,[a("详情访问官网："),e("a",k,[a("docker rmi"),i(n)])]),f,_,w,e("p",null,[a("作者：MacroZheng 链接："),e("a",y,[a("https://juejin.cn/post/6895888125886332941"),i(n)]),a(" 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}const F=d(c,[["render",j],["__file","2-docker-overview2.html.vue"]]);export{F as default};