const e=JSON.parse('{"key":"v-6226e48a","path":"/core-java/collections/20210506-hashmap-dead-cycle.html","title":"HashMap | 死循环-基于JDK1.7","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2021-05-06T00:00:00.000Z","category":["Server"],"tag":["Java","Core-java","HashMap"],"description":"HashMap | 死循环-基于JDK1.7 问题 如果是在单线程下使用HashMap，自然是没有问题的，如果后期由于代码优化，这段逻辑引入了多线程并发执行，在一个未知的时间点，会发现CPU占用100%，居高不下，通过查看堆栈，你会惊讶的发现，线程都Hang在hashMap的get()方法上，服务重启之后，问题消失，过段时间可能又复现了。 这是为什么？ 原因分析 在了解来龙去脉之前，我们先看看HashMap的数据结构。 在内部，HashMap使用一个Entry数组保存key、value数据，当一对key、value被加入时，会通过一个hash算法得到数组的下标index，算法很简单，根据key的hash值，对数组的大小取模 hash &amp; (length-1)，并把结果插入数组该位置，如果该位置上已经有元素了，就说明存在hash冲突，这样会在index位置生成链表。 如果存在hash冲突，最惨的情况，就是所有元素都定位到同一个位置，形成一个长长的链表，这样get一个值时，最坏情况需要遍历所有节点，性能变成了O(n)，所以元素的hash值算法和HashMap的初始化大小很重要。 当插入一个新的节点时，如果不存在相同的key，则会判断当前内部元素是否已经达到阈值（默认是数组大小的0.75），如果已经达到阈值，会对数组进行扩容，也会对链表中的元素进行rehash。","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/time-never-letdown/core-java/collections/20210506-hashmap-dead-cycle.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"HashMap | 死循环-基于JDK1.7"}],["meta",{"property":"og:description","content":"HashMap | 死循环-基于JDK1.7 问题 如果是在单线程下使用HashMap，自然是没有问题的，如果后期由于代码优化，这段逻辑引入了多线程并发执行，在一个未知的时间点，会发现CPU占用100%，居高不下，通过查看堆栈，你会惊讶的发现，线程都Hang在hashMap的get()方法上，服务重启之后，问题消失，过段时间可能又复现了。 这是为什么？ 原因分析 在了解来龙去脉之前，我们先看看HashMap的数据结构。 在内部，HashMap使用一个Entry数组保存key、value数据，当一对key、value被加入时，会通过一个hash算法得到数组的下标index，算法很简单，根据key的hash值，对数组的大小取模 hash &amp; (length-1)，并把结果插入数组该位置，如果该位置上已经有元素了，就说明存在hash冲突，这样会在index位置生成链表。 如果存在hash冲突，最惨的情况，就是所有元素都定位到同一个位置，形成一个长长的链表，这样get一个值时，最坏情况需要遍历所有节点，性能变成了O(n)，所以元素的hash值算法和HashMap的初始化大小很重要。 当插入一个新的节点时，如果不存在相同的key，则会判断当前内部元素是否已经达到阈值（默认是数组大小的0.75），如果已经达到阈值，会对数组进行扩容，也会对链表中的元素进行rehash。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://liuhongjiao.cn/time-never-letdown/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T11:17:04.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"HashMap | 死循环-基于JDK1.7"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Core-java"}],["meta",{"property":"article:tag","content":"HashMap"}],["meta",{"property":"article:published_time","content":"2021-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T11:17:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap | 死循环-基于JDK1.7\\",\\"image\\":[\\"https://liuhongjiao.cn/time-never-letdown/\\"],\\"datePublished\\":\\"2021-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-03T11:17:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]},{"level":2,"title":"源码分析","slug":"源码分析","link":"#源码分析","children":[]},{"level":2,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]}],"git":{"createdTime":1675236398000,"updatedTime":1675423024000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":3}]},"readingTime":{"minutes":5.25,"words":1575},"filePathRelative":"core-java/collections/20210506-hashmap-dead-cycle.md","localizedDate":"2021年5月6日","excerpt":"<h1> HashMap | 死循环-基于JDK1.7</h1>\\n<h2> 问题</h2>\\n<p>如果是在单线程下使用HashMap，自然是没有问题的，如果后期由于代码优化，这段逻辑引入了多线程并发执行，在一个未知的时间点，会发现CPU占用100%，居高不下，通过查看堆栈，你会惊讶的发现，线程都Hang在hashMap的get()方法上，服务重启之后，问题消失，过段时间可能又复现了。\\n这是为什么？</p>\\n<h2> 原因分析</h2>\\n<p>在了解来龙去脉之前，我们先看看HashMap的数据结构。\\n在内部，HashMap使用一个Entry数组保存key、value数据，当一对key、value被加入时，会通过一个hash算法得到数组的下标index，算法很简单，根据key的hash值，对数组的大小取模 hash &amp; (length-1)，并把结果插入数组该位置，如果该位置上已经有元素了，就说明存在hash冲突，这样会在index位置生成链表。\\n如果存在hash冲突，最惨的情况，就是所有元素都定位到同一个位置，形成一个长长的链表，这样get一个值时，最坏情况需要遍历所有节点，性能变成了O(n)，所以元素的hash值算法和HashMap的初始化大小很重要。\\n当插入一个新的节点时，如果不存在相同的key，则会判断当前内部元素是否已经达到阈值（默认是数组大小的0.75），如果已经达到阈值，会对数组进行扩容，也会对链表中的元素进行rehash。</p>","autoDesc":true}');export{e as data};
