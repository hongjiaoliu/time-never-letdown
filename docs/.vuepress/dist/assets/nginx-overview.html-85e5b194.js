const e=JSON.parse('{"key":"v-4e299f29","path":"/study/enterprise/nginx/nginx-overview.html","title":"Nginx | 1-概览","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-11-18T00:00:00.000Z","category":["FE"],"tag":["Nginx"],"star":false,"description":"Nginx | 1-概览 最近越来越频繁地遇到需要配置反向代理的场景，在自己搭建博客的时候，也不可避免要用到 Nginx，所以这段时间集中学习了一下 Nginx，同时做了一些笔记，希望也可以帮助到大家～ 😜 这篇文章会在 CentOS 环境下安装和使用 Nginx，如果对 CentOS 基本操作还不太清楚的，可以先看看 &lt;半小时搞会 CentOS 入门必备基础知识&gt; 一文先做了解。 相信作为开发者，大家都知道 Nginx 的重要，废话不多说，一起来学习吧。 CentOS 版本： 7.6 Nginx 版本： 1.16.1","head":[["meta",{"property":"og:url","content":"https://liuhongjiao.cn/study/enterprise/nginx/nginx-overview.html"}],["meta",{"property":"og:site_name","content":"L - 时光不负"}],["meta",{"property":"og:title","content":"Nginx | 1-概览"}],["meta",{"property":"og:description","content":"Nginx | 1-概览 最近越来越频繁地遇到需要配置反向代理的场景，在自己搭建博客的时候，也不可避免要用到 Nginx，所以这段时间集中学习了一下 Nginx，同时做了一些笔记，希望也可以帮助到大家～ 😜 这篇文章会在 CentOS 环境下安装和使用 Nginx，如果对 CentOS 基本操作还不太清楚的，可以先看看 &lt;半小时搞会 CentOS 入门必备基础知识&gt; 一文先做了解。 相信作为开发者，大家都知道 Nginx 的重要，废话不多说，一起来学习吧。 CentOS 版本： 7.6 Nginx 版本： 1.16.1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T01:29:56.000Z"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:published_time","content":"2022-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T01:29:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx | 1-概览\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-17T01:29:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Nginx 介绍","slug":"_1-nginx-介绍","link":"#_1-nginx-介绍","children":[]},{"level":2,"title":"2. 相关概念","slug":"_2-相关概念","link":"#_2-相关概念","children":[{"level":3,"title":"2.1 简单请求和非简单请求","slug":"_2-1-简单请求和非简单请求","link":"#_2-1-简单请求和非简单请求","children":[]},{"level":3,"title":"2.2 跨域","slug":"_2-2-跨域","link":"#_2-2-跨域","children":[]},{"level":3,"title":"2.3 正向代理和反向代理","slug":"_2-3-正向代理和反向代理","link":"#_2-3-正向代理和反向代理","children":[]},{"level":3,"title":"2.4 负载均衡","slug":"_2-4-负载均衡","link":"#_2-4-负载均衡","children":[]},{"level":3,"title":"2.5 动静分离","slug":"_2-5-动静分离","link":"#_2-5-动静分离","children":[]}]},{"level":2,"title":"3. Nginx 快速安装","slug":"_3-nginx-快速安装","link":"#_3-nginx-快速安装","children":[{"level":3,"title":"3.1 安装","slug":"_3-1-安装","link":"#_3-1-安装","children":[]},{"level":3,"title":"3.2 相关文件夹","slug":"_3-2-相关文件夹","link":"#_3-2-相关文件夹","children":[]},{"level":3,"title":"3.3 跑起来康康","slug":"_3-3-跑起来康康","link":"#_3-3-跑起来康康","children":[]},{"level":3,"title":"3.4 安装 nvm & node & git","slug":"_3-4-安装-nvm-node-git","link":"#_3-4-安装-nvm-node-git","children":[]}]},{"level":2,"title":"4. Nginx 操作常用命令","slug":"_4-nginx-操作常用命令","link":"#_4-nginx-操作常用命令","children":[]},{"level":2,"title":"5. Nginx 配置语法","slug":"_5-nginx-配置语法","link":"#_5-nginx-配置语法","children":[{"level":3,"title":"5.1 典型配置","slug":"_5-1-典型配置","link":"#_5-1-典型配置","children":[]},{"level":3,"title":"5.2 全局变量","slug":"_5-2-全局变量","link":"#_5-2-全局变量","children":[]}]},{"level":2,"title":"6. 设置二级域名虚拟主机","slug":"_6-设置二级域名虚拟主机","link":"#_6-设置二级域名虚拟主机","children":[]},{"level":2,"title":"7. 配置反向代理","slug":"_7-配置反向代理","link":"#_7-配置反向代理","children":[]},{"level":2,"title":"8. 跨域 CORS 配置","slug":"_8-跨域-cors-配置","link":"#_8-跨域-cors-配置","children":[{"level":3,"title":"8.1 使用反向代理解决跨域","slug":"_8-1-使用反向代理解决跨域","link":"#_8-1-使用反向代理解决跨域","children":[]},{"level":3,"title":"8.2 配置 header 解决跨域","slug":"_8-2-配置-header-解决跨域","link":"#_8-2-配置-header-解决跨域","children":[]}]},{"level":2,"title":"9. 开启 gzip 压缩","slug":"_9-开启-gzip-压缩","link":"#_9-开启-gzip-压缩","children":[{"level":3,"title":"9.1 Nginx 配置 gzip","slug":"_9-1-nginx-配置-gzip","link":"#_9-1-nginx-配置-gzip","children":[]},{"level":3,"title":"9.2 Webpack 的 gzip 配置","slug":"_9-2-webpack-的-gzip-配置","link":"#_9-2-webpack-的-gzip-配置","children":[]}]},{"level":2,"title":"10. 配置负载均衡","slug":"_10-配置负载均衡","link":"#_10-配置负载均衡","children":[]},{"level":2,"title":"11. 配置动静分离","slug":"_11-配置动静分离","link":"#_11-配置动静分离","children":[]},{"level":2,"title":"12. 配置高可用集群（双机热备）","slug":"_12-配置高可用集群-双机热备","link":"#_12-配置高可用集群-双机热备","children":[]},{"level":2,"title":"13. 适配 PC 或移动设备","slug":"_13-适配-pc-或移动设备","link":"#_13-适配-pc-或移动设备","children":[]},{"level":2,"title":"14. 配置 HTTPS","slug":"_14-配置-https","link":"#_14-配置-https","children":[]},{"level":2,"title":"15. 一些常用技巧","slug":"_15-一些常用技巧","link":"#_15-一些常用技巧","children":[{"level":3,"title":"15.1 静态服务","slug":"_15-1-静态服务","link":"#_15-1-静态服务","children":[]},{"level":3,"title":"15.2 图片防盗链","slug":"_15-2-图片防盗链","link":"#_15-2-图片防盗链","children":[]},{"level":3,"title":"15.3 请求过滤","slug":"_15-3-请求过滤","link":"#_15-3-请求过滤","children":[]},{"level":3,"title":"15.4 配置图片、字体等静态文件缓存","slug":"_15-4-配置图片、字体等静态文件缓存","link":"#_15-4-配置图片、字体等静态文件缓存","children":[]},{"level":3,"title":"15.5 单页面项目 history 路由配置","slug":"_15-5-单页面项目-history-路由配置","link":"#_15-5-单页面项目-history-路由配置","children":[]},{"level":3,"title":"15.6 HTTP 请求转发到 HTTPS","slug":"_15-6-http-请求转发到-https","link":"#_15-6-http-请求转发到-https","children":[]},{"level":3,"title":"15.7 泛域名路径分离","slug":"_15-7-泛域名路径分离","link":"#_15-7-泛域名路径分离","children":[]},{"level":3,"title":"15.8 泛域名转发","slug":"_15-8-泛域名转发","link":"#_15-8-泛域名转发","children":[]}]},{"level":2,"title":"16. 最佳实践","slug":"_16-最佳实践","link":"#_16-最佳实践","children":[]}],"git":{"createdTime":1676597396000,"updatedTime":1676597396000,"contributors":[{"name":"liuhongjiao","email":"liuhongjiao@koolearn.com","commits":1}]},"readingTime":{"minutes":38.54,"words":11563},"filePathRelative":"study/enterprise/nginx/nginx-overview.md","localizedDate":"2022年11月18日","excerpt":"<h1> Nginx | 1-概览</h1>\\n<p>最近越来越频繁地遇到需要配置反向代理的场景，在自己搭建博客的时候，也不可避免要用到 Nginx，所以这段时间集中学习了一下 Nginx，同时做了一些笔记，希望也可以帮助到大家～ 😜\\n这篇文章会在 CentOS 环境下安装和使用 Nginx，如果对 CentOS 基本操作还不太清楚的，可以先看看 <a href=\\"https://juejin.im/post/6844904080972709901\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">&lt;半小时搞会 CentOS 入门必备基础知识&gt;</a> 一文先做了解。\\n相信作为开发者，大家都知道 Nginx 的重要，废话不多说，一起来学习吧。\\nCentOS 版本： 7.6\\nNginx 版本： 1.16.1</p>","autoDesc":true}');export{e as data};