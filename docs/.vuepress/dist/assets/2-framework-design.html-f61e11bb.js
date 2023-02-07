const e=JSON.parse('{"key":"v-1c922feb","path":"/enterprise/dubbo/2-framework-design.html","title":"Dubbo | 2-框架设计概览","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-07-20T00:00:00.000Z","category":["Java企业开发"],"tag":["Dubbo","源码学习"],"star":false,"description":"Dubbo | 2-框架设计概览 整体设计 图例说明： 图中左边淡蓝背景的为服务消费方使用的接口，右边淡绿色背景的为服务提供方使用的接口，位于中轴线上的为双方都用到的接口。 图中从下至上分为十层，各层均为单向依赖，右边的黑色箭头代表层之间的依赖关系，每一层都可以剥离上层被复用，其中，Service 和 Config 层为 API，其它各层均为 SPI。 图中绿色小块的为扩展接口，蓝色小块为实现类，图中只显示用于关联各层的实现类。 图中蓝色虚线为初始化过程，即启动时组装链，红色实线为方法调用过程，即运行时调时链，紫色三角箭头为继承，可以把子类看作父类的同一个节点，线上的文字为调用的方法。","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/enterprise/dubbo/2-framework-design.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"Dubbo | 2-框架设计概览"}],["meta",{"property":"og:description","content":"Dubbo | 2-框架设计概览 整体设计 图例说明： 图中左边淡蓝背景的为服务消费方使用的接口，右边淡绿色背景的为服务提供方使用的接口，位于中轴线上的为双方都用到的接口。 图中从下至上分为十层，各层均为单向依赖，右边的黑色箭头代表层之间的依赖关系，每一层都可以剥离上层被复用，其中，Service 和 Config 层为 API，其它各层均为 SPI。 图中绿色小块的为扩展接口，蓝色小块为实现类，图中只显示用于关联各层的实现类。 图中蓝色虚线为初始化过程，即启动时组装链，红色实线为方法调用过程，即运行时调时链，紫色三角箭头为继承，可以把子类看作父类的同一个节点，线上的文字为调用的方法。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://liuhongjiao.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T01:50:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Dubbo | 2-框架设计概览"}],["meta",{"property":"article:tag","content":"Dubbo"}],["meta",{"property":"article:tag","content":"源码学习"}],["meta",{"property":"article:published_time","content":"2022-07-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T01:50:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dubbo | 2-框架设计概览\\",\\"image\\":[\\"https://liuhongjiao.cn/\\"],\\"datePublished\\":\\"2022-07-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-03T01:50:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"整体设计","slug":"整体设计","link":"#整体设计","children":[]},{"level":2,"title":"各层说明","slug":"各层说明","link":"#各层说明","children":[]},{"level":2,"title":"关系说明","slug":"关系说明","link":"#关系说明","children":[]},{"level":2,"title":"模块分包","slug":"模块分包","link":"#模块分包","children":[]},{"level":2,"title":"依赖关系","slug":"依赖关系","link":"#依赖关系","children":[]},{"level":2,"title":"调用链","slug":"调用链","link":"#调用链","children":[]},{"level":2,"title":"暴露服务时序","slug":"暴露服务时序","link":"#暴露服务时序","children":[]},{"level":2,"title":"引用服务时序","slug":"引用服务时序","link":"#引用服务时序","children":[]},{"level":2,"title":"领域模型","slug":"领域模型","link":"#领域模型","children":[]},{"level":2,"title":"基本设计原则","slug":"基本设计原则","link":"#基本设计原则","children":[]}],"git":{"createdTime":1675389045000,"updatedTime":1675389045000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":1}]},"readingTime":{"minutes":6.33,"words":1899},"filePathRelative":"enterprise/dubbo/2-framework-design.md","localizedDate":"2022年7月20日","excerpt":"<h1> Dubbo | 2-框架设计概览</h1>\\n<h2> 整体设计</h2>\\n<p><br>\\n图例说明：</p>\\n<ul>\\n<li>图中左边淡蓝背景的为服务消费方使用的接口，右边淡绿色背景的为服务提供方使用的接口，位于中轴线上的为双方都用到的接口。</li>\\n<li>图中从下至上分为十层，各层均为单向依赖，右边的黑色箭头代表层之间的依赖关系，每一层都可以剥离上层被复用，其中，Service 和 Config 层为 API，其它各层均为 SPI。</li>\\n<li>图中绿色小块的为扩展接口，蓝色小块为实现类，图中只显示用于关联各层的实现类。</li>\\n<li>图中蓝色虚线为初始化过程，即启动时组装链，红色实线为方法调用过程，即运行时调时链，紫色三角箭头为继承，可以把子类看作父类的同一个节点，线上的文字为调用的方法。</li>\\n</ul>","autoDesc":true}');export{e as data};