import{_ as i,V as d,W as r,X as e,Y as n,$ as s,Z as t,F as l}from"./framework-e5211252.js";const o={},c=t(`<h1 id="linux常识-软件包管理方式" tabindex="-1"><a class="header-anchor" href="#linux常识-软件包管理方式" aria-hidden="true">#</a> Linux常识 | 软件包管理方式</h1><h2 id="linux发行版" tabindex="-1"><a class="header-anchor" href="#linux发行版" aria-hidden="true">#</a> Linux发行版</h2><ol><li><strong>RedHat</strong>系列：Redhat、<strong>Centos</strong>、Fedora 等；中标麒麟也是这个系列的；</li><li><strong>Debian</strong>系列：Debian、<strong>Ubuntu</strong>等；uos，银河麒麟等则是依附这个系列的。</li></ol><h2 id="redhat系列" tabindex="-1"><a class="header-anchor" href="#redhat系列" aria-hidden="true">#</a> RedHat系列</h2><h3 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> rpm</h3><p>常见的安装包格式 rpm 包，rpm是由RedHat开发的软件包管理方式</p><ul><li>安装命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> –ivh 安装包.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">rpm</span> –e 安装包.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用rpm我们可以方便的进行软件的安装、查询、卸载、升级等工作。但是rpm软件包之间的依赖性问题往往会很繁琐,尤其是软件由多个rpm包组成时，所以此时yum的优势就体现出来了。</p><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h3><p>Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以<strong>自动处理依赖性关系</strong>，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。<strong>弊端是必须联网</strong>，且源不出问题，yum的源相对脆弱，曾经出现yum的电源断掉了需要修复半个月无法使用的现象。</p><ul><li>安装命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> 安装包.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum autoremove 安装包.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="debian系列" tabindex="-1"><a class="header-anchor" href="#debian系列" aria-hidden="true">#</a> Debian系列</h2><h3 id="dpkg" tabindex="-1"><a class="header-anchor" href="#dpkg" aria-hidden="true">#</a> dpkg</h3><p>dpkg是Debian Package 的简写。为 Debian 专门开发的套件管理系统，方便软件的安装、更新及移除。所有源自Debian的Linux 发行版都使用 dpkg，例如 Ubuntu、Knoppix 等。</p><ul><li>安装命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg –i 安装包.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>卸载命令</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg –P 安装包.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h3><p>apt-get命令是Debian Linux发行版中的APT软件包管理工具。所有基于Debian的发行都使用这个包管理系统。deb包可以把一个应用的文件包在一起，大体就如同Windows上的安装文件。</p><h3 id="apt" tabindex="-1"><a class="header-anchor" href="#apt" aria-hidden="true">#</a> apt</h3><p>apt 命令的引入就是为了解决命令过于分散的问题，它包括了 apt-get 命令出现以来使用最广泛的功能选项，以及 apt-cache 和 apt-config 命令中很少用到的功能。 apt 命令选项更少更易记，因此也更易用。建议优先使用。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,29),u={href:"https://cloud.tencent.com/developer/article/1759038",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.sysgeek.cn/apt-vs-apt-get/",target:"_blank",rel:"noopener noreferrer"};function p(g,m){const a=l("ExternalLinkIcon");return d(),r("div",null,[c,e("ol",null,[e("li",null,[e("a",u,[n("浅谈Linux下dpkg、apt-get、yum和rpm命令的区别"),s(a)])]),e("li",null,[e("a",h,[n("Linux中apt与apt-get命令的区别与解释"),s(a)])])])])}const v=i(o,[["render",p],["__file","20230203-package-m.html.vue"]]);export{v as default};
