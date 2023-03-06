const e=JSON.parse('{"key":"v-545b8987","path":"/study/enterprise/nginx/nginx-go-access.html","title":"Nginx | 6-Go Access 分析日志","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-04-25T00:00:00.000Z","category":["FE"],"tag":["Nginx"],"star":false,"description":"Nginx | 6-Go Access 分析日志 一：下载 地址：https://goaccess.io/download $ wget https://tar.goaccess.io/goaccess-1.5.6.tar.gz $ tar -xzvf goaccess-1.5.6.tar.gz $ cd goaccess-1.5.6/ $ ./configure --enable-utf8 --enable-geoip=mmdb $ make # make install","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/enterprise/nginx/nginx-go-access.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"Nginx | 6-Go Access 分析日志"}],["meta",{"property":"og:description","content":"Nginx | 6-Go Access 分析日志 一：下载 地址：https://goaccess.io/download $ wget https://tar.goaccess.io/goaccess-1.5.6.tar.gz $ tar -xzvf goaccess-1.5.6.tar.gz $ cd goaccess-1.5.6/ $ ./configure --enable-utf8 --enable-geoip=mmdb $ make # make install"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T01:29:56.000Z"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:published_time","content":"2022-04-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T01:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx | 6-Go Access 分析日志\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-17T01:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1、生成report.html","slug":"_1、生成report-html","link":"#_1、生成report-html","children":[]},{"level":2,"title":"2、配置report.html代理","slug":"_2、配置report-html代理","link":"#_2、配置report-html代理","children":[]},{"level":2,"title":"3、goaccess界面","slug":"_3、goaccess界面","link":"#_3、goaccess界面","children":[]},{"level":2,"title":"遗留问题：","slug":"遗留问题","link":"#遗留问题","children":[{"level":3,"title":"1、发现参数-real-time-html无法实时刷新html","slug":"_1、发现参数-real-time-html无法实时刷新html","link":"#_1、发现参数-real-time-html无法实时刷新html","children":[]}]}],"git":{"createdTime":1676597396000,"updatedTime":1676597396000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"study/enterprise/nginx/nginx-go-access.md","localizedDate":"2022年4月25日","excerpt":"<h1> Nginx | 6-Go Access 分析日志</h1>\\n<h1> 一：下载</h1>\\n<p>地址：<a href=\\"https://goaccess.io/download\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://goaccess.io/download</a></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">wget</span> https://tar.goaccess.io/goaccess-1.5.6.tar.gz\\n$ <span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-xzvf</span> goaccess-1.5.6.tar.gz\\n$ <span class=\\"token builtin class-name\\">cd</span> goaccess-1.5.6/\\n$ ./configure --enable-utf8 --enable-geoip<span class=\\"token operator\\">=</span>mmdb\\n$ <span class=\\"token function\\">make</span>\\n<span class=\\"token comment\\"># make install</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
