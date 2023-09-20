import{_ as n,V as s,W as a,Z as e}from"./framework-bcbeea85.js";const i={},l=e(`<h1 id="基础-chown-vim-cat" tabindex="-1"><a class="header-anchor" href="#基础-chown-vim-cat" aria-hidden="true">#</a> 基础 | chown/vim/cat</h1><h2 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> chown</h2><p>命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chown（更改用户及用户组，全拼：change owner）
<span class="token function">chown</span> <span class="token punctuation">[</span>-cfhvR<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> user<span class="token punctuation">[</span>:group<span class="token punctuation">]</span> file<span class="token punctuation">..</span>.
参数：
user <span class="token builtin class-name">:</span> 新的文件拥有者的使用者 ID
group <span class="token builtin class-name">:</span> 新的文件拥有者的使用者组<span class="token punctuation">(</span>group<span class="token punctuation">)</span>
<span class="token parameter variable">-c</span> <span class="token builtin class-name">:</span> 显示更改的部分的信息
<span class="token parameter variable">-f</span> <span class="token builtin class-name">:</span> 忽略错误信息
<span class="token parameter variable">-h</span> :修复符号链接
<span class="token parameter variable">-v</span> <span class="token builtin class-name">:</span> 显示详细的处理信息
<span class="token parameter variable">-R</span> <span class="token builtin class-name">:</span> 处理指定目录以及其子目录下的所有文件
<span class="token parameter variable">--help</span> <span class="token builtin class-name">:</span> 显示辅助说明
<span class="token parameter variable">--version</span> <span class="token builtin class-name">:</span> 显示版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> mail:mail log2012.log
<span class="token function">chown</span> <span class="token parameter variable">-R</span> <span class="token parameter variable">-v</span> root:mail test6
<span class="token function">chown</span> :mail log2012.log
<span class="token function">chown</span> root: log2012.log
<span class="token function">chown</span> root testshown 把 /home/user/testshown 的所有者设置 root
<span class="token function">chown</span> root:root testshown1  将文件testshown1的拥有者设为 root，群体的使用者 root
<span class="token function">chown</span> <span class="token parameter variable">-R</span> root:root *  将当前前目录下的所有文件与子目录的拥有者皆设为 root，群体的使用者 root
<span class="token function">chown</span> :1001 /home/user/testshown 把 /home/user/testshown 的关联组设置为 <span class="token number">1001</span> （关联组ID），不改变所有者
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h2><h3 id="常用基本操作" tabindex="-1"><a class="header-anchor" href="#常用基本操作" aria-hidden="true">#</a> 常用基本操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>i: 在当前光标所在字符的前面，转为输入模式；    

a: 在当前光标所在字符的后面，转为输入模式；    

o: 在当前光标所在行的下方，新建一行，并转为输入模式；   

 I：在当前光标所在行的行首，转换为输入模式    

A：在当前光标所在行的行尾，转换为输入模式    

O：在当前光标所在行的上方，新建一行，并转为输入模式；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="esc模式下" tabindex="-1"><a class="header-anchor" href="#esc模式下" aria-hidden="true">#</a> ESC模式下</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yy ：复制 （yy前面可加数字，例如:2yy复制两行，）

p: 粘贴

dd:删除<span class="token punctuation">(</span>同yy<span class="token punctuation">)</span>

ctrl + v:列选中（列选中模式下，复制是y,删除是d）

<span class="token builtin class-name">shift</span> +v 行选中 （操作同上）

g:回到文件最上面

G：到大文件最后

<span class="token builtin class-name">shift</span> + ^ :行开始

<span class="token builtin class-name">shift</span> + $ :行尾部

批量操作：

选中模式下shift + i/a/o 输入内容，按ESC即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>英文：concatenate）命令用于连接文件并打印到标准输出设备上。

语法格式：cat <span class="token punctuation">[</span>-AbeEnstTuv<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> fileName；

参数说明：

<span class="token parameter variable">-n</span> 或 --number：由 <span class="token number">1</span> 开始对所有输出的行数编号。

<span class="token parameter variable">-b</span> 或 --number-nonblank：和 <span class="token parameter variable">-n</span> 相似，只不过对于空白行不编号。

<span class="token parameter variable">-s</span> 或 --squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行。

<span class="token parameter variable">-v</span> 或 --show-nonprinting：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。

<span class="token parameter variable">-E</span> 或 --show-ends <span class="token builtin class-name">:</span> 在每行结束处显示 $。

<span class="token parameter variable">-T</span> 或 --show-tabs: 将 TAB 字符显示为 ^I。

-A, --show-all：等价于 -vET。

-e：等价于<span class="token string">&quot;-vE&quot;</span>选项；

-t：等价于<span class="token string">&quot;-vT&quot;</span>选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-n</span> textfile1 <span class="token operator">&gt;</span> textfile2

<span class="token function">cat</span> <span class="token parameter variable">-b</span> textfile1 textfile2 <span class="token operator">&gt;&gt;</span> textfile3

<span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> /etc/test.txt      //清空文件内容

<span class="token function">cat</span> IMG_FILE <span class="token operator">&gt;</span> /dev/fd0         //把image_file写到软盘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[l];function t(d,r){return s(),a("div",null,c)}const o=n(i,[["render",t],["__file","chown-vim-cat.html.vue"]]);export{o as default};
