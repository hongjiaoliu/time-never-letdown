import{_ as o,V as p,W as l,X as n,Y as s,$ as e,Z as t,F as i}from"./framework-e5211252.js";const c={},r=n("h1",{id:"_3-检索进阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-检索进阶","aria-hidden":"true"},"#"),s(" 3-检索进阶")],-1),u={id:"本节参考-官方文档-检索示例",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#本节参考-官方文档-检索示例","aria-hidden":"true"},"#",-1),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started-search.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h1 id="导入样本测试数据" tabindex="-1"><a class="header-anchor" href="#导入样本测试数据" aria-hidden="true">#</a> 导入样本测试数据</h1><p>准备一份顾客银行账户信息的虚构的JSON文档样本。每个文档都有下列的 schema（模式）。</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
    <span class="token string">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token number">39225</span><span class="token punctuation">,</span>
    <span class="token string">&quot;firstname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Amber&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;lastname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Duke&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token string">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;880 Holmes Lane&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;employer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pyrami&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;amberduke@pyrami.com&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Brogan&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IL&quot;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={href:"https://github.com/elastic/elasticsearch/blob/v6.8.18/docs/src/test/resources/accounts.json",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"POST bank/account/_bulk",-1),q=n("img",{src:"https://cdn.liuhongjiao.cn/images/2023/02/15/3-search-es/1676425762572.png",alt:"图 1",loading:"lazy"},null,-1),g=t(`<h1 id="检索示例介绍" tabindex="-1"><a class="header-anchor" href="#检索示例介绍" aria-hidden="true">#</a> 检索示例介绍</h1><p>下面的请求都是在Kibana dev-tools 操作</p><h2 id="请求接口" tabindex="-1"><a class="header-anchor" href="#请求接口" aria-hidden="true">#</a> 请求接口</h2><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET <span class="token operator">/</span>bank<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match_all&quot;</span><span class="token operator">:</span> {}
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    {
      <span class="token string">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
    }
  <span class="token punctuation">]</span>
}
# query 查询条件
# sort 排序条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h2><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token string">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_shards&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token string">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      {
        <span class="token string">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;bank&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;account&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_source&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;account_number&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token string">&quot;balance&quot;</span> <span class="token operator">:</span> <span class="token number">16623</span><span class="token punctuation">,</span>
          <span class="token string">&quot;firstname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Bradshaw&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;lastname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Mckenzie&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
          <span class="token string">&quot;gender&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;address&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;244 Columbus Place&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;employer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Euron&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;email&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;bradshawmckenzie@euron.com&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;city&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Hobucken&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;state&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;CO&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;sort&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">0</span>
        <span class="token punctuation">]</span>
      }<span class="token punctuation">,</span>
      <span class="token operator">..</span><span class="token punctuation">.</span>
    <span class="token punctuation">]</span>
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应字段解释" tabindex="-1"><a class="header-anchor" href="#响应字段解释" aria-hidden="true">#</a> 响应字段解释</h2><ul><li><code>took</code> – how long it took Elasticsearch to run the query, in milliseconds</li><li><code>timed_out</code> – whether or not the search request timed out</li><li><code>_shards</code> – how many shards were searched and a breakdown of how many shards succeeded, failed, or were skipped.</li><li><code>max_score</code> – the score of the most relevant document found</li><li><code>hits.total.value</code> - how many matching documents were found</li><li><code>hits.sort</code> - the document’s sort position (when not sorting by relevance score)</li><li><code>hits._score</code> - the document’s relevance score (not applicable when using <code>match_all</code>)</li></ul><h2 id="响应结果说明" tabindex="-1"><a class="header-anchor" href="#响应结果说明" aria-hidden="true">#</a> 响应结果说明</h2><p>Elasticsearch 默认会分页返回10条数据，不会一下返回所有数据。</p><h2 id="请求方式说明" tabindex="-1"><a class="header-anchor" href="#请求方式说明" aria-hidden="true">#</a> 请求方式说明</h2><p>ES支持两种基本方式检索；</p><ul><li>通过REST request uri 发送搜索参数 （uri +检索参数）；</li><li>通过REST request body 来发送它们（uri+请求体）；</li></ul><p>也就是说除了上面示例的请求接口，根据请求体进行检索外； 还可以用GET请求参数的方式检索：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET bank<span class="token operator">/</span>_search?q<span class="token operator">=</span><span class="token operator">*</span>&amp;sort<span class="token operator">=</span>account_number<span class="token operator">:</span><span class="token keyword">asc</span>
# q<span class="token operator">=</span><span class="token operator">*</span> 查询所有
# sort<span class="token operator">=</span>account_number<span class="token operator">:</span><span class="token keyword">asc</span> 按照account_number进行升序排列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="query-dsl" tabindex="-1"><a class="header-anchor" href="#query-dsl" aria-hidden="true">#</a> Query DSL</h1>`,16),h={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<h2 id="_1-基本语法格式" tabindex="-1"><a class="header-anchor" href="#_1-基本语法格式" aria-hidden="true">#</a> 1. 基本语法格式</h2><p>一个查询语句的典型结构:</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>QUERY_NAME<span class="token operator">:</span>{
   ARGUMENT<span class="token operator">:</span><span class="token keyword">VALUE</span><span class="token punctuation">,</span>
   ARGUMENT<span class="token operator">:</span><span class="token keyword">VALUE</span><span class="token punctuation">,</span><span class="token operator">..</span><span class="token punctuation">.</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果针对于某个字段，那么它的结构如下：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  QUERY_NAME<span class="token operator">:</span>{
     FIELD_NAME<span class="token operator">:</span>{
       ARGUMENT<span class="token operator">:</span><span class="token keyword">VALUE</span><span class="token punctuation">,</span>
       ARGUMENT<span class="token operator">:</span><span class="token keyword">VALUE</span><span class="token punctuation">,</span><span class="token operator">..</span><span class="token punctuation">.</span>
      }   
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      	<span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

# match_all 查询类型【代表查询所有的所有】，es中可以在query中组合非常多的查询类型完成复杂查询；
# from+size 限定，完成分页功能；从第几条数据开始，每页有多少数据
# sort 排序，多字段排序，会在前序字段相等时后续字段内部排序，否则以前序为准；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-返回部分字段" tabindex="-1"><a class="header-anchor" href="#_2-返回部分字段" aria-hidden="true">#</a> 2. 返回部分字段</h2><p>请求示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;balance&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;firstname&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

# _source 指定返回结果中包含的字段名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果示例：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;bank&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;account&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;999&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;firstname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Dorothy&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;balance&quot;</span> <span class="token operator">:</span> <span class="token number">6087</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">999</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    	...
    <span class="token punctuation">]</span>
 	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-match-匹配查询" tabindex="-1"><a class="header-anchor" href="#_3-match-匹配查询" aria-hidden="true">#</a> 3. match-匹配查询</h2><h3 id="精确查询-基本数据类型-非文本" tabindex="-1"><a class="header-anchor" href="#精确查询-基本数据类型-非文本" aria-hidden="true">#</a> 精确查询-基本数据类型(非文本)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 查找匹配 account_number 为 <span class="token number">20</span> 的数据 非文本推荐使用 term
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模糊查询-文本字符串" tabindex="-1"><a class="header-anchor" href="#模糊查询-文本字符串" aria-hidden="true">#</a> 模糊查询-文本字符串</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill lane&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 查找匹配 address 包含 mill 或 lane 的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>match即全文检索，对检索字段进行分词匹配，会按照响应的评分 _score 排序，原理是倒排索引。</p><h3 id="精确匹配-文本字符串" tabindex="-1"><a class="header-anchor" href="#精确匹配-文本字符串" aria-hidden="true">#</a> 精确匹配-文本字符串</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address.keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;288 Mill Street&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 查找 address 为 <span class="token number">288</span> Mill Street 的数据。
# 这里的查找是精确查找，只有完全匹配时才会查找出存在的记录，
# 如果想模糊查询应该使用match_phrase 短语匹配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-match-phrase-短语匹配" tabindex="-1"><a class="header-anchor" href="#_4-match-phrase-短语匹配" aria-hidden="true">#</a> 4. match_phrase-短语匹配</h2><p>将需要匹配的值当成一整个单词（不分词）进行检索</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill lane&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 这里会检索 address 匹配包含短语 mill lane 的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-multi-math-多字段匹配" tabindex="-1"><a class="header-anchor" href="#_5-multi-math-多字段匹配" aria-hidden="true">#</a> 5. multi_math-多字段匹配</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;address&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 检索 city 或 address 匹配包含 mill 的数据，会对查询条件分词
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-bool-复合查询" tabindex="-1"><a class="header-anchor" href="#_6-bool-复合查询" aria-hidden="true">#</a> 6. bool-复合查询</h2><p>复合语句可以合并，任何其他查询语句，包括符合语句。这也就意味着，复合语句之间 可以互相嵌套，可以表达非常复杂的逻辑。</p><ul><li>must：必须达到must所列举的所有条件</li><li>must_not，必须不匹配must_not所列举的所有条件。</li><li>should，应该满足should所列举的条件。</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET bank<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;bool&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        {
          <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
          }
        }
      <span class="token punctuation">]</span>
    }
  }
}
# 查询 gender 为 M 且 address 包含 mill 的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-filter-结果过滤" tabindex="-1"><a class="header-anchor" href="#_7-filter-结果过滤" aria-hidden="true">#</a> 7. filter-结果过滤</h2><p>并不是所有的查询都需要产生分数，特别是哪些仅用于filtering过滤的文档。为了不计算分数，elasticsearch会自动检查场景并且优化查询的执行。 filter 对结果进行过滤，且不计算相关性得分。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;balance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10000&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20000&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 这里先是查询所有匹配 address 包含 mill 的文档，
# 然后再根据 <span class="token number">10000</span>&lt;=balance&lt;=<span class="token number">20000</span> 进行过滤查询结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Each <code>must</code>, <code>should</code>, and <code>must_not</code> element in a Boolean query is referred to as a query clause. How well a document meets the criteria in each <code>must</code> or <code>should</code> clause contributes to the document’s <em>relevance score</em>. The higher the score, the better the document matches your search criteria. By default, Elasticsearch returns documents ranked by these relevance scores. 在boolean查询中，<code>must</code>, <code>should</code> 和<code>must_not</code> 元素都被称为查询子句 。 文档是否符合每个“must”或“should”子句中的标准，决定了文档的“相关性得分”。 得分越高，文档越符合您的搜索条件。 默认情况下，Elasticsearch 返回根据这些相关性得分排序的文档。</p><p>The criteria in a <code>must_not</code> clause is treated as a <em>filter</em>. It affects whether or not the document is included in the results, but does not contribute to how documents are scored. You can also explicitly specify arbitrary filters to include or exclude documents based on structured data. <code>“must_not”子句中的条件被视为“过滤器”。</code> 它影响文档是否包含在结果中，但<strong>不影响文档的评分方式</strong>。还可以显式地指定任意过滤器来包含或排除基于结构化数据的文档。</p></blockquote><h2 id="_8-term-精确检索" tabindex="-1"><a class="header-anchor" href="#_8-term-精确检索" aria-hidden="true">#</a> 8. term-精确检索</h2>`,34),y=n("code",null,"term",-1),f=n("code",null,"[text](https://www.elastic.co/guide/en/elasticsearch/reference/7.11/text.html)",-1),A=n("code",null,"text",-1),x={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/analysis.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"text",-1),E={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/analysis.html",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"text",-1),j=n("code",null,"[match](https://www.elastic.co/guide/en/elasticsearch/reference/7.11/query-dsl-match-query.html)",-1),G={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/query-dsl-term-query.html",target:"_blank",rel:"noopener noreferrer"},z=t(`<p>在上面<a href="#NHBEH">3.match-匹配查询</a>中有介绍对于非文本字段的精确查询，Elasticsearch 官方对于这种非文本字段，使用 term来精确检索是一个推荐的选择。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;28&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# 查找 age 为 <span class="token number">28</span> 的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-aggregation-执行聚合" tabindex="-1"><a class="header-anchor" href="#_9-aggregation-执行聚合" aria-hidden="true">#</a> 9. Aggregation-执行聚合</h2>`,3),M={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/search-aggregations.html",target:"_blank",rel:"noopener noreferrer"},L=t(`<h3 id="聚合语法" tabindex="-1"><a class="header-anchor" href="#聚合语法" aria-hidden="true">#</a> 聚合语法</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /my-index<span class="token number">-000001</span>/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;aggs_name&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> # 这次聚合的名字，方便展示在结果集中
        <span class="token property">&quot;AGG_TYPE&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span> # 聚合的类型(avg<span class="token punctuation">,</span>term<span class="token punctuation">,</span>terms)
        <span class="token punctuation">}</span>	
     <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例1-搜索address中包含mill的所有人的年龄分布以及平均年龄" tabindex="-1"><a class="header-anchor" href="#示例1-搜索address中包含mill的所有人的年龄分布以及平均年龄" aria-hidden="true">#</a> 示例1-搜索address中包含mill的所有人的年龄分布以及平均年龄</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mill&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ageAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ageAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;balanceAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
# <span class="token property">&quot;ageAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>   				  --- 聚合名为 ageAgg
#   <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>				    --- 聚合类型为 term
#     <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>     --- 聚合字段为 age
#     <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>			    --- 取聚合后前十个数据
#   <span class="token punctuation">}</span>
# <span class="token punctuation">}</span><span class="token punctuation">,</span>
# ------------------------
# <span class="token property">&quot;ageAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>   				  --- 聚合名为 ageAvg
#   <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>				      --- 聚合类型为 avg 求平均值
#     <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>	    --- 聚合字段为 age
#   <span class="token punctuation">}</span>
# <span class="token punctuation">}</span><span class="token punctuation">,</span>
# ------------------------
# <span class="token property">&quot;balanceAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>				  --- 聚合名为 balanceAvg
#   <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>				      --- 聚合类型为 avg 求平均值
#     <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>  --- 聚合字段为 balance
#   <span class="token punctuation">}</span>
# <span class="token punctuation">}</span>
# ------------------------
# <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>               --- 不显示命中结果，只看聚合信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token string">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_shards&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token string">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggregations&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">2</span>
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
        }
      <span class="token punctuation">]</span>
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">34.0</span>
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;balanceAvg&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">25208.0</span>
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例2-按照年龄聚合-并且求这些年龄段的这些人的平均薪资" tabindex="-1"><a class="header-anchor" href="#示例2-按照年龄聚合-并且求这些年龄段的这些人的平均薪资" aria-hidden="true">#</a> 示例2-按照年龄聚合，并且求这些年龄段的这些人的平均薪资</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET bank/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ageAgg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ageAvg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
  <span class="token string">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_shards&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token string">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggregations&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">61</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">28312.918032786885</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">25269.583333333332</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">23194.813559322032</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">23951.346153846152</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">22136.69230769231</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">22174.71153846154</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">51</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">24731.07843137255</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">51</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">28273.882352941175</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">25093.94</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">49</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">26809.95918367347</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">47</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">22841.106382978724</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">46</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">26981.434782608696</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">27183.17777777778</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">27741.227272727272</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">27314.214285714286</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">28519.04761904762</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">27445.214285714286</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">27022.261904761905</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">21471.871794871793</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">26187.17948717949</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">29</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
          <span class="token string">&quot;ageAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">29483.14285714286</span>
          }
        }
      <span class="token punctuation">]</span>
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例3-查出所有年龄分布-并且这些年龄段中m的平均薪资和f的平均薪资以及这个年龄段的总体平均薪资" tabindex="-1"><a class="header-anchor" href="#示例3-查出所有年龄分布-并且这些年龄段中m的平均薪资和f的平均薪资以及这个年龄段的总体平均薪资" aria-hidden="true">#</a> 示例3-查出所有年龄分布，并且这些年龄段中M的平均薪资和F的平均薪资以及这个年龄段的总体平均薪资</h3><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET bank<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match_all&quot;</span><span class="token operator">:</span> {}
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;genderAgg&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span>
          }<span class="token punctuation">,</span>
          <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;balanceAvg&quot;</span><span class="token operator">:</span> {
              <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
                <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
              }
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;ageBalanceAvg&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          }
        }
      }
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
}
# <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span> gender是txt没法聚合 必须加<span class="token punctuation">.</span>keyword精确替代
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
  <span class="token string">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_shards&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;successful&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;skipped&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;failed&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token string">&quot;relation&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggregations&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token string">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">61</span><span class="token punctuation">,</span>
          <span class="token string">&quot;genderAgg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
              {
                <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
                <span class="token string">&quot;balanceAvg&quot;</span> <span class="token operator">:</span> {
                  <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">29565.628571428573</span>
                }
              }<span class="token punctuation">,</span>
              {
                <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">26</span><span class="token punctuation">,</span>
                <span class="token string">&quot;balanceAvg&quot;</span> <span class="token operator">:</span> {
                  <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">26626.576923076922</span>
                }
              }
            <span class="token punctuation">]</span>
          }<span class="token punctuation">,</span>
          <span class="token string">&quot;ageBalanceAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">28312.918032786885</span>
          }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
          <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          <span class="token string">&quot;genderAgg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;doc_count_error_upper_bound&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string">&quot;sum_other_doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token string">&quot;buckets&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
              {
                <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
                <span class="token string">&quot;balanceAvg&quot;</span> <span class="token operator">:</span> {
                  <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">26348.684210526317</span>
                }
              }<span class="token punctuation">,</span>
              {
                <span class="token string">&quot;key&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;doc_count&quot;</span> <span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
                <span class="token string">&quot;balanceAvg&quot;</span> <span class="token operator">:</span> {
                  <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">23405.68181818182</span>
                }
              }
            <span class="token punctuation">]</span>
          }<span class="token punctuation">,</span>
          <span class="token string">&quot;ageBalanceAvg&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;value&quot;</span> <span class="token operator">:</span> <span class="token number">25269.583333333332</span>
          }
        }<span class="token punctuation">,</span>
        <span class="token operator">..</span><span class="token punctuation">.</span>
      <span class="token punctuation">]</span>
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="检索示例代码" tabindex="-1"><a class="header-anchor" href="#检索示例代码" aria-hidden="true">#</a> 检索示例代码</h1><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code># <span class="token number">9</span><span class="token operator">:</span>Aggregation<span class="token operator">-</span>执行聚合
#示例<span class="token number">3</span><span class="token operator">-</span>查出所有年龄分布，并且这些年龄段中M的平均薪资和F的平均薪资以及这个年龄段的总体平均薪资
GET accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match_all&quot;</span><span class="token operator">:</span> {}
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;genderAgg&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span>
          }<span class="token punctuation">,</span>
          <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;balanceAvg&quot;</span><span class="token operator">:</span> {
              <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
                <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
              }
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;ageBalanceAvg&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          }
        }
      }
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
}
# <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gender.keyword&quot;</span> gender是txt没法聚合 必须加<span class="token punctuation">.</span>keyword精确替代

# 示例<span class="token number">2</span><span class="token operator">-</span>按照年龄聚合，并且求这些年龄段的这些人的平均薪资
GET accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match_all&quot;</span><span class="token operator">:</span> {}
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;ageAvg&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
          }
        }
      }
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
}


# 示例<span class="token number">1</span><span class="token operator">-</span>搜索address中包含mill的所有人的年龄分布以及平均年龄
GET accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mill&quot;</span>
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;ageAgg&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      }
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;ageAvg&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>
      }
    }<span class="token punctuation">,</span>
    <span class="token string">&quot;balanceAvg&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>
      }
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
}
# <span class="token string">&quot;ageAgg&quot;</span><span class="token operator">:</span> {   				  <span class="token comment">--- 聚合名为 ageAgg</span>
#   <span class="token string">&quot;terms&quot;</span><span class="token operator">:</span> {				    <span class="token comment">--- 聚合类型为 term</span>
#     <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>     <span class="token comment">--- 聚合字段为 age</span>
#     <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>			    <span class="token comment">--- 取聚合后前十个数据</span>
#   }
# }<span class="token punctuation">,</span>
# <span class="token comment">------------------------</span>
# <span class="token string">&quot;ageAvg&quot;</span><span class="token operator">:</span> {   				  <span class="token comment">--- 聚合名为 ageAvg</span>
#   <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {				      <span class="token comment">--- 聚合类型为 avg 求平均值</span>
#     <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span>	    <span class="token comment">--- 聚合字段为 age</span>
#   }
# }<span class="token punctuation">,</span>
# <span class="token comment">------------------------</span>
# <span class="token string">&quot;balanceAvg&quot;</span><span class="token operator">:</span> {				  <span class="token comment">--- 聚合名为 balanceAvg</span>
#   <span class="token string">&quot;avg&quot;</span><span class="token operator">:</span> {				      <span class="token comment">--- 聚合类型为 avg 求平均值</span>
#     <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;balance&quot;</span>  <span class="token comment">--- 聚合字段为 balance</span>
#   }
# }
# <span class="token comment">------------------------</span>
# <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>               <span class="token comment">--- 不显示命中结果，只看聚合信息</span>

# <span class="token number">8</span>：term<span class="token operator">-</span>精确检索
GET accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;term&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> <span class="token string">&quot;28&quot;</span>
    }
  }
}
# 查找 age 为 <span class="token number">28</span> 的数据

# <span class="token number">7</span>：filter<span class="token operator">-</span>结果过滤
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;bool&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        {
          <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Road&quot;</span>
          }
        }
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string">&quot;filter&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;range&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;balance&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10000&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20000&quot;</span>
          }
        }
      }
    }
  }
}
# 这里先是查询所有匹配 address 包含 mill 的文档，
# 然后再根据 <span class="token number">10000</span><span class="token operator">&lt;=</span>balance<span class="token operator">&lt;=</span><span class="token number">20000</span> 进行过滤查询结果


# <span class="token number">6</span><span class="token operator">:</span>bool<span class="token operator">-</span>复合查询
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;bool&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        {<span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;M&quot;</span>
        }
        }<span class="token punctuation">,</span>
        {
          <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span>
          }
        }
      <span class="token punctuation">]</span>
    }
  }
}
## 查询 gender 为 M 且 address 包含 mill 的数据 

# <span class="token number">5</span>：multi_math<span class="token operator">-</span>多字段匹配
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;multi_match&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;city&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;address&quot;</span>
      <span class="token punctuation">]</span>
    }
  }
}
# 检索 city 或 address 匹配包含 mill 的数据，会对查询条件分词

# <span class="token number">4</span>：match_phrase<span class="token operator">-</span>短语匹配： 将需要匹配的值当成一整个单词（不分词）进行检索 
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match_phrase&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill lane&quot;</span>
    }
  }
}

#<span class="token operator">:</span><span class="token number">3</span>：精确查询 <span class="token operator">-</span> 文本字符串
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;address.keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;198 Mill Lane&quot;</span>
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span>
}

#<span class="token operator">:</span><span class="token number">2</span>：模糊查询 <span class="token operator">-</span> 文本字符串
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mill lane&quot;</span>
    }
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;address&quot;</span>
}


#<span class="token operator">:</span><span class="token number">1</span>：精确查询<span class="token operator">-</span>基本数据类型<span class="token punctuation">(</span>非文本<span class="token punctuation">)</span>
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
    }
  }
}

GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span>{
    <span class="token string">&quot;match_all&quot;</span><span class="token operator">:</span> {}
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token string">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    {
      <span class="token string">&quot;account_number&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;balance&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      }
    }
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lastname&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;firstname&quot;</span><span class="token punctuation">]</span>}
  
GET <span class="token operator">/</span>accounts<span class="token operator">/</span>_search
{
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;match_all&quot;</span><span class="token operator">:</span> {}
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    {
      <span class="token string">&quot;account_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
    }
  <span class="token punctuation">]</span>
}
# query 查询条件
# sort 排序条件


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function B(N,S){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,n("h1",u,[d,s(" 本节参考 "),n("a",v,[s("官方文档"),e(a)]),s(" 检索示例：")]),k,n("p",null,[n("a",m,[s("https://github.com/elastic/elasticsearch/blob/v6.8.18/docs/src/test/resources/accounts.json"),e(a)]),s(" 导入测试数据。 "),b,q]),g,n("p",null,[s("本小节参考官方文档："),n("a",h,[s("Query DSL"),e(a)]),s(" Elasticsearch提供了一个可以执行查询的Json风格的DSL。这个被称为Query DSL，该查询语言非常全面。")]),_,n("blockquote",null,[n("p",null,[s("Avoid using the "),y,s(" query for "),f,s(" fields. 避免使用 term 查询文本字段 By default, Elasticsearch changes the values of "),A,s(" fields as part of "),n("a",x,[s("analysis"),e(a)]),s(". This can make finding exact matches for "),w,s(" field values difficult. 默认情况下，Elasticsearch 会通过"),n("a",E,[s("analysis"),e(a)]),s("分词将文本字段的值拆分为一部分，这使精确匹配文本字段的值变得困难。 To search "),T,s(" field values, use the "),j,s(" query instead. 如果要查询文本字段值，请使用 match 查询代替。")]),n("p",null,[n("a",G,[s("https://www.elastic.co/guide/en/elasticsearch/reference/7.11/query-dsl-term-query.html"),e(a)])])]),z,n("p",null,[n("a",M,[s("https://www.elastic.co/guide/en/elasticsearch/reference/7.11/search-aggregations.html"),e(a)])]),L])}const R=o(c,[["render",B],["__file","3-search-es.html.vue"]]);export{R as default};
