const n=JSON.parse('{"key":"v-cf2fb652","path":"/posts/apple/20210506-hashmap-sourcecode.html","title":"20210506-HashMap源码和JDK1.8以后的一些变化","lang":"en-US","frontmatter":{"icon":"edit","date":"2021-05-06T00:00:00.000Z","category":["Server"],"tag":["Java","Core-java","HashMap"],"star":true,"description":"20210506-HashMap源码和JDK1.8以后的一些变化 内部实现 JDK1.8以后 HashMap的数据结构发生了一些改变,从单纯的数组加链表结构变成数组+链表+红黑树.如图 其中的Node是HashMap的静态内部类，实现了Map.Entry接口，本质就是一个KV映射，上图中的小圆圈就是一个Node static class Node&lt;K,V&gt; implements Map.Entry&lt;K,V&gt; { final int hash; // 用来定位数组索引位置 final K key; V value; Node&lt;K,V&gt; next; // 链表的下一个node Node(int hash, K key, V value, Node&lt;K,V&gt; next) { this.hash = hash; this.key = key; this.value = value; this.next = next; } public final K getKey() { return key; } public final V getValue() { return value; } public final String toString() { return key + \\"=\\" + value; } public final int hashCode() { return Objects.hashCode(key) ^ Objects.hashCode(value); } public final V setValue(V newValue) { V oldValue = value; value = newValue; return oldValue; } public final boolean equals(Object o) { if (o == this) return true; if (o instanceof Map.Entry) { Map.Entry&lt;?,?&gt; e = (Map.Entry&lt;?,?&gt;)o; if (Objects.equals(key, e.getKey()) &amp;&amp; Objects.equals(value, e.getValue())) return true; } return false; } }","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/apple/20210506-hashmap-sourcecode.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"20210506-HashMap源码和JDK1.8以后的一些变化"}],["meta",{"property":"og:description","content":"20210506-HashMap源码和JDK1.8以后的一些变化 内部实现 JDK1.8以后 HashMap的数据结构发生了一些改变,从单纯的数组加链表结构变成数组+链表+红黑树.如图 其中的Node是HashMap的静态内部类，实现了Map.Entry接口，本质就是一个KV映射，上图中的小圆圈就是一个Node static class Node&lt;K,V&gt; implements Map.Entry&lt;K,V&gt; { final int hash; // 用来定位数组索引位置 final K key; V value; Node&lt;K,V&gt; next; // 链表的下一个node Node(int hash, K key, V value, Node&lt;K,V&gt; next) { this.hash = hash; this.key = key; this.value = value; this.next = next; } public final K getKey() { return key; } public final V getValue() { return value; } public final String toString() { return key + \\"=\\" + value; } public final int hashCode() { return Objects.hashCode(key) ^ Objects.hashCode(value); } public final V setValue(V newValue) { V oldValue = value; value = newValue; return oldValue; } public final boolean equals(Object o) { if (o == this) return true; if (o instanceof Map.Entry) { Map.Entry&lt;?,?&gt; e = (Map.Entry&lt;?,?&gt;)o; if (Objects.equals(key, e.getKey()) &amp;&amp; Objects.equals(value, e.getValue())) return true; } return false; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-01-22T09:21:10.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Core-java"}],["meta",{"property":"article:tag","content":"HashMap"}],["meta",{"property":"article:published_time","content":"2021-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-22T09:21:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"20210506-HashMap源码和JDK1.8以后的一些变化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2023-01-22T09:21:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"内部实现","slug":"内部实现","link":"#内部实现","children":[]},{"level":2,"title":"HashMap的扩容机制","slug":"hashmap的扩容机制","link":"#hashmap的扩容机制","children":[]}],"git":{"createdTime":1674379069000,"updatedTime":1674379270000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":2}]},"readingTime":{"minutes":8.43,"words":2528},"filePathRelative":"posts/apple/20210506-hashmap-sourcecode.md","localizedDate":"May 6, 2021","excerpt":"<h1> 20210506-HashMap源码和JDK1.8以后的一些变化</h1>\\n<h2> 内部实现</h2>\\n<p>JDK1.8以后 HashMap的数据结构发生了一些改变,从单纯的数组加链表结构变成数组+链表+红黑树.如图</p>\\n<p>其中的Node是HashMap的静态内部类，实现了Map.Entry接口，本质就是一个KV映射，上图中的小圆圈就是一个Node</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Node</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Map<span class=\\"token punctuation\\">.</span>Entry</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">int</span> hash<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 用来定位数组索引位置</span>\\n    <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">K</span> key<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">V</span> value<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">Node</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span> next<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 链表的下一个node</span>\\n\\n    <span class=\\"token class-name\\">Node</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> hash<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">K</span> key<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">V</span> value<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Node</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">K</span><span class=\\"token punctuation\\">,</span><span class=\\"token class-name\\">V</span><span class=\\"token punctuation\\">&gt;</span></span> next<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>hash <span class=\\"token operator\\">=</span> hash<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>key <span class=\\"token operator\\">=</span> key<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> value<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>next <span class=\\"token operator\\">=</span> next<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">K</span> <span class=\\"token function\\">getKey</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>        <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">return</span> key<span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">V</span> <span class=\\"token function\\">getValue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>      <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">return</span> value<span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">String</span> <span class=\\"token function\\">toString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">return</span> key <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"=\\"</span> <span class=\\"token operator\\">+</span> value<span class=\\"token punctuation\\">;</span> <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token class-name\\">Objects</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">^</span> <span class=\\"token class-name\\">Objects</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">hashCode</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">V</span> <span class=\\"token function\\">setValue</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">V</span> newValue<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">V</span> oldValue <span class=\\"token operator\\">=</span> value<span class=\\"token punctuation\\">;</span>\\n        value <span class=\\"token operator\\">=</span> newValue<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">return</span> oldValue<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">boolean</span> <span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Object</span> o<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>o <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>o <span class=\\"token keyword\\">instanceof</span> <span class=\\"token class-name\\">Map<span class=\\"token punctuation\\">.</span>Entry</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">Map<span class=\\"token punctuation\\">.</span>Entry</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">&gt;</span></span> e <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Map<span class=\\"token punctuation\\">.</span>Entry</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">)</span>o<span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Objects</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>key<span class=\\"token punctuation\\">,</span> e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getKey</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&amp;&amp;</span>\\n                <span class=\\"token class-name\\">Objects</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">,</span> e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getValue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
