---
icon: edit
date: 2022-04-26
category:
  - FE
tag:
  - 踩坑
star: true
---

# Chrome 85+ Referer 丢失部分参数

> 

Chrome85 的 referer 策略修改
原本默认的 referer 策略（policy）是no-referrer-when-downgrade，即允许referer带上来源页面地址上的请求参数，Chrome85+将策略修改为strict-origin-when-cross-origin，即如果请求地址与请求页面非同源，将只携带请求的域名，不会再带上来源页面地址的请求参数。
那如何解决呢，可以在html里设置
```html
<metaname="referrer"content**=**"no-referrer-when-downgrade"/>
```
也可以在nginx设置header，这样就不用重新上线了
```ngnix
add_header Referrer-Policy no-referrer-when-downgrade;
```
总结：
```html
Syntax
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```
**no-referrer**
整个 [Referer](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer) 首部会被移除。访问来源信息不随着请求一起发送
**no-referrer-when-downgrade （默认值）**
在没有指定任何策略的情况下用户代理的默认行为。在同等安全级别的情况下，引用页面的地址会被发送(HTTPS->HTTPS)，但是在降级的情况下不会被发送 (HTTPS->HTTP)。
**origin**
在任何情况下，仅发送文件的源作为引用地址。例如 [https://example.com/page.html](https://link.zhihu.com/?target=https%3A//example.com/page.html) 会将 [https://example.com/](https://link.zhihu.com/?target=https%3A//example.com/) 作为引用地址。
**origin-when-cross-origin**
对于同源的请求，会发送完整的URL作为引用地址，但是对于非同源请求仅发送文件的源。
**same-origin**
对于[同源的请求](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)会发送引用地址，但是对于非同源请求则不发送引用地址信息
**strict-origin**
在同等安全级别的情况下，发送文件的源作为引用地址(HTTPS->HTTPS)，但是在降级的情况下不会发送 (HTTPS->HTTP)。
**strict-origin-when-cross-origin**
对于同源的请求，会发送完整的URL作为引用地址；在同等安全级别的情况下，发送文件的源作为引用地址(HTTPS->HTTPS)；在降级的情况下不发送此首部 (HTTPS->HTTP)。
**unsafe-url**
无论是同源请求还是非同源请求，都发送完整的 URL（移除参数信息之后）作为引用地址。（最不安全的策略了）

![图 1](https://cdn.liuhongjiao.cn/images/2023/02/16/20220426-chrome85-referer-lost/1676511250114.png)  
