import{_ as e,V as d,W as c,Z as i}from"./framework-bcbeea85.js";const o={},a=i(`<h1 id="基本-vi" tabindex="-1"><a class="header-anchor" href="#基本-vi" aria-hidden="true">#</a> 基本 | vi</h1><p><code>vi</code> 是一个用于编辑文本文件的命令行文本编辑器，通常在命令行终端中使用。以下是从入门到高阶的<code>vi</code>命令详细讲解，以及常用的快捷键。</p><h2 id="入门" tabindex="-1"><a class="header-anchor" href="#入门" aria-hidden="true">#</a> 入门</h2><h3 id="_1-打开或创建文件" tabindex="-1"><a class="header-anchor" href="#_1-打开或创建文件" aria-hidden="true">#</a> 1. 打开或创建文件</h3><p>要使用<code>vi</code>编辑一个文件，只需在命令行中输入以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如，要编辑一个名为<code>file.txt</code>的文件，可以执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="基本编辑" tabindex="-1"><a class="header-anchor" href="#基本编辑" aria-hidden="true">#</a> 基本编辑</h2><h3 id="_2-进入编辑模式" tabindex="-1"><a class="header-anchor" href="#_2-进入编辑模式" aria-hidden="true">#</a> 2. 进入编辑模式</h3><p>一旦在<code>vi</code>中打开文件，你会处于查看模式。要进入编辑模式以编辑文件内容，按下<code>i</code>键。</p><h3 id="_3-保存文件" tabindex="-1"><a class="header-anchor" href="#_3-保存文件" aria-hidden="true">#</a> 3. 保存文件</h3><p>在编辑模式下，你可以编辑文件内容。要保存文件并退出编辑模式，按下<code>Esc</code>键，然后输入<code>:w</code>，并按下<code>Enter</code>。</p><h3 id="_4-保存并退出" tabindex="-1"><a class="header-anchor" href="#_4-保存并退出" aria-hidden="true">#</a> 4. 保存并退出</h3><p>在编辑模式下，要保存文件并完全退出<code>vi</code>，按下<code>Esc</code>键，然后输入<code>:wq</code>，并按下<code>Enter</code>。</p><h3 id="_5-取消编辑" tabindex="-1"><a class="header-anchor" href="#_5-取消编辑" aria-hidden="true">#</a> 5. 取消编辑</h3><p>如果在编辑模式中改变主意，可以按下<code>Esc</code>键，然后输入<code>:q!</code>，并按下<code>Enter</code>，以取消编辑并放弃更改。</p><h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键" aria-hidden="true">#</a> 常用快捷键</h2><p>以下是一些在<code>vi</code>中常用的快捷键：</p><ul><li><code>i</code>：进入插入模式，允许编辑文件内容。</li><li><code>a</code>：在当前光标所在字符的后面，转为输入模式；</li><li><code>o</code>: 在当前光标所在行的下方，新建一行，并转为输入模式；</li><li><code>I</code>：在当前光标所在行的行首，转换为输入模式</li><li><code>A</code>：在当前光标所在行的行尾，转换为输入模式</li><li><code>O</code>：在当前光标所在行的上方，新建一行，并转为输入模式；</li><li><code>Esc</code>：从编辑模式返回查看模式。</li><li><code>:w</code>：保存文件，但不退出<code>vi</code>。</li><li><code>:wq</code>：保存文件并退出<code>vi</code>。</li><li><code>:q!</code>：退出<code>vi</code>，放弃任何更改。</li><li><code>/</code>：进入查找模式，[正向]查找指定的文本。</li><li><code>?</code>：进入查找模式，[反向]查找指定的文本。</li><li><code>n</code>：在查找模式下，跳到下一个匹配项。</li><li><code>N</code>：在查找模式下，跳到上一个匹配项。</li><li><code>:set nu</code>：显示行号。</li><li><code>:set nonu</code>：隐藏行号。</li><li><code>:set ic</code>：在查找时忽略大小写。</li><li><code>:set noic</code>：在查找时区分大小写。</li><li><code>:split</code>：水平分割窗口。</li><li><code>:vsplit</code>：垂直分割窗口。</li><li><code>Ctrl + w</code>，然后按<code>↑</code>、<code>↓</code>、<code>←</code>、<code>→</code>：切换窗口焦点。</li><li><code>h\\j\\k\\l</code>: 左、下、上、右</li><li><code>Ctrl + f</code>: forward 向上翻一页</li><li><code>Ctrl + b</code>: backword 向下翻一页</li><li><code>Ctrl + u</code>: up 光标向上移动半页的距离</li><li><code>Ctrl + d</code>: up 光标向下移动半页的距离</li><li><code>v</code>：【ESC模式】进入可视模式，用于选择文本。</li><li><code>y</code>：【ESC模式】复制选择的文本。</li><li><code>x</code>：【ESC模式】剪切选择的文本。</li><li><code>p</code>：【ESC模式】在光标后粘贴剪切或复制的文本。</li><li><code>dd</code>：【ESC模式】删除当前行。</li><li><code>yy</code>：【ESC模式】复制当前行。（yy前面可加数字，例如:2yy复制两行，）</li><li><code>gg</code>: 【ESC模式】跳转到文章首部</li><li><code>G</code>： 【ESC模式】跳转到文章尾部</li><li><code>u</code>：【ESC模式】撤销上一步操作。</li><li><code>P</code>:【ESC模式】(大写)粘贴在光标所在前一行</li><li><code>p</code>:【ESC模式】(小写)粘贴在光标所在下一行</li><li><code>Ctrl + r</code>：重做上一步操作。</li><li><code>Ctrl + v</code>:列选中（列选中模式下，复制是y,删除是d）</li><li><code>Shift + v</code>:行选中 （操作同上）</li><li><code>Shift + ^</code> :行开始</li><li><code>Shift + $</code> :行尾部</li><li><code>批量操作</code>：选中模式下shift + i/a/o 输入内容，按ESC即可</li></ul><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><h3 id="_6-查找和替换" tabindex="-1"><a class="header-anchor" href="#_6-查找和替换" aria-hidden="true">#</a> 6. 查找和替换</h3><p>在查看模式下，按下<code>/</code>键，然后输入要查找的文本并按下<code>Enter</code>，可以查找文本。要查找并替换，可以在查找模式下输入<code>:%s/要替换的文本/新文本/g</code>。</p><h2 id="高阶" tabindex="-1"><a class="header-anchor" href="#高阶" aria-hidden="true">#</a> 高阶</h2><h3 id="_7-分割窗口" tabindex="-1"><a class="header-anchor" href="#_7-分割窗口" aria-hidden="true">#</a> 7. 分割窗口</h3><p>在<code>vi</code>中，可以使用<code>:split</code>命令在水平方向分割窗口，使用<code>:vsplit</code>命令在垂直方向分割窗口。可以在不同窗口编辑不同部分的文件。</p><h3 id="_8-复制、粘贴和剪切" tabindex="-1"><a class="header-anchor" href="#_8-复制、粘贴和剪切" aria-hidden="true">#</a> 8. 复制、粘贴和剪切</h3><p>在查看模式下，将光标移到要复制或剪切的位置，按下<code>v</code>键进入可视模式，然后使用方向键选择文本。选择文本后，按下<code>y</code>复制，按下<code>x</code>剪切。将光标移动到要粘贴的位置，按下<code>p</code>键粘贴。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><h2 id="通过vi命令-你可以在命令行终端中编辑文本文件。从简单的编辑、保存、退出-到高级的查找、替换、分割窗口等操作-vi是一个功能强大的文本编辑工具。" tabindex="-1"><a class="header-anchor" href="#通过vi命令-你可以在命令行终端中编辑文本文件。从简单的编辑、保存、退出-到高级的查找、替换、分割窗口等操作-vi是一个功能强大的文本编辑工具。" aria-hidden="true">#</a> 通过<code>vi</code>命令，你可以在命令行终端中编辑文本文件。从简单的编辑、保存、退出，到高级的查找、替换、分割窗口等操作，<code>vi</code>是一个功能强大的文本编辑工具。</h2>`,30),l=[a];function r(h,n){return d(),c("div",null,l)}const t=e(o,[["render",r],["__file","vi.html.vue"]]);export{t as default};