import{_ as e,V as i,W as n,Z as d}from"./framework-e5211252.js";const a={},l=d(`<h1 id="_5-docker-file" tabindex="-1"><a class="header-anchor" href="#_5-docker-file" aria-hidden="true">#</a> 5-Docker File</h1><h2 id="什么是-dockerfile" tabindex="-1"><a class="header-anchor" href="#什么是-dockerfile" aria-hidden="true">#</a> 什么是 Dockerfile？</h2><p>Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。</p><h2 id="使用-dockerfile-定制镜像" tabindex="-1"><a class="header-anchor" href="#使用-dockerfile-定制镜像" aria-hidden="true">#</a> 使用 Dockerfile 定制镜像</h2><h2 id="docker-file-指令" tabindex="-1"><a class="header-anchor" href="#docker-file-指令" aria-hidden="true">#</a> Docker file 指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> FROM 这个镜像的妈妈是谁？（指定基础镜像）

 MAINTAINER 告诉别人，谁负责养它？（指定维护者信息，可以没有）

 RUN 你想让它干啥（在命令前加上RUN即可）

 ADD 添加宿主机的文件到容器内
 
 COPY 作用和ADD一样的，都是拷贝宿主机文件到容器内，但ADD会自动解压

 WORKDIR 我是cd,今天刚化了妆（设置当前工作目录）

 VOLUME 给它一个存放行李的地方（设置卷，挂载主机目录）

 EXPOSE 它要打开的门是啥（指定对外的端口）

 CMD 奔跑吧，兄弟！（指定容器启动后的要干的事情）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它指令</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>
 ENV 环境变量

 ENTRYPOINT 容器启动后执行的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),s=[l];function r(c,v){return i(),n("div",null,s)}const o=e(a,[["render",r],["__file","5-docker-file.html.vue"]]);export{o as default};
