const e=JSON.parse('{"key":"v-7123e499","path":"/study/enterprise/dubbo/6-export-services.html","title":"6-服务导出的过程和实现","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-07-21T00:00:00.000Z","category":["Java企业开发"],"tag":["Dubbo","源码学习"],"star":false,"description":"6-服务导出的过程和实现 本文介绍了 Dubbo 服务导出的过程和实现细节 1.简介 本篇文章，我们来研究一下 Dubbo 导出服务的过程。Dubbo 服务导出过程始于 Spring 容器发布刷新事件，Dubbo 在接收到事件后，会立即执行服务导出逻辑。整个逻辑大致可分为三个部分，第一部分是前置工作，主要用于检查参数，组装 URL。第二部分是导出服务，包含导出服务到本地 (JVM)，和导出服务到远程两个过程。第三部分是向注册中心注册服务，用于服务发现。本篇文章将会对这三个部分代码进行详细的分析。 2.源码分析","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/enterprise/dubbo/6-export-services.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"6-服务导出的过程和实现"}],["meta",{"property":"og:description","content":"6-服务导出的过程和实现 本文介绍了 Dubbo 服务导出的过程和实现细节 1.简介 本篇文章，我们来研究一下 Dubbo 导出服务的过程。Dubbo 服务导出过程始于 Spring 容器发布刷新事件，Dubbo 在接收到事件后，会立即执行服务导出逻辑。整个逻辑大致可分为三个部分，第一部分是前置工作，主要用于检查参数，组装 URL。第二部分是导出服务，包含导出服务到本地 (JVM)，和导出服务到远程两个过程。第三部分是向注册中心注册服务，用于服务发现。本篇文章将会对这三个部分代码进行详细的分析。 2.源码分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Dubbo"}],["meta",{"property":"article:tag","content":"源码学习"}],["meta",{"property":"article:published_time","content":"2022-07-21T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6-服务导出的过程和实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-21T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.源码分析","slug":"_2-源码分析","link":"#_2-源码分析","children":[{"level":3,"title":"2.1 前置工作","slug":"_2-1-前置工作","link":"#_2-1-前置工作","children":[]},{"level":3,"title":"2.2 导出 Dubbo 服务","slug":"_2-2-导出-dubbo-服务","link":"#_2-2-导出-dubbo-服务","children":[]},{"level":3,"title":"2.2.1 Invoker 创建过程","slug":"_2-2-1-invoker-创建过程","link":"#_2-2-1-invoker-创建过程","children":[]},{"level":3,"title":"2.2.2 导出服务到本地","slug":"_2-2-2-导出服务到本地","link":"#_2-2-2-导出服务到本地","children":[]},{"level":3,"title":"2.2.3 导出服务到远程","slug":"_2-2-3-导出服务到远程","link":"#_2-2-3-导出服务到远程","children":[]},{"level":3,"title":"2.2.4 服务注册","slug":"_2-2-4-服务注册","link":"#_2-2-4-服务注册","children":[]},{"level":3,"title":"2.2.5 订阅 override 数据","slug":"_2-2-5-订阅-override-数据","link":"#_2-2-5-订阅-override-数据","children":[]}]},{"level":2,"title":"3.总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":40.32,"words":12095},"filePathRelative":"study/enterprise/dubbo/6-export-services.md","localizedDate":"2022年7月21日","excerpt":"<h1> 6-服务导出的过程和实现</h1>\\n<p>本文介绍了 Dubbo 服务导出的过程和实现细节</p>\\n<h2> 1.简介</h2>\\n<p>本篇文章，我们来研究一下 Dubbo 导出服务的过程。Dubbo 服务导出过程始于 Spring 容器发布刷新事件，Dubbo 在接收到事件后，会立即执行服务导出逻辑。整个逻辑大致可分为三个部分，第一部分是前置工作，主要用于检查参数，组装 URL。第二部分是导出服务，包含导出服务到本地 (JVM)，和导出服务到远程两个过程。第三部分是向注册中心注册服务，用于服务发现。本篇文章将会对这三个部分代码进行详细的分析。</p>\\n<h2> 2.源码分析</h2>","autoDesc":true}');export{e as data};
