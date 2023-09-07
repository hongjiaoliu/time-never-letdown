const e=JSON.parse('{"key":"v-4ced5a92","path":"/study/general/linux/commands/redirect.html","title":"基本 | 重定向>","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-09-07T00:00:00.000Z","category":["通用技能"],"tag":["Linux","Linux命令"],"star":true,"description":"基本 | 重定向&gt; 当你在Linux系统上进行工作时，经常需要处理命令行输出。输出重定向是一个强大的工具，可以帮助你将命令的输出保存到文件中，或者将其传递给其他命令。在这个教程中，我将从基础知识开始，逐步向你介绍输出重定向的使用方法。 1. 基础知识 1.1 标准输出 (stdout) 在Linux中，大多数命令将结果输出到标准输出 (stdout)，默认情况下通常是显示在终端上。你可以使用输出重定向来捕获和处理这些输出。 1.2 标准错误 (stderr) 除了标准输出，命令还可以将错误消息输出到标准错误 (stderr)。标准错误通常也显示在终端上，但你可以使用输出重定向将其保存到文件中。","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/general/linux/commands/redirect.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"基本 | 重定向>"}],["meta",{"property":"og:description","content":"基本 | 重定向&gt; 当你在Linux系统上进行工作时，经常需要处理命令行输出。输出重定向是一个强大的工具，可以帮助你将命令的输出保存到文件中，或者将其传递给其他命令。在这个教程中，我将从基础知识开始，逐步向你介绍输出重定向的使用方法。 1. 基础知识 1.1 标准输出 (stdout) 在Linux中，大多数命令将结果输出到标准输出 (stdout)，默认情况下通常是显示在终端上。你可以使用输出重定向来捕获和处理这些输出。 1.2 标准错误 (stderr) 除了标准输出，命令还可以将错误消息输出到标准错误 (stderr)。标准错误通常也显示在终端上，但你可以使用输出重定向将其保存到文件中。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Linux命令"}],["meta",{"property":"article:published_time","content":"2023-09-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本 | 重定向>\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-07T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 基础知识","slug":"_1-基础知识","link":"#_1-基础知识","children":[{"level":3,"title":"1.1 标准输出 (stdout)","slug":"_1-1-标准输出-stdout","link":"#_1-1-标准输出-stdout","children":[]},{"level":3,"title":"1.2 标准错误 (stderr)","slug":"_1-2-标准错误-stderr","link":"#_1-2-标准错误-stderr","children":[]}]},{"level":2,"title":"2. 基本用法","slug":"_2-基本用法","link":"#_2-基本用法","children":[{"level":3,"title":"2.1 输出到文件","slug":"_2-1-输出到文件","link":"#_2-1-输出到文件","children":[]},{"level":3,"title":"2.2 追加到文件","slug":"_2-2-追加到文件","link":"#_2-2-追加到文件","children":[]},{"level":3,"title":"2.3 输出和错误分开","slug":"_2-3-输出和错误分开","link":"#_2-3-输出和错误分开","children":[]}]},{"level":2,"title":"3. 高级用法","slug":"_3-高级用法","link":"#_3-高级用法","children":[{"level":3,"title":"3.1 合并输出和错误","slug":"_3-1-合并输出和错误","link":"#_3-1-合并输出和错误","children":[]},{"level":3,"title":"3.2 丢弃输出或错误","slug":"_3-2-丢弃输出或错误","link":"#_3-2-丢弃输出或错误","children":[]}]},{"level":2,"title":"4. 示例","slug":"_4-示例","link":"#_4-示例","children":[{"level":3,"title":"4.1 保存文件列表","slug":"_4-1-保存文件列表","link":"#_4-1-保存文件列表","children":[]},{"level":3,"title":"4.2 运行脚本并将输出保存","slug":"_4-2-运行脚本并将输出保存","link":"#_4-2-运行脚本并将输出保存","children":[]},{"level":3,"title":"4.3 合并输出和错误到日志文件","slug":"_4-3-合并输出和错误到日志文件","link":"#_4-3-合并输出和错误到日志文件","children":[]}]},{"level":2,"title":"5. 结论","slug":"_5-结论","link":"#_5-结论","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"study/general/linux/commands/redirect.md","localizedDate":"2023年9月7日","excerpt":"<h1> 基本 | 重定向&gt;</h1>\\n<p>当你在Linux系统上进行工作时，经常需要处理命令行输出。输出重定向是一个强大的工具，可以帮助你将命令的输出保存到文件中，或者将其传递给其他命令。在这个教程中，我将从基础知识开始，逐步向你介绍输出重定向的使用方法。</p>\\n<h2> 1. 基础知识</h2>\\n<h3> 1.1 标准输出 (stdout)</h3>\\n<p>在Linux中，大多数命令将结果输出到标准输出 (stdout)，默认情况下通常是显示在终端上。你可以使用输出重定向来捕获和处理这些输出。</p>\\n<h3> 1.2 标准错误 (stderr)</h3>\\n<p>除了标准输出，命令还可以将错误消息输出到标准错误 (stderr)。标准错误通常也显示在终端上，但你可以使用输出重定向将其保存到文件中。</p>","autoDesc":true}');export{e as data};
