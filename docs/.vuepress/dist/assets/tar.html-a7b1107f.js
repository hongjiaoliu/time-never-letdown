import{_ as a,V as e,W as s,$ as n}from"./framework-2197e39d.js";const r={},i=n(`<h1 id="基本-tar" tabindex="-1"><a class="header-anchor" href="#基本-tar" aria-hidden="true">#</a> 基本 | tar</h1><p><code>tar</code> 是一个用于创建和提取归档文件（压缩文件）的命令，通常在命令行终端中使用。以下是从入门到高阶的<code>tar</code>命令详细讲解。</p><h2 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h2><h3 id="_1-创建归档文件" tabindex="-1"><a class="header-anchor" href="#_1-创建归档文件" aria-hidden="true">#</a> 1. 创建归档文件</h3><p>要创建一个归档文件，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> 目标文件名 源文件1 源文件2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，要创建一个名为<code>archive.tar</code>的归档文件，包含文件<code>file1.txt</code>和<code>file2.txt</code>，可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> archive.tar file1.txt file2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><h3 id="_2-提取归档文件内容" tabindex="-1"><a class="header-anchor" href="#_2-提取归档文件内容" aria-hidden="true">#</a> 2. 提取归档文件内容</h3><p>要从归档文件中提取内容，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> 归档文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，要从<code>archive.tar</code>中提取内容，可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> archive.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-列出归档文件内容" tabindex="-1"><a class="header-anchor" href="#_3-列出归档文件内容" aria-hidden="true">#</a> 3. 列出归档文件内容</h3><p>你可以使用以下命令来列出归档文件中的内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-tvf</span> 归档文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-tvf</span> archive.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="高阶" tabindex="-1"><a class="header-anchor" href="#高阶" aria-hidden="true">#</a> 高阶</h2><h3 id="_4-压缩归档文件" tabindex="-1"><a class="header-anchor" href="#_4-压缩归档文件" aria-hidden="true">#</a> 4. 压缩归档文件</h3><p>要将归档文件压缩，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> 压缩文件名.tar.gz 源文件1 源文件2 <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，要将文件<code>file1.txt</code>和<code>file2.txt</code>创建为压缩文件<code>archive.tar.gz</code>，可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> archive.tar.gz file1.txt file2.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-解压缩归档文件" tabindex="-1"><a class="header-anchor" href="#_5-解压缩归档文件" aria-hidden="true">#</a> 5. 解压缩归档文件</h3><p>要解压缩压缩的归档文件，可以使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> 压缩文件名.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，要解压缩压缩文件<code>archive.tar.gz</code>，可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> archive.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-压缩和解压指定目录" tabindex="-1"><a class="header-anchor" href="#_6-压缩和解压指定目录" aria-hidden="true">#</a> 6. 压缩和解压指定目录</h3><p>你可以使用 <code>-C</code> 选项来指定要在哪个目录下进行压缩或解压缩操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-czvf</span> 压缩文件名.tar.gz <span class="token parameter variable">-C</span> 指定目录 源文件1 源文件2 <span class="token punctuation">..</span>.
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span> 压缩文件名.tar.gz <span class="token parameter variable">-C</span> 指定目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过<code>tar</code>命令，你可以轻松创建、提取和管理归档文件，还可以进行压</p>`,35),d=[i];function c(t,l){return e(),s("div",null,d)}const p=a(r,[["render",c],["__file","tar.html.vue"]]);export{p as default};