import{_ as a,V as s,W as n,$ as e}from"./framework-2197e39d.js";const p={},i=e(`<h1 id="基本-xargs" tabindex="-1"><a class="header-anchor" href="#基本-xargs" aria-hidden="true">#</a> 基本 | xargs</h1><h2 id="_1-xargs-命令简介" tabindex="-1"><a class="header-anchor" href="#_1-xargs-命令简介" aria-hidden="true">#</a> 1. xargs 命令简介</h2><p><code>xargs</code> 命令用于将输入数据转换为命令行参数。它能够处理管道或stdin并将其转换为特定命令的命令行参数。 xargs命令的基本语法如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">xargs</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>xargs命令会将stdin的内容转换为命令行参数,这些参数会被传递给指定的命令command。如果不指定command,默认命令是echo。</p><h2 id="_2-xargs命令用法" tabindex="-1"><a class="header-anchor" href="#_2-xargs命令用法" aria-hidden="true">#</a> 2. xargs命令用法</h2><h3 id="_2-1-将find命令结果作为xargs参数" tabindex="-1"><a class="header-anchor" href="#_2-1-将find命令结果作为xargs参数" aria-hidden="true">#</a> 2.1 将find命令结果作为xargs参数</h3><p>find命令通常与xargs命令配合使用,例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.py&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会将find查找到的所有py文件列表通过管道传递给xargs,xargs再将文件列表作为参数传递给ls -l命令。</p><h3 id="_2-2-将stdin作为参数" tabindex="-1"><a class="header-anchor" href="#_2-2-将stdin作为参数" aria-hidden="true">#</a> 2.2 将stdin作为参数</h3><p>可以将stdin传递给xargs:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo bar&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会将&quot;foo bar&quot;作为参数传递给echo命令。</p><h3 id="_2-3-i-选项-替换参数" tabindex="-1"><a class="header-anchor" href="#_2-3-i-选项-替换参数" aria-hidden="true">#</a> 2.3 -I 选项:替换参数</h3><p>使用 <code>-I</code> 选项可以将每个参数替换为一个指定字符串,例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会将找到的所有文件复制到/backup目录,其中{}会被替换为每个文件路径。</p><h3 id="_2-4-n-选项-指定一次处理的参数个数" tabindex="-1"><a class="header-anchor" href="#_2-4-n-选项-指定一次处理的参数个数" aria-hidden="true">#</a> 2.4 -n 选项:指定一次处理的参数个数</h3><p>使用 <code>-n</code> 选项可以指定每次传递给命令的参数个数,例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令每次将3个文件路径作为参数传递给cp命令。</p><h3 id="_2-5-p-选项-并行执行" tabindex="-1"><a class="header-anchor" href="#_2-5-p-选项-并行执行" aria-hidden="true">#</a> 2.5 -P 选项:并行执行</h3><p>使用 <code>-P</code> 选项可以并行执行命令,例如:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-P</span> <span class="token number">4</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条命令会以4个进程并行执行echo命令。</p><h3 id="_2-6-0-选项-使用null分隔参数" tabindex="-1"><a class="header-anchor" href="#_2-6-0-选项-使用null分隔参数" aria-hidden="true">#</a> 2.6 -0 选项:使用null分隔参数</h3><p>find命令的<code>-print0</code>选项输出使用null分隔的参数,配合xargs的<code>-0</code>选项可以正确处理包含空格等特殊字符的文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-xargs命令高级用法" tabindex="-1"><a class="header-anchor" href="#_3-xargs命令高级用法" aria-hidden="true">#</a> 3. xargs命令高级用法</h2><h3 id="_3-1-指定定界符" tabindex="-1"><a class="header-anchor" href="#_3-1-指定定界符" aria-hidden="true">#</a> 3.1 指定定界符</h3><p>使用<code>-d</code>选项可以指定输入的定界符,例如输入使用逗号分隔:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo,bar,baz&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;,&#39;</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-控制每次执行的参数个数" tabindex="-1"><a class="header-anchor" href="#_3-2-控制每次执行的参数个数" aria-hidden="true">#</a> 3.2 控制每次执行的参数个数</h3><ul><li>-L 选项:根据行数控制参数个数<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">xargs</span> <span class="token parameter variable">-L</span> <span class="token number">3</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>-n 选项:根据参数个数控制参数个数<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_3-3-重复执行命令" tabindex="-1"><a class="header-anchor" href="#_3-3-重复执行命令" aria-hidden="true">#</a> 3.3 重复执行命令</h3><ul><li>使用<code>-r</code>选项将命令重复执行指定次数:<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;foo bar&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-r</span> <span class="token number">3</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_3-4-用xargs将命令结果拼接成一行输出" tabindex="-1"><a class="header-anchor" href="#_3-4-用xargs将命令结果拼接成一行输出" aria-hidden="true">#</a> 3.4 用<code>xargs</code>将命令结果拼接成一行输出</h3><p>默认情况下,<code>xargs</code> 会将每个参数的输出结果分行显示。如果要将所有结果拼接到一行,可以:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;{} &#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加上<code>-n</code>选项,echo不会换行,从而将输出拼到一行。</p><h3 id="_3-5-用xargs排除某些文件" tabindex="-1"><a class="header-anchor" href="#_3-5-用xargs排除某些文件" aria-hidden="true">#</a> 3.5 用xargs排除某些文件</h3><p>可以用<code>grep -v</code>排除某些文件后,再将结果传给xargs:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&#39;tmp&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">ls</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样可以不列出临时文件tmp。</p><h3 id="_3-6-用xargs处理-输入包含空格的文件" tabindex="-1"><a class="header-anchor" href="#_3-6-用xargs处理-输入包含空格的文件" aria-hidden="true">#</a> 3.6 用xargs处理 输入包含空格的文件</h3><p>对于文件路径包含空格的文件,可以:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>find使用-print0打印null字节作为文件名分隔符,xargs使用-0选项,可以正确处理包含空格的文件。</p><h3 id="_3-7-限制xargs命令的最大进程数" tabindex="-1"><a class="header-anchor" href="#_3-7-限制xargs命令的最大进程数" aria-hidden="true">#</a> 3.7 限制xargs命令的最大进程数</h3><p>使用-P选项可以限制xargs同时起的进程数:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token parameter variable">-P</span> <span class="token number">2</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-xargs命令的错误处理" tabindex="-1"><a class="header-anchor" href="#_4-xargs命令的错误处理" aria-hidden="true">#</a> 4. xargs命令的错误处理</h2><h3 id="_4-1-检查每个命令是否执行成功" tabindex="-1"><a class="header-anchor" href="#_4-1-检查每个命令是否执行成功" aria-hidden="true">#</a> 4.1 检查每个命令是否执行成功</h3><p>xargs默认即使个别命令失败也会继续执行后面的命令。要检查每个命令是否成功执行:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;cp {} /backup || exit 255&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用<code>sh -c</code>执行命令,如果失败就退出状态码255。</p><h3 id="_4-2-在命令前面加echo" tabindex="-1"><a class="header-anchor" href="#_4-2-在命令前面加echo" aria-hidden="true">#</a> 4.2 在命令前面加echo</h3><p>可以在命令前加<code>echo</code>,打印出即将执行的命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token builtin class-name">echo</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这可以避免直接执行可能有错误的命令。</p><h3 id="_4-3-测试命令行长度" tabindex="-1"><a class="header-anchor" href="#_4-3-测试命令行长度" aria-hidden="true">#</a> 4.3 测试命令行长度</h3><p>某些系统有最大命令行长度限制,可以先用<code>xargs -t</code>测试一下命令长度:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-t</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-t会打印出执行的命令,不执行。</p><h3 id="_4-4-设置最大命令行长度" tabindex="-1"><a class="header-anchor" href="#_4-4-设置最大命令行长度" aria-hidden="true">#</a> 4.4 设置最大命令行长度</h3><p>使用<code>-s</code>选项可以设置最大命令行长度,如果超过这个限制会报错:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-s</span> <span class="token number">100</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /backup 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上是<code>xargs</code>命令错误处理的一些方法,可以避免命令执行错误。正确使用xargs可以大大提高我们的工作效率。</p>`,69),c=[i];function t(r,l){return s(),n("div",null,c)}const d=a(p,[["render",t],["__file","xargs.html.vue"]]);export{d as default};
