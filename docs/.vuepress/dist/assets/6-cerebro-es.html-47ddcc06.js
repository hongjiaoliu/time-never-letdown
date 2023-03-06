const e=JSON.parse('{"key":"v-61b7dd9f","path":"/study/enterprise/es/6-cerebro-es.html","title":"6-cerebro可视化","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-05-05T00:00:00.000Z","category":["Java企业开发"],"tag":["ElasticSearch"],"star":false,"description":"6-cerebro可视化 一、背景 es本身没有提供一个可视化的工具来查看集群的信息，使用命令行工具不太方便查看，此处安装cerebro来查看集群中的一些信息。 二、安装步骤 1、下载并解压 # 下载 wget https://github.com/lmenezes/cerebro/releases/download/v0.9.4/cerebro-0.9.4.zip # 解压 unzip cerebro-0.9.4.zip &amp;&amp; cd cerebro-0.9.4 # 查看目录结构 tree cerebro-0.9.4 cerebro-0.9.4 ├── README.md ├── bin │ ├── cerebro (可执行文件) │ └── cerebro.bat (window上的可执行文件) ├── conf │ ├── application.conf (配置文件) │ ├── eslint.json │ ├── evolutions │ │ └── default │ │ └── 1.sql │ ├── logback.xml (日志配置) │ ├── reference.conf │ └── routes └── lib ├── *.jar","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/enterprise/es/6-cerebro-es.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"6-cerebro可视化"}],["meta",{"property":"og:description","content":"6-cerebro可视化 一、背景 es本身没有提供一个可视化的工具来查看集群的信息，使用命令行工具不太方便查看，此处安装cerebro来查看集群中的一些信息。 二、安装步骤 1、下载并解压 # 下载 wget https://github.com/lmenezes/cerebro/releases/download/v0.9.4/cerebro-0.9.4.zip # 解压 unzip cerebro-0.9.4.zip &amp;&amp; cd cerebro-0.9.4 # 查看目录结构 tree cerebro-0.9.4 cerebro-0.9.4 ├── README.md ├── bin │ ├── cerebro (可执行文件) │ └── cerebro.bat (window上的可执行文件) ├── conf │ ├── application.conf (配置文件) │ ├── eslint.json │ ├── evolutions │ │ └── default │ │ └── 1.sql │ ├── logback.xml (日志配置) │ ├── reference.conf │ └── routes └── lib ├── *.jar"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T01:29:56.000Z"}],["meta",{"property":"article:tag","content":"ElasticSearch"}],["meta",{"property":"article:published_time","content":"2022-05-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T01:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6-cerebro可视化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-17T01:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1、下载并解压","slug":"_1、下载并解压","link":"#_1、下载并解压","children":[]},{"level":2,"title":"2、配置cerebro","slug":"_2、配置cerebro","link":"#_2、配置cerebro","children":[]},{"level":2,"title":"3、启动 cerebro","slug":"_3、启动-cerebro","link":"#_3、启动-cerebro","children":[]},{"level":2,"title":"4、启动界面","slug":"_4、启动界面","link":"#_4、启动界面","children":[]}],"git":{"createdTime":1676597396000,"updatedTime":1676597396000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":1}]},"readingTime":{"minutes":1.05,"words":316},"filePathRelative":"study/enterprise/es/6-cerebro-es.md","localizedDate":"2022年5月5日","excerpt":"<h1> 6-cerebro可视化</h1>\\n<h1> 一、背景</h1>\\n<p>es本身没有提供一个可视化的工具来查看集群的信息，使用命令行工具不太方便查看，此处安装cerebro来查看集群中的一些信息。</p>\\n<h1> 二、安装步骤</h1>\\n<h2> 1、下载并解压</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 下载</span>\\n<span class=\\"token function\\">wget</span> https://github.com/lmenezes/cerebro/releases/download/v0.9.4/cerebro-0.9.4.zip\\n<span class=\\"token comment\\"># 解压</span>\\n<span class=\\"token function\\">unzip</span> cerebro-0.9.4.zip <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token builtin class-name\\">cd</span> cerebro-0.9.4\\n<span class=\\"token comment\\"># 查看目录结构</span>\\ntree cerebro-0.9.4\\ncerebro-0.9.4\\n├── README.md\\n├── bin\\n│   ├── cerebro <span class=\\"token punctuation\\">(</span>可执行文件<span class=\\"token punctuation\\">)</span>\\n│   └── cerebro.bat <span class=\\"token punctuation\\">(</span>window上的可执行文件<span class=\\"token punctuation\\">)</span>\\n├── conf\\n│   ├── application.conf <span class=\\"token punctuation\\">(</span>配置文件<span class=\\"token punctuation\\">)</span>\\n│   ├── eslint.json\\n│   ├── evolutions\\n│   │   └── default\\n│   │       └── <span class=\\"token number\\">1</span>.sql\\n│   ├── logback.xml <span class=\\"token punctuation\\">(</span>日志配置<span class=\\"token punctuation\\">)</span>\\n│   ├── reference.conf\\n│   └── routes\\n└── lib\\n    ├── *.jar\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
