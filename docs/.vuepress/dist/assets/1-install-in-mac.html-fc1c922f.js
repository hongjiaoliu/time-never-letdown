import{_ as a,V as l,W as i,X as e,Y as n,Z as r,$ as o,F as t}from"./framework-2197e39d.js";const d={},c=e("h1",{id:"_1-mac安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-mac安装","aria-hidden":"true"},"#"),n(" 1-Mac安装")],-1),p={href:"https://blog.csdn.net/NickDeCodes/article/details/124342792",target:"_blank",rel:"noopener noreferrer"},v=o(`<ul><li>brew安装</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># liuhongjiao @ liuhongjiaodeMacBook-Pro in ~/develop/soft [9:38:44]</span>
$ brew <span class="token function">install</span> zookeeper
Running <span class="token variable"><span class="token variable">\`</span>brew update <span class="token parameter variable">--preinstall</span><span class="token variable">\`</span></span><span class="token punctuation">..</span>.
<span class="token operator">==</span><span class="token operator">&gt;</span> Downloading https://mirrors.aliyun.com/homebrew/homebrew-bottles/openjdk-18.0.1.catalina.bottle.tar.gz
<span class="token comment">######################################################################## 100.0%</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> Downloading https://mirrors.aliyun.com/homebrew/homebrew-bottles/zookeeper-3.7.0_1.catalina.bottle.tar.gz
<span class="token comment">######################################################################## 100.0%</span>
<span class="token operator">==</span><span class="token operator">&gt;</span> Installing dependencies <span class="token keyword">for</span> zookeeper: openjdk
<span class="token operator">==</span><span class="token operator">&gt;</span> Installing zookeeper dependency: openjdk
<span class="token operator">==</span><span class="token operator">&gt;</span> Pouring openjdk-18.0.1.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/openjdk/18.0.1: <span class="token number">641</span> files, <span class="token number">307</span>.9MB
<span class="token operator">==</span><span class="token operator">&gt;</span> Installing zookeeper
<span class="token operator">==</span><span class="token operator">&gt;</span> Pouring zookeeper-3.7.0_1.catalina.bottle.tar.gz
<span class="token operator">==</span><span class="token operator">&gt;</span> Caveats
To start zookeeper now and restart at login:
  brew services start zookeeper
Or, <span class="token keyword">if</span> you don<span class="token string">&#39;t want/need a background service you can just run:
  zkServer start
==&gt; Summary
🍺  /usr/local/Cellar/zookeeper/3.7.0_1: 1,074 files, 42.4MB
==&gt; Running \`brew cleanup zookeeper\`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see \`man brew\`).
==&gt; Caveats
==&gt; zookeeper
To start zookeeper now and restart at login:
  brew services start zookeeper
Or, if you don&#39;</span>t want/need a background <span class="token function">service</span> you can just run:
  zkServer start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>以服务启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">service</span> start zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>不作为后台服务启动</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>zkServer start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>安装目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/Cellar/zookeeper/3.7.0_1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>配置文件目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/etc/zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function u(b,m){const s=t("ExternalLinkIcon");return l(),i("div",null,[c,e("blockquote",null,[e("p",null,[e("a",p,[n("https://blog.csdn.net/NickDeCodes/article/details/124342792"),r(s)])])]),v])}const g=a(d,[["render",u],["__file","1-install-in-mac.html.vue"]]);export{g as default};
