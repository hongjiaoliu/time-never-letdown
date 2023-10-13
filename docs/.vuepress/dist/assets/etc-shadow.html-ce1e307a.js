import{_ as a,V as s,W as e,$ as n}from"./framework-2197e39d.js";const i={},l=n(`<h1 id="文件-etc-shadow" tabindex="-1"><a class="header-anchor" href="#文件-etc-shadow" aria-hidden="true">#</a> 文件 | /etc/shadow</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>/etc/shadow 文件保存着 Linux 系统中的用户账号密码信息,只允许 root 用户读写。该文件可以提高系统安全性,防止非授权用户访问密码。</p><h2 id="_2-文件格式" tabindex="-1"><a class="header-anchor" href="#_2-文件格式" aria-hidden="true">#</a> 2. 文件格式</h2><p>/etc/shadow 每行记录对应一个用户账号,共九个字段,使用冒号(:)分割:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>用户名:加密密码:最后修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:保留字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>用户名 - 用户账号名称</li><li>加密密码 - 使用 DES、MD5、SHA-512 等算法加密的密码</li><li>最后修改时间 - 上次修改密码的时间,1970年1月1日开始算</li><li>最小时间间隔 - 两次修改密码之间的最小天数</li><li>最大时间间隔 - 强制用户修改密码的最大天数</li><li>警告时间 - 密码过期前多少天开始警告</li><li>不活动时间 - 密码过期后多少天账号失效</li><li>失效时间 - 账号失效的日期,YYYY-MM-DD格式</li><li>保留字段 - 保留未使用</li></ul><h2 id="_3-加密密码" tabindex="-1"><a class="header-anchor" href="#_3-加密密码" aria-hidden="true">#</a> 3. 加密密码</h2><p>Linux 使用 crypt() 函数基于用户提供的密码和随机salt值生成加密密码。常见的加密算法有:</p><ul><li><p>DES - 已不安全,不推荐使用</p></li><li><p>MD5 - 128位哈希算法</p></li><li><p>SHA-256/512 - 更安全的哈希算法</p></li><li><p>Blowfish/BSDi - 开源加密算法 生成加密密码的命令:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># MD5</span>
openssl <span class="token function">passwd</span> <span class="token parameter variable">-1</span> <span class="token string">&quot;plaintextpassword&quot;</span>

<span class="token comment"># SHA-512  </span>
openssl <span class="token function">passwd</span> <span class="token parameter variable">-6</span> <span class="token string">&quot;plaintextpassword&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查已加密的密码:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl <span class="token function">passwd</span> <span class="token parameter variable">-1</span> <span class="token parameter variable">-salt</span> xyz <span class="token string">&quot;encryptedpassword&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="_4-密码策略" tabindex="-1"><a class="header-anchor" href="#_4-密码策略" aria-hidden="true">#</a> 4. 密码策略</h2><p>通过 /etc/login.defs 和 /etc/default/useradd 配置文件可以定义密码复杂度和更改周期策略:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 最小密码长度</span>
PASS_MIN_LEN <span class="token number">8</span>

<span class="token comment"># 密码最少包含大写字母个数</span>
PASS_MIN_UPPER <span class="token number">2</span>

<span class="token comment"># 强制PASSWORD_DAYS天后用户修改密码 </span>
PASS_MAX_DAYS <span class="token number">90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-用户和密码管理" tabindex="-1"><a class="header-anchor" href="#_5-用户和密码管理" aria-hidden="true">#</a> 5. 用户和密码管理</h2><p>添加用户时会同时创建 /etc/shadow entrada:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建新用户</span>
<span class="token function">useradd</span> username 

<span class="token comment"># 设置密码 </span>
<span class="token function">passwd</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除用户时对应的 shadow 文件记录也会删除:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除用户</span>
<span class="token function">userdel</span> username
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要修改 /etc/shadow 可以手动重置用户密码:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成密码加密 - $6$使用SHA-512算法</span>
<span class="token assign-left variable">cryptedpassword</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>openssl <span class="token function">passwd</span> <span class="token parameter variable">-6</span> newpassword<span class="token variable">)</span></span>

<span class="token comment"># 修改shadow文件更改加密密码</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s/^username:.*/<span class="token variable">$username</span>:<span class="token variable">$cryptedpassword</span>:/&quot;</span> /etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6. 总结</h2><ul><li><p>/etc/shadow 文件保存着 Linux 用户账号密码信息,只允许 root 访问</p></li><li><p>记录格式包含9个字段,使用冒号分隔,第二字段是加密后的密码</p></li><li><p>密码使用 crypt() 函数加密,常见算法有 DES、MD5、SHA-512等</p></li><li><p>可以配置最小密码长度、复杂度和更改周期策略</p></li><li><p>useradd 和 passwd 命令可以管理用户和密码,直接编辑 /etc/shadow 文件也可以修改密码</p><p>了解 /etc/shadow 的格式和管理对于保护 Linux 系统安全至关重要。</p></li></ul>`,22),d=[l];function r(c,t){return s(),e("div",null,d)}const o=a(i,[["render",r],["__file","etc-shadow.html.vue"]]);export{o as default};