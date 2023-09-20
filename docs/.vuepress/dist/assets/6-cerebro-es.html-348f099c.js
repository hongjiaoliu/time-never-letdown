import{_ as s,V as i,W as r,X as n,Y as e,$ as c,Z as t,F as o}from"./framework-bcbeea85.js";const l={},d=t(`<h1 id="_6-cerebro可视化" tabindex="-1"><a class="header-anchor" href="#_6-cerebro可视化" aria-hidden="true">#</a> 6-cerebro可视化</h1><h1 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h1><p>es本身没有提供一个可视化的工具来查看集群的信息，使用命令行工具不太方便查看，此处安装cerebro来查看集群中的一些信息。</p><h1 id="二、安装步骤" tabindex="-1"><a class="header-anchor" href="#二、安装步骤" aria-hidden="true">#</a> 二、安装步骤</h1><h2 id="_1、下载并解压" tabindex="-1"><a class="header-anchor" href="#_1、下载并解压" aria-hidden="true">#</a> 1、下载并解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载</span>
<span class="token function">wget</span> https://github.com/lmenezes/cerebro/releases/download/v0.9.4/cerebro-0.9.4.zip
<span class="token comment"># 解压</span>
<span class="token function">unzip</span> cerebro-0.9.4.zip <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> cerebro-0.9.4
<span class="token comment"># 查看目录结构</span>
tree cerebro-0.9.4
cerebro-0.9.4
├── README.md
├── bin
│   ├── cerebro <span class="token punctuation">(</span>可执行文件<span class="token punctuation">)</span>
│   └── cerebro.bat <span class="token punctuation">(</span>window上的可执行文件<span class="token punctuation">)</span>
├── conf
│   ├── application.conf <span class="token punctuation">(</span>配置文件<span class="token punctuation">)</span>
│   ├── eslint.json
│   ├── evolutions
│   │   └── default
│   │       └── <span class="token number">1</span>.sql
│   ├── logback.xml <span class="token punctuation">(</span>日志配置<span class="token punctuation">)</span>
│   ├── reference.conf
│   └── routes
└── lib
    ├── *.jar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/16/6-cerebro-es/1676510162887.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><h2 id="_2、配置cerebro" tabindex="-1"><a class="header-anchor" href="#_2、配置cerebro" aria-hidden="true">#</a> 2、配置cerebro</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> conf/application.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置pid文件的路径</span>
<span class="token assign-left variable">pidfile.path</span><span class="token operator">=</span><span class="token string">&quot;./cerebro.pid&quot;</span>
<span class="token comment"># 本地数据库的文件地址</span>
data.path <span class="token operator">=</span> <span class="token string">&quot;./cerebro.db&quot;</span>
<span class="token comment"># 修改端口</span>
play <span class="token punctuation">{</span>
    server.http.port <span class="token operator">=</span> <span class="token number">9209</span>
 <span class="token punctuation">}</span>
 <span class="token comment"># 设置已知的集群</span>
 hosts <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token function">host</span> <span class="token operator">=</span> <span class="token string">&quot;http://localhost:9200&quot;</span>
    name <span class="token operator">=</span> <span class="token string">&quot;es-cluster&quot;</span>
    auth <span class="token operator">=</span> <span class="token punctuation">{</span>
      username <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
      password <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、启动-cerebro" tabindex="-1"><a class="header-anchor" href="#_3、启动-cerebro" aria-hidden="true">#</a> 3、启动 cerebro</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/Users/huan/soft/elastic-stack/cerebro/cerebro-0.9.4/bin/cerebro <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4、启动界面" tabindex="-1"><a class="header-anchor" href="#_4、启动界面" aria-hidden="true">#</a> 4、启动界面</h2><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/16/6-cerebro-es/1676510185968.png" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><h1 id="三、注意事项" tabindex="-1"><a class="header-anchor" href="#三、注意事项" aria-hidden="true">#</a> 三、注意事项</h1><p>1、jdk 的版本 新版的cerebro的jdk需要在11或以上的版本。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/16/6-cerebro-es/1676510203464.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><h1 id="四、参考文档" tabindex="-1"><a class="header-anchor" href="#四、参考文档" aria-hidden="true">#</a> 四、参考文档</h1>`,18),p={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Flmenezes%2Fcerebro%2Freleases",target:"_blank",rel:"noopener noreferrer"};function u(b,v){const a=o("ExternalLinkIcon");return i(),r("div",null,[d,n("p",null,[e("1、"),n("a",p,[e("cerebro下载地址"),c(a)])])])}const h=s(l,[["render",u],["__file","6-cerebro-es.html.vue"]]);export{h as default};
