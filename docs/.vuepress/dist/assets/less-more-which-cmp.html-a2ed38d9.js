import{_ as e,V as n,W as i,Z as c}from"./framework-bcbeea85.js";const h={},p=c(`<h1 id="基本命令-less-more-which-cmp" tabindex="-1"><a class="header-anchor" href="#基本命令-less-more-which-cmp" aria-hidden="true">#</a> 基本命令 | less/more/which/cmp</h1><h2 id="less命令" tabindex="-1"><a class="header-anchor" href="#less命令" aria-hidden="true">#</a> less命令：</h2><ul><li>[pagedown]：向下翻动一页</li><li>[pageup]：向上翻动一页</li><li>/字串：向下搜寻“字串”的功能</li><li>?字串：向上搜寻“字串”的功能</li><li>n：重复前一个搜寻（与/或？有关）</li><li>N：反向的重复前一个搜寻（与/或？有关）</li><li>g：前进道这个数据的第一行去</li><li>G：前进道这个数据的最后一行去（注意大小写）</li><li>q：离开less这个程序</li></ul><h2 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> more</h2><h2 id="which" tabindex="-1"><a class="header-anchor" href="#which" aria-hidden="true">#</a> which</h2><p>1．命令格式：</p><p>which 可执行文件名称</p><p>2．命令功能：</p><p>which指令会在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。</p><p>3．命令参数：</p><p>-n 　指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名。</p><p>-p 　与-n参数相同，但此处的包括了文件的路径。</p><p>-w 　指定输出时栏位的宽度。</p><p>-V 　显示版本信息</p><p>4．使用实例：</p><p>实例1：查找文件、显示命令路径</p><p>命令：</p><p>which lsmod</p><p>实例2：用 which 去找出 which</p><p>命令：</p><p>which which</p><h2 id="cmp" tabindex="-1"><a class="header-anchor" href="#cmp" aria-hidden="true">#</a> cmp</h2><p>1．命令格式：</p><pre><code>       cmp [-clsv][-i &lt;字符数目&gt;][--help][第一个文件][第二个文件
</code></pre><p>2．命令功能：</p><pre><code>         令用于比较两个文件是否有差异，与diff不同，cmp比较的是一行每个字段的不同，diff比较的是一个文件的不同行；
</code></pre><p>3．命令参数：</p><pre><code>    -c或--print-chars 　除了标明差异处的十进制字码之外，一并显示该字符所对应字符。

    -i&lt;字符数目&gt;或--ignore-initial=&lt;字符数目&gt; 　指定一个数目。

    -l或--verbose 　标示出所有不一样的地方。

    -s或--quiet或--silent 　不显示错误信息。

 案例：

    cmp -c a.txt  c.txt 

    展示结果：a.txt c.txt 不同：第 1 行，第 1 字节为 141 a  61 1

  cmp -i 3 a.txt c.txt

  展示结果：a.txt c.txt 不同：第 1 字节，第 1 行

  cmp -l a.txt c.txt

  展示结果：a.txt c.txt 不同：第 1 字节，第 1 行

   1 141  61

   2 141  61

   3 141  61

   4 174  61

   5  40  61

   6 161 167

   7 161  12

   8 161  12
</code></pre>`,28),t=[p];function a(r,l){return n(),i("div",null,t)}const d=e(h,[["render",a],["__file","less-more-which-cmp.html.vue"]]);export{d as default};
