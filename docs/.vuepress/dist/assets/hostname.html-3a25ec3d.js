import{_ as e,V as a,W as h,Z as n}from"./framework-bcbeea85.js";const t={},s=n('<h1 id="基础-hostname" tabindex="-1"><a class="header-anchor" href="#基础-hostname" aria-hidden="true">#</a> 基础 | hostname</h1><h2 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息" aria-hidden="true">#</a> 基本信息</h2><p>hostname命令用于查看或临时设置主机名。要永久修改主机名需要修改相关配置文件。</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><ul><li>查看当前主机名 hostname</li><li>临时设置主机名(重启后失效) hostname newhostname</li></ul><h2 id="永久修改主机名" tabindex="-1"><a class="header-anchor" href="#永久修改主机名" aria-hidden="true">#</a> 永久修改主机名</h2><h3 id="centos-rhel" tabindex="-1"><a class="header-anchor" href="#centos-rhel" aria-hidden="true">#</a> CentOS/RHEL</h3><p>修改/etc/sysconfig/network文件,添加HOSTNAME=newhostname vim /etc/sysconfig/network</p><p>HOSTNAME=newhostname</p><h3 id="ubuntu-debian" tabindex="-1"><a class="header-anchor" href="#ubuntu-debian" aria-hidden="true">#</a> Ubuntu/Debian</h3><p>修改/etc/hostname文件,并修改/etc/hosts文件,将127.0.0.1对应的主机名改为新主机名。 vim /etc/hostname</p><p>newhostname</p><p>vim /etc/hosts</p><p>127.0.0.1 newhostname</p><h3 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse" aria-hidden="true">#</a> openSUSE</h3><p>修改/etc/HOSTNAME文件,并修改/etc/hosts文件。 vim /etc/HOSTNAME</p><p>newhostname</p><p>vim /etc/hosts</p><p>127.0.0.1 newhostname</p><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><p>修改/etc/hostname文件,并修改/etc/hosts文件。 vim /etc/hostname</p><p>newhostname</p><p>vim /etc/hosts</p><p>127.0.0.1 newhostname</p><h2 id="推荐方式" tabindex="-1"><a class="header-anchor" href="#推荐方式" aria-hidden="true">#</a> 推荐方式</h2><p>使用hostnamectl命令设置主机名: hostnamectl set-hostname newhostname hostnamectl在多数新版本Linux中可用,是更推荐的设置主机名的方式。</p><h2 id="其他高级用法" tabindex="-1"><a class="header-anchor" href="#其他高级用法" aria-hidden="true">#</a> 其他高级用法</h2><ul><li><p>查看主机域名 hostname -d</p></li><li><p>查看IP地址 hostname -i</p></li><li><p>查看所有网络地址 hostname -I</p></li><li><p>查看完整主机名和域名 hostname --fqdn</p></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>hostname命令功能单一实用,是Linux系统管理的基础。要注意不同发行版的配置文件路径可能有差异。推荐使用hostnamectl统一设置主机名。</p>',30),i=[s];function r(o,d){return a(),h("div",null,i)}const p=e(t,[["render",r],["__file","hostname.html.vue"]]);export{p as default};
