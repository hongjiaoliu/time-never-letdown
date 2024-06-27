import{_ as e,V as a,W as d,Z as s}from"./framework-bcbeea85.js";const n={},i=s(`<h1 id="基本-useradd" tabindex="-1"><a class="header-anchor" href="#基本-useradd" aria-hidden="true">#</a> 基本 | useradd</h1><p>useradd命令用于在Linux系统中创建新用户。它是Linux用户管理的核心命令之一。全面掌握useradd命令可以让我们更好更专业地管理Linux系统用户。</p><h2 id="一、命令名称及功能" tabindex="-1"><a class="header-anchor" href="#一、命令名称及功能" aria-hidden="true">#</a> 一、命令名称及功能</h2><p><strong>命令名称:</strong> useradd <strong>命令功能:</strong> 创建新的系统用户 useradd命令用来创建新用户。创建新用户后,系统会为该用户生成同名用户组和主目录。我们可以通过不同选项来指定用户的配置信息。</p><h2 id="二、命令格式及选项" tabindex="-1"><a class="header-anchor" href="#二、命令格式及选项" aria-hidden="true">#</a> 二、命令格式及选项</h2><p><strong>命令格式:</strong> useradd [选项] 用户名 <strong>常用选项:</strong></p><ul><li>-c:添加用户注释信息</li><li>-d:指定用户主目录</li><li>-g:指定用户主组</li><li>-G:指定用户附加组</li><li>-m:自动创建用户主目录</li><li>-s:指定用户的登录Shell</li><li>-u:指定用户的用户ID</li></ul><h2 id="三、命令使用示例" tabindex="-1"><a class="header-anchor" href="#三、命令使用示例" aria-hidden="true">#</a> 三、命令使用示例</h2><p><strong>1. 创建新用户,不指定任何选项</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将创建用户名为zhangsan的新用户,系统会自动创建同名的用户组zhangsan和主目录/home/zhangsan。 <strong>2. 创建新用户,指定主目录和注释信息</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -c &quot;张三&quot; -d /home/zhangsan zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将创建用户名为zhangsan的用户,注释信息为“张三”,主目录为/home/zhangsan。 <strong>3. 创建新用户,指定登录Shell</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -s /bin/bash lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将创建用户名为lisi的用户,登录Shell设置为/bin/bash。 <strong>4. 创建新用户,将其加入管理员组</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -G sudo wangwu 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将创建用户名为wangwu的用户,并将其加入sudo管理员组。 <strong>5. 从配置文件创建新用户</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将从默认的配置文件创建新用户。</p><h2 id="四、实践案例" tabindex="-1"><a class="header-anchor" href="#四、实践案例" aria-hidden="true">#</a> 四、实践案例</h2><ol><li><p>需要添加一个新用户zhangsan,要求主目录为/home/zhangsan,登录Shell为/bin/zsh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -d /home/zhangsan -s /bin/zsh zhangsan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>需要创建一个新用户lisi,并将其加入sudo和admin组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -G sudo,admin lisi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>从默认配置批量创建多个新用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd -D
useradd wangwu
useradd zhaoliu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上命令将详细介绍useradd的用法,希望可以帮助大家更好地掌握这个重要的Linux用户管理命令。用户的创建和管理是Linux系统管理中必备的重要技能。大家可以根据自己的需求选择适合的useradd命令选项组合,来创建和管理系统用户。</p></li></ol>`,21),r=[i];function l(t,u){return a(),d("div",null,r)}const o=e(n,[["render",l],["__file","useradd.html.vue"]]);export{o as default};