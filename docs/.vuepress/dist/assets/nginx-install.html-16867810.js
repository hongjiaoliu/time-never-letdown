import{_ as l,V as t,W as r,X as n,Y as a,Z as i,$ as e,F as o}from"./framework-2197e39d.js";const c={},d=e('<h1 id="nginx-4-安装篇-编译" tabindex="-1"><a class="header-anchor" href="#nginx-4-安装篇-编译" aria-hidden="true">#</a> Nginx | 4-安装篇-编译</h1><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993369530.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><h2 id="一、下载" tabindex="-1"><a class="header-anchor" href="#一、下载" aria-hidden="true">#</a> 一、下载</h2>',3),p={href:"https://nginx.org/",target:"_blank",rel:"noopener noreferrer"},g=n("figure",null,[n("img",{src:"https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993407167.png",alt:"图 2",tabindex:"0",loading:"lazy"}),n("figcaption",null,"图 2")],-1),u={href:"https://nginx.org/download/nginx-1.20.2.tar.gz",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span>  https://nginx.org/download/nginx-1.20.2.tar.gz 
<span class="token function">tar</span> <span class="token parameter variable">-xzf</span> nginx-1.20.2.tar.gz
<span class="token builtin class-name">cd</span> nginx-1.20.2
ll <span class="token parameter variable">-a</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993435502.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><h2 id="二、vim中配置nginx语法高亮" tabindex="-1"><a class="header-anchor" href="#二、vim中配置nginx语法高亮" aria-hidden="true">#</a> 二、vim中配置Nginx语法高亮</h2><h3 id="_1-未配置前" tabindex="-1"><a class="header-anchor" href="#_1-未配置前" aria-hidden="true">#</a> 1-未配置前</h3><p>vim conf/nginx.conf</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993464124.png" alt="图 4" tabindex="0" loading="lazy"><figcaption>图 4</figcaption></figure><h3 id="_2-配置后" tabindex="-1"><a class="header-anchor" href="#_2-配置后" aria-hidden="true">#</a> 2-配置后</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-r</span> contrib/vim/* /usr/share/vim/vimfiles/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993487839.png" alt="图 5" tabindex="0" loading="lazy"><figcaption>图 5</figcaption></figure><h2 id="三、编译" tabindex="-1"><a class="header-anchor" href="#三、编译" aria-hidden="true">#</a> 三、编译</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现报错</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993518114.png" alt="图 6" tabindex="0" loading="lazy"><figcaption>图 6</figcaption></figure><p>安装pcre-devel解决问题</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>又报错</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993540085.png" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，再次执行 ./configure --prefix=/usr/local/nginx 安装完成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Configuration summary
  + using system PCRE library
  + OpenSSL library is not used
  + using system zlib library

  nginx path prefix: <span class="token string">&quot;/usr/local/nginx&quot;</span>
  nginx binary file: <span class="token string">&quot;/usr/local/nginx/sbin/nginx&quot;</span>
  nginx modules path: <span class="token string">&quot;/usr/local/nginx/modules&quot;</span>
  nginx configuration prefix: <span class="token string">&quot;/usr/local/nginx/conf&quot;</span>
  nginx configuration file: <span class="token string">&quot;/usr/local/nginx/conf/nginx.conf&quot;</span>
  nginx pid file: <span class="token string">&quot;/usr/local/nginx/logs/nginx.pid&quot;</span>
  nginx error log file: <span class="token string">&quot;/usr/local/nginx/logs/error.log&quot;</span>
  nginx http access log file: <span class="token string">&quot;/usr/local/nginx/logs/access.log&quot;</span>
  nginx http client request body temporary files: <span class="token string">&quot;client_body_temp&quot;</span>
  nginx http proxy temporary files: <span class="token string">&quot;proxy_temp&quot;</span>
  nginx http fastcgi temporary files: <span class="token string">&quot;fastcgi_temp&quot;</span>
  nginx http uwsgi temporary files: <span class="token string">&quot;uwsgi_temp&quot;</span>
  nginx http scgi temporary files: <span class="token string">&quot;scgi_temp&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行make编译</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s|%%PREFIX%%|/usr/local/nginx|&quot;</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token string">&quot;s|%%PID_PATH%%|/usr/local/nginx/logs/nginx.pid|&quot;</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token string">&quot;s|%%CONF_PATH%%|/usr/local/nginx/conf/nginx.conf|&quot;</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">-e</span> <span class="token string">&quot;s|%%ERROR_LOG_PATH%%|/usr/local/nginx/logs/error.log|&quot;</span> <span class="token punctuation">\\</span>
        <span class="token operator">&lt;</span> man/nginx.8 <span class="token operator">&gt;</span> objs/nginx.8
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Leaving directory \`/root/app/nginx-1.20.2&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、启动" tabindex="-1"><a class="header-anchor" href="#四、启动" aria-hidden="true">#</a> 四、启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx 
<span class="token punctuation">[</span>root@liuhongjiao sbin<span class="token punctuation">]</span><span class="token comment"># ./nginx -s reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>报错 nginx: [error] open() &quot;/usr/local/nginx/logs/nginx.pid&quot; failed (2: No such file or directory)</p><p>去logs目录下，查看确实没有nginx.pid文件 执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看logs目录下已经生成nginx.pid文件</p><p>再次执行</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993560832.png" alt="图 8" tabindex="0" loading="lazy"><figcaption>图 8</figcaption></figure><p>检查nginx进程，发现已经正常启动</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/10/nginx-install/1675993570627.png" alt="图 9" tabindex="0" loading="lazy"><figcaption>图 9</figcaption></figure>`,37);function m(h,b){const s=o("ExternalLinkIcon");return t(),r("div",null,[d,n("p",null,[a("官网地址："),n("a",p,[a("https://nginx.org/"),i(s)]),a(" ----download")]),g,n("p",null,[a("找到稳定版本，copy其地址： "),n("a",u,[a("https://nginx.org/download/nginx-1.20.2.tar.gz"),i(s)])]),v])}const f=l(c,[["render",m],["__file","nginx-install.html.vue"]]);export{f as default};