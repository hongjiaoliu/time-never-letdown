import{_ as n,V as s,W as a,$ as e}from"./framework-9e98e3f0.js";const i={},p=e(`<h1 id="如何识别python版本与pip版本" tabindex="-1"><a class="header-anchor" href="#如何识别python版本与pip版本" aria-hidden="true">#</a> 如何识别python版本与pip版本</h1><h2 id="查询python版本" tabindex="-1"><a class="header-anchor" href="#查询python版本" aria-hidden="true">#</a> 查询python版本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> python <span class="token parameter variable">-V</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Python <span class="token number">2.7</span>.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询pip在哪里" tabindex="-1"><a class="header-anchor" href="#查询pip在哪里" aria-hidden="true">#</a> 查询pip在哪里</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">whereis</span> pip3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip3: /usr/bin/pip3 /usr/bin/pip3.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查询pip对应的python" tabindex="-1"><a class="header-anchor" href="#查询pip对应的python" aria-hidden="true">#</a> 查询pip对应的python</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /usr/bin/pip3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/python3</span>

<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token function">import</span> re
<span class="token function">import</span> sys

try:
    from pip <span class="token function">import</span> main
except ImportError:
    <span class="token comment"># user has most probably upgraded pip in their home</span>
    <span class="token comment"># so let them run it anyway until ~/.local/bin makes it in front of the PATH</span>
    from pip._internal <span class="token function">import</span> main

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token builtin class-name">:</span>
    sys.argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> re.sub<span class="token punctuation">(</span>r<span class="token string">&#39;(-script\\.pyw?|\\.exe)?$&#39;</span>, <span class="token string">&#39;&#39;</span>, sys.argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    sys.exit<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关注一下第一行,指明了python路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/python3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),t=[p];function d(l,r){return s(),a("div",null,t)}const o=n(i,[["render",d],["__file","20230131-how-to-identification-python-verions.html.vue"]]);export{o as default};
