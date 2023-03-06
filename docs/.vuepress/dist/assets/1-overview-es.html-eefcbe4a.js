import{_ as n,V as i,W as c,X as e,Y as a,$ as r,Z as t,F as l}from"./framework-e5211252.js";const d={},o=e("h1",{id:"_1-介绍与安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-介绍与安装","aria-hidden":"true"},"#"),a(" 1-介绍与安装")],-1),p={href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h1 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h1><h2 id="index-索引" tabindex="-1"><a class="header-anchor" href="#index-索引" aria-hidden="true">#</a> Index（索引）</h2><p>Elastic 会索引所有字段，经过处理后写入一个反向索引（Inverted Index）。查找数据的时候，直接查找该索引。 所以，Elastic 数据管理的顶层单位就叫做 Index（索引）。它是单个数据库的同义词。每个 Index （即数据库）的名字必须是小写。</p><ul><li>动词，相当于mysql的insert</li><li>名词，相当于mysql的database</li></ul><h2 id="type-类型" tabindex="-1"><a class="header-anchor" href="#type-类型" aria-hidden="true">#</a> Type（类型）</h2><p>在 Index（索引）中，可以定义一个或多个类型。 类似于 MySQL 的 Table，每一种类    型的数据存放在一起。</p><p><strong>在Elasticsearch6.0之后，Type 类型被移除。</strong><img src="https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425232940.png" alt="图 1" loading="lazy"></p><h2 id="document-文档" tabindex="-1"><a class="header-anchor" href="#document-文档" aria-hidden="true">#</a> Document（文档）</h2><p>保存在某个 Index（索引）下，某种 Type（类型）的一个数据，Document（文档）是JSON格式的，Document 就像是 MySQL 中某个 Table 里面每一行的数据，字段就是Document里的属性。 <img src="https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425246068.png" alt="图 2" loading="lazy"></p><h2 id="倒排索引" tabindex="-1"><a class="header-anchor" href="#倒排索引" aria-hidden="true">#</a> 倒排索引</h2><figure><img src="https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425258944.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><h1 id="docker安装elasticsearch、kibana" tabindex="-1"><a class="header-anchor" href="#docker安装elasticsearch、kibana" aria-hidden="true">#</a> Docker安装Elasticsearch、Kibana</h1><h2 id="_1-下载镜像文件" tabindex="-1"><a class="header-anchor" href="#_1-下载镜像文件" aria-hidden="true">#</a> 1. 下载镜像文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 存储和检索数据</span>
<span class="token function">docker</span> pull elasticsearch:7.4.2

<span class="token comment"># 可视化检索数据</span>
<span class="token function">docker</span> pull kibana:7.4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置挂载数据文件夹" tabindex="-1"><a class="header-anchor" href="#_2-配置挂载数据文件夹" aria-hidden="true">#</a> 2. 配置挂载数据文件夹</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建配置文件目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/elasticsearch/config

<span class="token comment"># 创建数据目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/elasticsearch/data

<span class="token comment"># 将/mydata/elasticsearch/文件夹中文件都可读可写</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /mydata/elasticsearch/

<span class="token comment"># 配置任意机器可以访问 elasticsearch</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;</span>/mydata/elasticsearch/config/elasticsearch.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-启动elasticsearch" tabindex="-1"><a class="header-anchor" href="#_3-启动elasticsearch" aria-hidden="true">#</a> 3. 启动Elasticsearch</h2><p>命令后面的 \\是换行符，注意前面有空格</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span>  <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms64m -Xmx512m&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span>  /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> elasticsearch:7.4.2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-p 9200:9200 -p 9300:9300</code>：向外暴露两个端口，9200用于HTTP REST API请求，9300 ES 在分布式集群状态下 ES 之间的通信端口；</li><li><code>-e  &quot;discovery.type=single-node&quot;</code>：es 以单节点运行</li><li><code>-e ES_JAVA_OPTS=&quot;-Xms64m -Xmx512m&quot;</code>：设置启动占用内存，不设置可能会占用当前系统所有内存</li><li>-v：挂载容器中的配置文件、数据文件、插件数据到本机的文件夹；</li><li><code>-d elasticsearch:7.6.2</code>：指定要启动的镜像</li></ul><p>访问 IP:9200 看到返回的 json 数据说明启动成功。 <img src="https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425285221.png" alt="图 4" loading="lazy"></p><h2 id="_4-设置-elasticsearch-随docker启动" tabindex="-1"><a class="header-anchor" href="#_4-设置-elasticsearch-随docker启动" aria-hidden="true">#</a> 4. 设置 Elasticsearch 随Docker启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前 Docker 开机自启，所以 ES 现在也是开机自启</span>
<span class="token function">docker</span> update elasticsearch <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-启动可视化kibana" tabindex="-1"><a class="header-anchor" href="#_5-启动可视化kibana" aria-hidden="true">#</a> 5. 启动可视化Kibana</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> kibana <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://192.168.163.131:9200 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> kibana:7.4.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-e ELASTICSEARCH_HOSTS=\`\`http://192.168.163.131:9200</code>: <strong>这里要设置成自己的虚拟机IP地址</strong><strong>浏览器输入</strong>192.168.163.131:5601 测试： <img src="https://cdn.liuhongjiao.cn/images/2023/02/15/1-overview-es/1676425308810.png" alt="图 5" loading="lazy"></p><h2 id="_6-设置-kibana-随docker启动" tabindex="-1"><a class="header-anchor" href="#_6-设置-kibana-随docker启动" aria-hidden="true">#</a> 6. 设置 Kibana 随Docker启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当前 Docker 开机自启，所以 kibana 现在也是开机自启</span>
<span class="token function">docker</span> update kibana <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function u(m,v){const s=l("ExternalLinkIcon");return i(),c("div",null,[o,e("p",null,[a("全文搜索属于最常见的需求，开源的 "),e("a",p,[a("Elasticsearch"),r(s)]),a(" （以下简称 Elastic）是目前全文搜索引擎的首选。它可以快速地储存、搜索和分析海量数据。 Elastic 的底层是开源库 Lucene。但是，你没法直接用 Lucene，必须自己写代码去调用它的接口。Elastic 是 Lucene 的封装，提供了 REST API 的操作接口，开箱即用。")]),h])}const k=n(d,[["render",u],["__file","1-overview-es.html.vue"]]);export{k as default};