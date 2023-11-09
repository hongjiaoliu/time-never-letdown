import{_ as o,V as p,W as i,X as s,Y as n,$ as e,Z as t,F as l}from"./framework-bcbeea85.js";const r={},c=s("h1",{id:"_4-mapping",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-mapping","aria-hidden":"true"},"#"),n(" 4-Mapping")],-1),u=s("h1",{id:"mapping-映射",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mapping-映射","aria-hidden":"true"},"#"),n(" Mapping-映射")],-1),d={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/mapping.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="_1-mapping介绍" tabindex="-1"><a class="header-anchor" href="#_1-mapping介绍" aria-hidden="true">#</a> 1. Mapping介绍</h2><p>Maping是用来定义一个文档（document），以及它所包含的属性（field）是如何存储和索引的。 比如：使用maping来定义：</p><ul><li>哪些字符串属性应该被看做全文本属性（full text fields）；</li><li>哪些属性包含数字，日期或地理位置；</li><li>文档中的所有属性是否都嫩被索引（all 配置）；</li><li>日期的格式；</li><li>自定义映射规则来执行动态添加属性；</li></ul><p>查看mapping信息</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET bank<span class="token operator">/</span>_mapping

{
  <span class="token string">&quot;bank&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;mappings&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;properties&quot;</span> <span class="token operator">:</span> {
        <span class="token string">&quot;account_number&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;address&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;age&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;balance&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;city&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;email&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;employer&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;firstname&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;gender&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;lastname&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;state&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-新版本type移除" tabindex="-1"><a class="header-anchor" href="#_2-新版本type移除" aria-hidden="true">#</a> 2. 新版本type移除</h2><p>ElasticSearch7-去掉type概念</p><ol><li>关系型数据库中两个数据表示是独立的，即使他们里面有相同名称的列也不影响使用，但ES中不是这样的。elasticsearch是基于Lucene开发的搜索引擎，而ES中不同type下名称相同的filed最终在Lucene中的处理方式是一样的。 <ul><li>两个不同type下的两个user_name，在ES同一个索引下其实被认为是同一个filed，你必须在两个不同的type中定义相同的filed映射。否则，不同type中的相同字段名称就会在处理中出现冲突的情况，导致Lucene处理效率下降。</li><li>去掉type就是为了提高ES处理数据的效率。</li></ul></li><li>Elasticsearch 7.x URL中的type参数为可选。比如，索引一个文档不再要求提供文档类型。</li><li>Elasticsearch 8.x 不再支持URL中的type参数。</li><li>解决： 将索引从多类型迁移到单类型，每种类型文档一个独立索引 将已存在的索引下的类型数据，全部迁移到指定位置即可。详见数据迁移</li></ol><blockquote><p><strong>Elasticsearch 7.x</strong></p><ul><li>Specifying types in requests is deprecated. For instance, indexing a document no longer requires a document <code>type</code>. The new index APIs are <code>PUT {index}/_doc/{id}</code> in case of explicit ids and <code>POST {index}/_doc</code> for auto-generated ids. Note that in 7.0, <code>_doc</code> is a permanent part of the path, and represents the endpoint name rather than the document type.</li><li>The <code>include_type_name</code> parameter in the index creation, index template, and mapping APIs will default to <code>false</code>. Setting the parameter at all will result in a deprecation warning.</li><li>The <code>_default_</code> mapping type is removed.</li></ul></blockquote><p><strong>Elasticsearch 8.x</strong></p><blockquote><ul><li>Specifying types in requests is no longer supported.</li><li>The <code>include_type_name</code> parameter is removed.</li></ul></blockquote><h2 id="_3-属性类型" tabindex="-1"><a class="header-anchor" href="#_3-属性类型" aria-hidden="true">#</a> 3. 属性类型</h2>`,12),v={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/mapping-types.html",target:"_blank",rel:"noopener noreferrer"},q=s("h2",{id:"映射操作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#映射操作","aria-hidden":"true"},"#"),n(" 映射操作")],-1),m={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="_1-创建索引映射" tabindex="-1"><a class="header-anchor" href="#_1-创建索引映射" aria-hidden="true">#</a> 1. 创建索引映射</h3><p>创建索引并指定属性的映射规则（相当于新建表并指定字段和字段类型）</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>PUT <span class="token operator">/</span>my_index
{
  <span class="token string">&quot;mappings&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;properties&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;email&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;shards_acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;my_index&quot;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-给已有映射增加字段" tabindex="-1"><a class="header-anchor" href="#_2-给已有映射增加字段" aria-hidden="true">#</a> 2. 给已有映射增加字段</h3>`,6),g={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#add-field-mapping",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>PUT <span class="token operator">/</span>my_index<span class="token operator">/</span>_mapping
{
  <span class="token string">&quot;properties&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;employee-id&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    }
  }
}

# 这里的 <span class="token string">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>，表明新增的字段不能被检索。默认是<span class="token boolean">true</span>
# https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>co<span class="token operator">/</span>guide<span class="token operator">/</span>en<span class="token operator">/</span>elasticsearch<span class="token operator">/</span><span class="token keyword">reference</span><span class="token operator">/</span><span class="token number">7.</span>x<span class="token operator">/</span>mapping<span class="token operator">-</span><span class="token keyword">index</span><span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;acknowledged&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查看映射" tabindex="-1"><a class="header-anchor" href="#_3-查看映射" aria-hidden="true">#</a> 3. 查看映射</h3>`,4),y={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#view-mapping",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET <span class="token operator">/</span>my_index<span class="token operator">/</span>_mapping
# 查看某一个字段的映射
GET <span class="token operator">/</span>my_index<span class="token operator">/</span>_mapping<span class="token operator">/</span>field<span class="token operator">/</span>employee<span class="token operator">-</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>{
  <span class="token string">&quot;my_index&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;mappings&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;properties&quot;</span> <span class="token operator">:</span> {
        <span class="token string">&quot;age&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;email&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;employee-id&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;index&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;name&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
        }
      }
    }
  }
}
# <span class="token keyword">index</span> <span class="token boolean">false</span> 表示不能被索引找到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-更新映射" tabindex="-1"><a class="header-anchor" href="#_4-更新映射" aria-hidden="true">#</a> 4. 更新映射</h3>`,4),x={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#update-mapping",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>对于已经存在的字段映射，我们不能更新。更新必须创建新的索引，进行数据迁移。</p><blockquote><p>Changing an existing field could invalidate data that’s already indexed.</p></blockquote><h3 id="_5-数据迁移" tabindex="-1"><a class="header-anchor" href="#_5-数据迁移" aria-hidden="true">#</a> 5. 数据迁移</h3><p>迁移方式分为两种，一种是7和7之后去掉type的情况，一种是包含type 迁移的情况。</p><h4 id="无type数据迁移" tabindex="-1"><a class="header-anchor" href="#无type数据迁移" aria-hidden="true">#</a> 无type数据迁移</h4><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>POST reindex <span class="token punctuation">[</span>固定写法<span class="token punctuation">]</span>
{
  <span class="token string">&quot;source&quot;</span><span class="token operator">:</span>{
      <span class="token string">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;twitter&quot;</span>
   }<span class="token punctuation">,</span>
  <span class="token string">&quot;dest&quot;</span><span class="token operator">:</span>{
      <span class="token string">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;new_twitters&quot;</span>
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="有type数据迁移" tabindex="-1"><a class="header-anchor" href="#有type数据迁移" aria-hidden="true">#</a> 有type数据迁移</h4><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>POST reindex <span class="token punctuation">[</span>固定写法<span class="token punctuation">]</span>
{
  <span class="token string">&quot;source&quot;</span><span class="token operator">:</span>{
      <span class="token string">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;twitter&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;twitter&quot;</span>
   }<span class="token punctuation">,</span>
  <span class="token string">&quot;dest&quot;</span><span class="token operator">:</span>{
      <span class="token string">&quot;index&quot;</span><span class="token operator">:</span><span class="token string">&quot;new_twitters&quot;</span>
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-数据迁移实例" tabindex="-1"><a class="header-anchor" href="#_6-数据迁移实例" aria-hidden="true">#</a> 6. 数据迁移实例</h3><p>对于我们的测试数据,是包含 type 的索引 bank。 现在我们创建新的索引 newbank 并修改一些字段的类型来演示当需要更新映射时的数据迁移操作。</p><h4 id="_1-查看索引-bank-当前字段映射类型" tabindex="-1"><a class="header-anchor" href="#_1-查看索引-bank-当前字段映射类型" aria-hidden="true">#</a> ① 查看索引 bank 当前字段映射类型</h4><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET <span class="token operator">/</span>bank<span class="token operator">/</span>_mapping
# 结果
{
  <span class="token string">&quot;bank&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;mappings&quot;</span> <span class="token operator">:</span> {
      <span class="token string">&quot;properties&quot;</span> <span class="token operator">:</span> {
        <span class="token string">&quot;account_number&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;address&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;age&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;balance&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;city&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;email&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;employer&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;firstname&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;gender&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;lastname&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }<span class="token punctuation">,</span>
        <span class="token string">&quot;state&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;fields&quot;</span> <span class="token operator">:</span> {
            <span class="token string">&quot;keyword&quot;</span> <span class="token operator">:</span> {
              <span class="token string">&quot;type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;ignore_above&quot;</span> <span class="token operator">:</span> <span class="token number">256</span>
            }
          }
        }
      }
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-创建新索引-newbank-并修改字段类型" tabindex="-1"><a class="header-anchor" href="#_2-创建新索引-newbank-并修改字段类型" aria-hidden="true">#</a> ② 创建新索引 newbank 并修改字段类型</h4><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>PUT <span class="token operator">/</span>newbank
{
  <span class="token string">&quot;mappings&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;properties&quot;</span><span class="token operator">:</span> {
      <span class="token string">&quot;account_number&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;balance&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;city&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;email&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;employer&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;firstname&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;gender&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;lastname&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;fields&quot;</span><span class="token operator">:</span> {
          <span class="token string">&quot;keyword&quot;</span><span class="token operator">:</span> {
            <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
          }
        }
      }<span class="token punctuation">,</span>
      <span class="token string">&quot;state&quot;</span><span class="token operator">:</span> {
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-数据迁移" tabindex="-1"><a class="header-anchor" href="#_3-数据迁移" aria-hidden="true">#</a> ③ 数据迁移</h4><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>POST _reindex
{
  <span class="token string">&quot;source&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bank&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;account&quot;</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;dest&quot;</span><span class="token operator">:</span> {
    <span class="token string">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newbank&quot;</span>
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>#! Deprecation<span class="token operator">:</span> <span class="token punctuation">[</span>types removal<span class="token punctuation">]</span> Specifying types <span class="token keyword">in</span> reindex requests <span class="token keyword">is</span> deprecated<span class="token punctuation">.</span>
{
  <span class="token string">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">269</span><span class="token punctuation">,</span>
  <span class="token string">&quot;timed_out&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;total&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token string">&quot;updated&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;created&quot;</span> <span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token string">&quot;deleted&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;batches&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">&quot;version_conflicts&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;noops&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;retries&quot;</span> <span class="token operator">:</span> {
    <span class="token string">&quot;bulk&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;search&quot;</span> <span class="token operator">:</span> <span class="token number">0</span>
  }<span class="token punctuation">,</span>
  <span class="token string">&quot;throttled_millis&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;requests_per_second&quot;</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1.0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;throttled_until_millis&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string">&quot;failures&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-查看迁移后的数据" tabindex="-1"><a class="header-anchor" href="#_4-查看迁移后的数据" aria-hidden="true">#</a> ④ 查看迁移后的数据</h4><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>GET <span class="token operator">/</span>newbank<span class="token operator">/</span>_search
# 结果： 迁移后 <span class="token keyword">type</span> 统一为 _doc 移除 <span class="token keyword">type</span>
{
  <span class="token string">&quot;took&quot;</span> <span class="token operator">:</span> <span class="token number">367</span><span class="token punctuation">,</span>
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
    <span class="token string">&quot;max_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      {
        <span class="token string">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;newbank&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token string">&quot;_source&quot;</span> <span class="token operator">:</span> {
          <span class="token string">&quot;account_number&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token string">&quot;balance&quot;</span> <span class="token operator">:</span> <span class="token number">39225</span><span class="token punctuation">,</span>
          <span class="token string">&quot;firstname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Amber&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;lastname&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Duke&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
          <span class="token string">&quot;gender&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;M&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;address&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;880 Holmes Lane&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;employer&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Pyrami&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;email&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;amberduke@pyrami.com&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;city&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Brogan&quot;</span><span class="token punctuation">,</span>
          <span class="token string">&quot;state&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;IL&quot;</span>
        }
      }<span class="token punctuation">,</span>
      <span class="token operator">..</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function f(E,T){const a=l("ExternalLinkIcon");return p(),i("div",null,[c,u,s("p",null,[s("a",d,[n("https://www.elastic.co/guide/en/elasticsearch/reference/7.11/mapping.html"),e(a)])]),k,s("blockquote",null,[s("p",null,[n("参考：官方"),s("a",v,[n("属性类型"),e(a)])])]),q,s("blockquote",null,[s("p",null,[n("参考：创建"),s("a",m,[n("映射操作"),e(a)])])]),b,s("blockquote",null,[s("p",null,[s("a",g,[n("https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#add-field-mapping"),e(a)])])]),h,s("blockquote",null,[s("p",null,[s("a",y,[n("https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#view-mapping"),e(a)])])]),_,s("blockquote",null,[s("p",null,[s("a",x,[n("https://www.elastic.co/guide/en/elasticsearch/reference/7.x/explicit-mapping.html#update-mapping"),e(a)])])]),w])}const P=o(r,[["render",f],["__file","4-mapping-es.html.vue"]]);export{P as default};
