import{_ as n,V as s,W as a,$ as e}from"./framework-2197e39d.js";const i={},l=e(`<h1 id="基本-ln" tabindex="-1"><a class="header-anchor" href="#基本-ln" aria-hidden="true">#</a> 基本 | ln</h1><h2 id="一、ln-命令简介" tabindex="-1"><a class="header-anchor" href="#一、ln-命令简介" aria-hidden="true">#</a> 一、ln 命令简介</h2><p>ln 命令用于在 Linux 系统中创建链接。使用 ln 命令可以给文件创建硬链接和符号链接。</p><h2 id="二、ln-命令语法" tabindex="-1"><a class="header-anchor" href="#二、ln-命令语法" aria-hidden="true">#</a> 二、ln 命令语法</h2><p>ln 的基本语法如下:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>-T<span class="token punctuation">]</span> TARGET LINK_NAME   <span class="token punctuation">(</span>1st form<span class="token punctuation">)</span>
<span class="token function">ln</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. TARGET                  <span class="token punctuation">(</span>2nd form<span class="token punctuation">)</span>
<span class="token function">ln</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. TARGET<span class="token punctuation">..</span>. DIRECTORY     <span class="token punctuation">(</span>3rd form<span class="token punctuation">)</span>
<span class="token function">ln</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token parameter variable">-t</span> DIRECTORY TARGET<span class="token punctuation">..</span>.  <span class="token punctuation">(</span>4th form<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见参数:</p><ul><li>-s:创建符号链接</li><li>-f:强制创建链接</li><li>-i:交互模式,覆盖前询问用户</li><li>-v:显示创建链接的过程</li></ul><h2 id="三、ln-命令使用示例" tabindex="-1"><a class="header-anchor" href="#三、ln-命令使用示例" aria-hidden="true">#</a> 三、ln 命令使用示例</h2><h3 id="_1-创建硬链接" tabindex="-1"><a class="header-anchor" href="#_1-创建硬链接" aria-hidden="true">#</a> 1. 创建硬链接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 原始文件</span>

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> file.txt 
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">19</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:05 file.txt

<span class="token comment"># 创建硬链接</span>

$ <span class="token function">ln</span> file.txt hardlink.txt

<span class="token comment"># 查看硬链接文件</span>

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> 
-rw-r--r-- <span class="token number">2</span> root root <span class="token number">19</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:05 file.txt
-rw-r--r-- <span class="token number">2</span> root root <span class="token number">19</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:05 hardlink.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建符号链接" tabindex="-1"><a class="header-anchor" href="#_2-创建符号链接" aria-hidden="true">#</a> 2. 创建符号链接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 原始文件</span>

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span> file.txt
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">19</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:05 file.txt

<span class="token comment"># 创建符号链接 </span>

$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> file.txt symlink.txt

<span class="token comment"># 查看符号链接文件</span>

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">19</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:05 file.txt
lrwxrwxrwx <span class="token number">1</span> root root  <span class="token number">9</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:07 symlink.txt -<span class="token operator">&gt;</span> file.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-链接目录" tabindex="-1"><a class="header-anchor" href="#_3-链接目录" aria-hidden="true">#</a> 3. 链接目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 创建目录</span>

$ <span class="token function">mkdir</span> <span class="token function">dir</span>

<span class="token comment"># 链接目录</span>

$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token function">dir</span> symdir

<span class="token comment"># 查看目录链接</span>

$ <span class="token function">ls</span> <span class="token parameter variable">-ld</span> <span class="token function">dir</span> symdir
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:10 <span class="token function">dir</span>
lrwxrwxrwx <span class="token number">1</span> root root    <span class="token number">3</span> Mar  <span class="token number">3</span> <span class="token number">15</span>:10 symdir -<span class="token operator">&gt;</span> <span class="token function">dir</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-强制创建链接" tabindex="-1"><a class="header-anchor" href="#_4-强制创建链接" aria-hidden="true">#</a> 4. 强制创建链接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 目标文件已存在,使用 -f 参数强制创建</span>

$ <span class="token function">ln</span> <span class="token parameter variable">-sf</span> file.txt newfile.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-交互模式创建链接" tabindex="-1"><a class="header-anchor" href="#_5-交互模式创建链接" aria-hidden="true">#</a> 5. 交互模式创建链接</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 目标文件已存在,使用 -i 参数交互确认是否覆盖</span>

$ <span class="token function">ln</span> <span class="token parameter variable">-i</span> file.txt newfile.txt
override newfile.txt? <span class="token punctuation">(</span>y/n <span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span> y

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、ln-命令总结" tabindex="-1"><a class="header-anchor" href="#四、ln-命令总结" aria-hidden="true">#</a> 四、ln 命令总结</h2><ul><li><p>ln 命令用于在 Linux 中创建链接文件</p></li><li><p>常用于创建硬链接和符号链接</p></li><li><p>主要选项:-s 创建符号链接,-f 强制创建,-i 交互模式</p></li><li><p>使用方法灵活,可以方便地组织文件结构</p><p>ln 是 Linux 系统中非常重要和常用的命令,掌握 ln 的用法可以大大提高在 Linux 下组织文件和管理数据的效率。</p></li></ul>`,21),t=[l];function r(c,p){return s(),a("div",null,t)}const o=n(i,[["render",r],["__file","ln.html.vue"]]);export{o as default};
