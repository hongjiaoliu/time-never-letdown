const e=JSON.parse(`{"key":"v-c8b5a966","path":"/study/general/linux/commands/sed.html","title":"基本 | 三剑客-sed","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-09-04T00:00:00.000Z","category":["通用技能"],"tag":["Linux","Linux命令"],"star":true,"description":"基本 | 三剑客-sed sed 是一个流文本编辑器，用于处理文本流并进行文本转换、替换等操作。以下是从入门到高级的sed命令详细讲解，包括一些常用的选项。 入门 1. 基本替换 要在文本中进行基本替换，只需在命令行中输入以下命令： sed 's/原始文本/新文本/' 文件名","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/general/linux/commands/sed.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"基本 | 三剑客-sed"}],["meta",{"property":"og:description","content":"基本 | 三剑客-sed sed 是一个流文本编辑器，用于处理文本流并进行文本转换、替换等操作。以下是从入门到高级的sed命令详细讲解，包括一些常用的选项。 入门 1. 基本替换 要在文本中进行基本替换，只需在命令行中输入以下命令： sed 's/原始文本/新文本/' 文件名"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-13T02:42:01.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Linux命令"}],["meta",{"property":"article:published_time","content":"2023-09-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-13T02:42:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本 | 三剑客-sed\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-13T02:42:01.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"入门","slug":"入门","link":"#入门","children":[{"level":3,"title":"1. 基本替换","slug":"_1-基本替换","link":"#_1-基本替换","children":[]}]},{"level":2,"title":"进阶","slug":"进阶","link":"#进阶","children":[{"level":3,"title":"2. 替换指定行","slug":"_2-替换指定行","link":"#_2-替换指定行","children":[]},{"level":3,"title":"3. 执行多个替换","slug":"_3-执行多个替换","link":"#_3-执行多个替换","children":[]}]},{"level":2,"title":"高级","slug":"高级","link":"#高级","children":[{"level":3,"title":"4. 使用正则表达式","slug":"_4-使用正则表达式","link":"#_4-使用正则表达式","children":[]},{"level":3,"title":"5. 插入和追加文本","slug":"_5-插入和追加文本","link":"#_5-插入和追加文本","children":[]},{"level":3,"title":"6. 删除指定行","slug":"_6-删除指定行","link":"#_6-删除指定行","children":[]},{"level":3,"title":"7. 保存替换结果","slug":"_7-保存替换结果","link":"#_7-保存替换结果","children":[]},{"level":3,"title":"8. 统计替换次数","slug":"_8-统计替换次数","link":"#_8-统计替换次数","children":[]},{"level":3,"title":"9. 打印匹配行","slug":"_9-打印匹配行","link":"#_9-打印匹配行","children":[]},{"level":3,"title":"10. 静默模式","slug":"_10-静默模式","link":"#_10-静默模式","children":[]},{"level":3,"title":"11. 使用脚本文件","slug":"_11-使用脚本文件","link":"#_11-使用脚本文件","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1693795771000,"updatedTime":1694572921000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao4@xdf.cn","commits":2},{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":1}]},"readingTime":{"minutes":2.47,"words":741},"filePathRelative":"study/general/linux/commands/sed.md","localizedDate":"2023年9月4日","excerpt":"<h1> 基本 | 三剑客-sed</h1>\\n<p><code>sed</code> 是一个流文本编辑器，用于处理文本流并进行文本转换、替换等操作。以下是从入门到高级的<code>sed</code>命令详细讲解，包括一些常用的选项。</p>\\n<h2> 入门</h2>\\n<h3> 1. 基本替换</h3>\\n<p>要在文本中进行基本替换，只需在命令行中输入以下命令：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">sed</span> <span class=\\"token string\\">'s/原始文本/新文本/'</span> 文件名\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
