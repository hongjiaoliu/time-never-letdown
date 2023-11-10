import{_ as e,V as a,W as i,Z as d}from"./framework-bcbeea85.js";const n={},s=d(`<h1 id="基本-pwd" tabindex="-1"><a class="header-anchor" href="#基本-pwd" aria-hidden="true">#</a> 基本 | pwd</h1><h2 id="一、命令介绍" tabindex="-1"><a class="header-anchor" href="#一、命令介绍" aria-hidden="true">#</a> 一、命令介绍</h2><p>pwd(print working directory)命令用于显示用户当前所在目录的绝对路径。</p><h2 id="二、命令格式" tabindex="-1"><a class="header-anchor" href="#二、命令格式" aria-hidden="true">#</a> 二、命令格式</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pwd [选项]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、命令选项" tabindex="-1"><a class="header-anchor" href="#三、命令选项" aria-hidden="true">#</a> 三、命令选项</h2><table><thead><tr><th>选项</th><th>含义</th></tr></thead><tbody><tr><td>-L</td><td>显示逻辑工作目录,输出时跟随符号链接</td></tr><tr><td>-P</td><td>显示物理工作目录,输出时不跟随符号链接</td></tr></tbody></table><h2 id="四、使用示例" tabindex="-1"><a class="header-anchor" href="#四、使用示例" aria-hidden="true">#</a> 四、使用示例</h2><ol><li><p>显示当前工作目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/home/user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>比较不同选项效果 目录结构:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/home/user/
           realdir/ 
           linkdir -<span class="token operator">&gt;</span> realdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出对比:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认行为(-L) </span>

<span class="token builtin class-name">pwd</span>
/home/user/linkdir

<span class="token comment"># 使用-P参数</span>

<span class="token builtin class-name">pwd</span> <span class="token parameter variable">-P</span>  
/home/user/realdir

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="五、常见用途" tabindex="-1"><a class="header-anchor" href="#五、常见用途" aria-hidden="true">#</a> 五、常见用途</h2><ul><li>在脚本中获取当前工作目录</li><li>和cd命令配合使用切换目录</li><li>理解目录符号链接的区别</li></ul><h2 id="六、注意事项" tabindex="-1"><a class="header-anchor" href="#六、注意事项" aria-hidden="true">#</a> 六、注意事项</h2><ul><li>输出路径不包含结尾斜杠/</li><li>显示的是shell进程的工作目录,而不是脚本进程的目录 综合起来,PWD命令用法并不复杂,但掌握其参数和细节用法,可以帮助我们更好地运维管理Linux系统。</li></ul>`,13),l=[s];function r(t,c){return a(),i("div",null,l)}const u=e(n,[["render",r],["__file","pwd.html.vue"]]);export{u as default};
