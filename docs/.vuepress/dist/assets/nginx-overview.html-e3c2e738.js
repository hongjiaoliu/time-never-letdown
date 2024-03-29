import{_ as t,V as l,W as p,X as s,Y as n,$ as e,Z as i,F as c}from"./framework-bcbeea85.js";const o={},r=s("h1",{id:"nginx-1-概览",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nginx-1-概览","aria-hidden":"true"},"#"),n(" Nginx | 1-概览")],-1),d={href:"https://juejin.im/post/6844904080972709901",target:"_blank",rel:"noopener noreferrer"},u=i('<h2 id="_1-nginx-介绍" tabindex="-1"><a class="header-anchor" href="#_1-nginx-介绍" aria-hidden="true">#</a> 1. Nginx 介绍</h2><hr><p>传统的 Web 服务器，每个客户端连接作为一个单独的进程或线程处理，需在切换任务时将 CPU 切换到新的任务并创建一个新的运行时上下文，消耗额外的内存和 CPU 时间，当并发请求增加时，服务器响应变慢，从而对性能产生负面影响。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675934687004.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><p>Nginx 是开源、高性能、高可靠的 Web 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 Nginx 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个并发连接数，最重要的是，Nginx 是免费的并可以商业化，配置使用也比较简单。 Nginx 的最重要的几个使用场景：</p><ol><li>静态资源服务，通过本地文件系统提供服务；</li><li>反向代理服务，延伸出包括缓存、负载均衡等；</li><li>API 服务，OpenResty ；</li></ol><p>对于前端来说 Node.js 不陌生了，Nginx 和 Node.js 的很多理念类似，HTTP 服务器、事件驱动、异步非阻塞等，且 Nginx 的大部分功能使用 Node.js 也可以实现，但 Nginx 和 Node.js 并不冲突，都有自己擅长的领域。Nginx 擅长于底层服务器端资源的处理（静态资源处理转发、反向代理，负载均衡等），Node.js 更擅长上层具体业务逻辑的处理，两者可以完美组合，共同助力前端开发。 下面我们着重学习一下 Nginx 的使用。</p><h2 id="_2-相关概念" tabindex="-1"><a class="header-anchor" href="#_2-相关概念" aria-hidden="true">#</a> 2. 相关概念</h2><hr><h3 id="_2-1-简单请求和非简单请求" tabindex="-1"><a class="header-anchor" href="#_2-1-简单请求和非简单请求" aria-hidden="true">#</a> 2.1 简单请求和非简单请求</h3><p>首先我们来了解一下简单请求和非简单请求，如果同时满足下面两个条件，就属于简单请求：</p><ol><li>请求方法是 HEAD、GET、POST 三种之一；</li><li>HTTP 头信息不超过右边着几个字段：Accept、Accept-Language、Content-Language、Last-Event-IDContent-Type 只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain；</li></ol><p>凡是不同时满足这两个条件的，都属于非简单请求。 浏览器处理简单请求和非简单请求的方式不一样： <strong>简单请求</strong> 对于简单请求，浏览器会在头信息中增加 Origin 字段后直接发出，Origin 字段用来说明，本次请求来自的哪个源（协议+域名+端口）。 如果服务器发现 Origin 指定的源不在许可范围内，服务器会返回一个正常的 HTTP 回应，浏览器取到回应之后发现回应的头信息中没有包含 Access-Control-Allow-Origin 字段，就抛出一个错误给 XHR 的 error 事件； 如果服务器发现 Origin 指定的域名在许可范围内，服务器返回的响应会多出几个 Access-Control- 开头的头信息字段。 <strong>非简单请求</strong> 非简单请求是那种对服务器有特殊要求的请求，比如请求方法是 PUT 或 DELETE，或 Content-Type 值为 application/json。浏览器会在正式通信之前，发送一次 HTTP 预检 OPTIONS 请求，先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些 HTTP 请求方法和头信息字段。只有得到肯定答复，浏览器才会发出正式的 XHR 请求，否则报错。</p><h3 id="_2-2-跨域" tabindex="-1"><a class="header-anchor" href="#_2-2-跨域" aria-hidden="true">#</a> 2.2 跨域</h3>',14),v=s("strong",null,"跨域请求",-1),m={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FSecurity%2FSame-origin_policy",target:"_blank",rel:"noopener noreferrer"},b={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2F%25E6%25BA%2590",target:"_blank",rel:"noopener noreferrer"},h={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FGlossary%2FCORS",target:"_blank",rel:"noopener noreferrer"},k={href:"https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FSecurity%2FSame-origin_policy",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code># 同源的例子
http://example.com/app1/index.html  # 只是路径不同
http://example.com/app2/index.html

http://Example.com:80  # 只是大小写差异
http://example.com

# 不同源的例子
http://example.com/app1   # 协议不同
https://example.com/app2

http://example.com        # host 不同
http://www.example.com
http://myapp.example.com

http://example.com        # 端口不同
http://example.com:8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-正向代理和反向代理" tabindex="-1"><a class="header-anchor" href="#_2-3-正向代理和反向代理" aria-hidden="true">#</a> 2.3 正向代理和反向代理</h3><p>反向代理（Reverse Proxy）对应的是正向代理（Forward Proxy），他们的区别： <strong>正向代理：</strong> 一般的访问流程是客户端直接向目标服务器发送请求并获取内容，使用正向代理后，客户端改为向代理服务器发送请求，并指定目标服务器（原始服务器），然后由代理服务器和原始服务器通信，转交请求并获得的内容，再返回给客户端。正向代理隐藏了真实的客户端，为客户端收发请求，使真实客户端对服务器不可见； 举个具体的例子 🌰，你的浏览器无法直接访问谷哥，这时候可以通过一个代理服务器来帮助你访问谷哥，那么这个服务器就叫正向代理。 <strong>反向代理：</strong> 与一般访问流程相比，使用反向代理后，直接收到请求的服务器是代理服务器，然后将请求转发给内部网络上真正进行处理的服务器，得到的结果返回给客户端。反向代理隐藏了真实的服务器，为服务器收发请求，使真实服务器对客户端不可见。一般在处理跨域请求的时候比较常用。现在基本上所有的大型网站都设置了反向代理。 举个具体的例子 🌰，去饭店吃饭，可以点川菜、粤菜、江浙菜，饭店也分别有三个菜系的厨师 👨‍🍳，但是你作为顾客不用管哪个厨师给你做的菜，只用点菜即可，小二将你菜单中的菜分配给不同的厨师来具体处理，那么这个小二就是反向代理服务器。 简单的说，一般给客户端做代理的都是正向代理，给服务器做代理的就是反向代理。 正向代理和反向代理主要的原理区别可以参见下图：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935370719.png" alt="图 4" tabindex="0" loading="lazy"><figcaption>图 4</figcaption></figure><h3 id="_2-4-负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-4-负载均衡" aria-hidden="true">#</a> 2.4 负载均衡</h3><p>一般情况下，客户端发送多个请求到服务器，服务器处理请求，其中一部分可能要操作一些资源比如数据库、静态资源等，服务器处理完毕后，再将结果返回给客户端。 这种模式对于早期的系统来说，功能要求不复杂，且并发请求相对较少的情况下还能胜任，成本也低。随着信息数量不断增长，访问量和数据量飞速增长，以及系统业务复杂度持续增加，这种做法已无法满足要求，并发量特别大时，服务器容易崩。 很明显这是由于服务器性能的瓶颈造成的问题，除了堆机器之外，最重要的做法就是负载均衡。 请求爆发式增长的情况下，单个机器性能再强劲也无法满足要求了，这个时候集群的概念产生了，单个服务器解决不了的问题，可以使用多个服务器，然后将请求分发到各个服务器上，将负载分发到不同的服务器，这就是<strong>负载均衡</strong>，核心是「分摊压力」。Nginx 实现负载均衡，一般来说指的是将请求转发给服务器集群。 举个具体的例子 🌰，晚高峰乘坐地铁的时候，入站口经常会有地铁工作人员大喇叭“请走 B 口，B 口人少车空....”，这个工作人员的作用就是负载均衡。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935356679.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><h3 id="_2-5-动静分离" tabindex="-1"><a class="header-anchor" href="#_2-5-动静分离" aria-hidden="true">#</a> 2.5 动静分离</h3><p>为了加快网站的解析速度，可以把动态页面和静态页面由不同的服务器来解析，加快解析速度，降低原来单个服务器的压力。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935402407.png" alt="图 5" tabindex="0" loading="lazy"><figcaption>图 5</figcaption></figure><p>一般来说，都需要将动态资源和静态资源分开，由于 Nginx 的高并发和静态资源缓存等特性，经常将静态资源部署在 Nginx 上。如果请求的是静态资源，直接到静态资源目录获取资源，如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。 使用前后端分离后，可以很大程度提升静态资源的访问速度，即使动态服务不可用，静态资源的访问也不会受到影响。</p><h2 id="_3-nginx-快速安装" tabindex="-1"><a class="header-anchor" href="#_3-nginx-快速安装" aria-hidden="true">#</a> 3. Nginx 快速安装</h2><h3 id="_3-1-安装" tabindex="-1"><a class="header-anchor" href="#_3-1-安装" aria-hidden="true">#</a> 3.1 安装</h3><p>我们可以先看看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum list <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来看看</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935429085.png" alt="图 6" tabindex="0" loading="lazy"><figcaption>图 6</figcaption></figure><p>然后</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来安装 Nginx，然后我们在命令行中 nginx -v 就可以看到具体的 Nginx 版本信息，也就安装完毕了。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935458757.png" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure><h3 id="_3-2-相关文件夹" tabindex="-1"><a class="header-anchor" href="#_3-2-相关文件夹" aria-hidden="true">#</a> 3.2 相关文件夹</h3><p>然后我们可以使用 rpm -ql nginx 来查看 Nginx 被安装到了什么地方，有哪些相关目录，其中位于 /etc 目录下的主要是配置文件，还有一些文件见下图：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935471933.png" alt="图 8" tabindex="0" loading="lazy"><figcaption>图 8</figcaption></figure><p>主要关注的文件夹有两个：</p><ol><li>/etc/nginx/conf.d/ 文件夹，是我们进行子配置的配置项存放处，/etc/nginx/nginx.conf 主配置文件会默认把这个文件夹中所有子配置项都引入；</li><li>/usr/share/nginx/html/ 文件夹，通常静态文件都放在这个文件夹，也可以根据你自己的习惯放其他地方；</li></ol><h3 id="_3-3-跑起来康康" tabindex="-1"><a class="header-anchor" href="#_3-3-跑起来康康" aria-hidden="true">#</a> 3.3 跑起来康康</h3><p>安装之后开启 Nginx，如果系统开启了防火墙，那么需要设置一下在防火墙中加入需要开放的端口，下面列举几个常用的防火墙操作（没开启的话不用管这个）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start firewalld  <span class="token comment"># 开启防火墙</span>
systemctl stop firewalld   <span class="token comment"># 关闭防火墙</span>
systemctl status firewalld <span class="token comment"># 查看防火墙开启状态，显示running则是正在运行</span>
firewall-cmd <span class="token parameter variable">--reload</span>      <span class="token comment"># 重启防火墙，永久打开端口需要reload一下</span>

<span class="token comment"># 添加开启端口，--permanent表示永久打开，不加是临时打开重启之后失效</span>
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8888</span>/tcp

<span class="token comment"># 查看防火墙，添加的端口也可以看到</span>
firewall-cmd --list-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后设置 Nginx 的开机启动：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 Nginx （其他命令后面有详细讲解）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后访问你的 IP，这时候就可以看到 Nginx 的欢迎页面了～ Welcome to nginx！</p><h3 id="_3-4-安装-nvm-node-git" tabindex="-1"><a class="header-anchor" href="#_3-4-安装-nvm-node-git" aria-hidden="true">#</a> 3.4 安装 nvm &amp; node &amp; git</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载 nvm，或者看官网的步骤 https://github.com/nvm-sh/nvm#install--update-script</span>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

<span class="token builtin class-name">source</span>   ~/.bashrc    <span class="token comment"># 安装完毕后，更新配置文件即可使用 nvm 命令</span>
nvm ls-remote         <span class="token comment"># 查看远程 node 版本</span>
nvm <span class="token function">install</span> v12.16.3  <span class="token comment"># 选一个你要安装的版本安装，我这里选择 12.16.3</span>
nvm list              <span class="token comment"># 安装完毕查看安装的 node 版本</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>               <span class="token comment"># 查看是否安装好了</span>

yum <span class="token function">install</span> <span class="token function">git</span>   <span class="token comment"># git 安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-nginx-操作常用命令" tabindex="-1"><a class="header-anchor" href="#_4-nginx-操作常用命令" aria-hidden="true">#</a> 4. Nginx 操作常用命令</h2><p>Nginx 的命令在控制台中输入 nginx -h 就可以看到完整的命令，这里列举几个常用的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload  <span class="token comment"># 向主进程发送信号，重新加载配置文件，热重启</span>
nginx <span class="token parameter variable">-s</span> reopen	 <span class="token comment"># 重启 Nginx</span>
nginx <span class="token parameter variable">-s</span> stop    <span class="token comment"># 快速关闭</span>
nginx <span class="token parameter variable">-s</span> quit    <span class="token comment"># 等待工作进程处理完成后关闭</span>
nginx <span class="token parameter variable">-T</span>         <span class="token comment"># 查看当前 Nginx 最终的配置</span>
nginx <span class="token parameter variable">-t</span> <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>配置路径<span class="token operator">&gt;</span>    <span class="token comment"># 检查配置是否有问题，如果已经在配置目录，则不需要-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl 是 Linux 系统应用管理工具 systemd 的主命令，用于管理系统，我们也可以用它来对 Nginx 进行管理，相关命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start nginx    <span class="token comment"># 启动 Nginx</span>
systemctl stop nginx     <span class="token comment"># 停止 Nginx</span>
systemctl restart nginx  <span class="token comment"># 重启 Nginx</span>
systemctl reload nginx   <span class="token comment"># 重新加载 Nginx，用于修改配置后</span>
systemctl <span class="token builtin class-name">enable</span> nginx   <span class="token comment"># 设置开机启动 Nginx</span>
systemctl disable nginx  <span class="token comment"># 关闭开机启动 Nginx</span>
systemctl status nginx   <span class="token comment"># 查看 Nginx 运行状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-nginx-配置语法" tabindex="-1"><a class="header-anchor" href="#_5-nginx-配置语法" aria-hidden="true">#</a> 5. Nginx 配置语法</h2><p>就跟前面文件作用讲解的图所示，Nginx 的主配置文件是 /etc/nginx/nginx.conf，你可以使用 cat -n nginx.conf 来查看配置。 nginx.conf 结构图可以这样概括：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>main        <span class="token comment"># 全局配置，对全局生效</span>
├── events  <span class="token comment"># 配置影响 Nginx 服务器或与用户的网络连接</span>
├── http    <span class="token comment"># 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置</span>
│   ├── upstream <span class="token comment"># 配置后端服务器具体地址，负载均衡配置不可或缺的部分</span>
│   ├── server   <span class="token comment"># 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块</span>
│   ├── server
│   │   ├── location  <span class="token comment"># server 块可以包含多个 location 块，location 指令用于匹配 uri</span>
│   │   ├── location
│   │   └── <span class="token punctuation">..</span>.
│   └── <span class="token punctuation">..</span>.
└── <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 Nginx 配置文件的结构就像 nginx.conf 显示的那样，配置文件的语法规则：</p><ol><li>配置文件由指令与指令块构成；</li><li>每条指令以 ; 分号结尾，指令与参数间以空格符号分隔；</li><li>指令块以 {} 大括号将多条指令组织在一起；</li><li>include 语句允许组合多个配置文件以提升可维护性；</li><li>使用 # 符号添加注释，提高可读性；</li><li>使用 $ 符号使用变量；</li><li>部分指令的参数支持正则表达式；</li></ol><h3 id="_5-1-典型配置" tabindex="-1"><a class="header-anchor" href="#_5-1-典型配置" aria-hidden="true">#</a> 5.1 典型配置</h3><p>Nginx 的典型配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span>                        <span class="token comment"># 运行用户，默认即是nginx，可以不进行设置</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>                <span class="token comment"># Nginx 进程数，一般设置为和 CPU 核数一样</span>
error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>   <span class="token comment"># Nginx 的错误日志存放目录</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>      <span class="token comment"># Nginx 服务启动时的 pid 存放位置</span>

events <span class="token punctuation">{</span>
    use epoll<span class="token punctuation">;</span>     <span class="token comment"># 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>   <span class="token comment"># 每个进程允许最大并发数</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>   <span class="token comment"># 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置</span>
    <span class="token comment"># 设置日志模式</span>
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>   <span class="token comment"># Nginx访问日志存放位置</span>

    sendfile            on<span class="token punctuation">;</span>   <span class="token comment"># 开启高效传输模式</span>
    tcp_nopush          on<span class="token punctuation">;</span>   <span class="token comment"># 减少网络报文段的数量</span>
    tcp_nodelay         on<span class="token punctuation">;</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>   <span class="token comment"># 保持连接的时间，也叫超时时间，单位秒</span>
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

    include             /etc/nginx/mime.types<span class="token punctuation">;</span>      <span class="token comment"># 文件扩展名与类型映射表</span>
    default_type        application/octet-stream<span class="token punctuation">;</span>   <span class="token comment"># 默认文件类型</span>

    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>   <span class="token comment"># 加载子配置项</span>
    
    server <span class="token punctuation">{</span>
    	listen       <span class="token number">80</span><span class="token punctuation">;</span>       <span class="token comment"># 配置监听的端口</span>
    	server_name  localhost<span class="token punctuation">;</span>    <span class="token comment"># 配置的域名</span>
    	
    	location / <span class="token punctuation">{</span>
    		root   /usr/share/nginx/html<span class="token punctuation">;</span>  <span class="token comment"># 网站根目录</span>
    		index  index.html index.htm<span class="token punctuation">;</span>   <span class="token comment"># 默认首页文件</span>
    		deny <span class="token number">172.168</span>.22.11<span class="token punctuation">;</span>   <span class="token comment"># 禁止访问的ip地址，可以为all</span>
    		allow <span class="token number">172.168</span>.33.44； <span class="token comment"># 允许访问的ip地址，可以为all</span>
    	<span class="token punctuation">}</span>
    	
    	error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>  <span class="token comment"># 默认50x对应的访问页面</span>
    	error_page <span class="token number">400</span> <span class="token number">404</span> error.html<span class="token punctuation">;</span>   <span class="token comment"># 同上</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server 块可以包含多个 location 块，location 指令用于匹配 uri，语法：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location <span class="token punctuation">[</span> <span class="token operator">=</span> <span class="token operator">|</span> ~ <span class="token operator">|</span> ~* <span class="token operator">|</span> ^~<span class="token punctuation">]</span> uri <span class="token punctuation">{</span>
	<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指令后面：</p><ol><li>= 精确匹配路径，用于不含正则表达式的 uri 前，如果匹配成功，不再进行后续的查找；</li><li>^~ 用于不含正则表达式的 uri； 前，表示如果该符号后面的字符是最佳匹配，采用该规则，不再进行后续的查找；</li><li>~ 表示用该符号后面的正则去匹配路径，区分大小写；</li><li>~* 表示用该符号后面的正则去匹配路径，不区分大小写。跟 ~ 优先级都比较低，如有多个location的正则能匹配的话，则使用正则表达式最长的那个；</li></ol><p>如果 uri 包含正则表达式，则必须要有 ~ 或 ~* 标志。</p><h3 id="_5-2-全局变量" tabindex="-1"><a class="header-anchor" href="#_5-2-全局变量" aria-hidden="true">#</a> 5.2 全局变量</h3><p>Nginx 有一些常用的全局变量，你可以在配置的任何位置使用它们，如下表：</p><table><thead><tr><th>全局变量名</th><th>功能</th></tr></thead><tbody><tr><td>$host</td><td>请求信息中的 Host，如果请求中没有 Host 行，则等于设置的服务器名，不包含端口</td></tr><tr><td>$request_method</td><td>客户端请求类型，如 GET、POST</td></tr><tr><td>$remote_addr</td><td>客户端的 IP 地址</td></tr><tr><td>$args</td><td>请求中的参数</td></tr><tr><td>$arg_PARAMETER</td><td>GET 请求中变量名 PARAMETER 参数的值，例如：$http_user_agent(Uaer-Agent 值), $http_referer...</td></tr><tr><td>$content_length</td><td>请求头中的 Content-length 字段</td></tr><tr><td>$http_user_agent</td><td>客户端agent信息</td></tr><tr><td>$http_cookie</td><td>客户端cookie信息</td></tr><tr><td>$remote_addr</td><td>客户端的IP地址</td></tr><tr><td>$remote_port</td><td>客户端的端口</td></tr><tr><td>$http_user_agent</td><td>客户端agent信息</td></tr><tr><td>$server_protocol</td><td>请求使用的协议，如 HTTP/1.0、HTTP/1.1</td></tr><tr><td>$server_addr</td><td>服务器地址</td></tr><tr><td>$server_name</td><td>服务器名称</td></tr><tr><td>$server_port</td><td>服务器的端口号</td></tr><tr><td>$scheme</td><td>HTTP 方法（如http，https）</td></tr></tbody></table><p>还有更多的内置预定义变量，可以直接搜索关键字「nginx内置预定义变量」可以看到一堆博客写这个，这些变量都可以在配置文件中直接使用。</p><h2 id="_6-设置二级域名虚拟主机" tabindex="-1"><a class="header-anchor" href="#_6-设置二级域名虚拟主机" aria-hidden="true">#</a> 6. 设置二级域名虚拟主机</h2><p>在某某云 ☁️ 上购买了域名之后，就可以配置虚拟主机了，一般配置的路径在 域名管理 -&gt; 解析 -&gt; 添加记录 中添加二级域名，配置后某某云会把二级域名也解析到我们配置的服务器 IP 上，然后我们在 Nginx 上配置一下虚拟主机的访问监听，就可以拿到从这个二级域名过来的请求了。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935511210.png" alt="图 9" tabindex="0" loading="lazy"><figcaption>图 9</figcaption></figure><p>现在我自己的服务器上配置了一个 fe 的二级域名，也就是说在外网访问 fe.sherlocked93.club 的时候，也可以访问到我们的服务器了。 由于默认配置文件 /etc/nginx/nginx.conf 的 http 模块中有一句 include /etc/nginx/conf.d/*.conf 也就是说 conf.d 文件夹下的所有 *.conf 文件都会作为子配置项被引入配置文件中。为了维护方便，我在 /etc/nginx/conf.d 文件夹中新建一个 fe.sherlocked93.club.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /etc/nginx/conf.d/fe.sherlocked93.club.conf</span>

server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name fe.sherlocked93.club<span class="token punctuation">;</span>

	location / <span class="token punctuation">{</span>
		root  /usr/share/nginx/html/fe<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 /usr/share/nginx/html 文件夹下新建 fe 文件夹，新建文件 index.html，内容随便写点，改完 nginx -s reload 重新加载，浏览器中输入 fe.sherlocked93.club，发现从二级域名就可以访问到我们刚刚新建的 fe 文件夹：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935541136.png" alt="图 10" tabindex="0" loading="lazy"><figcaption>图 10</figcaption></figure><h2 id="_7-配置反向代理" tabindex="-1"><a class="header-anchor" href="#_7-配置反向代理" aria-hidden="true">#</a> 7. 配置反向代理</h2><hr><p>反向代理是工作中最常用的服务器功能，经常被用来解决跨域问题，下面简单介绍一下如何实现反向代理。 首先进入 Nginx 的主配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了看起来方便，把行号显示出来 :set nu （个人习惯），然后我们去 http 模块的 server 块中的 location /，增加一行将默认网址重定向到最大学习网站 Bilibili 的 proxy_pass 配置 🤓 ： <img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935557163.png" alt="图 11" loading="lazy"></p><p>改完保存退出，nginx -s reload 重新加载，进入默认网址，那么现在就直接跳转到 B 站了，实现了一个简单的代理。 实际使用中，可以将请求转发到本机另一个服务器上，也可以根据访问的路径跳转到不同端口的服务中。 比如我们监听 9001 端口，然后把访问不同路径的请求进行反向代理：</p>`,71),x={href:"http://127.0.0.1:9001/edu",target:"_blank",rel:"noopener noreferrer"},_={href:"http://127.0.0.1:8080",target:"_blank",rel:"noopener noreferrer"},f={href:"http://127.0.0.1:9001/vod",target:"_blank",rel:"noopener noreferrer"},y={href:"http://127.0.0.1:8081",target:"_blank",rel:"noopener noreferrer"},w=i(`<p>这种要怎么配置呢，首先同样打开主配置文件，然后在 http 模块下增加一个 server 块：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">9001</span><span class="token punctuation">;</span>
  server_name *.sherlocked93.club<span class="token punctuation">;</span>

  location ~ /edu/ <span class="token punctuation">{</span>
    proxy_pass http://127.0.0.1:8080<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  location ~ /vod/ <span class="token punctuation">{</span>
    proxy_pass http://127.0.0.1:8081<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反向代理还有一些其他的指令，可以了解一下：</p><ul><li>proxy_set_header：在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。</li><li>proxy_connect_timeout：配置Nginx与后端代理服务器尝试建立连接的超时时间。</li><li>proxy_read_timeout：配置Nginx向后端服务器组发出read请求后，等待相应的超时时间。</li><li>proxy_send_timeout：配置Nginx向后端服务器组发出write请求后，等待相应的超时时间。</li><li>proxy_redirect：用于修改后端服务器返回的响应头中的Location和Refresh。</li></ul><h2 id="_8-跨域-cors-配置" tabindex="-1"><a class="header-anchor" href="#_8-跨域-cors-配置" aria-hidden="true">#</a> 8. 跨域 CORS 配置</h2><p>关于简单请求、非简单请求、跨域的概念，前面已经介绍过了，还不了解的可以看看前面的讲解。现在前后端分离的项目一统天下，经常本地起了前端服务，需要访问不同的后端地址，不可避免遇到跨域问题。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935587039.png" alt="图 12" tabindex="0" loading="lazy"><figcaption>图 12</figcaption></figure><p>要解决跨域问题，我们来制造一个跨域问题。首先和前面设置二级域名的方式一样，先设置好 fe.sherlocked93.club 和 be.sherlocked93.club 二级域名，都指向本云服务器地址，虽然对应 IP 是一样的，但是在 fe.sherlocked93.club 域名发出的请求访问 be.sherlocked93.club 域名的请求还是跨域了，因为访问的 host 不一致（如果不知道啥原因参见前面跨域的内容）。</p><h3 id="_8-1-使用反向代理解决跨域" tabindex="-1"><a class="header-anchor" href="#_8-1-使用反向代理解决跨域" aria-hidden="true">#</a> 8.1 使用反向代理解决跨域</h3><p>在前端服务地址为 fe.sherlocked93.club 的页面请求 be.sherlocked93.club 的后端服务导致的跨域，可以这样配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">9001</span><span class="token punctuation">;</span>
  server_name fe.sherlocked93.club<span class="token punctuation">;</span>

  location / <span class="token punctuation">{</span>
    proxy_pass be.sherlocked93.club<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就将对前一个域名 fe.sherlocked93.club 的请求全都代理到了 be.sherlocked93.club，前端的请求都被我们用服务器代理到了后端地址下，绕过了跨域。 这里对静态文件的请求和后端服务的请求都以 fe.sherlocked93.club 开始，不易区分，所以为了实现对后端服务请求的统一转发，通常我们会约定对后端服务的请求加上 /apis/ 前缀或者其他的 path 来和对静态资源的请求加以区分，此时我们可以这样配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 请求跨域，约定代理后端服务请求path以/apis/开头</span>
location ^~/apis/ <span class="token punctuation">{</span>
    <span class="token comment"># 这里重写了请求，将正则匹配中的第一个分组的path拼接到真正的请求后面，并用break停止后续匹配</span>
    rewrite ^/apis/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
    proxy_pass be.sherlocked93.club<span class="token punctuation">;</span>
  
    <span class="token comment"># 两个域名之间cookie的传递与回写</span>
    proxy_cookie_domain be.sherlocked93.club fe.sherlocked93.club<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，静态资源我们使用 fe.sherlocked93.club/xx.html，动态资源我们使用 fe.sherlocked93.club/apis/getAwo，浏览器页面看起来仍然访问的前端服务器，绕过了浏览器的同源策略，毕竟我们看起来并没有跨域。 也可以统一一点，直接把前后端服务器地址直接都转发到另一个 server.sherlocked93.club，只通过在后面添加的 path 来区分请求的是静态资源还是后端服务，看需求了。</p><h3 id="_8-2-配置-header-解决跨域" tabindex="-1"><a class="header-anchor" href="#_8-2-配置-header-解决跨域" aria-hidden="true">#</a> 8.2 配置 header 解决跨域</h3><p>当浏览器在访问跨源的服务器时，也可以在跨域的服务器上直接设置 Nginx，从而前端就可以无感地开发，不用把实际上访问后端的地址改成前端服务的地址，这样可适性更高。 比如前端站点是 fe.sherlocked93.club，这个地址下的前端页面请求 be.sherlocked93.club 下的资源，比如前者的 fe.sherlocked93.club/index.html 内容是这样的：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>welcome fe.sherlocked93.club!!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text/javascript<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> xmlhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xmlhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://be.sherlocked93.club/index.html&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    xmlhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器访问 fe.sherlocked93.club/index.html 的结果如下：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935618406.png" alt="图 13" tabindex="0" loading="lazy"><figcaption>图 13</figcaption></figure>`,19),F={href:"http://be.sherlocked93.club/index.html",target:"_blank",rel:"noopener noreferrer"},N=i(`<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># /etc/nginx/conf.d/be.sherlocked93.club.conf</span>

server <span class="token punctuation">{</span>
listen       80<span class="token punctuation">;</span>
server_name  be<span class="token punctuation">.</span>sherlocked93<span class="token punctuation">.</span>club<span class="token punctuation">;</span>

add_header <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token variable">$http_origin</span><span class="token punctuation">;</span>   <span class="token comment"># 全局变量获得当前请求origin，带cookie的请求不支持*</span>
add_header <span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span>    <span class="token comment"># 为 true 可带上 cookie</span>
add_header <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span> <span class="token string">&#39;GET, POST, OPTIONS&#39;</span><span class="token punctuation">;</span>  <span class="token comment"># 允许请求方法</span>
add_header <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span> <span class="token variable">$http_access_control_request_headers</span><span class="token punctuation">;</span>  <span class="token comment"># 允许请求的 header，可以为 *</span>
add_header <span class="token string">&#39;Access-Control-Expose-Headers&#39;</span> <span class="token string">&#39;Content-Length,Content-Range&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> = <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
add_header <span class="token string">&#39;Access-Control-Max-Age&#39;</span> 1728000<span class="token punctuation">;</span>   <span class="token comment"># OPTIONS 请求的有效期，在有效期内不用发出另一条预检请求</span>
add_header <span class="token string">&#39;Content-Type&#39;</span> <span class="token string">&#39;text/plain; charset=utf-8&#39;</span><span class="token punctuation">;</span>
add_header <span class="token string">&#39;Content-Length&#39;</span> 0<span class="token punctuation">;</span>

<span class="token keyword">return</span> 204<span class="token punctuation">;</span>                  <span class="token comment"># 200 也可以</span>
<span class="token punctuation">}</span>

location <span class="token operator">/</span> <span class="token punctuation">{</span>
root  <span class="token operator">/</span>usr/share/nginx/html/be<span class="token punctuation">;</span>
index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后 nginx -s reload 重新加载配置。这时再访问 fe.sherlocked93.club/index.html 结果如下，请求中出现了我们刚刚配置的 Header：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935636736.png" alt="图 14" tabindex="0" loading="lazy"><figcaption>图 14</figcaption></figure><p>解决了跨域问题。</p><h2 id="_9-开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#_9-开启-gzip-压缩" aria-hidden="true">#</a> 9. 开启 gzip 压缩</h2><hr>`,6),z={href:"https://link.juejin.cn?target=http%3A%2F%2Ftool.chinaz.com%2FGzips%2FDefault.aspx%3Fq%3Djuejin.im",target:"_blank",rel:"noopener noreferrer"},j={href:"http://juejin.im",target:"_blank",rel:"noopener noreferrer"},A=i(`<figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935651392.png" alt="图 15" tabindex="0" loading="lazy"><figcaption>图 15</figcaption></figure><p>这里可以看到掘金是开启了 gzip 的，压缩效果还挺不错，达到了 52% 之多，本来 34kb 的网页体积，压缩完只需要 16kb，可以想象网页传输速度提升了不少。</p><h3 id="_9-1-nginx-配置-gzip" tabindex="-1"><a class="header-anchor" href="#_9-1-nginx-配置-gzip" aria-hidden="true">#</a> 9.1 Nginx 配置 gzip</h3><p>使用 gzip 不仅需要 Nginx 配置，浏览器端也需要配合，需要在请求消息头中包含 Accept-Encoding: gzip（IE5 之后所有的浏览器都支持了，是现代浏览器的默认设置）。一般在请求 html 和 css 等静态资源的时候，支持的浏览器在 request 请求静态资源的时候，会加上 Accept-Encoding: gzip 这个 header，表示自己支持 gzip 的压缩方式，Nginx 在拿到这个请求的时候，如果有相应配置，就会返回经过 gzip 压缩过的文件给浏览器，并在 response 相应的时候加上 content-encoding: gzip 来告诉浏览器自己采用的压缩方式（因为浏览器在传给服务器的时候一般还告诉服务器自己支持好几种压缩方式），浏览器拿到压缩的文件后，根据自己的解压方式进行解析。 先来看看 Nginx 怎么进行 gzip 配置，和之前的配置一样，为了方便管理，还是在 /etc/nginx/conf.d/ 文件夹中新建配置文件 gzip.conf ：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># /etc/nginx/conf.d/gzip.conf</span>

gzip on<span class="token punctuation">;</span> <span class="token comment"># 默认off，是否开启gzip</span>
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript<span class="token punctuation">;</span>

<span class="token comment"># 上面两个开启基本就能跑起了，下面的愿意折腾就了解一下</span>
gzip_static on<span class="token punctuation">;</span>
gzip_proxied any<span class="token punctuation">;</span>
gzip_vary on<span class="token punctuation">;</span>
gzip_comp_level 6<span class="token punctuation">;</span>
gzip_buffers 16 8k<span class="token punctuation">;</span>
<span class="token comment"># gzip_min_length 1k;</span>
gzip_http_version 1<span class="token punctuation">.</span>1<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>稍微解释一下：</p><ol><li><strong>gzip_types</strong>：要采用 gzip 压缩的 MIME 文件类型，其中 text/html 被系统强制启用；</li><li><strong>gzip_static</strong>：默认 off，该模块启用后，Nginx 首先检查是否存在请求静态文件的 gz 结尾的文件，如果有则直接返回该 .gz 文件内容；</li><li><strong>gzip_proxied</strong>：默认 off，nginx做为反向代理时启用，用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩；</li><li><strong>gzip_vary</strong>：用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；</li><li><strong>gzip_comp_level</strong>：gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；</li><li><strong>gzip_buffers</strong>：获取多少内存用于缓存压缩结果，16 8k 表示以 8k*16 为单位获得；</li><li><strong>gzip_min_length</strong>：允许压缩的页面最小字节数，页面字节数从header头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；</li><li><strong>gzip_http_version</strong>：默认 1.1，启用 gzip 所需的 HTTP 最低版本；</li></ol>`,7),E={href:"https://link.juejin.cn?target=http%3A%2F%2Fnginx.org%2Fen%2Fdocs%2Fhttp%2Fngx_http_gzip_module.html",target:"_blank",rel:"noopener noreferrer"},T=i(`<figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935682647.png" alt="图 16" tabindex="0" loading="lazy"><figcaption>图 16</figcaption></figure><p>配置之后 response 的 header 里面多了一个 Content-Encoding: gzip，返回信息被压缩了：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935695107.png" alt="图 17" tabindex="0" loading="lazy"><figcaption>图 17</figcaption></figure><p>注意了，一般 gzip 的配置建议加上 gzip_min_length 1k，不加的话：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935705742.png" alt="图 18" tabindex="0" loading="lazy"><figcaption>图 18</figcaption></figure><p>由于文件太小，gzip 压缩之后得到了 -48% 的体积优化，压缩之后体积还比压缩之前体积大了，所以最好设置低于 1kb 的文件就不要 gzip 压缩了 🤪</p><h3 id="_9-2-webpack-的-gzip-配置" tabindex="-1"><a class="header-anchor" href="#_9-2-webpack-的-gzip-配置" aria-hidden="true">#</a> 9.2 Webpack 的 gzip 配置</h3><p>当前端项目使用 Webpack 进行打包的时候，也可以开启 gzip 压缩：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>// vue-cli3 的 vue.config.js 文件
const CompressionWebpackPlugin = require(&#39;compression-webpack-plugin&#39;)

module.exports = {
  // gzip 配置
  configureWebpack: config =&gt; {
    if (p<wbr>rocess.env.NODE_ENV === &#39;production&#39;) {
      // 生产环境
      return {
        plugins: [new CompressionWebpackPlugin({
          test: /\\.js$|\\.html$|\\.css/,    // 匹配文件名
          threshold: 10240,               // 文件压缩阈值，对超过10k的进行压缩
          deleteOriginalAssets: false     // 是否删除源文件
        })]
      }
    }
  },
  ...
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此打包出来的文件如下图：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935726864.png" alt="图 19" tabindex="0" loading="lazy"><figcaption>图 19</figcaption></figure><p>这里可以看到某些打包之后的文件下面有一个对应的 .gz 经过 gzip 压缩之后的文件，这是因为这个文件超过了 10kb，有的文件没有超过 10kb 就没有进行 gzip 打包，如果你期望压缩文件的体积阈值小一点，可以在 compression-webpack-plugin 这个插件的配置里进行对应配置。 那么为啥这里 Nginx 已经有了 gzip 压缩，Webpack 这里又整了个 gzip 呢，因为如果全都是使用 Nginx 来压缩文件，会耗费服务器的计算资源，如果服务器的 gzip_comp_level 配置的比较高，就更增加服务器的开销，相应增加客户端的请求时间，得不偿失。 如果压缩的动作在前端打包的时候就做了，把打包之后的高压缩等级文件作为静态资源放在服务器上，Nginx 会优先查找这些压缩之后的文件返回给客户端，相当于把压缩文件的动作从 Nginx 提前给 Webpack 打包的时候完成，节约了服务器资源，所以一般推介在生产环境应用 Webpack 配置 gzip 压缩。</p><h2 id="_10-配置负载均衡" tabindex="-1"><a class="header-anchor" href="#_10-配置负载均衡" aria-hidden="true">#</a> 10. 配置负载均衡</h2><hr><p>负载均衡在之前已经介绍了相关概念了，主要思想就是把负载均匀合理地分发到多个服务器上，实现压力分流的目的。 主要配置如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
upstream myserver <span class="token punctuation">{</span>
<span class="token comment"># ip_hash;  # ip_hash 方式</span>
<span class="token comment"># fair;   # fair 方式</span>
server <span class="token number">127.0</span>.0.1:8081<span class="token punctuation">;</span>  <span class="token comment"># 负载均衡目的服务地址</span>
server <span class="token number">127.0</span>.0.1:8080<span class="token punctuation">;</span>
server <span class="token number">127.0</span>.0.1:8082 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment"># weight 方式，不写默认为 1</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
location / <span class="token punctuation">{</span>
proxy_pass http://myserver<span class="token punctuation">;</span>
proxy_connect_timeout <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx 提供了好几种分配方式，默认为<strong>轮询</strong>，就是轮流来。有以下几种分配方式：</p><ol><li><strong>轮询</strong>，默认方式，每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务挂了，能自动剔除；</li><li><strong>weight</strong>，权重分配，指定轮询几率，权重越高，在被访问的概率越大，用于后端服务器性能不均的情况；</li><li><strong>ip_hash</strong>，每个请求按访问 IP 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决动态网页 session 共享问题。负载均衡每次请求都会重新定位到服务器集群中的某一个，那么已经登录某一个服务器的用户再重新定位到另一个服务器，其登录信息将会丢失，这样显然是不妥的；</li><li><strong>fair</strong>（第三方），按后端服务器的响应时间分配，响应时间短的优先分配，依赖第三方插件 nginx-upstream-fair，需要先安装；</li></ol><h2 id="_11-配置动静分离" tabindex="-1"><a class="header-anchor" href="#_11-配置动静分离" aria-hidden="true">#</a> 11. 配置动静分离</h2><p>动静分离在之前也介绍过了，就是把动态和静态的请求分开。方式主要有两种，一种 是纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案。另外一种方法就是动态跟静态文件混合在一起发布， 通过 Nginx 配置来分开。 通过 location 指定不同的后缀名实现不同的请求转发。通过 expires 参数设置，可以使浏览器缓存过期时间，减少与服务器之前的请求和流量。具体 expires 定义：是给一个资源设定一个过期时间，也就是说无需去服务端验证，直接通过浏览器自身确认是否过期即可，所以不会产生额外的流量。此种方法非常适合不经常变动的资源。（如果经常更新的文件，不建议使用 expires 来缓存），我这里设置 3d，表示在这 3 天之内访问这个URL，发送一个请求，比对服务器该文件最后更新时间没有变化。则不会从服务器抓取，返回状态码 304，如果有修改，则直接从服务器重新下载，返回状态码 200。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  location /www/ <span class="token punctuation">{</span>
  	root /data/<span class="token punctuation">;</span>
    index index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  location /image/ <span class="token punctuation">{</span>
  	root /data/<span class="token punctuation">;</span>
    autoindex on<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-配置高可用集群-双机热备" tabindex="-1"><a class="header-anchor" href="#_12-配置高可用集群-双机热备" aria-hidden="true">#</a> 12. 配置高可用集群（双机热备）</h2><p>当主 Nginx 服务器宕机之后，切换到备份 Nginx 服务器</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935748838.png" alt="图 20" tabindex="0" loading="lazy"><figcaption>图 20</figcaption></figure><p>首先安装 keepalived，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> keepalived <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后编辑 /etc/keepalived/keepalived.conf 配置文件，并在配置文件中增加 vrrp_script 定义一个外围检测机制，并在 vrrp_instance 中通过定义 track_script 来追踪脚本执行过程，实现节点转移：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>global_defs<span class="token punctuation">{</span>
   notification_email <span class="token punctuation">{</span>
        acassen@firewall.loc
   <span class="token punctuation">}</span>
   notification_email_from Alexandre@firewall.loc
   smtp_server <span class="token number">127.0</span>.0.1
   smtp_connect_timeout <span class="token number">30</span> // 上面都是邮件配置，没卵用
   router_id LVS_DEVEL     // 当前服务器名字，用hostname命令来查看
<span class="token punctuation">}</span>
vrrp_script chk_maintainace <span class="token punctuation">{</span> // 检测机制的脚本名称为chk_maintainace
    script <span class="token string">&quot;[[ -e/etc/keepalived/down ]] &amp;&amp; exit 1 || exit 0&quot;</span> // 可以是脚本路径或脚本命令
    // script <span class="token string">&quot;/etc/keepalived/nginx_check.sh&quot;</span>    // 比如这样的脚本路径
    interval <span class="token number">2</span>  // 每隔2秒检测一次
    weight <span class="token parameter variable">-20</span>  // 当脚本执行成立，那么把当前服务器优先级改为-20
<span class="token punctuation">}</span>
vrrp_instanceVI_1 <span class="token punctuation">{</span>   // 每一个vrrp_instance就是定义一个虚拟路由器
    state MASTER      // 主机为MASTER，备用机为BACKUP
    interface eth0    // 网卡名字，可以从ifconfig中查找
    virtual_router_id <span class="token number">51</span> // 虚拟路由的id号，一般小于255，主备机id需要一样
    priority <span class="token number">100</span>      // 优先级，master的优先级比backup的大
    advert_int <span class="token number">1</span>      // 默认心跳间隔
    authentication <span class="token punctuation">{</span>  // 认证机制
        auth_type PASS
        auth_pass <span class="token number">1111</span>   // 密码
    <span class="token punctuation">}</span>
    virtual_ipaddress <span class="token punctuation">{</span>  // 虚拟地址vip
       <span class="token number">172.16</span>.2.8
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中检测脚本 nginx_check.sh，这里提供一个：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
/usr/sbin/nginx <span class="token comment"># 尝试重新启动nginx</span>
<span class="token function">sleep</span> <span class="token number">2</span>         <span class="token comment"># 睡眠2秒</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token function">killall</span> keepalived <span class="token comment"># 启动失败，将keepalived服务杀死。将vip漂移到其它备份节点</span>
<span class="token keyword">fi</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制一份到备份服务器，备份 Nginx 的配置要将 state 后改为 BACKUP，priority 改为比主机小。 设置完毕后各自 service keepalived start 启动，经过访问成功之后，可以把 Master 机的 keepalived 停掉，此时 Master 机就不再是主机了 service keepalived stop，看访问虚拟 IP 时是否能够自动切换到备机 ip addr。 再次启动 Master 的 keepalived，此时 vip 又变到了主机上。</p><h2 id="_13-适配-pc-或移动设备" tabindex="-1"><a class="header-anchor" href="#_13-适配-pc-或移动设备" aria-hidden="true">#</a> 13. 适配 PC 或移动设备</h2><p>根据用户设备不同返回不同样式的站点，以前经常使用的是纯前端的自适应布局，但无论是复杂性和易用性上面还是不如分开编写的好，比如我们常见的淘宝、京东......这些大型网站就都没有采用自适应，而是用分开制作的方式，根据用户请求的 user-agent 来判断是返回 PC 还是 H5 站点。 首先在 /usr/share/nginx/html 文件夹下 mkdir 分别新建两个文件夹 PC 和 mobile，vim 编辑两个 index.html 随便写点内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/share/nginx/html
<span class="token function">mkdir</span> pc mobile
<span class="token builtin class-name">cd</span> pc
<span class="token function">vim</span> index.html   <span class="token comment"># 随便写点比如 hello pc!</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/mobile
<span class="token function">vim</span> index.html   <span class="token comment"># 随便写点比如 hello mobile!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后和设置二级域名虚拟主机时候一样，去 /etc/nginx/conf.d 文件夹下新建一个配置文件 fe.sherlocked93.club.conf ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /etc/nginx/conf.d/fe.sherlocked93.club.conf</span>

server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name fe.sherlocked93.club<span class="token punctuation">;</span>

	location / <span class="token punctuation">{</span>
		root  /usr/share/nginx/html/pc<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> ~* <span class="token string">&#39;(Android|webOS|iPhone|iPod|BlackBerry)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      root /usr/share/nginx/html/mobile<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置基本没什么不一样的，主要多了一个 if 语句，然后使用 $http_user_agent 全局变量来判断用户请求的 user-agent，指向不同的 root 路径，返回对应站点。 在浏览器访问这个站点，然后 F12 中模拟使用手机访问： <img src="https://cdn.liuhongjiao.cn/images/2023/02/09/nginx-overview/1675935779152.png" alt="图 21" loading="lazy"></p><p>可以看到在模拟使用移动端访问的时候，Nginx 返回的站点变成了移动端对应的 html 了。</p><h2 id="_14-配置-https" tabindex="-1"><a class="header-anchor" href="#_14-配置-https" aria-hidden="true">#</a> 14. 配置 HTTPS</h2>`,39),$={href:"https://link.juejin.cn?target=https%3A%2F%2Fcloud.tencent.com%2Fdocument%2Fproduct%2F400%2F6814",target:"_blank",rel:"noopener noreferrer"},P=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">443</span> ssl http2 default_server<span class="token punctuation">;</span>   <span class="token comment"># SSL 访问端口号为 443</span>
  server_name sherlocked93.club<span class="token punctuation">;</span>         <span class="token comment"># 填写绑定证书的域名</span>

  ssl_certificate /etc/nginx/https/1_sherlocked93.club_bundle.crt<span class="token punctuation">;</span>   <span class="token comment"># 证书文件地址</span>
  ssl_certificate_key /etc/nginx/https/2_sherlocked93.club.key<span class="token punctuation">;</span>      <span class="token comment"># 私钥文件地址</span>
  ssl_session_timeout 10m<span class="token punctuation">;</span>

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>      <span class="token comment">#请按照以下协议配置</span>
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>RC4:<span class="token operator">!</span>DHE<span class="token punctuation">;</span> 
  ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
  
  location / <span class="token punctuation">{</span>
    root         /usr/share/nginx/html<span class="token punctuation">;</span>
    index        index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C={href:"https://sherlocked93.club/",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>add_header X-Frame-Options DENY<span class="token punctuation">;</span>           <span class="token comment"># 减少点击劫持</span>
add_header X-Content-Type-Options nosniff<span class="token punctuation">;</span> <span class="token comment"># 禁止服务器自动解析资源类型</span>
add_header X-Xss-Protection <span class="token number">1</span><span class="token punctuation">;</span>             <span class="token comment"># 防XSS攻击</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-一些常用技巧" tabindex="-1"><a class="header-anchor" href="#_15-一些常用技巧" aria-hidden="true">#</a> 15. 一些常用技巧</h2><hr><h3 id="_15-1-静态服务" tabindex="-1"><a class="header-anchor" href="#_15-1-静态服务" aria-hidden="true">#</a> 15.1 静态服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  static.sherlocked93.club<span class="token punctuation">;</span>
  charset utf-8<span class="token punctuation">;</span>    <span class="token comment"># 防止中文文件名乱码</span>

  location /download <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span>	          /usr/share/nginx/html/static<span class="token punctuation">;</span>  <span class="token comment"># 静态资源目录</span>
    
    autoindex               on<span class="token punctuation">;</span>    <span class="token comment"># 开启静态资源列目录</span>
    autoindex_exact_size    off<span class="token punctuation">;</span>   <span class="token comment"># on(默认)显示文件的确切大小，单位是byte；off显示文件大概大小，单位KB、MB、GB</span>
    autoindex_localtime     off<span class="token punctuation">;</span>   <span class="token comment"># off(默认)时显示的文件时间为GMT时间；on显示的文件时间为服务器时间</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-2-图片防盗链" tabindex="-1"><a class="header-anchor" href="#_15-2-图片防盗链" aria-hidden="true">#</a> 15.2 图片防盗链</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>        
  server_name  *.sherlocked93.club<span class="token punctuation">;</span>
  
  <span class="token comment"># 图片防盗链</span>
  location ~* <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
    valid_referers none blocked server_names ~<span class="token punctuation">\\</span>.google<span class="token punctuation">\\</span>. ~<span class="token punctuation">\\</span>.baidu<span class="token punctuation">\\</span>. *.qq.com<span class="token punctuation">;</span>  <span class="token comment"># 只允许本机 IP 外链引用，感谢 @木法传 的提醒，将百度和谷歌也加入白名单</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-3-请求过滤" tabindex="-1"><a class="header-anchor" href="#_15-3-请求过滤" aria-hidden="true">#</a> 15.3 请求过滤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 非指定请求全返回 403</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$request_method</span> <span class="token operator">!</span>~ ^<span class="token punctuation">(</span>GET<span class="token operator">|</span>POST<span class="token operator">|</span>HEAD<span class="token punctuation">)</span>$ <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

location / <span class="token punctuation">{</span>
  <span class="token comment"># IP访问限制（只允许IP是 192.168.0.2 机器访问）</span>
  allow <span class="token number">192.168</span>.0.2<span class="token punctuation">;</span>
  deny all<span class="token punctuation">;</span>
  
  root   html<span class="token punctuation">;</span>
  index  index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-4-配置图片、字体等静态文件缓存" tabindex="-1"><a class="header-anchor" href="#_15-4-配置图片、字体等静态文件缓存" aria-hidden="true">#</a> 15.4 配置图片、字体等静态文件缓存</h3><p>由于图片、字体、音频、视频等静态文件在打包的时候通常会增加了 hash，所以缓存可以设置的长一点，先设置强制缓存，再设置协商缓存；如果存在没有 hash 值的静态文件，建议不设置强制缓存，仅通过协商缓存判断是否需要使用缓存。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 图片缓存时间设置</span>
location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>css<span class="token operator">|</span>js<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>gif<span class="token operator">|</span>swf<span class="token operator">|</span>woff<span class="token operator">|</span>woff2<span class="token operator">|</span>eot<span class="token operator">|</span>svg<span class="token operator">|</span>ttf<span class="token operator">|</span>otf<span class="token operator">|</span>mp3<span class="token operator">|</span>m4a<span class="token operator">|</span>aac<span class="token operator">|</span>txt<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
	expires 10d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 如果不希望缓存</span>
expires -1<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-5-单页面项目-history-路由配置" tabindex="-1"><a class="header-anchor" href="#_15-5-单页面项目-history-路由配置" aria-hidden="true">#</a> 15.5 单页面项目 history 路由配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">80</span><span class="token punctuation">;</span>
  server_name  fe.sherlocked93.club<span class="token punctuation">;</span>
  
  location / <span class="token punctuation">{</span>
    root       /usr/share/nginx/html/dist<span class="token punctuation">;</span>  <span class="token comment"># vue 打包后的文件夹</span>
    index      index.html index.htm<span class="token punctuation">;</span>
    try_files  <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html @rewrites<span class="token punctuation">;</span>  
    
    expires -1<span class="token punctuation">;</span>                          <span class="token comment"># 首页一般没有强制缓存</span>
    add_header Cache-Control no-cache<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 接口转发，如果需要的话</span>
  <span class="token comment">#location ~ ^/api {</span>
  <span class="token comment">#  proxy_pass http://be.sherlocked93.club;</span>
  <span class="token comment">#}</span>
  
  location @rewrites <span class="token punctuation">{</span>
    rewrite ^<span class="token punctuation">(</span>.+<span class="token punctuation">)</span>$ /index.html <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-6-http-请求转发到-https" tabindex="-1"><a class="header-anchor" href="#_15-6-http-请求转发到-https" aria-hidden="true">#</a> 15.6 HTTP 请求转发到 HTTPS</h3>`,15),q={href:"http://sherlocked93.club/",target:"_blank",rel:"noopener noreferrer"},H=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen      <span class="token number">80</span><span class="token punctuation">;</span>
    server_name www.sherlocked93.club<span class="token punctuation">;</span>

    <span class="token comment"># 单域名重定向</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$host</span> <span class="token operator">=</span> <span class="token string">&#39;www.sherlocked93.club&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> https://www.sherlocked93.club<span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 全局非 https 协议时重定向</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$scheme</span> <span class="token operator">!=</span> <span class="token string">&#39;https&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># 或者全部重定向</span>
    <span class="token builtin class-name">return</span> <span class="token number">301</span> https://<span class="token variable">$server_name</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>

    <span class="token comment"># 以上配置选择自己需要的即可，不用全部加</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-7-泛域名路径分离" tabindex="-1"><a class="header-anchor" href="#_15-7-泛域名路径分离" aria-hidden="true">#</a> 15.7 泛域名路径分离</h3><p>这是一个非常实用的技能，经常有时候我们可能需要配置一些二级或者三级域名，希望通过 Nginx 自动指向对应目录，比如：</p><ol><li>test1.doc.sherlocked93.club 自动指向 /usr/share/nginx/html/doc/test1 服务器地址；</li><li>test2.doc.sherlocked93.club 自动指向 /usr/share/nginx/html/doc/test2 服务器地址；</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  ~^<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">\\</span>w-<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.doc<span class="token punctuation">\\</span>.sherlocked93<span class="token punctuation">\\</span>.club$<span class="token punctuation">;</span>

    root /usr/share/nginx/html/doc/<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-8-泛域名转发" tabindex="-1"><a class="header-anchor" href="#_15-8-泛域名转发" aria-hidden="true">#</a> 15.8 泛域名转发</h3><p>和之前的功能类似，有时候我们希望把二级或者三级域名链接重写到我们希望的路径，让后端就可以根据路由解析不同的规则：</p><ul><li>test1.serv.sherlocked93.club/api?name=a 自动转发到 127.0.0.1:8080/test1/api?name=a ；</li><li>test2.serv.sherlocked93.club/api?name=a 自动转发到 127.0.0.1:8080/test2/api?name=a ；</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name ~^<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">\\</span>w-<span class="token punctuation">]</span>+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.serv<span class="token punctuation">\\</span>.sherlocked93<span class="token punctuation">\\</span>.club$<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_set_header        X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header        X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header        Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header        X-NginX-Proxy <span class="token boolean">true</span><span class="token punctuation">;</span>
        proxy_pass              http://127.0.0.1:8080/<span class="token variable">$1</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-最佳实践" tabindex="-1"><a class="header-anchor" href="#_16-最佳实践" aria-hidden="true">#</a> 16. 最佳实践</h2><hr><ul><li>为了使 Nginx 配置更易于维护，建议为每个服务创建一个单独的配置文件，存储在 /etc/nginx/conf.d 目录，根据需求可以创建任意多个独立的配置文件。</li><li>独立的配置文件，建议遵循以下命名约定 &lt;服务&gt;.conf，比如域名是 sherlocked93.club，那么你的配置文件的应该是这样的 /etc/nginx/conf.d/sherlocked93.club.conf，如果部署多个服务，也可以在文件名中加上 Nginx 转发的端口号，比如 sherlocked93.club.8080.conf，如果是二级域名，建议也都加上 fe.sherlocked93.club.conf。</li><li>常用的、复用频率比较高的配置可以放到 /etc/nginx/snippets 文件夹，在 Nginx 的配置文件中需要用到的位置 include 进去，以功能来命名，并在每个 snippet 配置文件的开头注释标明主要功能和引入位置，方便管理。比如之前的 gzip、cors 等常用配置，我都设置了 snippet。</li><li>Nginx 日志相关目录，内以 域名.type.log 命名（比如 be.sherlocked93.club.access.log 和 be.sherlocked93.club.error.log ）位于 /var/log/nginx/ 目录中，为每个独立的服务配置不同的访问权限和错误日志文件，这样查找错误时，会更加方便快捷。</li></ul><p>感谢 @木法传 的提醒，Nginx 设置防盗链的时候，可以将百度和 google 设置为白名单，利于 SEO</p><p>参考文档：</p>`,14),O={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.nginx.cn%2Fdoc%2F",target:"_blank",rel:"noopener noreferrer"},B={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.cnblogs.com%2Fliang-io%2Fp%2F9340335.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fxyang81%2Farticle%2Fdetails%2F52554398",target:"_blank",rel:"noopener noreferrer"},L={href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fxyang81%2Farticle%2Fdetails%2F52556886",target:"_blank",rel:"noopener noreferrer"},R={href:"https://juejin.im/post/6844903684967825421#comment",target:"_blank",rel:"noopener noreferrer"},D={href:"https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F04%2Fcors.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://link.juejin.cn?target=http%3A%2F%2Fwww.conardli.top%2Fblog%2Farticle%2F%25E5%2589%258D%25E7%25AB%25AF%25E5%25B7%25A5%25E7%25A8%258B%25E5%258C%2596%2F%25E5%2589%258D%25E7%25AB%25AF%25E5%25BC%2580%25E5%258F%2591%25E8%2580%2585%25E5%25BF%2585%25E5%25A4%2587%25E7%259A%2584nginx%25E7%259F%25A5%25E8%25AF%2586.html%23nginx%25E5%259C%25A8%25E5%25BA%2594%25E7%2594%25A8%25E7%25A8%258B%25E5%25BA%258F%25E4%25B8%25AD%25E7%259A%2584%25E4%25BD%259C%25E7%2594%25A8",target:"_blank",rel:"noopener noreferrer"},G={href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fenvon123%2Farticle%2Fdetails%2F83270277",target:"_blank",rel:"noopener noreferrer"},W={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.holidaypenguin.com%2Fblob%2F2019-02-18-vue-router-history-mode-nginx-configuration-and-configuration-of-static-resource-cache%2F",target:"_blank",rel:"noopener noreferrer"},X={href:"https://link.juejin.cn?target=https%3A%2F%2Fblog.xinac.cn%2Farchives%2Fnginx%25E5%25B8%25B8%25E7%2594%25A8%25E9%2585%258D%25E7%25BD%25AE%25E5%258F%2582%25E8%2580%2583%25E5%25A4%25A7%25E5%2585%25A8",target:"_blank",rel:"noopener noreferrer"},V={href:"https://link.juejin.cn?target=https%3A%2F%2Fxuexb.github.io%2Flearn-nginx%2F",target:"_blank",rel:"noopener noreferrer"},U={href:"https://juejin.cn/post/6844904144235413512",target:"_blank",rel:"noopener noreferrer"};function K(Y,Z){const a=c("ExternalLinkIcon");return l(),p("div",null,[r,s("p",null,[n("最近越来越频繁地遇到需要配置反向代理的场景，在自己搭建博客的时候，也不可避免要用到 Nginx，所以这段时间集中学习了一下 Nginx，同时做了一些笔记，希望也可以帮助到大家～ 😜 这篇文章会在 CentOS 环境下安装和使用 Nginx，如果对 CentOS 基本操作还不太清楚的，可以先看看 "),s("a",d,[n("<半小时搞会 CentOS 入门必备基础知识>"),e(a)]),n(" 一文先做了解。 相信作为开发者，大家都知道 Nginx 的重要，废话不多说，一起来学习吧。 CentOS 版本： 7.6 Nginx 版本： 1.16.1")]),u,s("p",null,[n("在浏览器上当前访问的网站向另一个网站发送请求获取数据的过程就是"),v,n("。 跨域是浏览器的"),s("a",m,[n("同源策略"),e(a)]),n("决定的，是一个重要的浏览器安全策略，用于限制一个 "),s("a",b,[n("origin"),e(a)]),n(" 的文档或者它加载的脚本与另一个源的资源进行交互，它能够帮助阻隔恶意文档，减少可能被攻击的媒介，可以使用 "),s("a",h,[n("CORS"),e(a)]),n(" 配置解除这个限制。 关于跨域网上已经有很多解释，这里就不啰嗦，也可以直接看 MDN 的 "),s("a",k,[n("<浏览器的同源策略>"),e(a)]),n(" 文档进一步了解，这里就列举几个同源和不同元的例子，相信程序员都能看得懂。")]),g,s("ol",null,[s("li",null,[n("把访问 "),s("a",x,[n("http://127.0.0.1:9001/edu"),e(a)]),n(" 的请求转发到 "),s("a",_,[n("http://127.0.0.1:8080"),e(a)])]),s("li",null,[n("把访问 "),s("a",f,[n("http://127.0.0.1:9001/vod"),e(a)]),n(" 的请求转发到 "),s("a",y,[n("http://127.0.0.1:8081"),e(a)])])]),w,s("p",null,[n("很明显这里是跨域请求，在浏览器中直接访问 "),s("a",F,[n("http://be.sherlocked93.club/index.html"),e(a)]),n(" 是可以访问到的，但是在 fe.sherlocked93.club 的 html 页面访问就会出现跨域。 在 /etc/nginx/conf.d/ 文件夹中新建一个配置文件，对应二级域名 be.sherlocked93.club ：")]),N,s("p",null,[n("gzip 是一种常用的网页压缩技术，传输的网页经过 gzip 压缩之后大小通常可以变为原来的一半甚至更小（官网原话），更小的网页体积也就意味着带宽的节约和传输速度的提升，特别是对于访问量巨大大型网站来说，每一个静态资源体积的减小，都会带来可观的流量与带宽的节省。 百度可以找到很多检测站点来查看目标网页有没有开启 gzip 压缩，在下随便找了一个 "),s("a",z,[n("<网页GZIP压缩检测>"),e(a)]),n(" 输入掘金 "),s("a",j,[n("juejin.im"),e(a)]),n(" 来偷窥下掘金有没有开启 gzip。")]),A,s("p",null,[n("这个配置可以插入到 http 模块整个服务器的配置里，也可以插入到需要使用的虚拟主机的 server 或者下面的 location 模块中，当然像上面我们这样写的话就是被 include 到 http 模块中了。 其他更全的配置信息可以查看 "),s("a",E,[n("<官网文档ngx_http_gzip_module>"),e(a)]),n("，配置前是这样的：")]),T,s("p",null,[n("具体配置过程网上挺多的了，也可以使用你购买的某某云，一般都会有"),s("a",$,[n("免费申请"),e(a)]),n("的服务器证书，安装直接看所在云的操作指南即可。 我购买的腾讯云提供的亚洲诚信机构颁发的免费证书只能一个域名使用，二级域名什么的需要另外申请，但是申请审批比较快，一般几分钟就能成功，然后下载证书的压缩文件，里面有个 nginx 文件夹，把 xxx.crt 和 xxx.key 文件拷贝到服务器目录，再配置下：")]),P,s("p",null,[n("写完 nginx -t -q 校验一下，没问题就 nginx -s reload，现在去访问 "),s("a",C,[n("https://sherlocked93.club/"),e(a)]),n(" 就能访问 HTTPS 版的网站了。 一般还可以加上几个增强安全性的命令：")]),S,s("p",null,[n("配置完 HTTPS 后，浏览器还是可以访问 HTTP 的地址 "),s("a",q,[n("http://sherlocked93.club/"),e(a)]),n(" 的，可以做一个 301 跳转，把对应域名的 HTTP 请求重定向到 HTTPS 上")]),H,s("ol",null,[s("li",null,[s("a",O,[n("Nginx中文文档"),e(a)])]),s("li",null,[s("a",B,[n("Nginx安装，目录结构与配置文件详解"),e(a)])]),s("li",null,[s("a",I,[n("Keepalived安装与配置"),e(a)])]),s("li",null,[s("a",L,[n("Keepalived+Nginx实现高可用"),e(a)])]),s("li",null,[s("a",R,[n("Nginx与前端开发"),e(a)])]),s("li",null,[s("a",D,[n("跨域资源共享 CORS 详解 - 阮一峰的网络日志"),e(a)])]),s("li",null,[s("a",M,[n("前端开发者必备的nginx知识"),e(a)])]),s("li",null,[s("a",G,[n("我也说说Nginx解决前端跨域问题，正确的Nginx跨域配置"),e(a)])]),s("li",null,[s("a",W,[n("vue-router history模式nginx配置并配置静态资源缓存 | HolidayPenguin"),e(a)])]),s("li",null,[s("a",X,[n("nginx重定向，全局https，SSL配置，反代配置参考"),e(a)])]),s("li",null,[s("a",V,[n("Nginx 入门教程"),e(a)])])]),s("p",null,[n("作者：SHERlocked93 链接："),s("a",U,[n("https://juejin.cn/post/6844904144235413512"),e(a)]),n(" 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}const Q=t(o,[["render",K],["__file","nginx-overview.html.vue"]]);export{Q as default};
