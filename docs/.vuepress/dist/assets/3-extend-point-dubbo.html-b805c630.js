const e=JSON.parse('{"key":"v-78d86b9e","path":"/study/enterprise/dubbo/3-extend-point-dubbo.html","title":"3-Dubbo 中的扩展点加载机制","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-07-19T00:00:00.000Z","category":["Java企业开发"],"tag":["Dubbo","源码学习"],"star":false,"description":"3-Dubbo 中的扩展点加载机制 扩展点配置 来源： Dubbo 的扩展点加载从 JDK 标准的 SPI (Service Provider Interface) 扩展点发现机制加强而来。 Dubbo 改进了 JDK 标准的 SPI 的以下问题： JDK 标准的 SPI 会一次性实例化扩展点所有实现，如果有扩展实现初始化很耗时，但如果没用上也加载，会很浪费资源。 如果扩展点加载失败，连扩展点的名称都拿不到了。比如：JDK 标准的 ScriptEngine，通过 getName() 获取脚本类型的名称，但如果 RubyScriptEngine 因为所依赖的 jruby.jar 不存在，导致 RubyScriptEngine 类加载失败，这个失败原因被吃掉了，和 ruby 对应不起来，当用户执行 ruby 脚本时，会报不支持 ruby，而不是真正失败的原因。 增加了对扩展点 IoC 和 AOP 的支持，一个扩展点可以直接 setter 注入其它扩展点。","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/enterprise/dubbo/3-extend-point-dubbo.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"3-Dubbo 中的扩展点加载机制"}],["meta",{"property":"og:description","content":"3-Dubbo 中的扩展点加载机制 扩展点配置 来源： Dubbo 的扩展点加载从 JDK 标准的 SPI (Service Provider Interface) 扩展点发现机制加强而来。 Dubbo 改进了 JDK 标准的 SPI 的以下问题： JDK 标准的 SPI 会一次性实例化扩展点所有实现，如果有扩展实现初始化很耗时，但如果没用上也加载，会很浪费资源。 如果扩展点加载失败，连扩展点的名称都拿不到了。比如：JDK 标准的 ScriptEngine，通过 getName() 获取脚本类型的名称，但如果 RubyScriptEngine 因为所依赖的 jruby.jar 不存在，导致 RubyScriptEngine 类加载失败，这个失败原因被吃掉了，和 ruby 对应不起来，当用户执行 ruby 脚本时，会报不支持 ruby，而不是真正失败的原因。 增加了对扩展点 IoC 和 AOP 的支持，一个扩展点可以直接 setter 注入其它扩展点。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Dubbo"}],["meta",{"property":"article:tag","content":"源码学习"}],["meta",{"property":"article:published_time","content":"2022-07-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3-Dubbo 中的扩展点加载机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"扩展点配置","slug":"扩展点配置","link":"#扩展点配置","children":[{"level":3,"title":"来源：","slug":"来源","link":"#来源","children":[]},{"level":3,"title":"约定：","slug":"约定","link":"#约定","children":[]},{"level":3,"title":"示例：","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"配置模块中的配置","slug":"配置模块中的配置","link":"#配置模块中的配置","children":[]}]},{"level":2,"title":"扩展点特性","slug":"扩展点特性","link":"#扩展点特性","children":[{"level":3,"title":"扩展点自动包装","slug":"扩展点自动包装","link":"#扩展点自动包装","children":[]},{"level":3,"title":"扩展点自动装配","slug":"扩展点自动装配","link":"#扩展点自动装配","children":[]},{"level":3,"title":"扩展点自适应","slug":"扩展点自适应","link":"#扩展点自适应","children":[]},{"level":3,"title":"扩展点自动激活","slug":"扩展点自动激活","link":"#扩展点自动激活","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.56,"words":1669},"filePathRelative":"study/enterprise/dubbo/3-extend-point-dubbo.md","localizedDate":"2022年7月19日","excerpt":"<h1> 3-Dubbo 中的扩展点加载机制</h1>\\n<h2> 扩展点配置</h2>\\n<h3> 来源：</h3>\\n<p>Dubbo 的扩展点加载从 JDK 标准的 SPI (Service Provider Interface) 扩展点发现机制加强而来。\\nDubbo 改进了 JDK 标准的 SPI 的以下问题：</p>\\n<ul>\\n<li>JDK 标准的 SPI 会一次性实例化扩展点所有实现，如果有扩展实现初始化很耗时，但如果没用上也加载，会很浪费资源。</li>\\n<li>如果扩展点加载失败，连扩展点的名称都拿不到了。比如：JDK 标准的 ScriptEngine，通过 getName() 获取脚本类型的名称，但如果 RubyScriptEngine 因为所依赖的 jruby.jar 不存在，导致 RubyScriptEngine 类加载失败，这个失败原因被吃掉了，和 ruby 对应不起来，当用户执行 ruby 脚本时，会报不支持 ruby，而不是真正失败的原因。</li>\\n<li>增加了对扩展点 IoC 和 AOP 的支持，一个扩展点可以直接 setter 注入其它扩展点。</li>\\n</ul>","autoDesc":true}');export{e as data};
