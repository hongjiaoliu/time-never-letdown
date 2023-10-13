const t=JSON.parse('{"key":"v-2df89371","path":"/study/general/linux/commands/su.html","title":"基础 | su","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-10-12T00:00:00.000Z","category":["通用技能"],"tag":["Linux","Linux命令"],"star":true,"description":"基础 | su su命令用于在Linux系统中切换用户身份。它可以让你暂时获得 root 权限或者切换到另一个用户账户。 su 命令语法 su [选项] [用户名] 常用选项: -:不读取 root 用户的环境变量设置。 -c &lt;命令&gt;:指定要执行的命令。 -l 或 --login:切换用户的同时,把该用户的环境变量加载到当前shell里。 如果不指定用户名,默认切换到 root 用户。 su 命令使用示例 1. 切换到 root 用户","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/general/linux/commands/su.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"基础 | su"}],["meta",{"property":"og:description","content":"基础 | su su命令用于在Linux系统中切换用户身份。它可以让你暂时获得 root 权限或者切换到另一个用户账户。 su 命令语法 su [选项] [用户名] 常用选项: -:不读取 root 用户的环境变量设置。 -c &lt;命令&gt;:指定要执行的命令。 -l 或 --login:切换用户的同时,把该用户的环境变量加载到当前shell里。 如果不指定用户名,默认切换到 root 用户。 su 命令使用示例 1. 切换到 root 用户"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-12T01:20:31.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Linux命令"}],["meta",{"property":"article:published_time","content":"2023-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-12T01:20:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础 | su\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-12T01:20:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"su 命令语法","slug":"su-命令语法","link":"#su-命令语法","children":[]},{"level":2,"title":"su 命令使用示例","slug":"su-命令使用示例","link":"#su-命令使用示例","children":[{"level":3,"title":"1. 切换到 root 用户","slug":"_1-切换到-root-用户","link":"#_1-切换到-root-用户","children":[]},{"level":3,"title":"2. 执行命令后返回到原来的用户","slug":"_2-执行命令后返回到原来的用户","link":"#_2-执行命令后返回到原来的用户","children":[]},{"level":3,"title":"3. 加载 root 用户的环境变量","slug":"_3-加载-root-用户的环境变量","link":"#_3-加载-root-用户的环境变量","children":[]},{"level":3,"title":"4. 切换到其它普通用户","slug":"_4-切换到其它普通用户","link":"#_4-切换到其它普通用户","children":[]},{"level":3,"title":"5. 退出切换的用户","slug":"_5-退出切换的用户","link":"#_5-退出切换的用户","children":[]}]},{"level":2,"title":"su 命令注意事项","slug":"su-命令注意事项","link":"#su-命令注意事项","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1697073631000,"updatedTime":1697073631000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao4@xdf.cn","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"study/general/linux/commands/su.md","localizedDate":"2023年10月12日","excerpt":"<h1> 基础 | su</h1>\\n<p>su命令用于在Linux系统中切换用户身份。它可以让你暂时获得 root 权限或者切换到另一个用户账户。</p>\\n<h2> su 命令语法</h2>\\n<p>su [选项] [用户名]\\n常用选项:</p>\\n<ul>\\n<li>-:不读取 root 用户的环境变量设置。</li>\\n<li>-c &lt;命令&gt;:指定要执行的命令。</li>\\n<li>-l 或 --login:切换用户的同时,把该用户的环境变量加载到当前shell里。\\n如果不指定用户名,默认切换到 root 用户。</li>\\n</ul>\\n<h2> su 命令使用示例</h2>\\n<h3> 1. 切换到 root 用户</h3>","autoDesc":true}');export{t as data};