import{_ as p,V as i,W as c,X as s,Y as n,$ as e,Z as t,F as l}from"./framework-e5211252.js";const o={},u=t(`<h1 id="redis学习笔记" tabindex="-1"><a class="header-anchor" href="#redis学习笔记" aria-hidden="true">#</a> Redis学习笔记</h1><h4 id="一-、redis简介" tabindex="-1"><a class="header-anchor" href="#一-、redis简介" aria-hidden="true">#</a> 一 、Redis简介</h4><h5 id="_1-1-什么是redis" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是redis" aria-hidden="true">#</a> 1.1 什么是Redis</h5><p>Redis 是完全开源免费的，遵守<strong>BSD</strong>协议，是一个高性能(<strong>NOSQL</strong>)的key-value<strong>数据库</strong>*，Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存可持久化的日志型，Key-Value数据库，并提供多种语言的API。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>BSD是&quot;Berkeley Software Distribution&quot;的缩写，意思是“伯克利软件发型版本”。
BSD开源协议是一个给予使用者很大自由的协议。可以自由的使用，修改源代码，也可以将修改后的代码作为开源或者专有软件在发布。BSD代码鼓励代码共享，但需要尊重代码作者的著作权。
BSD由于允许使用者修改和重新发布代码，也允许使用或在BSD代码上开发商业软件发布和销售，一次是对商业集成很友好的协议。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-nosql" tabindex="-1"><a class="header-anchor" href="#_1-2-nosql" aria-hidden="true">#</a> 1.2 NoSQL</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>NoSQL,泛指非关系型的数据库，NoSQL即Not-only SQL,它可以作为关系型数据库的良好补充。随着互谅网web2.0网站的兴起，非关系型的数据库现在成为了一个及其热门的新领域，非关系型数据库产品的发展非常迅速。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>传统数据库暴露很多难以克服的问题，如下问题：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1、High performance - 对数据库高并发读写的需求。

2、Huge Storage - 对海量数据的高效存储和访问的需求。

3、High Scalability &amp;&amp; High Availability - 对数据库的高可扩展性和高课用性的需求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-3-nosql的类别" tabindex="-1"><a class="header-anchor" href="#_1-3-nosql的类别" aria-hidden="true">#</a> 1.3 NoSQL的类别</h5><p><strong>键值（Key-Value）存储数据库</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  这一类数据库主要会使用到一个哈希表，这个表中有一个特定的键和一个指针指向特定的数据。
key/value模型对于IT系统涞水的优势在于简单，已部署。但是如果DBA只对部分值进行查询或者更新的时候，key/value显示的效率低下。
相关产品 ： Redis，Tokyo Cabinet
典型应用 ： 内存缓存，主要用于处理大量数据的高访问负载。
数据模型 ： 一系列键值对
优势 ： 快速查询
劣势 ： 存储的数据缺少结构化

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>列存储数据库</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>这部分数据库通常是用来对分布式存储的海量数据。键仍然存在，但是他们的特点是指向了多个列。这些列是由列家族来安排的。
相关产品 : HBase 、Riak
典型应用 ： 分布式的文件系统
数据模型 ： 以列簇式存储，将同一列数据存在一起
优势 ： 查找速度快，可扩展性强，更容易进行分布式扩展
劣势 ： 功能相对于局限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文档型数据库</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>文档型数据库：该类型的数据库模型是版本化的文档，半结构化的文档一特定的格式存储，比如JSON。文档数据库可以看做键值数据库的升级版，允许之间嵌套键值。而且文档型数据库比键值数据库的查询效率更高。
相关产品：MOngoDB
典型应用 ： web应用
数据模型 ： 一系列键值对
优势 ： 数据结构要求不严格
劣势 ： 查询性能不高，而且缺乏统一的查询语言
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-4-总结" tabindex="-1"><a class="header-anchor" href="#_1-4-总结" aria-hidden="true">#</a> 1.4 总结：</h5><p>NoSQL 数据库在一下的这几种情况下比较适用 ：</p><p>1、数据模型比较简单；</p><p>2、需要灵活更前的IT系统；</p><p>3、对数据库性能要求较高；</p><p>4、不需要高度的数据一致性；</p><p>5、对于给定key，比较容易映射复杂的环境；</p><h5 id="_1-5-redis-描述" tabindex="-1"><a class="header-anchor" href="#_1-5-redis-描述" aria-hidden="true">#</a> 1.5 Redis 描述</h5><p>​ Redis是完全开源免费的，遵守BSD协议，是一个高性能(NoSQL)的（key-value）数据库，Redis是一个开源的使用ANSI C语言编写，支持网络，可基于内存亦可持久化的日志型，Key-Value数据库，并提供多种语言的API。</p><h5 id="_1-6-redis的特点" tabindex="-1"><a class="header-anchor" href="#_1-6-redis的特点" aria-hidden="true">#</a> 1.6 Redis的特点</h5><ul><li><strong>性能极高</strong> - Redis读写的熟读110000次/s，写的速度是81000次/s。</li><li><strong>丰富的数据类型</strong> - Redis支持的类型String， Hash 、List 、Set 及 Ordered Set数据类型操作。</li><li><strong>原子性</strong> - Redis的所有操作都是原子性的，意思就是要么成功，要么失败。单个操作时原子性的。多个操作也支持事务，即原子性，通过MULTI和EXEC指令包起来。</li><li><strong>丰富的特性</strong> - Redis还支持publis/subscribe，通知，key过期等等特性。</li><li><strong>高速读写</strong> ，redis使用自己实现的分离器，代码量很短，没有使用lock(MySQL),因此效率非常高。</li></ul><p>Redis是一个简单的，高效的，分布式的，基于内存的缓存工具。</p><p>架设好服务器后，通过网络连接(类似数据库)，提供Key-Value缓存服务。</p><p>简单，是Redis突出的特色。</p><p>简单可以保证核心功能的稳定和优异。</p><h5 id="_1-7-redis的应用场景" tabindex="-1"><a class="header-anchor" href="#_1-7-redis的应用场景" aria-hidden="true">#</a> 1.7 Redis的应用场景</h5><p><strong>可以作为数据库，缓存，热点数据(经常别查询，但是不经常被修改或者删除的数据)和消息中间件等大部分功能。</strong></p><p>Redis常用的场景示例如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1、缓存
   缓存现在几乎是所有大中型网站都在用的必杀技，合理利用缓存提升网站的访问速度，还能大大降低数据库的访问压力。Redis提供了键过期功能，也提供了灵活的键淘汰策略，所以，现在Redis用在缓存的场合非常多。
2、排行榜
   Redis提供的有序集合数据类结构能够实现葛洪复杂的排行榜应用。
3、计数器
   什么是计数器，，视频网站的播放量等等，每次浏览+1，并发量高时如果每次都请求数据库操作无疑是中挑战和压力。Redis提供的incr命令来实现计数器功能，内存操作，性能非常好，非常是用于这些技术场景。
4、分布式会话
   集群模式下，在应用不多的情况下一般使用容日自带的session复制功能就能够满足，当应用相对复杂的系统中，一般都会搭建Redis等内存数据库为中心的session服务，session不在由容器管理，而是有session服务及内存数据管理。
5、分布式锁
   在很多互联网公司中都是用来分布式技术，分布式技术带来的技术挑战是对同一个资源的并发访问，如全局ID，减库存，秒杀等场景，并发量不发的场景可以使用数据库的悲观锁，乐观锁来实现，但是在并发高的场合中，利用数据库锁来控制资源的并发访问是不太理想的，大大影响了数据库的性能。可以利用Redis的setnx功能来编写分布式的锁，如果设置返回1，说明获取所成功，否则获取锁失败，实际应用中药考虑的细节要更多。
6、社交网络
   点赞、踩、关注/被关注，共同好友等是社交网站的基本功能，社交网站的访问量通常老说比较大，而且传统的关系数据库不适合这种类型的数据，Redis提供的哈希，集合等数据结构能很方便的实现这些功能。
7、最新列表
   Redis列表结构，LPUSH可以在列表头部插入一个内容ID作为关键字，LTRIM可以用来限制列表的数量，这样列表永远为N个ID。无需查询最新的列表，直接根据ID 去到对应的内容也即可。
8、消息系统
   消息对队列是网站比用中间件，如ActiveMQ，RabbitMQ，Kafaka等流行的消息队列中间件，主要用于业务解耦，流量削峰及异步处理试试性低的业务。Redis提供了发布/订阅及阻塞队列功能，能实现一个简单的消息队列系统。另外，这个不能喝专业的消息中间件相比。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-8-redis总结" tabindex="-1"><a class="header-anchor" href="#_1-8-redis总结" aria-hidden="true">#</a> 1.8 Redis总结</h5><p><strong>优势</strong></p><ul><li><strong>性能极高</strong> - Redis读写的熟读110000次/s，写的速度是81000次/s。</li><li><strong>丰富的数据类型</strong> - Redis支持的类型String， Hash 、List 、Set 及 Ordered Set数据类型操作。</li><li><strong>原子性</strong> - Redis的所有操作都是原子性的，意思就是要么成功，要么失败。单个操作时原子性的。多个操作也支持事务，即原子性，通过MULTI和EXEC指令包起来。</li><li><strong>丰富的特性</strong> - Redis还支持publis/subscribe，通知，key过期等等特性。</li><li><strong>高速读写</strong> ，redis使用自己实现的分离器，代码量很短，没有使用lock(MySQL),因此效率非常高。</li></ul><p><strong>缺点</strong></p><ul><li><strong>持久化</strong>。 Redis直接将数据存储到内存中，要将数据保存到磁盘上，Redis可以使用两种方式实现持久化过程。定时快照(snapshot)：每个一端时间将整个数据库写到磁盘上，每次均是写全部数据，代价非常高。第二种方式基于语句追加（aof）：只追踪变化的数据，但是追加的log可能过大，同时所有的操作均重新执行一遍，<strong>回复速度慢</strong>。</li><li><strong>耗内存</strong> 、占用内存过高。</li></ul><h4 id="二、redis安装" tabindex="-1"><a class="header-anchor" href="#二、redis安装" aria-hidden="true">#</a> 二、Redis安装</h4><h5 id="_2-1-redis官网" tabindex="-1"><a class="header-anchor" href="#_2-1-redis官网" aria-hidden="true">#</a> 2.1 Redis官网</h5>`,42),r={href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://redis.io/download",target:"_blank",rel:"noopener noreferrer"},k=t(`<h5 id="_2-2-redis-安装" tabindex="-1"><a class="header-anchor" href="#_2-2-redis-安装" aria-hidden="true">#</a> 2.2 Redis 安装</h5><p>Redis是C语言开发，安装Redis需要先将官网下载的源码进行编译。编译依赖gcc环境，如果没有gcc环境，需要安装gcc</p><h5 id="_2-3-安装gcc" tabindex="-1"><a class="header-anchor" href="#_2-3-安装gcc" aria-hidden="true">#</a> 2.3 安装gcc</h5><p>gcc的安装很简单，首先要确保root登录，其次就是Linux要能连外网</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>yum -y install gcc automake autoconf libtool make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong> 运行yum是出现/var/run/yum.pid已被锁定，PID为xxxx的另外一个程序正在运行的问题解决。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>rm -f /var/run/yum.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-4-安装redis" tabindex="-1"><a class="header-anchor" href="#_2-4-安装redis" aria-hidden="true">#</a> 2.4 安装Redis</h5><p><strong>下载redis二进制安装包</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>wget http://download.redis.io/release/redis-6.0.5.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解压/apps目录下</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>tar zxvf redis-6.0.5.tar.gz -C /apps
#Linux 中剪切命令
mv redis-6.0.5.tar.gz 安装包
#Linux中复制命令: cp Files path
cp redis-6.0.5.tar.gz /root/apps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入redis中使用make命令进行编译</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>[root@centos redis-5.0.8]# make MALLOC=libc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    LINK redis-cli
    CC redis-benchmark.o
    LINK redis-benchmark
    INSTALL redis-check-rdb
    INSTALL redis-check-aof

Hint: It&#39;s a good idea to run &#39;make test&#39; ;)

make[1]: 离开目录“/root/apps/redis-5.0.8/src”
[root@centos redis-5.0.8]# ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装成功如上</strong></p><h5 id="_2-5-安装到指定的位置" tabindex="-1"><a class="header-anchor" href="#_2-5-安装到指定的位置" aria-hidden="true">#</a> 2.5 安装到指定的位置</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>make PREFIX=/root/apps/redis install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（安装编译后的文件）安装到指定目录；</p><p>注意：PREFIX必须为大写，同时会自动为我们创建redis目录，并将结果安装此目录；</p><h4 id="三-、redis启动" tabindex="-1"><a class="header-anchor" href="#三-、redis启动" aria-hidden="true">#</a> 三 、Redis启动</h4><h5 id="_3-1-启动redis服务端-进入到redis的安装目录" tabindex="-1"><a class="header-anchor" href="#_3-1-启动redis服务端-进入到redis的安装目录" aria-hidden="true">#</a> 3.1 启动Redis服务端，进入到Redis的安装目录</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>cd /usr/local/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-2-执行命令" tabindex="-1"><a class="header-anchor" href="#_3-2-执行命令" aria-hidden="true">#</a> 3.2 执行命令</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>./bin/redis-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379063659.png" alt="图 1" tabindex="0" loading="lazy"><figcaption>图 1</figcaption></figure><h5 id="_3-3-redis的客户端进行启动" tabindex="-1"><a class="header-anchor" href="#_3-3-redis的客户端进行启动" aria-hidden="true">#</a> 3.3 Redis的客户端进行启动</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">.</span>/bin<span class="token operator">/</span>redis<span class="token operator">-</span>cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-4-启动redis客户端命令语法" tabindex="-1"><a class="header-anchor" href="#_3-4-启动redis客户端命令语法" aria-hidden="true">#</a> 3.4 启动Redis客户端命令语法：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>redis<span class="token operator">-</span>cli <span class="token operator">-</span>h <span class="token constant">IP</span>地址 <span class="token operator">-</span>p 端口   <span class="token comment">//默认IP本机  端口号6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-5-检测是否服务端启动" tabindex="-1"><a class="header-anchor" href="#_3-5-检测是否服务端启动" aria-hidden="true">#</a> 3.5 检测是否服务端启动</h5><p>启动redis客户端，打开终端并输入命令redis-cli。该命令连接本地的redis服务。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> 
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> ping
<span class="token constant">PONG</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上实例中我们连接到本地的redis服务并执行<strong>PING</strong> 命令，该命令用于检测redis服务是否启动</p><h5 id="_3-6-检查redis的进程" tabindex="-1"><a class="header-anchor" href="#_3-6-检查redis的进程" aria-hidden="true">#</a> 3.6 检查redis的进程</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#执行 ps <span class="token operator">-</span>ef <span class="token operator">|</span> grep <span class="token operator">-</span>i redis 来查看进程
ps <span class="token operator">-</span>ef <span class="token operator">|</span> grep <span class="token operator">-</span>i redis
root      <span class="token number">10050</span>   <span class="token number">5728</span>  <span class="token number">0</span> <span class="token number">23</span><span class="token operator">:</span><span class="token number">03</span> pts<span class="token operator">/</span><span class="token number">0</span>    <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">03</span> <span class="token punctuation">.</span>/bin<span class="token operator">/</span>redis<span class="token operator">-</span>server <span class="token operator">*</span><span class="token operator">:</span><span class="token number">6379</span>
root      <span class="token number">10077</span>  <span class="token number">10056</span>  <span class="token number">0</span> <span class="token number">23</span><span class="token operator">:</span><span class="token number">10</span> pts<span class="token operator">/</span><span class="token number">1</span>    <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span> <span class="token punctuation">.</span>/bin<span class="token operator">/</span>redis<span class="token operator">-</span>cli
root      <span class="token number">10100</span>  <span class="token number">10081</span>  <span class="token number">0</span> <span class="token number">23</span><span class="token operator">:</span><span class="token number">22</span> pts<span class="token operator">/</span><span class="token number">2</span>    <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span> grep <span class="token operator">--</span>color<span class="token operator">=</span>auto <span class="token operator">-</span>i redis
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> <span class="token operator">~</span><span class="token punctuation">]</span>#   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="四、redis配置详细" tabindex="-1"><a class="header-anchor" href="#四、redis配置详细" aria-hidden="true">#</a> 四、Redis配置详细</h4><p>Redis默认定义了很多默认配置。但在实际开发中，一般我们都会通过手动配置完成。回到安装目录下找到解压文件中的redis.conf。</p><p>Redis的配置文件位于Redis安装目录下，文件名称为redis.conf</p><h5 id="_4-1-配置redis" tabindex="-1"><a class="header-anchor" href="#_4-1-配置redis" aria-hidden="true">#</a> 4.1 配置Redis</h5><p>命令：解压目录下的redis.conf配置文件复制到安装文件的目录下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#把编译的redis<span class="token punctuation">.</span>conf文件放 ，安装的redis文件目录下
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> redis<span class="token operator">-</span><span class="token number">5.0</span><span class="token number">.8</span><span class="token punctuation">]</span># pwd
<span class="token operator">/</span>root<span class="token operator">/</span>apps<span class="token operator">/</span>redis<span class="token operator">-</span><span class="token number">5.0</span><span class="token number">.8</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> redis<span class="token operator">-</span><span class="token number">5.0</span><span class="token number">.8</span><span class="token punctuation">]</span># cp redis<span class="token punctuation">.</span>conf <span class="token operator">/</span>root<span class="token operator">/</span>apps<span class="token operator">/</span>redis
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> redis<span class="token operator">-</span><span class="token number">5.0</span><span class="token number">.8</span><span class="token punctuation">]</span># cd <span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> apps<span class="token punctuation">]</span># ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2-redis-conf" tabindex="-1"><a class="header-anchor" href="#_4-2-redis-conf" aria-hidden="true">#</a> 4.2 Redis.conf</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>、<span class="token class-name">Redis</span>默认不是以守护进程的方式运行，可以通过该配置项修改，使用yes启用守护进程
    daemonize no
<span class="token number">2</span>、当<span class="token class-name">Redis</span>以守护进程方式运行时，<span class="token class-name">Redis</span>默认会把pid写入<span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>redis<span class="token punctuation">.</span>pid文件，可以通过pidfile指定 
    pidfile <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>redis<span class="token punctuation">.</span>pid

<span class="token number">3</span>、指定<span class="token class-name">Redis</span>监听端口，默认端口为<span class="token number">6379</span>；’
    port <span class="token number">6379</span>
<span class="token number">4</span>、绑定的主机地址
    bind <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
<span class="token number">5</span>、当客户端限制多长时间后关闭连接，如果指定为<span class="token number">0</span>，表示关闭该功能
    timeout <span class="token number">300</span>
<span class="token number">6</span>、指定日志记录几倍，<span class="token class-name">Redis</span>总共支持四个级别：debug，verbose，notice，warning，默认为verbose
    loglevel verbos
<span class="token number">7</span>、日志记录方式，默认为标准输出，如果配置<span class="token class-name">Redis</span>为守护进程方式运行，而这里又配置日志记录方式标准输出，则日志将会发送给<span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span>
    logfile stdout
<span class="token number">8</span>、设置数据库的数量，默认数据库为<span class="token number">0</span>，可以使用<span class="token constant">SELECT</span><span class="token generics"><span class="token punctuation">&lt;</span>dbid<span class="token punctuation">&gt;</span></span>命令在连接上指定数据库id
    databases <span class="token number">16</span>
<span class="token number">9</span>、指定在多长时间内，有多少次更新操作，就将数据同步到数据文件，可以多个条件配合
    save<span class="token generics"><span class="token punctuation">&lt;</span>seconds<span class="token punctuation">&gt;</span></span><span class="token generics"><span class="token punctuation">&lt;</span>changes<span class="token punctuation">&gt;</span></span>
    <span class="token class-name">Redis</span>默认配置文件中提供了三个条件
    save <span class="token number">900</span> <span class="token number">1</span>
    save <span class="token number">300</span> <span class="token number">10</span>
    save <span class="token number">60</span> <span class="token number">10000</span>
    分别表示<span class="token number">900</span>秒<span class="token punctuation">(</span><span class="token number">15</span>分钟<span class="token punctuation">)</span>内有<span class="token number">1</span>个更改，<span class="token number">300</span>秒<span class="token punctuation">(</span><span class="token number">5</span>分钟<span class="token punctuation">)</span>内有<span class="token number">10</span>个更改以及<span class="token number">60</span>秒内有<span class="token number">10000</span>个更改。
<span class="token number">10</span>、指定存储至本地数据库时是否压缩数据，默认为yes，<span class="token class-name">Redis</span>采用<span class="token function">LZF</span><span class="token punctuation">(</span>压缩算法<span class="token punctuation">)</span>压缩，如果为了节省<span class="token constant">CPU</span>时间，可以关闭该选项，但会导致数据库文件变的巨大
    rdbcompression yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>中间10个</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">11</span>、指定本地数据库文件名，默认为dump<span class="token punctuation">.</span>rdb
	dbfilename dump<span class="token punctuation">.</span>rdb
<span class="token number">12</span>、指定本地数据库存放目录
	dir <span class="token punctuation">.</span>/
<span class="token number">13</span>、设置当本机为slav服务时，设置master服务的<span class="token constant">IP</span>地址及端口，在<span class="token class-name">Redis</span>启动时，它会自动从master进行数据同步slaveof<span class="token generics"><span class="token punctuation">&lt;</span>masterip<span class="token punctuation">&gt;</span></span> <span class="token generics"><span class="token punctuation">&lt;</span>masterport<span class="token punctuation">&gt;</span></span>
<span class="token number">14</span>、当master服务设置了密码保护时，slav服务连接master的密码
    masterauth<span class="token operator">&lt;</span>master<span class="token operator">-</span>password<span class="token operator">&gt;</span>
<span class="token number">15</span>、设置<span class="token class-name">Redis</span>连接密码，如果配置了连接密码，客户端在连接<span class="token class-name">Redis</span>是需要通过<span class="token constant">AUTH</span> <span class="token generics"><span class="token punctuation">&lt;</span>password<span class="token punctuation">&gt;</span></span>命令提供密码，默认关闭
    requirepass foobared
<span class="token number">16</span>、设置同一时间最大客户端连接数，默认是无限制，<span class="token class-name">Redis</span>可以同时打开的客户端连接数为<span class="token class-name">Redis</span>进程可以打开的最大文件描述符数，如果设置maxclients <span class="token number">0</span>，表示不作限制。当客户端连接数到达限制是，<span class="token class-name">Redis</span>会关闭新的连接并向客户端返回max number of clients reached错误信息
    maxclients <span class="token number">128</span>

<span class="token number">17</span>、指定<span class="token class-name">Redis</span>最大内存限制，<span class="token class-name">Redis</span>在启动时会把数据加载到内存中，达到最大内存后，<span class="token class-name">Redis</span>会先尝试清除已到期或即将到期的<span class="token class-name">Key</span>，档次方法处理后，仍然达最大内存设置，将无法再进行写入操作，但仍然可以静心读取操作。<span class="token class-name">Rdis</span>新的vm机制，会把key存放内存，<span class="token class-name">Value</span>会存放在swap区
    maxmemory <span class="token generics"><span class="token punctuation">&lt;</span>bytes<span class="token punctuation">&gt;</span></span>
<span class="token number">18</span>、指定是否每次更新操作后进行日志记录，<span class="token class-name">Redis</span>在默认情况下是异步的把数据写入磁盘，如果不开启，可能会在断电时导致一端时间内的数据丢失。因为 redis 本省同步数据文件是按上面save条件来同步的，所有的数据会在一端时间内只存在于内存中。默认为no
    appendonly no
<span class="token number">19</span>、指定更新日志文件名，默认为appendonly<span class="token punctuation">.</span>aof
    appendfulename appendonly<span class="token punctuation">.</span>aof
<span class="token number">20</span>、指定更新日志条件，共有<span class="token number">3</span>个可选值：
    no<span class="token operator">:</span> 表示等操作系统进行数据缓存同步到磁盘<span class="token punctuation">(</span>快<span class="token punctuation">)</span>
    always<span class="token operator">:</span> 表示每次更新操作后活动调用<span class="token function">fsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>将数据写到磁盘<span class="token punctuation">(</span>慢，安全<span class="token punctuation">)</span>
    everysec<span class="token operator">:</span> 表示每秒同步一个<span class="token punctuation">(</span>折中，默认值<span class="token punctuation">)</span>
    appendfsync everysec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>maxmemory-policy noeviction  #  内存达到上限之后的处理策略
1、volatile-lru ： 只对设置了过期时间的key进行LRU（默认值）
2、allkeys-lru ： 产出lru算法的key
3、volatile-random  ： 随机删除即将过期key
4、allkey -random : 随机删除
5、volatile-ttl  :  删除即将过期的
6、noeviction    ： 永不过期，返回错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结尾10个</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">21</span>、指定是否启用虚拟内存机制，默认为no，简单的介绍一下，vm机制将数据分页存放，有<span class="token class-name">Redis</span>将访问量较少的页即冷数据swap到磁盘上，访问多的页面由磁盘自动换出到内存中<span class="token punctuation">(</span>在后面的文章会仔细分析<span class="token class-name">Redis</span>的vm机制<span class="token punctuation">)</span>
    vm<span class="token operator">-</span>enabled no
<span class="token number">22</span>、虚拟内存文件路径，默认值为<span class="token operator">/</span>tmp<span class="token operator">/</span>redis<span class="token punctuation">.</span>swap，不可多个<span class="token class-name">Redis</span>实例共享
    vm<span class="token operator">-</span>swap<span class="token operator">-</span>file <span class="token operator">/</span>tmp<span class="token operator">/</span>redis<span class="token punctuation">.</span>swap
<span class="token number">23</span>、将所有大于vm<span class="token operator">-</span>max<span class="token operator">-</span>memory的数据存入虚拟内存，无论vm<span class="token operator">-</span>max<span class="token operator">-</span>memory设置多小，所有索引数据都是内存存储的<span class="token punctuation">(</span><span class="token class-name">Redis</span>的索引数据 就是keys<span class="token punctuation">)</span>，也就是说，当vm<span class="token operator">-</span>max<span class="token operator">-</span>memory设置为<span class="token number">0</span>的时候，其实是所有value都存在于磁盘。默认值为<span class="token number">0</span>
    vm<span class="token operator">-</span>page<span class="token operator">-</span>size <span class="token number">32</span>
<span class="token number">24</span>、<span class="token class-name">Redis</span> swap文件分成了很多的page，一个对象可以保存咱几多个page上面，但一个page上不能被多个对象共享，vm<span class="token operator">-</span>page<span class="token operator">-</span>size是要根据存储的 数据大小来设定的，作者建议如果村粗很多小对象，page大小最好设置为<span class="token number">32</span>或者<span class="token number">64</span>bytes；如果存储很大大对象，则可以使用更大的page，如果不确定，就是用默认值
    vm<span class="token operator">-</span>page<span class="token operator">-</span>size <span class="token number">32</span>
<span class="token number">25</span>、设置swap文件中的page数量，由于页表<span class="token punctuation">(</span>一种表示页面空闲或是欧诺个的bitmap<span class="token punctuation">)</span>是放在内存中的，在磁盘上每<span class="token number">8</span>个pages将消耗<span class="token number">1</span>byte的内存
    vm<span class="token operator">-</span>pages <span class="token number">134217728</span>
<span class="token number">26</span>、设置访问swap文件的线程数，最好不要超过机器的核数，如果设置为<span class="token number">0</span>，那么所有对swap文件的操作都是串行的，可能会造成比较长时间的延迟。默认值为 <span class="token number">4</span>
    vm<span class="token operator">-</span>max<span class="token operator">-</span>threads <span class="token number">4</span>
<span class="token number">27</span>、设置在向客户端应答时，是否把较小的包含并未一个包发送，默认为开启
    glueoutputbuf yes
<span class="token number">28</span>、指定在超过一定的数量或者最大的元素超过某一临界值时，采用一种特殊的哈希算法
    hash<span class="token operator">-</span>max<span class="token operator">-</span>zipmap<span class="token operator">-</span>entries <span class="token number">64</span>
    hash<span class="token operator">-</span>max<span class="token operator">-</span>zipmap<span class="token operator">-</span>value <span class="token number">512</span>
<span class="token number">29</span>、指定是否激活重置哈希。默认为开启<span class="token punctuation">(</span>后面在介绍<span class="token class-name">Redis</span>的哈希算法时具体介绍<span class="token punctuation">)</span>
    activerehasing yes
<span class="token number">30</span>、指定包含其他的配置文件，可以在同一主机上多个redis实例之间使用同一份配置文件，而同时各个实例又拥有自己的特定配置文件
    include <span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>local<span class="token punctuation">.</span>conf    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-2、内存中的维护策略" tabindex="-1"><a class="header-anchor" href="#_4-2、内存中的维护策略" aria-hidden="true">#</a> 4.2、内存中的维护策略</h5><p>redis作为优秀的中间缓存件，时常会存储大量的数据，即使采取了集群部署来动态扩容，也应该即使的整理内存，维持系统性能。</p><h6 id="_4-2-1-在redis中有两种解决方案" tabindex="-1"><a class="header-anchor" href="#_4-2-1-在redis中有两种解决方案" aria-hidden="true">#</a> 4.2.1 在redis中有两种解决方案</h6><ul><li>为数据设置超时时间</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//设置过期时间</span>
expire key <span class="token function">time</span><span class="token punctuation">(</span>以秒为单位<span class="token punctuation">)</span><span class="token operator">--</span>这是最常用的方式
<span class="token function">setex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> seconds<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token operator">--</span>字符串独有的方式

<span class="token number">1</span>、除了字符串自己独有设置过期时间的方法外，其他方法都需要依靠expire方法来设置时间
<span class="token number">2</span>、如果没有设置时间，那缓存就是永不过期
<span class="token number">3</span>、如果设置了过期时间，之后又想让缓存永不过期没使用persist key    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>采用LRU算法动态将不用的数据删除</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>内存管理的一种页面置换算法，对于在内存中但又不用的数据块<span class="token punctuation">(</span>内存块<span class="token punctuation">)</span>叫做<span class="token constant">LRU</span>，
操作系统会根据哪些数据属于<span class="token constant">LRU</span>而将其移除内存而腾出空间来加载另外的数据。
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.<strong>volatile-lru</strong>：设定超时时间的数据中，删除最不常使用的数据</p><p>2.<strong>allkeys-lru</strong>：查询所有的key只能怪最近最不常使用的数据进行删除，这是应用最广泛的策略。</p><p>3.<strong>volatile-random</strong>：在已经设定了超时的数据中随机删除。</p><p>4.<strong>allkeys-random</strong>：查询所有的key，之后随机删除。</p><p>5.<strong>volatile-ttl</strong>：查询全部设定超时时间的数据，之后排序，将马上要过期的数据进行删除操作。</p><p>6.<strong>noeviction</strong>：如果设置为该属性，则不会进行删除操作，如果内存溢出则报错返回。</p><p>7.<strong>volatile-lfu</strong>：从所有配置了过去时间的键中驱逐使用频率最少的键</p><p>8.<strong>allkeys-lfu</strong>：从所有键中驱逐使用频率最少的键</p><h6 id="_4-2-2-自定义配置redis" tabindex="-1"><a class="header-anchor" href="#_4-2-2-自定义配置redis" aria-hidden="true">#</a> 4.2.2 自定义配置redis</h6><p>进入对应的安装目录：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>/root/apps/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改redis.conf配置文件 vim redis.conf（进入命令模式 通过/内容 查找相应字符串）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>daemonize no 修改为 daemonize yes 守护进程启动
bind <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span> 注释掉  允许除本机 外的机器访问redis服务
requirepass 设置密码  设定数据库密码 <span class="token punctuation">(</span>保证服务安全<span class="token operator">/</span>有些情况下不设定密码是无法进行远程连接访问的<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis采用的是单进程多线程的模式。当redis.conf中选项daemonize设置成为yes时，代表开启守护进程模式。在该模式下，redis会在后台运行，并将进程pid号写入值redis.conf选项pidfile设置的文件中，此时redis将一直运行，除非手动kill该进程。但当daemonize选项设置为no时，当前界面将进入redis的命令行界面，exit强制退出或者关闭连接工具（putty,xshell等）都会呆滞redis进程退出。</p><p>服务端开发的大部分应用都是采用后台运行的模式</p><p>requirepass设置密码。因为redis速度相当快，所以一台比较好的服务器下，一个外部用户在一秒内可以进行15w密码尝试，这意味你需要设定非常强大的密码来防止暴力破解。</p><p>可以通过redis的配置文件设置密码参数，这样客户端连接大redis服务就需要密码验证，这样可以让你的redis服务更加安全。</p><h4 id="五-、redis启动" tabindex="-1"><a class="header-anchor" href="#五-、redis启动" aria-hidden="true">#</a> 五 、Redis启动</h4><h5 id="_5-1-redis以守护进程服务端进行启动" tabindex="-1"><a class="header-anchor" href="#_5-1-redis以守护进程服务端进行启动" aria-hidden="true">#</a> 5.1 Redis以守护进程服务端进行启动</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用该命令进行启动：【./bin/redis-server ./redis.conf 】</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> redis<span class="token punctuation">]</span># <span class="token punctuation">.</span>/bin<span class="token operator">/</span>redis<span class="token operator">-</span>server <span class="token punctuation">.</span>/redis<span class="token punctuation">.</span>conf 
<span class="token number">11450</span><span class="token operator">:</span><span class="token class-name">C</span> <span class="token number">05</span> <span class="token class-name">Jul</span> <span class="token number">2020</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">23</span><span class="token operator">:</span><span class="token number">34.257</span> # oO0OoO0OoO0Oo <span class="token class-name">Redis</span> is starting oO0OoO0OoO0Oo
<span class="token number">11450</span><span class="token operator">:</span><span class="token class-name">C</span> <span class="token number">05</span> <span class="token class-name">Jul</span> <span class="token number">2020</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">23</span><span class="token operator">:</span><span class="token number">34.257</span> # <span class="token class-name">Redis</span> version<span class="token operator">=</span><span class="token number">5.0</span><span class="token number">.8</span><span class="token punctuation">,</span> bits<span class="token operator">=</span><span class="token number">64</span><span class="token punctuation">,</span> commit<span class="token operator">=</span><span class="token number">00000000</span><span class="token punctuation">,</span> modified<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> pid<span class="token operator">=</span><span class="token number">11450</span><span class="token punctuation">,</span> just started
<span class="token number">11450</span><span class="token operator">:</span><span class="token class-name">C</span> <span class="token number">05</span> <span class="token class-name">Jul</span> <span class="token number">2020</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">23</span><span class="token operator">:</span><span class="token number">34.257</span> # <span class="token class-name">Configuration</span> loaded
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> redis<span class="token punctuation">]</span># 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-redis客户端进行启动" tabindex="-1"><a class="header-anchor" href="#_5-2-redis客户端进行启动" aria-hidden="true">#</a> 5.2 Redis客户端进行启动：</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//Redis 客户端启动命令：./redis-cli</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> bin<span class="token punctuation">]</span># <span class="token punctuation">.</span>/redis<span class="token operator">-</span>cli 
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> keys <span class="token operator">*</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="六、redis关闭" tabindex="-1"><a class="header-anchor" href="#六、redis关闭" aria-hidden="true">#</a> 六、Redis关闭</h4><h5 id="_6-1、第一种关闭方式" tabindex="-1"><a class="header-anchor" href="#_6-1、第一种关闭方式" aria-hidden="true">#</a> 6.1、第一种关闭方式：</h5><p>(断电、非正常关闭，容易数据丢失) 查询不到redis进程id</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>PID ps -ef | grep -i redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>kill 查询的id进行强制关闭</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>kill <span class="token operator">-</span><span class="token number">9</span> <span class="token constant">PID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6-2、第二种关闭方式" tabindex="-1"><a class="header-anchor" href="#_6-2、第二种关闭方式" aria-hidden="true">#</a> 6.2、第二种关闭方式</h5><p>(正常关闭，数据保存)</p><p><strong>关闭redis服务，通过客户端进行shutdown</strong></p><p>如果redis设置了密码，需要先在客户端通过密码登录，在进行shutdown即可关闭服务端</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 在客户端使用【shutdown】命令关闭Redis服务端</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> <span class="token constant">SHUTDOWN</span>
not connected<span class="token operator">&gt;</span> y
<span class="token class-name">Could</span> not connect <span class="token keyword">to</span> <span class="token class-name">Redis</span> at <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">:</span> <span class="token class-name">Connection</span> refused
not connected<span class="token operator">&gt;</span> shutdown
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="七、远程连接" tabindex="-1"><a class="header-anchor" href="#七、远程连接" aria-hidden="true">#</a> 七、远程连接</h4><h5 id="_7-1-redis远程连接比较流行的软件-redisdesktomanager" tabindex="-1"><a class="header-anchor" href="#_7-1-redis远程连接比较流行的软件-redisdesktomanager" aria-hidden="true">#</a> 7.1 Redis远程连接比较流行的软件：RedisDesktoManager</h5><p>默认不允许远程连接，需要修改一下信息才可以进行修改，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>bind <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span> 注释掉 允许除本机以外的机器访问<span class="token class-name">Redis</span>服务
requirepass 设置密码 设定数据库密码<span class="token punctuation">(</span>有些情况系不设定密码是无法进行远程连接访问的<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-2-redis使用密码登录" tabindex="-1"><a class="header-anchor" href="#_7-2-redis使用密码登录" aria-hidden="true">#</a> 7.2 Redis使用密码登录</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Redis客户端使用密码进行登录  【./bin/redis-cli -a redis】</span>
<span class="token punctuation">[</span>root<span class="token annotation punctuation">@centos</span> redis<span class="token punctuation">]</span># <span class="token punctuation">.</span>/bin<span class="token operator">/</span>redis<span class="token operator">-</span>cli <span class="token operator">-</span>a redis
<span class="token class-name">Warning</span><span class="token operator">:</span> <span class="token class-name">Using</span> a password <span class="token keyword">with</span> <span class="token char">&#39;-a&#39;</span> or <span class="token char">&#39;-u&#39;</span> option on the command line <span class="token keyword">interface</span> may not be safe<span class="token punctuation">.</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> keys <span class="token operator">*</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="centos-防火墙端口" tabindex="-1"><a class="header-anchor" href="#centos-防火墙端口" aria-hidden="true">#</a> Centos 防火墙端口</h4><p>开放8080端口（如下命令只针对Centos7以上）</p><p>查看已经开放的端口：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>firewall-cmd --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启端口：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>firewall-cmd --zone=public --add-port-6379/tcp --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启防火墙：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>firewall-cmd --reload  #重启
Firewall systemctl stop firewalld.service  #停止
firewall systemctl disable firewalld.service #禁止firewall 开机启动

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="八-、docker安装redis" tabindex="-1"><a class="header-anchor" href="#八-、docker安装redis" aria-hidden="true">#</a> 八 、Docker安装Redis</h4><h5 id="_8-1-搜索redis" tabindex="-1"><a class="header-anchor" href="#_8-1-搜索redis" aria-hidden="true">#</a> 8.1 搜索redis</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker search redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_8-2-下载镜像" tabindex="-1"><a class="header-anchor" href="#_8-2-下载镜像" aria-hidden="true">#</a> 8.2 下载镜像</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker pull redis：<span class="token number">4.0</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_8-3-创建并运行容器" tabindex="-1"><a class="header-anchor" href="#_8-3-创建并运行容器" aria-hidden="true">#</a> 8.3 创建并运行容器</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker run <span class="token operator">-</span>d <span class="token operator">--</span>name redis6379 <span class="token operator">-</span>p <span class="token number">6379</span><span class="token operator">:</span><span class="token number">6379</span> redis<span class="token operator">:</span><span class="token number">4.0</span><span class="token number">.1</span> <span class="token operator">--</span>requirepass <span class="token string">&quot;redis&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_8-4-测试进入redis进入客户端" tabindex="-1"><a class="header-anchor" href="#_8-4-测试进入redis进入客户端" aria-hidden="true">#</a> 8.4 测试进入Redis进入客户端</h5><p>使用redis镜像执行redis-cli命令连接到刚启动的容器</p><h4 id="九、redis常用命令" tabindex="-1"><a class="header-anchor" href="#九、redis常用命令" aria-hidden="true">#</a> 九、Redis常用命令</h4><p>Redis 命令用于在redis服务上执行操作。要在redis服务上执行命令需要一个redis客户端。</p><p>Redis 客户端在我们之前下载的Redis的安装包中。</p><p>**Redis支持的物种数据类型 ：string(字符串)，hash(哈希)，list(列表)，set(集合)及zset（sorted set : 有序集合）等</p><h5 id="_9-1-常用命令key管理" tabindex="-1"><a class="header-anchor" href="#_9-1-常用命令key管理" aria-hidden="true">#</a> 9.1 常用命令key管理</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>、 keys <span class="token operator">*</span> <span class="token operator">:</span>返回满足的所有键，可以模糊匹配，比如 keys abc<span class="token operator">*</span> ：表示以 abc 开头的 key
<span class="token number">2</span>、 exists key ： 是否存在指定的key ，存在返回<span class="token number">1.</span>不存在返回<span class="token number">0</span>
<span class="token number">3</span>、 expire key second ：设置某个key的过期时间 时间为妙
<span class="token number">4</span>、 del key <span class="token operator">:</span> 删除某个key
<span class="token number">5</span>、 ttl key ：查看剩余时间，当key不存在是，返回<span class="token operator">-</span><span class="token number">2</span>；存在但没有设置剩余生存时间时，返回 <span class="token operator">-</span><span class="token number">1</span>，否              则，以秒为单位，返回key 的剩余生存时间。
<span class="token number">6</span>、 persist key ：取消过去时间
<span class="token number">7</span>、 <span class="token constant">PEXPIRE</span> key millisseconds 修改key 的过期时间为毫秒
<span class="token number">8</span>、 select ： 选择数据库 数据库为<span class="token number">0</span><span class="token operator">-</span><span class="token number">15</span>（默认一共<span class="token number">16</span>个数据库）
<span class="token number">9</span>、 设计成多个数据库实际上是为了数据库安全和备份
<span class="token number">10</span>、 move key dbindex ： 将当前数据中的key转移到其他数据库
<span class="token number">11</span>、 randomkey ： 随机返回一个key
<span class="token number">12</span>、 rename key key2 <span class="token operator">:</span> 种命名key
<span class="token number">13</span>、 echo ： 打印命令
<span class="token number">14</span>、 dbsize <span class="token operator">:</span> 查看数据库的key数量
<span class="token number">15</span>、 info <span class="token operator">:</span> 查看数据库信息
<span class="token number">16</span>、 config get <span class="token operator">*</span> 实时存储收到的请求，返回相关的配置
<span class="token number">17</span>、 flushdb ： 清除当前数据库
<span class="token number">18</span>、 flushall ： 清空所有数据库 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_9-2-del-key" tabindex="-1"><a class="header-anchor" href="#_9-2-del-key" aria-hidden="true">#</a> 9.2 DEL key</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>该命令用于在key存在时删除key。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-3-exists-key" tabindex="-1"><a class="header-anchor" href="#_9-3-exists-key" aria-hidden="true">#</a> 9.3 EXISTS key</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>检查给定key是否存在。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-4-expire-key-seconds" tabindex="-1"><a class="header-anchor" href="#_9-4-expire-key-seconds" aria-hidden="true">#</a> 9.4 EXPIRE key seconds</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>为给定key设置过期时间(以秒计)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-5-pexpire-key-milliseconds" tabindex="-1"><a class="header-anchor" href="#_9-5-pexpire-key-milliseconds" aria-hidden="true">#</a> 9.5 PEXPIRE key milliseconds</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>设置key的过期时间以毫秒计
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-6-ttl-key" tabindex="-1"><a class="header-anchor" href="#_9-6-ttl-key" aria-hidden="true">#</a> 9.6 TTL key</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>以秒为单位，返回给定key的剩余生存时间(TTL, time to live)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-7-pttl-key" tabindex="-1"><a class="header-anchor" href="#_9-7-pttl-key" aria-hidden="true">#</a> 9.7 PTTL key</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>以秒为单位，返回 key 的剩余生存时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-8-keys-pattern" tabindex="-1"><a class="header-anchor" href="#_9-8-keys-pattern" aria-hidden="true">#</a> 9.8 KEYS pattern</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>查找所有服务给定模式(pattern)的key。
keys 通配符  获取所有与pattern匹配的key，返回所有与该匹配
  通配符 ： 
		* 代表所有
        ? 表示代表一个字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_9-9-rename-key-newkey" tabindex="-1"><a class="header-anchor" href="#_9-9-rename-key-newkey" aria-hidden="true">#</a> 9.9 RENAME key newkey</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>修改key的名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-10-move-key-db" tabindex="-1"><a class="header-anchor" href="#_9-10-move-key-db" aria-hidden="true">#</a> 9.10 MOVE key db</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>将当前数据库的 key 移动到给定的数据库db当中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-11-type-key" tabindex="-1"><a class="header-anchor" href="#_9-11-type-key" aria-hidden="true">#</a> 9.11 TYPE key</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>返回 key 所存储的值的类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_9-12-应用场景" tabindex="-1"><a class="header-anchor" href="#_9-12-应用场景" aria-hidden="true">#</a> 9.12 应用场景</h5><p><strong>EXPIPER key seconds</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>、限时的优惠活动信息
<span class="token number">2</span>、网站数据缓存<span class="token punctuation">(</span>对于一些需要定时更新的数据，例如<span class="token operator">:</span>积分排行榜<span class="token punctuation">)</span>
<span class="token number">3</span>、手机验证码
<span class="token number">4</span>、限制网站访客访问频率<span class="token punctuation">(</span>例如：<span class="token number">1</span>分钟最多访问<span class="token number">10</span>次<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_9-13-key的命名建议" tabindex="-1"><a class="header-anchor" href="#_9-13-key的命名建议" aria-hidden="true">#</a> 9.13 key的命名建议</h5><p><strong>redis单个key允许存入512M大小</strong></p><ul><li>1、key 不要太长，尽量不要超过1024字节，这不仅消耗内存，而且会降低查找的效率</li><li>2、key 也不要太短，太短的话，key的可读性会降低</li><li>3、在一个项目中，key最好使用提议的命名模式，例如user:12:password</li><li>4、key名称区分大小写</li></ul><h4 id="十-、redis数据类型" tabindex="-1"><a class="header-anchor" href="#十-、redis数据类型" aria-hidden="true">#</a> 十 、Redis数据类型</h4><h5 id="_10-1-string-类型" tabindex="-1"><a class="header-anchor" href="#_10-1-string-类型" aria-hidden="true">#</a> 10.1 String 类型</h5><p>String类型是Redis最基本的数据类型，一个键最大能存储512MB。</p><p>String 数据结构最贱但的key-value类型，value其不仅是string，也可以是数字，是包含很多种类型的特殊类型，</p><p>String类型是二进制安全的。意思是redis的string可以包含任何数据。</p><p>比如序列化的对象进行存储，比如一张图片进行二进制存储，比如一个简单的字符串，数值等等。</p><h5 id="string命令" tabindex="-1"><a class="header-anchor" href="#string命令" aria-hidden="true">#</a> String命令</h5><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>、复制语法：
	<span class="token constant">SET</span> <span class="token constant">KEY_NAME</span> <span class="token constant">VALUE</span> <span class="token operator">:</span> <span class="token punctuation">(</span>说明：多次设置name会覆盖<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token class-name">Redis</span> <span class="token constant">SET</span> 命令用于设置给定 key 的值。如果 key 已经存储值，<span class="token constant">SET</span> 就要写旧值，且无视类型<span class="token punctuation">)</span>。
<span class="token number">2</span>、命令：
    <span class="token constant">SETNX</span> key1 value：<span class="token punctuation">(</span>not exist<span class="token punctuation">)</span> 如果key1不存在，则设置 并返回<span class="token number">1</span>。如果key1存在，则不设置并返回<span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">(</span>解决分布式锁  方案之一，只有在key 不存在时设置 key 的值。setnx <span class="token punctuation">(</span><span class="token constant">SET</span> <span class="token keyword">if</span> not exits<span class="token punctuation">)</span>命令在指定的key不存在时，为key设置指定的值<span class="token punctuation">)</span>。
    <span class="token constant">SETEX</span> key1 <span class="token number">10</span> lx <span class="token operator">:</span><span class="token punctuation">(</span>expired<span class="token punctuation">)</span>设置key1的值为lx<span class="token punctuation">,</span>过期时间为<span class="token number">10</span>秒，<span class="token number">10</span>秒后key1清除（key也清除）

<span class="token constant">SETEX</span> key1 <span class="token number">10</span> lx <span class="token operator">:</span><span class="token punctuation">(</span>expired<span class="token punctuation">)</span> 设置key1的值为lx，过期时间为<span class="token number">10</span>秒，<span class="token number">10</span>秒后key1清除<span class="token punctuation">(</span>key 也清除<span class="token punctuation">)</span>

<span class="token constant">SETRANG</span> <span class="token constant">STRING</span> range value <span class="token operator">:</span> 替换字符串

<span class="token number">3</span>、取值语法：
	<span class="token constant">GET</span> <span class="token constant">KEY_NAME</span> <span class="token operator">:</span> <span class="token class-name">Redis</span> <span class="token constant">GET</span> 命令用于获取指定 key 的值。如果 key 不存在，返回 nil。如果key存储的值不是字符串类型，返回一个错误。

  <span class="token constant">GETRANGE</span>  key start end <span class="token operator">:</span> 用于获取存储在指定key中字符串的子字符串。字符串的截取范围由 start 和 end 两个偏移量来决定<span class="token punctuation">(</span>包括 start 和 end 在内<span class="token punctuation">)</span>

	<span class="token constant">GETBIT</span> key offset ：对 key 所存储的字符串值，获取指定偏移量上的为<span class="token punctuation">(</span>bit<span class="token punctuation">)</span>；
<span class="token constant">GETTEST</span>语法 ： <span class="token constant">GETSET</span> <span class="token constant">KEY_NAME</span> <span class="token constant">VALUE</span> <span class="token operator">:</span> <span class="token constant">GETSET</span> 命令用于设置指定 key 的值，并返回key的旧值。当key不存在是，返回 nil
	<span class="token constant">STRLEN</span> key <span class="token operator">:</span>返回 key 所存储的字符串值的长度

<span class="token number">4</span>、删除语法：
<span class="token constant">DEL</span> <span class="token constant">KEY_NAME</span> <span class="token operator">:</span> 删除指定的key，如果存在，返回数字类型。

<span class="token number">5</span>、批量写：<span class="token constant">MSET</span> <span class="token constant">K1</span> <span class="token constant">V1</span> <span class="token constant">K2</span> <span class="token constant">V2</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">(</span>一次性写入多个值<span class="token punctuation">)</span>
<span class="token number">6</span>、批量读：<span class="token constant">MGET</span> <span class="token constant">K1</span> <span class="token constant">K2</span> <span class="token constant">K3</span>


<span class="token number">7</span>、<span class="token constant">GETSET</span> <span class="token constant">NAME</span> <span class="token constant">VALUE</span> <span class="token operator">:</span> 一次性设置和读取<span class="token punctuation">(</span>返回旧值，写上新值<span class="token punctuation">)</span>
<span class="token number">8</span>、自增<span class="token operator">/</span>自减：
  <span class="token constant">INCR</span> <span class="token class-name">KEY_Name</span> <span class="token operator">:</span> <span class="token class-name">Incr</span> 命令将key中存储的数组值增<span class="token number">1</span>。如果 key 不存在，那么key的值会先被初始化为<span class="token number">0</span>，然后在执行<span class="token constant">INCR</span>操作
  自增<span class="token operator">:</span> <span class="token constant">INCRBY</span> <span class="token class-name">KEY_Name</span> <span class="token operator">:</span> 增量值<span class="token class-name">Incrby</span> 命令将key中存储的数字加上指定的增量值
  自减<span class="token operator">:</span> <span class="token constant">DECR</span> <span class="token class-name">KEY_Name</span> 或 <span class="token constant">DECYBY</span> <span class="token constant">KEY_NAME</span> 减值：<span class="token constant">DECR</span> 命令将key中存储的数字减少<span class="token number">1</span>

：<span class="token punctuation">(</span>注意这些key对应的必须是数字类型字符串，否则会出错。<span class="token punctuation">)</span>

字符串拼接：<span class="token constant">APPEND</span>  <span class="token constant">KEY_NAME</span> <span class="token constant">VALUE</span>
<span class="token operator">:</span><span class="token class-name">Append</span> 命令用于为指定的key追加至末尾，如果不存在，为其赋值

字符串长度 ：<span class="token constant">STRLEN</span> key
    
##########################    
 setex   <span class="token punctuation">(</span>set <span class="token keyword">with</span> <span class="token namespace">expire</span><span class="token punctuation">)</span> #设置过期时间
 setnx   <span class="token punctuation">(</span>set <span class="token keyword">if</span> not exist<span class="token punctuation">)</span> #不存在设置 在分布式锁中会常常使用！
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-2-应用场景" tabindex="-1"><a class="header-anchor" href="#_10-2-应用场景" aria-hidden="true">#</a> 10.2 应用场景</h5><ul><li><p><strong>1、String通常用于保存单个字符串或JSON字符串数据</strong></p></li><li><p><strong>2、因String是二进制安全的，所以你完全可以把一个图片文件的内容作为字符串来存储</strong></p></li><li><p><strong>3、计数器(常规key-value缓存应用。常规计数：微博数，粉丝数)</strong></p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>INCR 等指令本身就具有原子操作的特定，所以我们完全可以利用redis的INCR，INCRBY,DECR,DECRBY等指令来实现原子计数的效果。假如，在某种场景下有3个客户端同时读取了mynum的值<span class="token punctuation">(</span>值为2<span class="token punctuation">)</span>，然后对其同时进行了加1的操作，那么，最后mynum的值一定是5。
不少网站都利用redis的这个特性来实现业务上的统计计数需求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-3-hash类型" tabindex="-1"><a class="header-anchor" href="#_10-3-hash类型" aria-hidden="true">#</a> 10.3 Hash类型</h5><p>Hash类型是String类型的field和value的映射表，或者说是一个String集合。hash特别适合用于存储对象，相比较而言，将一个对象类型存储在Hash类型要存储在String类型里占用更少的内存空间，并对整个对象的存取。可以看成具有KEY和VALUE的MAP容器，该类型非常适合于存储值对象的信息。</p><p>如：uname，upass，age等。该类型的数据仅占用很少的磁盘空间(相比于JSON).</p><p>Redis 中每一个hash 可以存储 2的32次方 -1 键值对(40 多亿)</p><h5 id="_10-4-hash命令" tabindex="-1"><a class="header-anchor" href="#_10-4-hash命令" aria-hidden="true">#</a> 10.4 Hash命令</h5><p>常用命令</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>一、赋值语法：
	<span class="token number">1</span>、 <span class="token constant">HSET</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span> <span class="token constant">VALUE</span>   ： 为指定的<span class="token constant">KEY</span><span class="token punctuation">,</span>设定<span class="token constant">FILD</span><span class="token operator">/</span><span class="token constant">VALUE</span>
	<span class="token number">2</span>、 <span class="token constant">HMSET</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span> <span class="token constant">VALUE</span> <span class="token punctuation">[</span><span class="token constant">FIELD1</span>，<span class="token constant">VALUE</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">:</span> 同时将多个 field<span class="token operator">-</span><span class="token function">value</span><span class="token punctuation">(</span>域<span class="token operator">-</span>值<span class="token punctuation">)</span>对设置到哈希表key中。

二、取值语法：
    <span class="token constant">HGET</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span>  <span class="token operator">:</span>获取存储在<span class="token constant">HASH</span>中的值，根据<span class="token constant">FIELD</span>得到<span class="token constant">VALUE</span>
    <span class="token constant">HMGET</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span> <span class="token punctuation">[</span><span class="token constant">FIELD1</span><span class="token punctuation">]</span>   <span class="token operator">:</span>获取key所有给定字段的值
    <span class="token constant">HGETALL</span> <span class="token constant">KEY</span>     <span class="token operator">:</span>返回<span class="token constant">HASH</span>表中所有的字段和值
        
 <span class="token constant">HKEYS</span> <span class="token constant">KEY</span> <span class="token operator">:</span> 获取所有哈希表中的字段
 <span class="token constant">HLEN</span>  <span class="token constant">KEY</span> <span class="token operator">:</span> 获取哈希表中字段的数量

三、删除语法：
     <span class="token constant">HDEL</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span><span class="token punctuation">[</span><span class="token constant">FIELD2</span><span class="token punctuation">]</span>  <span class="token operator">:</span>删除一个或多个<span class="token constant">HASH</span>表字段
 
四、其它语法：
     <span class="token constant">HSETNX</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span> <span class="token constant">VALUE</span> <span class="token operator">:</span> 只有在字段field 不存在时，设置哈希表字段的值
     
     <span class="token constant">HINCRBY</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span> <span class="token constant">INCREMENT</span> <span class="token operator">:</span>为哈希key中的指定字段的整数值加上增量 increment。
         
     <span class="token constant">HINCRBYFLOAT</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span> <span class="token constant">INCREMENT</span>  <span class="token operator">:</span>为哈希表key 中的指定字段的浮点数值加上增量 increment
         
     <span class="token constant">HEXISTS</span> <span class="token constant">KEY</span> <span class="token constant">FIELD</span>  <span class="token operator">:</span> 查看哈希表中key中，指定的字段是否存在  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379095013.png" alt="图 2" tabindex="0" loading="lazy"><figcaption>图 2</figcaption></figure><h5 id="_10-5-应用场景" tabindex="-1"><a class="header-anchor" href="#_10-5-应用场景" aria-hidden="true">#</a> 10.5 应用场景</h5><p><strong>Hash的应用场景 ：(存储一个用户信息对象数据)</strong></p><ul><li><p><strong>常用于存储一个对象</strong></p></li><li><p><strong>为什么不用string存储一个对象</strong></p><p>hash值最接近关系数据库结构的数据类型，可以将数据库一条记录或程序中一个对象转换成hashmap存放在redis中。</p><p>用户ID为查找的key，存储的value用户对象包含姓名，年龄，生日等信息，如果用普通的key/value结构来存储，主要有一下2中村粗方式：</p><p>​ 第一种方式将用户ID作为查找key，把其他信息封装成为一个对象以序列化的方式存储，这种方式的却但是，增加了序列化/反序列化的开销，并且在需要修改其中一项信息时，需要把整个对象取回，并且修改操作需要对并发进行保护，引入CAS等复杂问题。</p><p>​ 第二种方法是这个用户信息对象有多少成员就存成多少个key-value对儿，用用户ID+对应属性的名称作为唯一标识来取的对应属性的值，虽然省去了序列化开销和并发问题，但是用户ID重复存储，如果存在大量这样的数据，内存浪费还是非常可观的。</p><h5 id="_10-6-总结" tabindex="-1"><a class="header-anchor" href="#_10-6-总结" aria-hidden="true">#</a> 10.6 总结：</h5><p>Redis提供的Hash很好的解决了这个问题，Redis的Hash实际内部存储的Value为一个HashMap，</p></li></ul><h5 id="_10-6-list类型" tabindex="-1"><a class="header-anchor" href="#_10-6-list类型" aria-hidden="true">#</a> 10.6 List类型</h5><p><strong>简介：</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1、   List 类型是一个链表结构的集合，其主要功能有push、pop、获取元素等。更详细的说，List类型是一个双端链表的节后，我们可以通过相关的操作进行集合的头部或者尾部添加和删除元素，List的设计是非常简单精巧，即可以最为栈，有可以最为队列，满足绝大多数的需求。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常用命令</strong></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">1、赋值语法：</span> 
<span class="token key attr-name">	LPUSH</span> <span class="token value attr-value">KEY VALUE1 [VALUE2] :将一个或多个值插入到列表头部（从左侧添加）</span>
<span class="token key attr-name">  RPUSH</span> <span class="token value attr-value">KEY VALUE1 [VALUE2] ：在列表中添加一个或多个值（从有侧添加）</span>
<span class="token key attr-name">	LPUSHX</span> <span class="token value attr-value">KEY VAKUE :将一个值插入到已存在的列表头部。如果列表不在，操作无效</span>
<span class="token key attr-name">	RPUSHX</span> <span class="token value attr-value">KEY VALUE :一个值插入已经在的列表尾部（最右边）。如果列表不在，操作无效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>2、取值语法：
<span class="token key attr-name">	LLEN</span> <span class="token value attr-value">KEY   :获取列表长度</span>
<span class="token key attr-name">  LINDEX</span> <span class="token value attr-value">KEY INDEX	:通过索引获取列表中的元素</span>
<span class="token key attr-name">	LRANGE</span> <span class="token value attr-value">KEY START STOP	:获取列表指定范围内的元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述：返回列表中指定区间的元素，区间以偏移量START和END指定。</p><p>其中0表示列表的第一个元素，1表示列表的第二个元素，以此类推。。。</p><p>也可以使用负数下标，以-1表示列表的最后一个元素，-2表示列表的倒数第二个元素，一次类推。。。</p><p>start：页大小（页数-1）</p><p>stop：（页大小页数）-1</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>3、删除语法：
<span class="token key attr-name">	LPOP</span> <span class="token value attr-value">KEY :移除并获取列表的第一个元素（从左侧删除）</span>
<span class="token key attr-name">	RPOP</span> <span class="token value attr-value">KEY :移除列表的最后一个元素，返回值为移除的元素（从右侧删除）</span>

<span class="token key attr-name">	BLPOP</span> <span class="token value attr-value">key1 [key2]timeout :移除并获取列表的第一个元素，如果列表没有元素会阻塞列表知道等待超时或发现可弹出元素为止。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>4、修改语法：
<span class="token key attr-name">	LSET</span> <span class="token value attr-value">KEY INDEX VALUE :通过索引设置列表元素的值</span>
<span class="token key attr-name">	LINSERT</span> <span class="token value attr-value">KEY BEFORE|AFTER WORIL VALUE :在列表的元素前或者后 插入元素 描述：将值 value 插入到列表key当中，位于值world之前或之后。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>高级命令</strong></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>高级语法：
<span class="token key attr-name">	RPOPLPUSH</span> <span class="token value attr-value">source destiation : 移除列表的最后一个元素，并将该元素添加到另外一个列表并返回</span>
	示例描述：
<span class="token key attr-name">		RPOPLPUSH</span> <span class="token value attr-value">a1  a2  : a1的最后元素移到a2的左侧</span>
<span class="token key attr-name">		RPOPLPUSH</span> <span class="token value attr-value">a1  a1  : 循环列表，将最后元素移到最左侧</span>
<span class="token key attr-name">   BRPOPLPUSH</span> <span class="token value attr-value">source destination timeout  :从列表中弹出一个值，将弹出的元素插入到另外一个列表中并返回它；如果列表没有元素会阻塞列表知道等待超时或发现可弹出的元素为止。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>List代码案例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>po<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> papi
 * <span class="token keyword">@data</span> 2020/7/15
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Redis有什么命令，Jedis有什么方法
     * Lettuce-----》RedisTemplate进一步的封装
     *RedisTemplate 方法和命令是肯定不一样的
     * Redis 和 String类型
     * 需求输入一个key
     * 先判断该key是否存在如果不存在则在mysql中进行查询，写入到redis中。并返回值。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRedisValueByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//表示存在值，进行获取</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-------&gt; redis中查询的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Object</span> o <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不存在去mysql中查并且赋值给reids</span>
            <span class="token class-name">String</span> val <span class="token operator">=</span> <span class="token string">&quot;redis中不存在的key&quot;</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;------&gt;mysql中查询出来的：&quot;</span><span class="token operator">+</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;------&gt;mysql中查出的数据存入redis中&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 测试String类型
     * 需求：用户输入一个redis数据。该key的有效期为28小时
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">expireStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">HOURS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 根据ID查询用户对象信息
     *  先判断redis中是否存在该key
     *  如果不存在，查询数据库中mysql中的值，并将结果添加到redis中。
     *  如果存在，直接将结果在redis查询，并返回。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getHashKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;查询redis数据库&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;查询mysql数据库&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;速速&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/*
                @param  h  用户的实体
                @param  hk 用户主键id
                @param  hv 整个对象
             */</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">,</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> user<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将list放入缓存中
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">list</span> 键
     * <span class="token keyword">@return</span> true 成功 false 失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lpushAll</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 将list放入缓存中
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">list</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间（秒）
     * <span class="token keyword">@return</span> true 成功 false 失败
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lpushAll</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>time<span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 在变量左边添加元素。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@param</span> <span class="token parameter">obj</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lpush</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 在变量左边添加元素。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">prvot</span> 中间参数
     * <span class="token keyword">@param</span> <span class="token parameter">object</span> 要放的值
     * <span class="token keyword">@return</span> 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lpush</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> prvot<span class="token punctuation">,</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>prvot<span class="token punctuation">,</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 在变量左边添加元素。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">prvot</span> 中间参数
     * <span class="token keyword">@param</span> <span class="token parameter">object</span> 要放的值
     * <span class="token keyword">@return</span> 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">rpush</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> prvot<span class="token punctuation">,</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>prvot<span class="token punctuation">,</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 在变量左边添加元素。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">object</span> 要放的值
     * <span class="token keyword">@return</span> 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">rpush</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 在变量左边添加元素。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">object</span> 要放的值
     * <span class="token keyword">@return</span> 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lpushIfPresent</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPushIfPresent</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 移除集合中的左边第一个集合
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 返回右边第一个值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">lpop</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPop</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 移除集合中的右边的元素，一般用在队列取值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 返回右边的元素
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">rpop</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">leftPop</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取指定区间的值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始位置
     * <span class="token keyword">@param</span> <span class="token parameter">end</span> 结束位置
     * <span class="token keyword">@return</span> 返回值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">lrange</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>start<span class="token punctuation">,</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回当前位置上的值。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 当前位置
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">lindex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     * <span class="token keyword">@param</span> <span class="token parameter">count</span> 统计
     * <span class="token keyword">@param</span> <span class="token parameter">object</span> 移除的对象
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>count<span class="token punctuation">,</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取集合长度
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@return</span> 长度
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">llen</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 在集合的指定位置插入元素，如果指定的位置已有元素，则覆盖，没有则新增，超过集合的下标+n则会报错；
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 位置
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">Long</span> index<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 截取集合元素，保留成都内地数据
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始位置
     * <span class="token keyword">@param</span> <span class="token parameter">end</span> 结束位置
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">Long</span> start<span class="token punctuation">,</span> <span class="token class-name">Long</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>start<span class="token punctuation">,</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *出去集合右边的值，同时集合的左边添加一个值
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">str</span> 入栈的值
     * <span class="token keyword">@return</span> 返回对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">rightPopAndleftPush</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPopAndLeftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     *出去集合右边的值，同时集合的左边添加一个值,如果超过等待的时间仍然没有元素则退出
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     * <span class="token keyword">@param</span> <span class="token parameter">str</span> 左边新增的值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 超时时间
     * <span class="token keyword">@return</span> 返回移除右边的值
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">rightPopAndleftPush</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token class-name">String</span> str<span class="token punctuation">,</span><span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPopAndLeftPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>str<span class="token punctuation">,</span>time<span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除.
     * <span class="token keyword">@param</span> <span class="token parameter">keys</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> keys<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">||</span> keys<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">arrayToList</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置过期时间。
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键。
     * <span class="token keyword">@param</span> <span class="token parameter">seconds</span> 过期时间。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span><span class="token keyword">long</span> seconds<span class="token punctuation">)</span><span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>seconds<span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-7-list-的应用场景" tabindex="-1"><a class="header-anchor" href="#_10-7-list-的应用场景" aria-hidden="true">#</a> 10.7 List 的应用场景</h5><p><strong>项目应用于：1、对数据量大的集合数据删除；2、任务队列</strong></p><p><strong>1、对数据量大的集合数据删减</strong></p><p>​ 列表数据显示，关注列表，粉丝列表，留言评论等.....分页，热点新闻等</p><p>利用LRANG还可以很方便的实现分页的功能，在博客系统中，每片博文的评论也可以存入一个单独的list中。</p><p><strong>2、任务队列</strong></p><p>(list 通常用来实现一个消息队列，而且可以却表先后顺序，不必像MySQL那样还需要通过ORDER BY来进行排序)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>任务队列介绍<span class="token punctuation">(</span>生产者和消费者模式：<span class="token punctuation">)</span>
    在处理web客户端发送的命令请求是，某些操作的执行时间可能会比我们预期的更长一些，通过将待执行任务的相关信息放入队列里面，并在之后队列进行处理，用户可以推迟执行那些需要一段时间才能完成的操作，这种将工作交个任务处理器来执行的做法被称为任务队列（task queue）。
    
<span class="token constant">RPOPLPUSH</span> source destination
 移除列表的最后一个元素，并将该元素添加到另一个列表并返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、List应用场景案例1</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-8-set类型" tabindex="-1"><a class="header-anchor" href="#_10-8-set类型" aria-hidden="true">#</a> 10.8 Set类型</h5><p><strong>简介</strong></p><p>​ Redis的Set是String类型的无需集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据。Redis中集合是通过哈希表实现的，set是通过hashtable实现的</p><p>集合中最大的成员数为2^32 -1,类似于JAVA中的Hashtable集合。</p><p><strong>命令</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>、复制语法：
    <span class="token constant">SADD</span> <span class="token constant">KEY</span> member1 <span class="token punctuation">[</span>member2<span class="token punctuation">]</span><span class="token operator">:</span>向集合添加一个或多个成员
    
<span class="token number">2</span>、取值语法：
    <span class="token constant">SCARD</span> <span class="token constant">KEY</span> <span class="token operator">:</span>获取集合的成员数
    <span class="token constant">SMEMBERS</span> <span class="token constant">KEY</span> ：返回集合中的所有成员
    <span class="token constant">SISMEMBER</span>  <span class="token constant">KEY</span>  <span class="token constant">MEMBER</span>  <span class="token operator">:</span>判断member元素是否是集合key的成员<span class="token punctuation">(</span>开发中：验证是否存在判断<span class="token punctuation">)</span>
    <span class="token constant">SRANDMEMBER</span> <span class="token constant">KEY</span> <span class="token punctuation">[</span><span class="token constant">COUNT</span><span class="token punctuation">]</span> <span class="token operator">:</span>返回集合中一个或对个随机数
        
<span class="token number">3</span>、删除语法：
      <span class="token constant">SREM</span> key member1 <span class="token punctuation">[</span>member2<span class="token punctuation">]</span> <span class="token operator">:</span> 移除集合中一个或多个成员
      <span class="token constant">SPOP</span> key <span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">:</span> 移除并返回集合中的一个随机元素
      <span class="token constant">SMOVE</span> source destination member <span class="token operator">:</span>将member 元素从<span class="token class-name">Source</span>集合移动到destination集合中

<span class="token number">4</span>、差集语言：
   <span class="token constant">SDIFF</span>  key1  <span class="token punctuation">[</span>key2<span class="token punctuation">]</span>  <span class="token operator">:</span>返回给定所有集合的差集
   <span class="token constant">SDIFFSTORE</span> destination key1 <span class="token punctuation">[</span>key2<span class="token punctuation">]</span>  <span class="token operator">:</span>返回给定所有集合的茶几并存储在destination中

<span class="token number">5</span>、交集语言：          
    <span class="token constant">SUNION</span> key1 <span class="token punctuation">[</span>key2<span class="token punctuation">]</span> <span class="token operator">:</span> 返回所有给定集合的并集
    <span class="token constant">SUNIONSTORE</span> destination key1 <span class="token punctuation">[</span>key2<span class="token punctuation">]</span> <span class="token operator">:</span>所有给定集合的并集存储在 destinatiion集合中                              
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-9-zset类型" tabindex="-1"><a class="header-anchor" href="#_10-9-zset类型" aria-hidden="true">#</a> 10.9 ZSet类型</h5><p>有序集合(sorted set)</p><p><strong>简介</strong></p><p>1、Redis有序集合和集合一样也是string类型元素的集合，且不允许重复的成员。</p><p>2、不同的是每个元素都会关联一个double类型的分数。redis正是通过分数来为集合中的成员进行从小到大的排序。</p><p>3、有序集合的成员是唯一的，但分数（score）却可以重复。</p><p>4、集合是通过哈希表实现的。集合中最大的成员数为2^32 -1。Redis的ZSet是有序，且不重复。</p><p>（很多时候，我们都将redis中的有序结合叫做zsets，这是因为在redis中，有序集合相关的操作指令都是以z开头的）</p><p><strong>命令</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1、复制语法：
	ZADD KEY score1 member1 【score2 member2】  ：向有序集合添加一个或多个成员，或者更新已经存在成员的分数

2、取值语法：
	ZCARD key ：获取有序结合的成员数
  ZCOUNT key min max :计算在有序结合中指定区间分数的成员数

	127.0.0.1:6379&gt; ZADD kim 1 tian
	(integer) 0
	127.0.0.1:6379&gt; zadd kim 2 yuan 3 xing
	(integer) 2
	127.0.0.1:6379&gt; zcount kim 1 2
	(integer) 2
	127.0.0.1:6379&gt; 

  ZRANK  key member  :返回有序集合中指定成员的所有
  ZRANGE KEY START STOP  [WITHSCORES]:通过索引区间返回有序集合成指定区间内的成员(低到高)
	ZRANGEBYSCORE KEY MIN MAX [WITHSCORES] [LIMIT] :通过分数返回有序集合指定区间内的成员
	ZREVRANGE KEY START STOP [WITHSCORES] :返回有序集中是定区间内的成员，通过索引，分数从高到底
	ZREVERANGEBYSCORE KEY MAX MIN [WITHSCORES] :返回有序集中指定分数区间的成员，分数从高到低排序

删除语法：
	DEL KEY   : 移除集合
	ZREM key member [member...] 移除有序集合中的一个或多个成员
	ZREMRANGEBYSCORE KEY MIN MAX  :移除有序集合中给定的分数区间的所有成员。
	ZREMRANGEBYSCORE KEY MIN MAX  :移除有序集合中给定的分数区间的所有成员。
	
ZINCRBY KEY INCREMENT MEMBER :增加member元素的分数increment，返回值是更改后的分数


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_10-10-hyperloglog" tabindex="-1"><a class="header-anchor" href="#_10-10-hyperloglog" aria-hidden="true">#</a> 10.10 HyperLogLog</h5><p><strong>常用命令</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>PFADD key element [element ...] : 添加指定元素到HyperLoglog中
PFCOUNT KEY [key ...] :返回给定 HyperLogLog的基数估算值
PFMERGE destkey sourcekey [sourcekey ...] :将过个HyperLogLog 合并为一个HyperLoglog

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>应用场景</strong></p><p>基数不大，数据量不大就用不上，会有点大材小用浪费空间</p><p>有局限性，就是指能统计基数数量，而没办法去知道具体的内容是什么</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>统计注册 IP 数
统计每日访问 IP 数
统计页面实时 UV 数
统计在线用户数
统计用户每天搜索不同词条的个数
统计真实文章阅读数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379120056.png" alt="图 3" tabindex="0" loading="lazy"><figcaption>图 3</figcaption></figure><h5 id="_10-11-geospatial-地理位置" tabindex="-1"><a class="header-anchor" href="#_10-11-geospatial-地理位置" aria-hidden="true">#</a> 10.11 geospatial 地理位置</h5><p>GEORANDIUSBYMEMBER 找出指定元素周围的其他元素</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379134182.png" alt="图 4" tabindex="0" loading="lazy"><figcaption>图 4</figcaption></figure><h4 id="十一、springboot整合jedis" tabindex="-1"><a class="header-anchor" href="#十一、springboot整合jedis" aria-hidden="true">#</a> 十一、SpringBoot整合Jedis</h4><h5 id="_11-1-简介" tabindex="-1"><a class="header-anchor" href="#_11-1-简介" aria-hidden="true">#</a> 11.1 简介</h5><p>​ 我们在使用springboot搭建微服务的时候，在很多时候还是需要redis的高速缓存来缓存一些数据，存储一些高品率访问的数据，如果直接使用redis的话由比较麻烦，在这里，我们使用jedis来实现redis缓存达到高效缓存的目的。</p><h5 id="_11-2-引入jedis依赖" tabindex="-1"><a class="header-anchor" href="#_11-2-引入jedis依赖" aria-hidden="true">#</a> 11.2 引入Jedis依赖</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/redis.clients/jedis --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为SpringBoot内默认引用了jedis版本。</p><p>所以我们直接引入jedis依赖无需配置jedis的版本号了。</p><h5 id="_11-3-application-yml" tabindex="-1"><a class="header-anchor" href="#_11-3-application-yml" aria-hidden="true">#</a> 11.3 application.yml</h5><p>例如 在application.yml中配置如下信息：</p><h4 id="十二、springboot2-x中redis使用-lettuce" tabindex="-1"><a class="header-anchor" href="#十二、springboot2-x中redis使用-lettuce" aria-hidden="true">#</a> 十二、SpringBoot2.x中redis使用（lettuce）</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>java代码操作Redis，需要使用Jedis，也就是redis支持java的第三方类库
注意：Jedis2.7以上的版本才支持集群操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_12-1-maven配置" tabindex="-1"><a class="header-anchor" href="#_12-1-maven配置" aria-hidden="true">#</a> 12.1 maven配置</h5><p>新建SpringBoot2.0.3的WEB工程，在MAVEN的pom.xml文件中加入如下依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.1.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.tyx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lettuce-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>lettuce-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Demo project for Spring Boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 默认是lettuce客户端 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- redis依赖common-pool 这个依赖一定要添加 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-pool2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.8.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.vintage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-vintage-engine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379159311.png" alt="图 5" tabindex="0" loading="lazy"><figcaption>图 5</figcaption></figure><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379171718.png" alt="图 6" tabindex="0" loading="lazy"><figcaption>图 6</figcaption></figure><h5 id="_12-2-视频中的代码" tabindex="-1"><a class="header-anchor" href="#_12-2-视频中的代码" aria-hidden="true">#</a> 12.2 视频中的代码</h5><p><strong>POM文件</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.1.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.tyx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lettuce-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>lettuce-demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Demo project for Spring Boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 默认是lettuce客户端 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- redis依赖common-pool 这个依赖一定要添加 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-pool2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.8.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.vintage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-vintage-engine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RedisConfig</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cache<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CachingConfigurerSupport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>lettuce<span class="token punctuation">.</span></span><span class="token class-name">LettuceConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">GenericJackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> papi
 * <span class="token keyword">@data</span> 2020/7/15
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span>  <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">LettuceConnectionFactory</span> factory<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>User</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>po</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> papi
 * <span class="token keyword">@data</span> 2020/7/15
 */</span>

<span class="token doc-comment comment">/**
 * Java常用编码规范
 * Java规范
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UserServiceImpl</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>po<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> papi
 * <span class="token keyword">@data</span> 2020/7/15
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Redis有什么命令，Jedis有什么方法
     * Lettuce-----》RedisTemplate进一步的封装
     *RedisTemplate 方法和命令是肯定不一样的
     * Redis 和 String类型
     * 需求输入一个key
     * 先判断该key是否存在如果不存在则在mysql中进行查询，写入到redis中。并返回值。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRedisValueByKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//表示存在值，进行获取</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-------&gt; redis中查询的数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Object</span> o <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//不存在去mysql中查并且赋值给reids</span>
            <span class="token class-name">String</span> val <span class="token operator">=</span> <span class="token string">&quot;redis中不存在的key&quot;</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;------&gt;mysql中查询出来的：&quot;</span><span class="token operator">+</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;------&gt;mysql中查出的数据存入redis中&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 测试String类型
     * 需求：用户输入一个redis数据。该key的有效期为28小时
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">expireStr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">HOURS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 根据ID查询用户对象信息
     *  先判断redis中是否存在该key
     *  如果不存在，查询数据库中mysql中的值，并将结果添加到redis中。
     *  如果存在，直接将结果在redis查询，并返回。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getHashKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;查询redis数据库&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;查询mysql数据库&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;速速&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">/*
                @param  h  用户的实体
                @param  hk 用户主键id
                @param  hv 整个对象
             */</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>id<span class="token punctuation">,</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> user<span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试类</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tyx</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>po<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>tyx<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">UserServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">LettuceDemoApplicationTests</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserServiceImpl</span> userService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token constant">T1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">String</span> tyx <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getRedisValueByKey</span><span class="token punctuation">(</span><span class="token string">&quot;tyx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;返回redis中的值为：&quot;</span> <span class="token operator">+</span> tyx<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">T2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> hashKey <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getHashKey</span><span class="token punctuation">(</span><span class="token string">&quot;1003&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hashKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_12-3-查看redis客户端信息" tabindex="-1"><a class="header-anchor" href="#_12-3-查看redis客户端信息" aria-hidden="true">#</a> 12.3 查看Redis客户端信息</h5><p>原因：把任何数据保存到redis中时，<strong>都需要进行序列化</strong>，默认使用JdkSerializationRedisSerializer进行数据序列化。所有的key和value还有hashkey和hashvalue的原始字符前，都加了一串字符。</p><h4 id="十三、redis的发布订阅" tabindex="-1"><a class="header-anchor" href="#十三、redis的发布订阅" aria-hidden="true">#</a> 十三、Redis的发布订阅</h4><h5 id="_13-1-redis发布订阅简介" tabindex="-1"><a class="header-anchor" href="#_13-1-redis发布订阅简介" aria-hidden="true">#</a> 13.1 redis发布订阅简介</h5><p>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者（pub）发送消息，订阅者（sub)接受消息。</p><p>Redis客户端可以订阅任意数量的频道</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>Redis 发布订阅(pub/sub)是一种消息通信模式：发送者（pub）发送消息，订阅者（sub)接受消息。
Redis 客户端可以订阅任意数量的频道。
下图展示了频道channel1，以及订阅这个频道的三个客户端---client2，client5和client1之间的关系。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379201178.png" alt="图 7" tabindex="0" loading="lazy"><figcaption>图 7</figcaption></figure><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379209384.png" alt="图 8" tabindex="0" loading="lazy"><figcaption>图 8</figcaption></figure><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>//订阅端
<span class="token key attr-name">SUBSCRIBE</span> <span class="token value attr-value">redischannel</span>
<span class="token key attr-name">Reading</span> <span class="token value attr-value">messages ...(press  ctrl-c quit)</span>
//发送端
<span class="token key attr-name">PUBLIC</span> <span class="token value attr-value">redischannel &quot;redis channel&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="十四、redis多数据库" tabindex="-1"><a class="header-anchor" href="#十四、redis多数据库" aria-hidden="true">#</a> 十四、Redis多数据库</h4><h5 id="_14-1-redis下-数据库是由一个整数索引标识-而不是一个数据库名称。默认情况下-一个客户端连接到数据库0。" tabindex="-1"><a class="header-anchor" href="#_14-1-redis下-数据库是由一个整数索引标识-而不是一个数据库名称。默认情况下-一个客户端连接到数据库0。" aria-hidden="true">#</a> 14.1 Redis下，数据库是由一个整数索引标识，而不是一个数据库名称。默认情况下，一个客户端连接到<strong>数据库0</strong>。</h5><p>redis配置问阿金中下面的参数来控制数据库总数：</p><p>database 16 //（从0开始 1,2,3...15）</p><p><strong>select 数据库</strong> //数据库的切换</p><p><strong>移动数据(将当前key移动另一库)</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>move key 名称  数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_14-2-数据库清空" tabindex="-1"><a class="header-anchor" href="#_14-2-数据库清空" aria-hidden="true">#</a> 14.2 数据库清空：</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>flushdb  ：清除当前数据库的所有key
flushall :清除整个redis的数据库所有key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="十五、redis事务" tabindex="-1"><a class="header-anchor" href="#十五、redis事务" aria-hidden="true">#</a> 十五、Redis事务</h4><p>Redis事务可以一次执行多个命令，（按顺序地串行化执行，执行中不会被其他命令插入，不许加塞）</p><p><strong>简介</strong></p><p>Redis事务可以一次指定多个命令（允许在一个单独的步骤中执行一组命令），并且带有一下两个中要的保证：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>批量操作在发送EXEC命令前被放入队列缓存。
收到EXEC命令后进入事务执行，事务中任意命令执行失败，其余命令依然被执行。
在事务执行过程中，其他客户端提交的命令请求不会插入到事务执行命令列中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><strong>Redis会将一个事务中的所有命令序列化，然后按顺序执行</strong></li><li><strong>执行中不会被其它命令插入，不许出现加赛行为</strong></li></ol><p><strong>常用命令</strong></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">DISCARD</span> <span class="token value attr-value">:</span>
	取消事务，放弃执行事务块内的所有命令。
<span class="token key attr-name">MULTI</span> <span class="token value attr-value">:</span>
	标记一个事务块的开始。
<span class="token key attr-name">EXEC</span> <span class="token value attr-value">:</span>
	执行所有事务块内的命令。
<span class="token key attr-name">UNWATCH</span><span class="token punctuation">:</span>
	取消watch命令对所有key的监视。

<span class="token key attr-name">WATCH</span> <span class="token value attr-value">KEY [KEY ...]</span>
	<span class="token punctuation">:</span>监视一个(或多个)key，如果在事务执行之前这个(或这些)key被其他命令所改动，那么事务将被打断。	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个事务从开始到执行会经历以下三个阶段：</p><p>1、开始事务。</p><p>2、命令入队。</p><p>3、执行事务。</p><h5 id="_15-1示例-1-multi-exec" tabindex="-1"><a class="header-anchor" href="#_15-1示例-1-multi-exec" aria-hidden="true">#</a> 15.1示例 1 MULTI EXEC</h5><p>转账功能，A向B转账50元</p><p>一个事务的例子，它先以MULTI开始一个事务，然后将多个命令入队到事务中，最后由EXEC命令触发事务</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379234089.png" alt="图 9" tabindex="0" loading="lazy"><figcaption>图 9</figcaption></figure><ol><li><strong>输入Multi命令开始，输入的命令都会一次进入命令队列中，但不会执行</strong></li><li><strong>知道输入Exce后，Redis会将之前的命令队列中的命令一次执行。</strong></li></ol><h5 id="_15-2-示例-discard放弃队列运行" tabindex="-1"><a class="header-anchor" href="#_15-2-示例-discard放弃队列运行" aria-hidden="true">#</a> 15.2 示例 DISCARD放弃队列运行</h5><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379243586.png" alt="图 10" tabindex="0" loading="lazy"><figcaption>图 10</figcaption></figure><ol><li><strong>输入MULTI命令，输入的命令都会依次进入命令队列中，但不会执行。</strong></li><li><strong>直到输入Exec后，Redis会将之前的命令队列中的命令依次执行。</strong></li><li><strong>命令队列的过程中可以使用命令DISCARD来放弃队列运行。</strong></li></ol><h4 id="_15-3-示例3事务的错误处理" tabindex="-1"><a class="header-anchor" href="#_15-3-示例3事务的错误处理" aria-hidden="true">#</a> 15.3 示例3事务的错误处理</h4><p>事务的错误处理：</p><p>如果执行的某个命令报出了错误，则只有报错的命令不会被执行，<strong>而其他的命令都会执行，不会回滚</strong>。</p><h5 id="_15-4-示例4-事务的错误处理" tabindex="-1"><a class="header-anchor" href="#_15-4-示例4-事务的错误处理" aria-hidden="true">#</a> 15.4 示例4 事务的错误处理</h5><p>事务的错误处理：</p><p>队列中的某个命令出现了 报告错误，执行是整个的所有队列都会被取消。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379261561.png" alt="图 11" tabindex="0" loading="lazy"><figcaption>图 11</figcaption></figure><p><strong>由于之前的错误，事务执行失败</strong></p><h5 id="_15-5-示例5-事务的watch" tabindex="-1"><a class="header-anchor" href="#_15-5-示例5-事务的watch" aria-hidden="true">#</a> 15.5 示例5 事务的watch</h5><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>WATCH  key [key ...]
:监视一个(或多个)key，如果在事务执行前这个(或这些)key被其他命令所改动，那么事务将被打断。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>需求：某一账户在一事务内进行操作，在提交事务前，另一个进程对该账户进行操作。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379278029.png" alt="图 12" tabindex="0" loading="lazy"><figcaption>图 12</figcaption></figure><h5 id="_15-6-应用场景" tabindex="-1"><a class="header-anchor" href="#_15-6-应用场景" aria-hidden="true">#</a> 15.6 应用场景</h5><p>一组命令必须同时都执行，或者都不执行。</p><p>我们想要保证一组命令在执行的过程之中不被其他命令插入。</p><p><strong>案例</strong>： 秒杀</p><h5 id="_15-7-redis事务的总结" tabindex="-1"><a class="header-anchor" href="#_15-7-redis事务的总结" aria-hidden="true">#</a> 15.7 Redis事务的总结</h5><p>Redis事务本质：一组命令的集合！一个事务中的所有命令都会被序列化，在事务执行过程中，会按照顺序执行！一次性，顺序性，排他性！执行一些列的命令！</p><p><strong>Redis事务没有隔离级别的概念！</strong></p><p>所有的命令在事务中，并没有直接被执行！只有发起执行命令的时候才会执行！Exec</p><p><strong>Redis单条命令保存原子性，但是事务不保证原子性！</strong></p><p>Redis 事务其实是支持原子性的！即使 Redis 不支持事务回滚机制，但是它会检查每一个事务中的命令是否错误。</p><h4 id="十六、redis持久化" tabindex="-1"><a class="header-anchor" href="#十六、redis持久化" aria-hidden="true">#</a> 十六、Redis持久化</h4><h5 id="_16-1-什么是redis-持久化" tabindex="-1"><a class="header-anchor" href="#_16-1-什么是redis-持久化" aria-hidden="true">#</a> 16.1 什么是Redis 持久化？</h5><p>持久化就是把内存的数据写到磁盘中去，防止府服务宕机内存数据丢失。</p><p>Redis提供了两种持久化方式：<strong>RDB(默认)和AOF</strong></p><p><strong>简介</strong></p><p>数据存放于：</p><p><strong>内存：高效，断电（关机）内存数据会丢失</strong></p><p><strong>硬盘：读写速度慢于内存，断电数据不会丢失</strong></p><p><strong>Redis持久化存储支持两种方式：RDB和AOF。RDB一定时间取存储文件，AOF默认每秒去存储历史命令，</strong></p><p><strong>Redis是支持持久化的内存数据库，也就是说redis需要经常将内存中的数据同步到硬盘来保证持久化。</strong></p><h5 id="_16-2-rdb" tabindex="-1"><a class="header-anchor" href="#_16-2-rdb" aria-hidden="true">#</a> 16.2 RDB</h5><p>RDB是Redis DataBase缩写</p><p>Redis是内存数据库，如果不将内存中的数据库状态保存到磁盘中，那么一旦服务器进程退出，服务器中的数据库的状态也会消失。造成数据的丢失，所以redis提供了持久化的功能。</p><p>在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是所说的snapshot快照，它恢复是将卡UN关照文件爱你直接读到内存里。</p><p>Redis会单独创建（fock）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，在用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何IO操作的。这就确保了极高的性能。如果需要进行大规模的数据的恢复，且对于数据恢复的完整性不死非常敏感，那RDB方式要比AOF 方式更加的高效。RDB的缺点是最后一次持久化的数据可能丢失。</p><p>功能核心函数rdbSave（生成RDB文件）和rdbLoad（从文件加载内存）两个函数</p><ul><li><strong>rdbSave：生成RDB文件</strong></li><li><strong>rdbLoad：从文件夹杂内存</strong></li></ul><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379327846.png" alt="图 13" tabindex="0" loading="lazy"><figcaption>图 13</figcaption></figure><p>RDB : 是redis默认的持久化机制</p><p>快照是默认的持久化方式。这种方式就是将内存中数据以快照的方式写入到二进制文件中，默认的文件名为<strong>dump.rdb</strong>。</p><p><strong>优点：</strong></p><ul><li>快照保存数据极快，还原数据极快</li><li>适用于灾难备份</li></ul><p><strong>缺点：</strong></p><ul><li>小内存机器不适合使用，RDB机制符合要求就会照快照</li></ul><p><strong>快照条件：</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1、服务器正常关闭：./bin/redis-cli shutdown
2、key满足一定条件，会进行快照
 vim redis.config 搜索save
 /save
save   900  1      //每秒900秒（15分钟）至少1个key发生变化，产生快照
save   300  10     //每300秒  （5分钟）至少10个key发生变化，产生快照
save   60   10000  //每60秒（1分钟）至少10000个key发生变化，产生快照
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_16-3-aof" tabindex="-1"><a class="header-anchor" href="#_16-3-aof" aria-hidden="true">#</a> 16.3 AOF</h5><p>由于快照方式是在一定间隔时间做一次的，所以如果redis意外down掉的话，就会丢失最后一个快照后的所有修改。如果应用要求不能丢失任何修改的话，可以采用aof持久化方式。</p><p>Append-only file：aof比rdb有更好的持久化性，是由于在使用aof持久化方式是，redis会将每一个收到的命令都通过write函数追加到文件中（默认是appendonly.aof)。当redis重启是会通过重新执行文件中保存的写命令来在内存冲重建整个数据库的内容。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379359625.png" alt="图 14" tabindex="0" loading="lazy"><figcaption>图 14</figcaption></figure><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379371919.png" alt="图 15" tabindex="0" loading="lazy"><figcaption>图 15</figcaption></figure><p>每当执行服务器（定时）任务或者函数时flushAppendOnlyFile函数都会被调用，这个函数执行以下两个工作aof写入保存：</p><p><strong>WRITE：根据条件，将aof_buf中的缓存写入到AOF文件。</strong></p><p><strong>SAVE：根据条件，调用fsync或fdatasync函数，将AOF文件保存到磁盘中。</strong></p><p><strong>有三种方式如下（默认是：每秒fsync一次）</strong></p><ul><li>appendonly yes //启用aof持久化方式</li><li><code>#</code> appendfsync always //收到写命令就立即写入磁盘，最慢，但是保证完全的持久化</li><li>appendfysnceverysec //每秒钟写入磁盘一次，在性能和持久化方面做了很好的折中</li><li><code>#</code> appendfysnc no //完全依赖os，性能孔，持久化没保证</li></ul><p><strong>产生的问题：</strong></p><p>​ aof的方式也同时带来了另一个问题。持久化文件会变的越来越大。例如我们调用incr test命令 100次，问价中必须保存全部的1000条命令，其实有99条都是多余的。</p><h4 id="十七、redis缓存与数据库一致性" tabindex="-1"><a class="header-anchor" href="#十七、redis缓存与数据库一致性" aria-hidden="true">#</a> 十七、Redis缓存与数据库一致性</h4><h5 id="_17-1-实时同步" tabindex="-1"><a class="header-anchor" href="#_17-1-实时同步" aria-hidden="true">#</a> 17.1 实时同步</h5><p>对强一直要求比较高的，应采用实时同步方案，即查询缓存查询不到在从DB查询，保存到缓存；更新缓存时，先更新数据库，在将缓存的设置过期（建议不要去更新缓存内容，直接设置缓存过期）。</p><p>@Cacheable：查询时使用，注意Long类型需要转换为String类型，否则会抛异常</p><p>@CachePut：跟新是使用，使用此注解，一定会从DB上查询数据</p><p>@CacheEvict：删除时使用；</p><p>@Caching ：组合用法</p><h5 id="_17-2-异步队列" tabindex="-1"><a class="header-anchor" href="#_17-2-异步队列" aria-hidden="true">#</a> 17.2 异步队列</h5><p>对于并发程度高的，可采用异步队列的方式同步，可采用kafka等消息中间件处理消息生产和消费。</p><h5 id="_17-3-使用阿里的同步工具canal" tabindex="-1"><a class="header-anchor" href="#_17-3-使用阿里的同步工具canal" aria-hidden="true">#</a> 17.3 使用阿里的同步工具canal</h5><h5 id="_17-4-采用udf自定义函数的方式" tabindex="-1"><a class="header-anchor" href="#_17-4-采用udf自定义函数的方式" aria-hidden="true">#</a> 17.4 采用UDF自定义函数的方式</h5><p>面对mysql的API进行编程，利用触发器进行缓存同步，但UDF主要是C/C++语言实现，学习成本高。</p><h4 id="十八、总结" tabindex="-1"><a class="header-anchor" href="#十八、总结" aria-hidden="true">#</a> 十八、总结</h4><h5 id="_18-1-缓存穿透" tabindex="-1"><a class="header-anchor" href="#_18-1-缓存穿透" aria-hidden="true">#</a> 18.1 缓存穿透</h5><p>缓存穿透是指查询一个一定不存在的数据，由于缓存时不命中时需要从数据库查询，查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到数据库去查询，造成缓存穿透。</p><p><strong>解决办法</strong>：持久层查询不到就缓存空结果，查询时先判断缓存中是否exists(key)，如果有直接返回空，没有则查询后返回，</p><p>注意insert时需要清除查询的key，否则即便DB中有值也查询不到（当然可以设置空缓存的过去时间）</p><blockquote><p>概念</p></blockquote><p>缓存穿透的概念很简单，用户想要查询一个数据没法安redis内存数据库没有，也就是缓存没有命中，于是向持久层数据量查询。发现也没有，于是本次查询失败。当用户很多的时候，缓存都没有命中，于是都去请求持久层数据库，这会给持久层数据库造成很大的压力，这时候就相当于出现了缓存穿透。</p><blockquote><p>解决方案</p></blockquote><h6 id="_18-1-1-布隆过滤器" tabindex="-1"><a class="header-anchor" href="#_18-1-1-布隆过滤器" aria-hidden="true">#</a> 18.1.1 布隆过滤器</h6><p>布隆过滤器是一种数据结构，对所有可能查询的参数以hash形式存储，在控制层先进行校验，不符合则丢弃，从而避免了对底层存储系统的查询压力；</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379397102.png" alt="图 16" tabindex="0" loading="lazy"><figcaption>图 16</figcaption></figure><p>但是这种方法存在两个问题：</p><p>1、如果空值能够被缓存起来，这就意味着缓存需要更过的空间村粗更过的键，因为这当中可能回有很多的空值的键；</p><p>2、即使对空值设置了过期时间，还是会存在缓存层和存储层的数据会有一段时间窗口的不一致，这对于需要保持一致性的业务会有影响；</p><h5 id="_18-1-2-缓存击穿" tabindex="-1"><a class="header-anchor" href="#_18-1-2-缓存击穿" aria-hidden="true">#</a> 18.1.2 缓存击穿</h5><blockquote><p>概念</p></blockquote><p>这里需要主要的是缓存击穿的区别，缓存击穿，是指一个key非常热点，在不停的扛着大并发，大并发集中对这一个点进行访问，当这个key在失效的瞬间，持续的大并发就穿破缓存，直接请求数据库，就行在一个屏幕上凿开一个洞</p><p>当某个key在过期的瞬间，有大量的请求并发访问，这类数据一般是热点数据，由于缓存过期，会同时访问数据库来查询最新数据，并且回写缓存，会导致数据库瞬间压力过大。</p><blockquote><p>解决方案</p></blockquote><p><strong>设置热点数据永不过期</strong></p><p>从缓存层面来看，没有设置过期时间，所有不会出现热点key过期后产生的问题。</p><p><strong>加锁互斥</strong></p><p>分布式锁：使用分布式锁，保证对于每个key同时只有一个线程去查询后盾服务，其他线程没有获得分布式锁的权限，因此只需要等待即可，这种方式将高并发的压力转移到了分布式锁，因此对分布式锁的考验很大。</p><h5 id="_18-2-雪崩" tabindex="-1"><a class="header-anchor" href="#_18-2-雪崩" aria-hidden="true">#</a> 18.2 雪崩</h5><p><strong>雪崩：缓存大量失效的时候，引发大量查询数据库。</strong></p><p><strong>解决办法：</strong></p><p>​ 用锁/分布式锁或者队列串行访问</p><p>​ 缓存失效时间均匀分布</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果缓存集中在一端时间内失效，发生大量的缓存穿透，所有的查询都落在数据库上，造成了缓存雪崩。

这个没有完美解决办法，但是可以分析用户的行为，尽量让失效时间点均匀分布。大所属系统设计者考虑用加锁或者队列的方式保证缓存的单线程写，从而避免失效时大量的并发请求落到底层存储系统上。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p><strong>加锁排队。限流---限流算法</strong></p><p>在缓存失效后，通过加锁或者队列来控制读数据库写缓存的线程数量。比如对某个key只允许一个线程查询数据和写缓存，其他线程等待。</p><p>简单地来说，就是在缓存失效的时候（判断拿出来的值为空），不是立即去load db，而是先使用缓存工具的某些带成功操作返回值的操作（比如Redisde SETNX或者Memcache的ADD）去set一个mutex key，当操作返回成功是，在进行koad db 的操作应设缓存；否则，就重试整个get缓存的方法。</p><p>SETNX ,是【SET IF NOT EXISTS]的缩写，也就是只有不存在的时候才设置，可以利用它来实现锁的效果。</p></li><li><p><strong>数据预热</strong></p><p>可以通过缓存reload机制，预选去更新缓存，再即将发生大并发访问前手动触发加载缓存不同的key，设置不同的过期时间，让缓存失效的时间点尽量均匀。</p></li></ol><h5 id="_18-3-热点key" tabindex="-1"><a class="header-anchor" href="#_18-3-热点key" aria-hidden="true">#</a> 18.3 热点key</h5><p>​ 热点key：某个key访问非常频繁。当key失效的时候有大量线程来构建缓存，导致负载增加，系统崩溃。</p><p>解决办法：</p><ol><li>使用锁，单机用synchronized ， lock等，分布式使用分布式锁</li><li>缓存过期时间不设置，而是设置在key对应的value里。如果检测到存的时间超过过期时间则 异步跟新缓存。</li><li>在value设置一个比过去时间t0小的过期时间值t1,当t1过期的时候，延长t1并做更新缓存操作。</li><li>设置标签缓存，标签缓存设置过期时间，标签缓存过期后，需异步地跟新实际缓存。</li></ol><p><strong>案例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>假设并发有10000个请求，想达到对个请求从数据库中获取，其他9999个请求冲redis中获取这种效果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379423857.png" alt="图 17" tabindex="0" loading="lazy"><figcaption>图 17</figcaption></figure><p>双重检测锁测压：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379437669.png" alt="图 18" tabindex="0" loading="lazy"><figcaption>图 18</figcaption></figure><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379466089.png" alt="图 19" tabindex="0" loading="lazy"><figcaption>图 19</figcaption></figure><h4 id="十九、可能的问题" tabindex="-1"><a class="header-anchor" href="#十九、可能的问题" aria-hidden="true">#</a> 十九、可能的问题</h4><p>一般来说，要将redis运用于工程项目中，只是用一台Redis是万万不能的，原因如下：</p><p>1、从结构上，单个Redis服务器会发生单点故障，并且一台服务器需要处理所有的请求负载，压力较大；（容错性）</p><p>2、从容量上，单个redis服务器内存容量有限，就算一台redis服务器内存容量为256G，也不能将所有内容用作Redis存储内存，一般来说，单台Redis最大使用内存不应该超过20G。</p><p>问题：</p><ul><li>内存容量有限</li><li>处理能力有限</li><li>无法高可用。</li></ul><h4 id="二十、主从复制" tabindex="-1"><a class="header-anchor" href="#二十、主从复制" aria-hidden="true">#</a> 二十、主从复制</h4><p><strong>简介</strong></p><p>电子商务网站上的商品，一般都是一次上传，无数次的浏览的，说专业点的也就是“多读少些”。</p><h5 id="_20-1主从复制" tabindex="-1"><a class="header-anchor" href="#_20-1主从复制" aria-hidden="true">#</a> 20.1主从复制：</h5><p>一个Redis服务可以有多个该服务的复制品，这个Redis服务成为Master，其他的复制成为Slaves</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379487881.png" alt="图 20" tabindex="0" loading="lazy"><figcaption>图 20</figcaption></figure><p>如图中所示：我们将一台Redis服务器作为主库（master），其他的三台作为（salve），主库负责写数据，每次有数据跟新都更新的数据同步到它的所有的从库，而从库只负责读数据。这样一来，就有了两个好处：</p><p>1、读写分离：不仅可以提高服务器的负载能力，并且可以根据读请求的规模自由增加或者减少从库的数据。</p><p>2、数据被复制成了好几份，就算一台机器出现故障，也可以使用其它机器的数据快速的恢复。</p><p>需要注意的是：Redis主从复制模式中，一台主库可以用用多个从库，一个从库只能属于一个主库。</p><h5 id="_20-2-redis主从复制配置" tabindex="-1"><a class="header-anchor" href="#_20-2-redis主从复制配置" aria-hidden="true">#</a> 20.2 Redis主从复制配置</h5><p>在Redis中，要实现主从复制架构非常的简单，只需要在从数据库的配置文件中加上如下命令即可：</p><p>1、主数据库不需要任务配置，创建爱哪一个从数据库：</p><p>redis.config（配置文件信息）</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>-- port 6380  : 从服务的端口号
--slaveof  127.0.0.1 6379   ：指定主服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、启动从数据库：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>./bin/redis-server   ./redis.conf  --port  6380  --slaveof  127.0.0.1   6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、登录到从服务客户端</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>./bin/redis-cli   -p  6380  -a  redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、哨兵模式</p><p><strong>简介</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Redis-Sentinel(哨兵模式)是高可用解决方案，当redis在做master-slave的高可用方案时，假如master宕机了，redis本身（以及其很多客户端）都没有实现自动进行主备切换，而redis-sentinel本身是独立运行的进程，可以部署在其他的与redis集群可通讯的机器中监控redis集群。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>有了主从复制的实现之后，我们如果想从服务器进行监控，那么在redis2.6以后提供了有个“哨兵”机制，并在2.8版本以后功能稳定起来。
哨兵：故名司仪，就是监控Redis系统的运行状况。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379745700.png" alt="图 29" tabindex="0" loading="lazy"><figcaption>图 29</figcaption></figure><p>哨兵模式的特点</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>1、不时地监控redis是否按照预期良好地运行；
2、如果发现某个redis 节点运行出现状况，能够通知另外一个进程（例如它的客户端）；
3、能够进行自动切换。当一个master节点不可用时，能够选举出master的多个slave(如果有超过一个slave的话)中的一个来作为新的master，其他的slave节点会将它所追随的master地址改为被提升为master的salve的新地址。
4、哨兵为客户端提供服务发现，客户端连接哨兵，哨兵提供当前master的地址然后提供服务，如果出现切换，也就是master挂了，哨兵会提供客户端一个新地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_20-3-基本概述" tabindex="-1"><a class="header-anchor" href="#_20-3-基本概述" aria-hidden="true">#</a> 20.3 基本概述</h5><p><strong>高可用</strong></p><p>&quot;高可用性（High Availability）&quot;通常用来描述一个系统经过专门的设计，从而减少停工时间，而保证器服务的高可用性。（一直都能用）</p><p>高可用：6个99.9999% 全年停机不超过32秒。</p><p><strong>高并发</strong></p><p><strong>高并发</strong> （High Concurrentcy）是互联网分布式系统架构设计中必须考虑的因素之一，它通常是指，通过设计在保证系统能够同时并行处理的很多请求。</p><p>高并发相关商用的一些指标有如下：</p><ul><li>响应时间（Response Time）</li><li>吞吐量（Throughput）</li><li>每秒查询率QPS（Query Pre Second），并发用户数等。</li></ul><p><strong>响应时间</strong>：系统对请求做出响应的时间，例如系统处理一个HTTP请求需要200ms，这个200ms就是系统的响应时间。</p><p><strong>吞吐量</strong>：单位时间内处理的请求数量。</p><p><strong>QPS</strong> ：每秒响应请求数。在互联网领域，这个指标和吞吐量区分的没有那么明显。</p><p>并发用户：同时承载正常使用系统功能的用户数量。例如一个即使通讯系统，同时在线量一定程度上代表</p><h5 id="_20-4-主从复制的主要作用包括" tabindex="-1"><a class="header-anchor" href="#_20-4-主从复制的主要作用包括" aria-hidden="true">#</a> 20.4 主从复制的主要作用包括</h5><p><strong>1、数据冗余</strong>：主从复制实现了数据热备份，是持久化之外的一种数据冗余的方式。</p><p><strong>2、故障恢复</strong>：当主节点出现 问题时，可以由从节点提供服务，实现快速的故障恢复；世界上是以一种服务的冗余。</p><p><strong>3、负载均衡</strong>：在主从复制的基础上，配合读写分离，可以由节点提供写的服务，由从节点提供提供读服务（即写redis数据时应用及连接主节点，读redis数据时应该用从节点），人丹服务器的负载；尤其在写少读多的场景下，通过多个从节点分担读负载，可以大大提高redis服务器的并发量。</p><p><strong>4、高可用的基石</strong>：除了上述作用以外，主从复制还是哨兵和集群能够实施的基础，因此说主从复制是redis高可用的基础。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379513696.png" alt="图 21" tabindex="0" loading="lazy"><figcaption>图 21</figcaption></figure><h5 id="_20-5-主从复制的原理" tabindex="-1"><a class="header-anchor" href="#_20-5-主从复制的原理" aria-hidden="true">#</a> 20.5 主从复制的原理</h5><p>Slave 启动成功连接到master后会发送一个sync命令</p><p>Master接收到名，启动后台的存盘进程，同时收集所有接受到的用于修改数据集命令，在后台进程执行完毕后，master将传送的数据文件到slave，并完成一次完全同步</p><p>全量复制：而slave服务在接受到数据库文件数据后，将其存盘并加载内存中。</p><p>增量文件：Master继续将新的所有收集的修改命令一次传给slave，完成同步</p><p>但是只要是重新连接master，一次完全同步（全量复制）将别自动执行。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379531183.png" alt="图 22" tabindex="0" loading="lazy"><figcaption>图 22</figcaption></figure><h4 id="二十一、redis-cluster集群" tabindex="-1"><a class="header-anchor" href="#二十一、redis-cluster集群" aria-hidden="true">#</a> 二十一、Redis Cluster集群</h4><p><strong>简介</strong></p><h5 id="_21-1-集群模式是实际使用最多的模式。" tabindex="-1"><a class="header-anchor" href="#_21-1-集群模式是实际使用最多的模式。" aria-hidden="true">#</a> 21.1 集群模式是实际使用最多的模式。</h5><p>Redis Cluster是社区版推出的Redis分布式集群解决方案，主要解决Redis分布式方面的需求，比如，当遇到单机内存，并发和流量等瓶颈的时候，Redis Cluster能起到很好的的负载均衡的目的。</p><p><strong>为什么使用redis-cluster？</strong></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>为了在大流量访问下提供稳定的业务，集群化时存储的必然形态
未来的发展趋势可定是云计算和大数据的紧密结合
只有分布式架构能满足需求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_21-2-集群描述" tabindex="-1"><a class="header-anchor" href="#_21-2-集群描述" aria-hidden="true">#</a> 21.2 集群描述</h5><p>Redis集群搭建方案：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>(1)、Twitter开发的twemproxy
(2)、豌豆荚开发的codis
(3)、redis观法的redis-cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis集群搭建的方式有很多种，但从redis 3.0 之后变动表呢支持redis-cluster集群，志超需要3（master）+3（Slave）才能简历集群。Redis——Cluster采用无中心结构，没个节点保存数据和整个集群状态，每个节点都和其他所有 节点连接。其redis-cluster架构图如下所示：</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379559139.png" alt="图 23" tabindex="0" loading="lazy"><figcaption>图 23</figcaption></figure><p>Redis Cluster集群几点最小配置6个节点以上（3主3从），其中主节点提供读写操作，从节点作为备用节点，不提供请求，只作为故障转移使用。</p><p><strong>Redis Cluster集群特点</strong></p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379574685.png" alt="图 24" tabindex="0" loading="lazy"><figcaption>图 24</figcaption></figure><p>1、所有的redis节点彼此互联（PING-PONG)，内部使用二进制协议优化传输速度和带宽。</p><p>2、节点的fail是通过集群中超过半数的节点检测失效时才生效。</p><p>3、客户端与redis节点直连，不需要中间proxy层。客户端不需要连接集群所有节点，连接集群中任何一个可用节点即可。</p><p>4、redis-cluster把所有的物理节点映射到[0-16383]slot上（不一定是平均分配），cluster负责维护</p><p>5、redis集群预先分好16384个哈希槽，当需要在redis集群中放置一个key-value时，redis先对key使用crc16算法算出一个结果，然后把结果对16384求余数，这样对每个key都会对应一个编号在0-16383之间的哈希槽，redis会根据节点数量大致均等的将哈希槽映射到不同的节点。</p><h5 id="_21-3-redis-cluster集群搭建" tabindex="-1"><a class="header-anchor" href="#_21-3-redis-cluster集群搭建" aria-hidden="true">#</a> 21.3 Redis Cluster集群搭建</h5>`,475),v={href:"https://redis.io/topic/cluster-tutorial",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>​ redis集群需要至少三个master节点，我们这里搭建三个master节点，并且给每个master在搭建一个slave节点，总共6个节点，这里用一台机器（可以多台机器部署，修改一下ip地址就可以了）部署6个redis实例，三主三从。搭建集群的步骤如下：</p><ol><li><p>创建Redis节点安装目录</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>mkdir /root/apps/redis_cluster ：指定目录下  创建 redis_cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>在redis_cluster目录，创建7000-7005 6个文件夹下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>mkdir 70000 70001 70002 70003 70004 70005
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>并将redis-conf分别拷贝到70000-70005文件夹下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>cp /opt/redis-5.0.8/redis.conf   ./70000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>修改Redis配置文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">/</span>root<span class="token operator">/</span>apps<span class="token operator">/</span>redis_cluster<span class="token operator">/</span><span class="token number">70000</span>
# 关闭保护模式 用于公网访问
    <span class="token keyword">protected</span><span class="token operator">-</span>mode  no
    port  <span class="token number">70000</span>
# 开启集群模式
    cluster<span class="token operator">-</span>enabled  yes
    cluster<span class="token operator">-</span>config<span class="token operator">-</span>file nodes<span class="token operator">-</span><span class="token number">70000.</span>config
    cluster<span class="token operator">-</span>node<span class="token operator">-</span>timeout  <span class="token number">5000</span>
# 后台启动
    daemonize  yes
    pidfile  <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>redis_70000<span class="token punctuation">.</span>pid
    logfile  <span class="token string">&quot;70000.log&quot;</span>
# dir <span class="token operator">/</span>redis<span class="token operator">/</span>data
# 此处绑定ip<span class="token punctuation">,</span>可以是阿里内网ip和本地ip也可以直接注释掉该项
# bind <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>
# 用于连接主节点密码
    masterauth redis
#设置redis密码 各个几点请保持密码一致
    requirepass  redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>依次复制并修改6个redis.conf</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>cp ./70000/redis.conf ./70001   :依次进行复制
vim ./70001/redis.conf  : 执行 %s/old/new/g 全部替换 ：wq 保存并退出  即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>6、依次启动6个节点</p><p>将安装的redis目录下的src复制到cluster下，方便启动服务端</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>cd /opt/redis-5.0.8  :进入redis安装目录
cp -r  ./src/  /usr/local/redis_cluster/   :将src文件复制到redis——cluster目录中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>./src/redis-server   ./7000/redis.conf
./src/redis-server   ./7001/redis.conf
./src/redis-server   ./7002/redis.conf
./src/redis-server   ./7003/redis.conf
./src/redis-server   ./7004/redis.conf
./src/redis-server   ./7005/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后，可以用PS查看进程：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>ps -ef | grep -i redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>创建集群</li></ol><p>Redis 5版本后 通过redis-cli 客户端命令来创建集群。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>./src/redis-cli --cluster  create  -a redis 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002  127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 --cluster-replicas 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379604359.png" alt="图 25" tabindex="0" loading="lazy"><figcaption>图 25</figcaption></figure><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>Performing hash slots allocation on 6 nodes

Trying to optimize slaves allocation for anti-affinity

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379618652.png" alt="图 26" tabindex="0" loading="lazy"><figcaption>图 26</figcaption></figure><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>[OK] All 16384 slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8"><li><p>Redis Cluster集群验证</p><p>在某台机器上（或）连接集群的7001端口的几点：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">redis-cli</span> <span class="token value attr-value"> -h 127.0.0.1  -c -p 7000 -a redis   :加参数 -c 可以连接到集群</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>redis cluster在设计的时候，就考虑了去中心化，去中间件，也就是说集群中的每个节点都是平等的关系，都是对等的，每个几点都保存各自的数据和整个集群的状态。每个节点都和其他所有节点连接，而且这些连接保持活跃，这样就保证了我们只需要连接集群中的任意一个节点，就可以获取到其他节点的数据。</p><p>基本命令</p><p><strong>info replication</strong> 通过Cluster Nodes 命令和Cluster Info命令来看看集群的效果</p></li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">127.0.0.1</span><span class="token punctuation">:</span><span class="token value attr-value">7000&gt; info replication</span>
<span class="token comment"># Replication</span>
<span class="token key attr-name">role</span><span class="token punctuation">:</span><span class="token value attr-value">master</span>
<span class="token key attr-name">connected_slaves</span><span class="token punctuation">:</span><span class="token value attr-value">1</span>
<span class="token key attr-name">slave0</span><span class="token punctuation">:</span><span class="token value attr-value">ip=127.0.0.1,port=7004,state=online,offset=1026,lag=1</span>
<span class="token key attr-name">master_replid</span><span class="token punctuation">:</span><span class="token value attr-value">2c2851db4bea0ea2f9d93d60a065e868112c47d7</span>
<span class="token key attr-name">master_replid2</span><span class="token punctuation">:</span><span class="token value attr-value">0000000000000000000000000000000000000000</span>
<span class="token key attr-name">master_repl_offset</span><span class="token punctuation">:</span><span class="token value attr-value">1026</span>
<span class="token key attr-name">second_repl_offset</span><span class="token punctuation">:</span><span class="token value attr-value">-1</span>
<span class="token key attr-name">repl_backlog_active</span><span class="token punctuation">:</span><span class="token value attr-value">1</span>
<span class="token key attr-name">repl_backlog_size</span><span class="token punctuation">:</span><span class="token value attr-value">1048576</span>
<span class="token key attr-name">repl_backlog_first_byte_offset</span><span class="token punctuation">:</span><span class="token value attr-value">1</span>
<span class="token key attr-name">repl_backlog_histlen</span><span class="token punctuation">:</span><span class="token value attr-value">1026</span>
<span class="token key attr-name">127.0.0.1</span><span class="token punctuation">:</span><span class="token value attr-value">7000&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输入命令cluster nodes</strong></p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">127.0.0.1</span><span class="token punctuation">:</span><span class="token value attr-value">7000&gt; cluster nodes</span>
<span class="token key attr-name">c58e7d40e34251897af3bee6bc6edd7a500f9fa6</span> <span class="token value attr-value">127.0.0.1:7005@17005 slave 3a7ac96a39a41b395d5459eeac1f17d1f6fd96d7 0 1596391181092 6 connected</span>
<span class="token key attr-name">71e898b018d1775214a431bd22b3408b055dbb62</span> <span class="token value attr-value">127.0.0.1:7003@17003 slave 5a191a63e8c2f5dbe945451bca0552426d6e9260 0 1596391182096 4 connected</span>
<span class="token key attr-name">60335b82c5348215c0dbbbac5b65c769f6668e4e</span> <span class="token value attr-value">127.0.0.1:7000@17000 myself,master - 0 1596391181000 1 connected 0-5460</span>
<span class="token key attr-name">5a191a63e8c2f5dbe945451bca0552426d6e9260</span> <span class="token value attr-value">127.0.0.1:7002@17002 master - 0 1596391183102 3 connected 10923-16383</span>
<span class="token key attr-name">9cae9ebf31a03c09a82281dcb629aac418e22831</span> <span class="token value attr-value">127.0.0.1:7004@17004 slave 60335b82c5348215c0dbbbac5b65c769f6668e4e 0 1596391182000 5 connected</span>
<span class="token key attr-name">3a7ac96a39a41b395d5459eeac1f17d1f6fd96d7</span> <span class="token value attr-value">127.0.0.1:7001@17001 master - 0 1596391182598 2 connected 5461-10922</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个Redis的节点都有一个ID值，此ID将被此特定redis实例永久使用，以便实例在集群上下文中具有唯一的名称。每个节点都都会记住使用此ID的每个其他节点，而不是通过IP或端口号。IP地址和端口可能会发生变化，但唯一的节点标识符在节点的整个生命周期内都不会改变。我们简单称这个标识符为节点ID。</p><h5 id="_21-4-redis总结" tabindex="-1"><a class="header-anchor" href="#_21-4-redis总结" aria-hidden="true">#</a> 21.4 Redis总结</h5><p><strong>简介：</strong></p><p>​ redis cluster 为了保证数据的高可用性，加入了主从模式，一个节点对应一个或多个从节点，主节点提供数据存取，从节点则是从主节点拉去数据备份，当这个主节点挂掉后，就会有这个从节点选取一个来充当主节点，从而保证集群不会挂掉。</p><p>集群有ABC三个主节点，如果这3个几点都没有加入从节点，如果B挂掉了，我们就无法访问整个集群了。A和C的slot也无法访问。</p><p>所以我们集群建立的时候，一定腰围每个主节点都添加一个从节点，比如像这样，集群包含主节点A,B,C 以及从节点A1,B1,C1，那么及时B挂掉系统也可以继续正确工作。</p><p>B1节点代替了B节点，所有Redis集群将会选择B1节点作为新的主节点，集群将会继续正确的提供服务。当B重新开启后，它就变成B1的从节点。</p><p>不过需要注意，如果几点B和B1同时挂掉，Redis集群就无法继续正确的提供服务了。</p><h5 id="_21-5-关闭集群" tabindex="-1"><a class="header-anchor" href="#_21-5-关闭集群" aria-hidden="true">#</a> 21.5 关闭集群</h5>`,28),b={href:"http://shutdowm.sh",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>内容如下：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">/root/apps/redis_cluster/src/redis-cli</span> <span class="token value attr-value">-c -h 127.0.0.1 -p 7000 -a redis shutdown</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-cli</span> <span class="token value attr-value">-c -h 127.0.0.1 -p 7001 -a redis shutdown</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-cli</span> <span class="token value attr-value">-c -h 127.0.0.1 -p 7002 -a redis shutdown</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-cli</span> <span class="token value attr-value">-c -h 127.0.0.1 -p 7003 -a redis shutdown</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-cli</span> <span class="token value attr-value">-c -h 127.0.0.1 -p 7004 -a redis shutdown</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-cli</span> <span class="token value attr-value">-c -h 127.0.0.1 -p 7005 -a redis shutdown</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">chmod</span> <span class="token value attr-value">u+x shutdown.sh   :然后执行将shutdown.sh变成可执行文件</span>
<span class="token key attr-name">./shutdown.sh</span>   <span class="token punctuation">:</span><span class="token value attr-value">在当前目录下启动</span>
<span class="token key attr-name">查看：</span> <span class="token value attr-value">ps aux | grep redis</span>
<span class="token key attr-name">官方：/usr/local/redis_cluster/redis-cli</span> <span class="token value attr-value">-a xxx -c -h 192.168.5.100 -p 8001</span>
<span class="token key attr-name">提示：-a</span> <span class="token value attr-value">：访问服务端密码  ， -c 表示集群模式  ， -h指定ip地址  ，-p指定端口号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">/root/apps/redis_cluster/src/redis-service</span> <span class="token value attr-value">./70000/redis.conf</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-service</span> <span class="token value attr-value">./70001/redis.conf</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-service</span> <span class="token value attr-value">./70002/redis.conf</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-service</span> <span class="token value attr-value">./70003/redis.conf</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-service</span> <span class="token value attr-value">./70004/redis.conf</span>
<span class="token key attr-name">/root/apps/redis_cluster/src/redis-service</span> <span class="token value attr-value">./70005/redis.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>chmod u+x redisinstall.sh   :然后执行将redisinstall.sh变成可执行文件
./redisinstall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二十二、redis中的拓展" tabindex="-1"><a class="header-anchor" href="#二十二、redis中的拓展" aria-hidden="true">#</a> 二十二、Redis中的拓展</h4><h5 id="_22-1-redis为什么单线程还这么快" tabindex="-1"><a class="header-anchor" href="#_22-1-redis为什么单线程还这么快" aria-hidden="true">#</a> 22.1 Redis为什么单线程还这么快</h5><p>1、误区1：高性能的服务器一定是多线程的？</p><p>2、误区2：多线程（CUP上下文会切换！）一定比单线程效率高！</p><p>先去CPU&gt;内存&gt;硬盘的速度要有所了解！</p><p>核心：redis是将所有的数据全部放在内存中的，所以说使用单线程去炒作效率就是最高的。</p><p>多线称（CUP上下文切换：耗时！！！），对于内存来说，如果没有上下文切换效率就是最高的。对此读写就是在CUP上所以Redis 的速度是非常 快的。</p><h4 id="二十三、重新配置redistemplate" tabindex="-1"><a class="header-anchor" href="#二十三、重新配置redistemplate" aria-hidden="true">#</a> 二十三、重新配置RedisTemplate</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>yux<span class="token punctuation">.</span>redisdemo<span class="token punctuation">.</span>redis</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span></span><span class="token class-name">RedisConnectionFactory</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">Jackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">JsonAutoDetect</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertyAccessor</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>fasterxml<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span>databind<span class="token punctuation">.</span></span><span class="token class-name">ObjectMapper</span></span><span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/**
15
 * redis配置类
16
 * <span class="token keyword">@author</span> YUX
17
 * <span class="token keyword">@date</span>   2018年6月6日
18
 *
19
 */</span>
 
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> factory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token class-name">StringRedisSerializer</span> stringRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// key采用String的序列化方式</span>
 
        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// hash的key也采用String的序列化方式</span>
 
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// value序列化方式采用jackson</span>
 
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// hash的value序列化方式采用jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
 
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二十四、重新编写redisutils" tabindex="-1"><a class="header-anchor" href="#二十四、重新编写redisutils" aria-hidden="true">#</a> 二十四、重新编写RedisUtils</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>yux<span class="token punctuation">.</span>redisdemo<span class="token punctuation">.</span>redis</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span> 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">CollectionUtils</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
14
 * Redis工具类
15
 * <span class="token keyword">@author</span> YUX
16
 * <span class="token keyword">@date</span>   2018年6月7日
17
 */</span>
 
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtil</span> <span class="token punctuation">{</span>
 
 
    <span class="token annotation punctuation">@Autowired</span>
 
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> redisTemplate<span class="token punctuation">;</span>
 
    <span class="token comment">// =============================common============================</span>
 
    <span class="token doc-comment comment">/**
     * 26
     * 指定缓存失效时间
     * 27
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     *             28
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     *             29
     * <span class="token keyword">@return</span> 30
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">expire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span> 
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 44
     * 根据key 获取过期时间
     * 45
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键 不能为null
     *            46
     * <span class="token keyword">@return</span> 时间(秒) 返回0代表为永久有效
     * 47
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 53
     * 判断key是否存在
     * 54
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            55
     * <span class="token keyword">@return</span> true 存在 false不存在
     * 56
     */</span> 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 67
     * 删除缓存
     * 68
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 可以传一个值 或多个
     *            69
     */</span>
 
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span> 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">arrayToList</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// ============================String=============================</span>
 
    <span class="token doc-comment comment">/**
     * 83
     * 普通缓存获取
     * 84
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            85
     * <span class="token keyword">@return</span> 值
     * 86
     */</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 92
     * 普通缓存放入
     * 93
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              94
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              95
     * <span class="token keyword">@return</span> true成功 false失败
     * 96
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 109
     * 普通缓存放入并设置时间
     * 110
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              111
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              112
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒) time要大于0 如果time小于等于0 将设置无限期
     *              113
     * <span class="token keyword">@return</span> true成功 false 失败
     * 114
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> 
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 130
     * 递增
     * 131
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              132
     * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要增加几(大于0)
     *              133
     * <span class="token keyword">@return</span> 134
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">incr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递增因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> delta<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 143
     * 递减
     * 144
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              145
     * <span class="token keyword">@param</span> <span class="token parameter">delta</span> 要减少几(小于0)
     *              146
     * <span class="token keyword">@return</span> 147
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">decr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> delta<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;递减因子必须大于0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token operator">-</span>delta<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
 
    <span class="token comment">// ================================Map=================================</span>
 
    <span class="token doc-comment comment">/**
     * 157
     * HashGet
     * 158
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键 不能为null
     *             159
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
     *             160
     * <span class="token keyword">@return</span> 值
     * 161
     */</span> 
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">hget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 167
     * 获取hashKey对应的所有键值
     * 168
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            169
     * <span class="token keyword">@return</span> 对应的多个键值
     * 170
     */</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">hmget</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 176
     * HashSet
     * 177
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            178
     * <span class="token keyword">@param</span> <span class="token parameter">map</span> 对应多个键值
     *            179
     * <span class="token keyword">@return</span> true 成功 false 失败
     * 180
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 192
     * HashSet 并设置时间
     * 193
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     *             194
     * <span class="token keyword">@param</span> <span class="token parameter">map</span>  对应多个键值
     *             195
     * <span class="token keyword">@param</span> <span class="token parameter">time</span> 时间(秒)
     *             196
     * <span class="token keyword">@return</span> true成功 false失败
     * 197
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hmset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span> 
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 212
     * 向一张hash表中放入数据,如果不存在将创建
     * 213
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              214
     * <span class="token keyword">@param</span> <span class="token parameter">item</span>  项
     *              215
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              216
     * <span class="token keyword">@return</span> true 成功 false失败
     * 217
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span> 
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 229
     * 向一张hash表中放入数据,如果不存在将创建
     * 230
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              231
     * <span class="token keyword">@param</span> <span class="token parameter">item</span>  项
     *              232
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              233
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间
     *              234
     * <span class="token keyword">@return</span> true 成功 false失败
     * 235
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hset</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span> 
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
           e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 250
     * 删除hash表中的值
     * 251
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键 不能为null
     *             252
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 可以使多个 不能为null
     *             253
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hdel</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 259
     * 判断hash表中是否有该项的值
     * 260
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键 不能为null
     *             261
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项 不能为null
     *             262
     * <span class="token keyword">@return</span> true 存在 false不存在
     * 263
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 269
     * hash递增 如果不存在,就会创建一个 并把新增后的值返回
     * 270
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     *             271
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     *             272
     * <span class="token keyword">@param</span> <span class="token parameter">by</span>   要增加几(大于0)
     *             273
     * <span class="token keyword">@return</span> 274
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hincr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">double</span> by<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 280
     * hash递减
     * 281
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>  键
     *             282
     * <span class="token keyword">@param</span> <span class="token parameter">item</span> 项
     *             283
     * <span class="token keyword">@param</span> <span class="token parameter">by</span>   要减少记(小于0)
     *             284
     * <span class="token keyword">@return</span> 285
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">hdecr</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> item<span class="token punctuation">,</span> <span class="token keyword">double</span> by<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForHash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> item<span class="token punctuation">,</span> <span class="token operator">-</span>by<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// ============================set=============================</span>
 
    <span class="token doc-comment comment">/**
     * 292
     * 根据key获取Set中的所有值
     * 293
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            294
     * <span class="token keyword">@return</span> 295
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">sGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span> 
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">members</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span> 
    <span class="token doc-comment comment">/**
     * 306
     * 根据value从一个set中查询,是否存在
     * 307
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              308
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              309
     * <span class="token keyword">@return</span> true 存在 false不存在
     * 310
     */</span> 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">sHasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isMember</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 321
     * 将数据放入set缓存
     * 322
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
     *               323
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     *               324
     * <span class="token keyword">@return</span> 成功个数
     * 325
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 336
     * 将set数据放入缓存
     * 337
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
     *               338
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>   时间(秒)
     *               339
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     *               340
     * <span class="token keyword">@return</span> 成功个数
     * 341
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sSetAndTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
              <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 355
     * 获取set缓存的长度
     * 356
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            357
     * <span class="token keyword">@return</span> 358
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">sGetSetSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 369
     * 移除值为value的
     * 370
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>    键
     *               371
     * <span class="token keyword">@param</span> <span class="token parameter">values</span> 值 可以是多个
     *               372
     * <span class="token keyword">@return</span> 移除的个数
     * 373
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">setRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> count <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> count<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token comment">// ===============================list=================================</span>
 
    <span class="token doc-comment comment">/**
     * 386
     * 获取list缓存的内容
     * 387
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              388
     * <span class="token keyword">@param</span> <span class="token parameter">start</span> 开始
     *              389
     * <span class="token keyword">@param</span> <span class="token parameter">end</span>   结束 0 到 -1代表所有值
     *              390
     * <span class="token keyword">@return</span> 391
     */</span>
 
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">lGet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> start<span class="token punctuation">,</span> <span class="token keyword">long</span> end<span class="token punctuation">)</span>  
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 402
     * 获取list缓存的长度
     * 403
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span> 键
     *            404
     * <span class="token keyword">@return</span> 405
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lGetListSize</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 416
     * 通过索引 获取list中的值
     * 417
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              418
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引 index&gt;=0时， 0 表头，1 第二个元素，依次类推；index&lt;0时，-1，表尾，-2倒数第二个元素，依次类推
     *              419
     * <span class="token keyword">@return</span> 420
     */</span>
 
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">lGetIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 431
     * 将list放入缓存
     * 432
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              433
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              434
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒)
     *              435
     * <span class="token keyword">@return</span> 436
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 将list放入缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒)
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPush</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 467
     * 将list放入缓存
     * 468
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              469
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              470
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒)
     *              471
     * <span class="token keyword">@return</span> 472
     */</span> 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span> 
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 484
     * 将list放入缓存
     * 485
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * 486
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              487
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              488
     * <span class="token keyword">@param</span> <span class="token parameter">time</span>  时间(秒)
     *              489
     * <span class="token keyword">@return</span> 490
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lSet</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> value<span class="token punctuation">,</span> <span class="token keyword">long</span> time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">rightPushAll</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 504
     * 根据索引修改list中的某条数据
     * 505
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              506
     * <span class="token keyword">@param</span> <span class="token parameter">index</span> 索引
     *              507
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              508
     * <span class="token keyword">@return</span> 509
     */</span>
 
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">lUpdateIndex</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> index<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 521
     * 移除N个值为value
     * 522
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>   键
     *              523
     * <span class="token keyword">@param</span> <span class="token parameter">count</span> 移除多少个
     *              524
     * <span class="token keyword">@param</span> <span class="token parameter">value</span> 值
     *              525
     * <span class="token keyword">@return</span> 移除的个数
     * 526
     */</span>
   <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">lRemove</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> count<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Long</span> remove <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> count<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> remove<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二十五、哨兵模式" tabindex="-1"><a class="header-anchor" href="#二十五、哨兵模式" aria-hidden="true">#</a> 二十五、哨兵模式</h4><h5 id="_25-1-自动选举master的模式" tabindex="-1"><a class="header-anchor" href="#_25-1-自动选举master的模式" aria-hidden="true">#</a> 25.1 自动选举master的模式</h5><p>主从切换的技术方式是：当主机宕机之后，需要手动把一台服务器切换为主机服务器，这就需要人工干预，费时费力，还会造成一段时间内服务器不可用，这是一种不推荐的方式，更多的时候，我们在考虑使用哨兵模式。redis中2.8之后提供了哨兵模式来解决这个问题。</p><p>哨兵模式是一种特殊的模式，首先redis提供哨兵命令，哨兵是一个独立的进程，作为进程，它会独立运行。其原理是<strong>哨兵同过发送命令，等待redis 服务器响应，从而监控运行的多个redis实例。</strong></p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379661772.png" alt="图 27" tabindex="0" loading="lazy"><figcaption>图 27</figcaption></figure><p>这里的哨兵有两个作用：</p><ul><li>通过发送命令，让redis服务器返回监控其运行状态，包括主服务器和从服务器。</li><li>当哨兵检测到master宕机，会自动将slave切换成为master，然后通过发布订阅模式通知其他的服务器，修改配置文件，让她们切换主机。</li></ul><p>然而一个哨兵进程对Redis服务器进行监控可能会出现问题，为此，我们可以使用多个哨兵进行监控。各个哨兵之间还会进行监控，这样就形成了多哨兵模式。</p><figure><img src="https://cdn.liuhongjiao.cn/images/2023/04/13/redis-overview/1681379679183.png" alt="图 28" tabindex="0" loading="lazy"><figcaption>图 28</figcaption></figure><p>假设主服务宕机，哨兵1先检测到这个结果，系统并不会马上进行failover过程，仅仅是哨兵1主管的认为服务器不可用，这个现象称为主观下线。当后面的哨兵也检测到主服务器不可用，并且数量达到一定值时，那么哨兵之间就会进行一侧投票，投票的结果由一个哨兵发起，进行failover[故障转移]操作。切换成功后，就会通过发布订阅模式，让哥哥哨兵把自己监控的服务器实现切换主机，这个过程称为可观下线。</p><p>我们目前的装填是一主二从！</p><p>1、配置哨兵配置文件sentinel.conf</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># sentinel monitor  被监控的名称host port <span class="token number">1</span>
sentinel monitor  myredis <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span> <span class="token number">6379</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>候命的这个数字1，代表主机挂了，slave投票看让谁阶梯称为主机，票数最多的，就会称为主机！</p><div class="language-/java line-numbers-mode" data-ext="/java"><pre class="language-/java"><code>redis-sentinel  bin/sentinel.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>优点：</strong></p><ul><li>哨兵集群，基于主从复制模式，所有的主从配置优点，它全有</li><li>主从可以切换，故障可以转移，系统的可用性就会更好</li><li>哨兵模式就是主从模式的升级买手动到自动，更加健壮！</li></ul><p><strong>缺点</strong> ：</p><ul><li>redis不好在线扩容，集群容量一旦达到上限，在向扩容就十分麻烦！</li><li>实现哨兵模式的配置其实是很麻烦的，里面有很多选择！</li></ul>`,35);function y(h,f){const a=l("ExternalLinkIcon");return i(),c("div",null,[u,s("p",null,[n("官方网站 ： "),s("a",r,[n("https://redis.io/"),e(a)])]),s("p",null,[n("官方下载 ： "),s("a",d,[n("https://redis.io/download"),e(a)]),n(" 可以根据需要下载不同版本")]),k,s("p",null,[n("集群搭建参考官网："),s("a",v,[n("https://redis.io/topic/cluster-tutorial"),e(a)])]),m,s("p",null,[n("在/root/apps/redis_cluster 目录下编写脚本文件 ： vim "),s("a",b,[n("shutdowm.sh"),e(a)])]),g])}const x=p(o,[["render",y],["__file","redis-overview.html.vue"]]);export{x as default};
