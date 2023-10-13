import{_ as s,V as n,W as a,Z as e}from"./framework-bcbeea85.js";const i={},d=e(`<h1 id="基础-sudo" tabindex="-1"><a class="header-anchor" href="#基础-sudo" aria-hidden="true">#</a> 基础 | sudo</h1><p>sudo(substitute user do)命令允许系统管理员让普通用户执行一些或者全部需要root权限的命令。通过sudo,系统管理员可以精细地控制每个用户的权限。</p><h2 id="一、sudo-命令简介" tabindex="-1"><a class="header-anchor" href="#一、sudo-命令简介" aria-hidden="true">#</a> 一、sudo 命令简介</h2><p>sudo 命令的格式如下: sudo [-AbEHhikPrS] [-g group] [-p prompt] [-u user] command 其中:</p><ul><li>-A :以环境变量的形式保存当下的认证信息,以方便后续的命令调用</li><li>-b :在后台模式下运行命令</li><li>-E :保留当前环境变量,并传递给后面的命令</li><li>-H :设置HOME环境变量为要成为的用户</li><li>-h :显示帮助信息并退出</li><li>-i :以登录的用户身份执行命令</li><li>-k :销毁当前用户的认证信息</li><li>-v：validate, 刷新密码有效时间戳，让有效期延长5分钟</li><li>-P :保留用户的路径设置</li><li>-p :提示符,默认为&quot;Password:&quot;</li><li>-r :转到root用户执行命令</li><li>-S :从标准输入读取密码</li><li>-u :指定用户执行命令 sudo 命令允许授权用户以安全的方式临时使用超级用户权限执行命令。</li></ul><h2 id="二、配置sudo" tabindex="-1"><a class="header-anchor" href="#二、配置sudo" aria-hidden="true">#</a> 二、配置sudo</h2><h3 id="_1-安装sudo" tabindex="-1"><a class="header-anchor" href="#_1-安装sudo" aria-hidden="true">#</a> 1. 安装sudo</h3><p>大多数Linux发行版默认已经安装了sudo,如果没有安装,可以使用包管理器安装:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Debian/Ubuntu: 
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">sudo</span>

CentOS/RHEL:  
yum <span class="token function">install</span> <span class="token function">sudo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-添加sudo用户" tabindex="-1"><a class="header-anchor" href="#_2-添加sudo用户" aria-hidden="true">#</a> 2. 添加sudo用户</h3><p>默认配置下,只有root用户属于sudo用户组,可以使用sudo。要给其他用户授权使用sudo,需要将用户添加到sudo组:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">sudo</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-配置sudoers文件" tabindex="-1"><a class="header-anchor" href="#_3-配置sudoers文件" aria-hidden="true">#</a> 3. 配置sudoers文件</h3><p>sudo的配置文件是/etc/sudoers,它使用了sudoers语法。该文件只能由root用户修改。 注意,/etc/sudoers文件需要用visudo命令来编辑,而不能直接编辑,这可以防止语法错误。 sudoers文件中的每个条目都表示一个用户的sudo权限,常见的参数包括:</p><ul><li>用户或者组，携带%代表是用户组</li><li>第一个ALL： 可以允许在哪些主机上使用sudo</li><li>第二个ALL：可以以哪些身份执行命令</li><li>第三个ALL：可以执行哪些命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># User privilege specification</span>

root    <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL   <span class="token comment"># 允许root用户从任意主机以任意用户身份执行任意命令</span>

<span class="token comment"># Allow members of group sudo to execute any command</span>

%sudo   <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> ALL  

<span class="token comment"># Allow user1 to run commands as any user but only on localhost</span>

user1 <span class="token assign-left variable">localhost</span><span class="token operator">=</span>/sbin/shutdown <span class="token parameter variable">-h</span> now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-设置密码认证" tabindex="-1"><a class="header-anchor" href="#_4-设置密码认证" aria-hidden="true">#</a> 4. 设置密码认证</h3><p>默认情况下,sudo要求输入当前用户的密码后才能执行命令。 可以通过编辑/etc/sudoers文件修改:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Disable sudo password prompt</span>

Defaults<span class="token operator">!</span>sudoInsults <span class="token assign-left variable">timestamp_timeout</span><span class="token operator">=</span><span class="token number">0</span> 
也可以在命令行临时禁用密码:
<span class="token function">sudo</span> <span class="token parameter variable">-n</span> <span class="token builtin class-name">command</span>  <span class="token comment"># 省略密码提示</span>
<span class="token function">sudo</span> <span class="token parameter variable">-S</span> <span class="token builtin class-name">command</span>  <span class="token comment"># 从标准输入读取密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、sudo命令示例" tabindex="-1"><a class="header-anchor" href="#三、sudo命令示例" aria-hidden="true">#</a> 三、sudo命令示例</h2><h3 id="_1-以其他用户身份执行命令" tabindex="-1"><a class="header-anchor" href="#_1-以其他用户身份执行命令" aria-hidden="true">#</a> 1. 以其他用户身份执行命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以user1身份执行命令</span>

<span class="token function">sudo</span> <span class="token parameter variable">-u</span> user1 <span class="token function">whoami</span>  

<span class="token comment"># 以root身份执行命令 </span>

<span class="token function">sudo</span> <span class="token parameter variable">-u</span> root <span class="token function">whoami</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_2-配置环境变量" aria-hidden="true">#</a> 2. 配置环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 保留当前环境变量</span>

<span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">vim</span> /etc/hosts  

<span class="token comment"># 定义环境变量</span>

<span class="token function">sudo</span> <span class="token parameter variable">-H</span> <span class="token assign-left variable">PASSWD</span><span class="token operator">=</span>newpasswd <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-提权修改系统文件" tabindex="-1"><a class="header-anchor" href="#_3-提权修改系统文件" aria-hidden="true">#</a> 3. 提权修改系统文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 修改权限为600的文件</span>

<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">600</span> /etc/file.conf 

<span class="token comment"># 创建新用户</span>

<span class="token function">sudo</span> <span class="token function">useradd</span> jerry

<span class="token comment"># 安装软件包 </span>

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-禁止用户使用sudo" tabindex="-1"><a class="header-anchor" href="#_4-禁止用户使用sudo" aria-hidden="true">#</a> 4. 禁止用户使用sudo</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从sudoers配置文件中删除用户</span>

<span class="token function">sudo</span> visudo

<span class="token comment"># 暂时禁用用户sudo权限</span>

<span class="token function">sudo</span> <span class="token parameter variable">-k</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[d];function o(c,r){return n(),a("div",null,l)}const u=s(i,[["render",o],["__file","sudo.html.vue"]]);export{u as default};
