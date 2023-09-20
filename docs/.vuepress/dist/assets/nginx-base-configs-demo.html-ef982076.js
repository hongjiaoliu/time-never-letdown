import{_ as l,V as t,W as c,X as n,Y as s,$ as e,Z as i,F as p}from"./framework-bcbeea85.js";const o={},r=i(`<h1 id="nginx-2-核心配置" tabindex="-1"><a class="header-anchor" href="#nginx-2-核心配置" aria-hidden="true">#</a> Nginx | 2-核心配置</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#定义 nginx 运行的用户和用户组</span>
user www www<span class="token punctuation">;</span>

<span class="token comment">#nginx 进程数，建议设置为等于 CPU 总核心数。</span>
worker_processes <span class="token number">8</span><span class="token punctuation">;</span>

<span class="token comment">#nginx 默认没有开启利用多核 CPU, 通过增加 worker_cpu_affinity 配置参数来充分利用多核 CPU 以下是 8 核的配置参数</span>
worker_cpu_affinity 00000001 00000010 00000100 00001000 00010000 00100000 01000000 <span class="token number">10000000</span><span class="token punctuation">;</span>

<span class="token comment">#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]</span>
error_log /var/log/nginx/error.log info<span class="token punctuation">;</span>

<span class="token comment">#进程文件</span>
pid /var/run/nginx.pid<span class="token punctuation">;</span>

<span class="token comment">#一个 nginx 进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值 ulimit -n）与 nginx 进程数相除，但是 nginx 分配请求并不均匀，所以建议与 ulimit -n 的值保持一致。</span>
worker_rlimit_nofile <span class="token number">65535</span><span class="token punctuation">;</span>

<span class="token comment">#工作模式与连接数上限</span>
events
<span class="token punctuation">{</span>
    <span class="token comment">#参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll 模型是 Linux 2.6 以上版本内核中的高性能网络 I/O 模型，如果跑在 FreeBSD 上面，就用 kqueue 模型。</span>
    <span class="token comment">#epoll 是多路复用 IO(I/O Multiplexing) 中的一种方式，但是仅用于 linux2.6 以上内核，可以大大提高 nginx 的性能</span>
    use epoll<span class="token punctuation">;</span>

    <span class="token comment">############################################################################</span>
    <span class="token comment">#单个后台 worker process 进程的最大并发链接数</span>
    <span class="token comment">#事件模块指令，定义 nginx 每个进程最大连接数，默认 1024。最大客户连接数由 worker_processes 和 worker_connections 决定</span>
    <span class="token comment">#即 max_client=worker_processes*worker_connections, 在作为反向代理时：max_client=worker_processes*worker_connections / 4</span>
    worker_connections <span class="token number">65535</span><span class="token punctuation">;</span>
    <span class="token comment">############################################################################</span>
<span class="token punctuation">}</span>

<span class="token comment">#设定 http 服务器</span>
http <span class="token punctuation">{</span>
    include mime.types<span class="token punctuation">;</span> <span class="token comment">#文件扩展名与文件类型映射表</span>
    default_type application/octet-stream<span class="token punctuation">;</span> <span class="token comment">#默认文件类型</span>
    <span class="token comment">#charset utf-8; #默认编码</span>

    server_names_hash_bucket_size <span class="token number">128</span><span class="token punctuation">;</span> <span class="token comment">#服务器名字的 hash 表大小</span>
    client_header_buffer_size 32k<span class="token punctuation">;</span> <span class="token comment">#上传文件大小限制</span>
    large_client_header_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span> <span class="token comment">#设定请求缓</span>
    client_max_body_size 8m<span class="token punctuation">;</span> <span class="token comment">#设定请求缓</span>
    sendfile on<span class="token punctuation">;</span> <span class="token comment">#开启高效文件传输模式，sendfile 指令指定 nginx 是否调用 sendfile 函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成 off。</span>
    autoindex on<span class="token punctuation">;</span> <span class="token comment">#开启目录列表访问，合适下载服务器，默认关闭。</span>
    tcp_nopush on<span class="token punctuation">;</span> <span class="token comment">#防止网络阻塞</span>
    tcp_nodelay on<span class="token punctuation">;</span> <span class="token comment">#防止网络阻塞</span>

    <span class="token comment">##连接客户端超时时间各种参数设置##</span>
    keepalive_timeout  <span class="token number">120</span><span class="token punctuation">;</span>          <span class="token comment">#单位是秒，客户端连接时时间，超时之后服务器端自动关闭该连接 如果 nginx 守护进程在这个等待的时间里，一直没有收到浏览发过来 http 请求，则关闭这个 http 连接</span>
    client_header_timeout <span class="token number">10</span><span class="token punctuation">;</span>        <span class="token comment">#客户端请求头的超时时间</span>
    client_body_timeout <span class="token number">10</span><span class="token punctuation">;</span>          <span class="token comment">#客户端请求主体超时时间</span>
    reset_timedout_connection on<span class="token punctuation">;</span>    <span class="token comment">#告诉 nginx 关闭不响应的客户端连接。这将会释放那个客户端所占有的内存空间</span>
    send_timeout <span class="token number">10</span><span class="token punctuation">;</span>                 <span class="token comment">#客户端响应超时时间，在两次客户端读取操作之间。如果在这段时间内，客户端没有读取任何数据，nginx 就会关闭连接</span>
    <span class="token comment">################################</span>

    <span class="token comment">#FastCGI 相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。</span>
    fastcgi_connect_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_send_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_read_timeout <span class="token number">300</span><span class="token punctuation">;</span>
    fastcgi_buffer_size 64k<span class="token punctuation">;</span>
    fastcgi_buffers <span class="token number">4</span> 64k<span class="token punctuation">;</span>
    fastcgi_busy_buffers_size 128k<span class="token punctuation">;</span>
    fastcgi_temp_file_write_size 128k<span class="token punctuation">;</span>

    <span class="token comment">###作为代理缓存服务器设置#######</span>
    <span class="token comment">###先写到 temp 再移动到 cache</span>
    <span class="token comment">#proxy_cache_path /var/tmp/nginx/proxy_cache levels=1:2 keys_zone=cache_one:512m inactive=10m max_size=64m;</span>
    <span class="token comment">###以上 proxy_temp 和 proxy_cache 需要在同一个分区中</span>
    <span class="token comment">###levels=1:2 表示缓存级别，表示缓存目录的第一级目录是 1 个字符，第二级目录是 2 个字符 keys_zone=cache_one:128m 缓存空间起名为 cache_one 大小为 512m</span>
    <span class="token comment">###max_size=64m 表示单个文件超过 128m 就不缓存了  inactive=10m 表示缓存的数据，10 分钟内没有被访问过就删除</span>
    <span class="token comment">#########end####################</span>

    <span class="token comment">#####对传输文件压缩###########</span>
    <span class="token comment">#gzip 模块设置</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span> <span class="token comment">#开启 gzip 压缩输出</span>
    gzip_min_length 1k<span class="token punctuation">;</span> <span class="token comment">#最小压缩文件大小</span>
    gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span> <span class="token comment">#压缩缓冲区</span>
    gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span> <span class="token comment">#压缩版本（默认 1.1，前端如果是 squid2.5 请使用 1.0）</span>
    gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">#压缩等级，gzip 压缩比，1 为最小，处理最快；9 为压缩比最大，处理最慢，传输速度最快，也最消耗 CPU；</span>
    gzip_types text/plain application/x-javascript text/css application/xml<span class="token punctuation">;</span>
    <span class="token comment">#压缩类型，默认就已经包含 text/html，所以下面就不用再写了，写上去也不会有问题，但是会有一个 warn。</span>
    gzip_vary on<span class="token punctuation">;</span>
    <span class="token comment">##############################</span>

    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m; #开启限制 IP 连接数的时候需要使用</span>

    upstream blog.ha97.com <span class="token punctuation">{</span>
        <span class="token comment">#upstream 的负载均衡，weight 是权重，可以根据机器配置定义权重。weigth 参数表示权值，权值越高被分配到的几率越大。</span>
        server <span class="token number">192.168</span>.80.121:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.122:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
        server <span class="token number">192.168</span>.80.123:80 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#虚拟主机的配置</span>
    server <span class="token punctuation">{</span>
        <span class="token comment">#监听端口</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>

        <span class="token comment">#############https##################</span>
        <span class="token comment">#listen 443 ssl;</span>
        <span class="token comment">#ssl_certificate /opt/https/xxxxxx.crt;</span>
        <span class="token comment">#ssl_certificate_key /opt/https/xxxxxx.key;</span>
        <span class="token comment">#ssl_protocols SSLv3 TLSv1;</span>
        <span class="token comment">#ssl_ciphers HIGH:!ADH:!EXPORT57:RC4+RSA:+MEDIUM;</span>
        <span class="token comment">#ssl_prefer_server_ciphers on;</span>
        <span class="token comment">#ssl_session_cache shared:SSL:2m;</span>
        <span class="token comment">#ssl_session_timeout 5m;</span>
        <span class="token comment">####################################end</span>

        <span class="token comment">#域名可以有多个，用空格隔开</span>
        server_name www.ha97.com ha97.com<span class="token punctuation">;</span>
        index index.html index.htm index.php<span class="token punctuation">;</span>
        root /data/www/ha97<span class="token punctuation">;</span>
        location ~ .*.<span class="token punctuation">(</span>php<span class="token operator">|</span>php5<span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            fastcgi_pass <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
            fastcgi_index index.php<span class="token punctuation">;</span>
            include fastcgi.conf<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#图片缓存时间设置</span>
        location ~ .*.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            expires 10d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#JS 和 CSS 缓存时间设置</span>
        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            expires 1h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#日志格式设定</span>
        log_format access <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span> <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span> <span class="token string">&#39;&quot;$http_user_agent&quot; $http_x_forwarded_for&#39;</span><span class="token punctuation">;</span>

        <span class="token comment">#定义本虚拟主机的访问日志</span>
        access_log /var/log/nginx/ha97access.log access<span class="token punctuation">;</span>

        <span class="token comment">#对 &quot;/&quot; 启用反向代理</span>
        location / <span class="token punctuation">{</span>
            proxy_pass http://127.0.0.1:88<span class="token punctuation">;</span>
            proxy_redirect off<span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            <span class="token comment">#后端的 Web 服务器可以通过 X-Forwarded-For 获取用户真实 IP</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            <span class="token comment">#以下是一些反向代理的配置，可选。</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            client_max_body_size 10m<span class="token punctuation">;</span> <span class="token comment">#允许客户端请求的最大单文件字节数</span>
            client_body_buffer_size 128k<span class="token punctuation">;</span> <span class="token comment">#缓冲区代理缓冲用户端请求的最大字节数，</span>

            <span class="token comment">##代理设置 以下设置是 nginx 和后端服务器之间通讯的设置##</span>
            proxy_connect_timeout <span class="token number">90</span><span class="token punctuation">;</span> <span class="token comment">#nginx 跟后端服务器连接超时时间（代理连接超时）</span>
            proxy_send_timeout <span class="token number">90</span><span class="token punctuation">;</span> <span class="token comment">#后端服务器数据回传时间（代理发送超时）</span>
            proxy_read_timeout <span class="token number">90</span><span class="token punctuation">;</span> <span class="token comment">#连接成功后，后端服务器响应时间（代理接收超时）</span>
            proxy_buffering on<span class="token punctuation">;</span>    <span class="token comment">#该指令开启从后端被代理服务器的响应内容缓冲 此参数开启后 proxy_buffers 和 proxy_busy_buffers_size 参数才会起作用</span>
            proxy_buffer_size 4k<span class="token punctuation">;</span>  <span class="token comment">#设置代理服务器（nginx）保存用户头信息的缓冲区大小</span>
            proxy_buffers <span class="token number">4</span> 32k<span class="token punctuation">;</span>   <span class="token comment">#proxy_buffers 缓冲区，网页平均在 32k 以下的设置</span>
            proxy_busy_buffers_size 64k<span class="token punctuation">;</span> <span class="token comment">#高负荷下缓冲大小（proxy_buffers*2）</span>
            proxy_max_temp_file_size 2048m<span class="token punctuation">;</span> <span class="token comment">#默认 1024m, 该指令用于设置当网页内容大于 proxy_buffers 时，临时文件大小的最大值。如果文件大于这个值，它将从 upstream 服务器同步地传递请求，而不是缓冲到磁盘</span>
            proxy_temp_file_write_size 512k<span class="token punctuation">;</span> 这是当被代理服务器的响应过大时 nginx 一次性写入临时文件的数据量。
            proxy_temp_path  /var/tmp/nginx/proxy_temp<span class="token punctuation">;</span>    <span class="token comment">##定义缓冲存储目录，之前必须要先手动创建此目录</span>
            proxy_headers_hash_max_size <span class="token number">51200</span><span class="token punctuation">;</span>
            proxy_headers_hash_bucket_size <span class="token number">6400</span><span class="token punctuation">;</span>
            <span class="token comment">#######################################################</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#设定查看 nginx 状态的地址</span>
        location /nginxStatus <span class="token punctuation">{</span>
            stub_status on<span class="token punctuation">;</span>
            access_log on<span class="token punctuation">;</span>
            auth_basic <span class="token string">&quot;nginxStatus&quot;</span><span class="token punctuation">;</span>
            auth_basic_user_file conf/htpasswd<span class="token punctuation">;</span>
            <span class="token comment">#htpasswd 文件的内容可以用 apache 提供的 htpasswd 工具来产生。</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#本地动静分离反向代理配置</span>
        <span class="token comment">#所有 jsp 的页面均交由 tomcat 或 resin 处理</span>
        location ~ .<span class="token punctuation">(</span>jsp<span class="token operator">|</span>jspx<span class="token operator">|</span><span class="token keyword">do</span><span class="token punctuation">)</span>?$ <span class="token punctuation">{</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            proxy_pass http://127.0.0.1:8080<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#所有静态文件由 nginx 直接读取不经过 tomcat 或 resin</span>
        location ~ .*.<span class="token punctuation">(</span>htm<span class="token operator">|</span>html<span class="token operator">|</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token operator">|</span>ioc<span class="token operator">|</span><span class="token function">rar</span><span class="token operator">|</span><span class="token function">zip</span><span class="token operator">|</span>txt<span class="token operator">|</span>flv<span class="token operator">|</span>mid<span class="token operator">|</span>doc<span class="token operator">|</span>ppt<span class="token operator">|</span>pdf<span class="token operator">|</span>xls<span class="token operator">|</span>mp3<span class="token operator">|</span>wma<span class="token punctuation">)</span>$
        <span class="token punctuation">{</span> expires 15d<span class="token punctuation">;</span> <span class="token punctuation">}</span>

        location ~ .*.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span> expires 1h<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nginx-服务器基础配置指令" tabindex="-1"><a class="header-anchor" href="#nginx-服务器基础配置指令" aria-hidden="true">#</a> Nginx 服务器基础配置指令</h1><h2 id="nginx-conf-文件的结构" tabindex="-1"><a class="header-anchor" href="#nginx-conf-文件的结构" aria-hidden="true">#</a> nginx.conf 文件的结构</h2><ul><li>Global: nginx 运行相关</li><li>events: 与用户的网络连接相关</li><li>http</li><li>http Global: 代理，缓存，日志，以及第三方模块的配置</li><li>server <ul><li>server Global: 虚拟主机相关</li><li>location: 地址定向，数据缓存，应答控制，以及第三方模块的配置</li></ul></li></ul><blockquote><p>所有的所有的所有的指令，都要以;结尾</p></blockquote><h2 id="nginx-运行相关的-global-部分" tabindex="-1"><a class="header-anchor" href="#nginx-运行相关的-global-部分" aria-hidden="true">#</a> nginx 运行相关的 Global 部分</h2><h3 id="配置运行-nginx-服务器用户" tabindex="-1"><a class="header-anchor" href="#配置运行-nginx-服务器用户" aria-hidden="true">#</a> 配置运行 nginx 服务器用户</h3><p>user nobody nobody;</p><h3 id="配置允许生成的-worker-process-数" tabindex="-1"><a class="header-anchor" href="#配置允许生成的-worker-process-数" aria-hidden="true">#</a> 配置允许生成的 worker process 数</h3><p>worker_processes auto; worker_processes 4;</p><blockquote><p>这个数字，跟电脑 CPU 核数要保持一致</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># grep ^proces /proc/cpuinfo</span>
processor       <span class="token builtin class-name">:</span> <span class="token number">0</span>
processor       <span class="token builtin class-name">:</span> <span class="token number">1</span>
processor       <span class="token builtin class-name">:</span> <span class="token number">2</span>
processor       <span class="token builtin class-name">:</span> <span class="token number">3</span>
<span class="token comment"># grep ^proces /proc/cpuinfo | wc -l</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-nginx-进程-pid-存放路径" tabindex="-1"><a class="header-anchor" href="#配置-nginx-进程-pid-存放路径" aria-hidden="true">#</a> 配置 nginx 进程 PID 存放路径</h3><p>pid logs/nginx.pid;</p><blockquote><p>这里面保存的就是一个数字，nginx master 进程的进程号</p></blockquote><h3 id="配置错误日志的存放路径" tabindex="-1"><a class="header-anchor" href="#配置错误日志的存放路径" aria-hidden="true">#</a> 配置错误日志的存放路径</h3><p>error_log logs/error.log; error_log logs/error.log error;</p><h3 id="配置文件的引入" tabindex="-1"><a class="header-anchor" href="#配置文件的引入" aria-hidden="true">#</a> 配置文件的引入</h3><p>include mime.types; include fastcgi_params; include ../../conf/*.conf;</p><h2 id="与用户的网络连接相关的-events" tabindex="-1"><a class="header-anchor" href="#与用户的网络连接相关的-events" aria-hidden="true">#</a> 与用户的网络连接相关的 events</h2><h3 id="设置网络连接的序列化" tabindex="-1"><a class="header-anchor" href="#设置网络连接的序列化" aria-hidden="true">#</a> 设置网络连接的序列化</h3><p>accept_mutex on;</p><blockquote><p>对多个 nginx 进程接收连接进行序列化，防止多个进程对连接的争抢（惊群）</p></blockquote><h3 id="设置是否允许同时接收多个网络连接" tabindex="-1"><a class="header-anchor" href="#设置是否允许同时接收多个网络连接" aria-hidden="true">#</a> 设置是否允许同时接收多个网络连接</h3><p>multi_accept off;</p><h3 id="事件驱动模型的选择" tabindex="-1"><a class="header-anchor" href="#事件驱动模型的选择" aria-hidden="true">#</a> 事件驱动模型的选择</h3><p>use select|poll|kqueue|epoll|rtsig|/dev/poll|eventport</p><blockquote><p>这个重点</p></blockquote><h3 id="配置最大连接数" tabindex="-1"><a class="header-anchor" href="#配置最大连接数" aria-hidden="true">#</a> 配置最大连接数</h3><p>worker_connections 512;</p><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> http</h2><h3 id="http-global-代理-缓存-日志-第三方模块配置" tabindex="-1"><a class="header-anchor" href="#http-global-代理-缓存-日志-第三方模块配置" aria-hidden="true">#</a> http Global 代理 - 缓存 - 日志 - 第三方模块配置</h3><h4 id="定义-mime-type" tabindex="-1"><a class="header-anchor" href="#定义-mime-type" aria-hidden="true">#</a> 定义 MIME-Type</h4><p>include mime.types; default_type application/octet-stream;</p><h4 id="自定义服务日志" tabindex="-1"><a class="header-anchor" href="#自定义服务日志" aria-hidden="true">#</a> 自定义服务日志</h4><p>access_log logs/access.log main; access_log off;</p><h4 id="配置允许-sendfile-方式传输文件" tabindex="-1"><a class="header-anchor" href="#配置允许-sendfile-方式传输文件" aria-hidden="true">#</a> 配置允许 sendfile 方式传输文件</h4><p>sendfile off; sendfile on; sendfile_max_chunk 128k;</p><blockquote></blockquote><p>nginx 每个 worker process 每次调用 sendfile() 传输的数据量的最大值</p><h4 id="配置连接超时时间" tabindex="-1"><a class="header-anchor" href="#配置连接超时时间" aria-hidden="true">#</a> 配置连接超时时间</h4><blockquote><p>与用户建立连接后，nginx 可以保持这些连接一段时间，默认 75s 下面的 65s 可以被 Mozilla/Konqueror 识别，是发给用户端的头部信息Keep-Alive值</p></blockquote><p>keepalive_timeout 75s 65s;</p><h4 id="单连接请求数上限" tabindex="-1"><a class="header-anchor" href="#单连接请求数上限" aria-hidden="true">#</a> 单连接请求数上限</h4><blockquote><p>和用户端建立连接后，用户通过此连接发送请求；这条指令用于设置请求的上限数</p></blockquote><p>keepalive_requests 100;</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><h4 id="配置网络监听" tabindex="-1"><a class="header-anchor" href="#配置网络监听" aria-hidden="true">#</a> 配置网络监听</h4><p>listen *:80 | *:8000; # 监听所有的 80 和 8000 端口 listen 192.168.1.10:8000; listen 192.168.1.10; listen 8000; # 等同于 listen *:8000; listen 192.168.1.10 default_server backlog=511; # 该 ip 的连接请求默认由此虚拟主机处理；最多允许 1024 个网络连接同时处于挂起状态</p><h4 id="基于名称的虚拟主机配置" tabindex="-1"><a class="header-anchor" href="#基于名称的虚拟主机配置" aria-hidden="true">#</a> 基于名称的虚拟主机配置</h4>`,51),d={href:"http://myserver.com",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.myserver.com",target:"_blank",rel:"noopener noreferrer"},v=n("em",null,".myserver.com www.myserver.",-1),m={href:"http://d.com",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"server_name ~^www\\d+.myserver.com$; # 使用正则",-1),k=n("blockquote",null,[n("p",null,"nginx 的配置中，可以用正则的地方，都以~开头")],-1),h=n("blockquote",null,[n("p",null,"from nginx~0.7.40 开始，server_name 中的正则支持 字符串捕获功能（capture）")],-1),g={href:"http://www.myserver.com",target:"_blank",rel:"noopener noreferrer"},_=i(`<ol><li>准确匹配到 server_name</li><li>通配符在开始时匹配到 server_name</li><li>通配符在结尾时匹配到 server_name</li><li>正则表达式匹配 server_name</li><li>先到先得</li></ol><h4 id="配置-https-证书" tabindex="-1"><a class="header-anchor" href="#配置-https-证书" aria-hidden="true">#</a> 配置 https 证书</h4><p><strong>原理</strong> https 是在 http 和 TCP 中间加上一层加密层</p><blockquote><ul><li>浏览器向服务端发送消息时：本质上是浏览器（客户端）使用服务端的公钥来加密信息，服务端使用自己的私钥解密，</li><li>浏览器从服务端获取消息是：服务端使用自己私钥加密，浏览器（客户端）使用服务端的公钥来解密信息</li></ul></blockquote><p>在这个过程中，需要保证服务端给浏览器的公钥不是假冒的。证明服务端公钥信息的机构是 CA（数字认证中心） 可以理解为：如果想证明一个人的身份是真的，就得证明这个人的身份证是真的 <strong>数字证书</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>数字证书相当于物理世界中的身份证，
在网络中传递信息的双方互相不能见面，利用数字证书可确认双方身份，而不是他人冒充的。
这个数字证书由信任的第三方，即认证中心使用自己的私钥对 A 的公钥加密，加密后文件就是网络上的身份证了，即数字证书
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大致可以理解为如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 服务端将自己的公钥和其他信息（服务端数字证书），请求数字认证中心签名，数字认证中心使用自己的私钥在证书里加密（只有数字认证中心的公钥才能解开）
<span class="token number">2</span>. 服务端将自己的证书（证书里面包括服务端的公钥）给浏览器
<span class="token number">3</span>. 浏览器的“证书管理器”中有“受信任的根证书颁发机构”列表，客户端在接收到响应后，会在这个列表里查看是否存在解开该服务器数字证书的公钥。有两种错误情况：如果公钥在这个列表里，但是解码后的内容不匹配，说明证书被冒用；如果公钥不在这个列表里，说明这张证书不是受信任的机构所颁发，他的真实性无法确定
<span class="token number">4</span>. 如果一切都没问题，浏览器就可以使用服务器的公钥对信息内容进行加密，然后与服务器交换信息（已加密）

+--------------+           +------------------+
<span class="token operator">|</span>    服务端    <span class="token operator">|</span>----------<span class="token operator">&gt;|</span> 数字认证中心 <span class="token punctuation">(</span>CA<span class="token punctuation">)</span> <span class="token operator">|</span>
+------+-------+    <span class="token number">1</span>    X +------------------+
       <span class="token operator">|</span>                / /
       <span class="token operator">|</span>               / /
       <span class="token operator">|</span>              / /
       <span class="token operator">|</span>             / /
       <span class="token operator">|</span><span class="token number">2</span>         <span class="token number">3</span> / / <span class="token number">4</span>
       <span class="token operator">|</span>           / /
       <span class="token operator">|</span>          / /
       <span class="token operator">|</span>         / /
       X        / /
+--------------+ /
<span class="token operator">|</span>    浏览器    <span class="token operator">|</span>X
+--------------+

只要证书（证书里有服务端的公钥）是可信的，公钥就是可信的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>证书格式</strong> Linux 下的工具们通常使用 base64 编码的文本格式，相关常用后缀如下</p><ul><li>证书 <ul><li>.crt</li><li>.pem</li><li>.cer(IIS 等一些平台下，则习惯用 cer 作为证书文件的扩展名，二进制证书）</li></ul></li><li>私钥：.key</li><li>证书请求：.csr</li><li>其他 <ul><li>.keystore java 密钥库（包括证书和私钥）</li></ul></li></ul><p><strong>制作证书</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 生成服务器端的私钥 <span class="token punctuation">(</span>key 文件）
<span class="token variable">$openssl</span> genrsa  <span class="token parameter variable">-out</span> server.key <span class="token number">1024</span>

<span class="token number">2</span>. 生成服务器端证书签名请求文件 <span class="token punctuation">(</span>csr 文件）<span class="token punctuation">;</span>
$ openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr

<span class="token punctuation">..</span>.
Country Name:CN------------ 证书持有者所在国家
State or Province Name:BJ-- 证书持有者所在州或省份（可省略不填）
Locality Name:BJ----------- 证书持有者所在城市（可省略不填）
Organization Name:SC------- 证书持有者所属组织或公司
Organizational Unit Name:.- 证书持有者所属部门（可省略不填）
Common Name :ceshi.com----- 域名
Email Address:------------- 邮箱（可省略不填）

A challenge password:------ 直接回车
An optional company name:-- 直接回车


<span class="token number">3</span>. 生成证书文件 <span class="token punctuation">(</span>crt 文件）
$ openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">1000</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-signkey</span> server.key <span class="token parameter variable">-out</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上生成 server.crt server.key 文件即是用于 HTTPS 配置的证书和 key 如果想查看证书里面的内容，可以通过 $openssl x509 -in server.crt -text -noout 查看 <strong>配置 nginx</strong> 在 nginx 的 server 区域内添加如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
ssl_certificate /opt/https/server.crt<span class="token punctuation">;</span>
ssl_certificate_key /opt/https/server.key<span class="token punctuation">;</span>
ssl_protocols SSLv3 TLSv1<span class="token punctuation">;</span>
ssl_ciphers HIGH:<span class="token operator">!</span>ADH:<span class="token operator">!</span>EXPORT57:RC4+RSA:+MEDIUM<span class="token punctuation">;</span>
ssl_prefer_server_ciphers on<span class="token punctuation">;</span>
ssl_session_cache shared:SSL:2m<span class="token punctuation">;</span>
ssl_session_timeout 5m<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于-ip-的虚拟主机配置" tabindex="-1"><a class="header-anchor" href="#基于-ip-的虚拟主机配置" aria-hidden="true">#</a> 基于 IP 的虚拟主机配置</h4><blockquote><p>基于 IP 的虚拟主机，需要将网卡设置为同时能够监听多个 IP 地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span>
<span class="token comment"># 查看到本机 IP 地址为 192.168.1.30</span>
<span class="token function">ifconfig</span> eth1:0 <span class="token number">192.168</span>.1.31 netmask <span class="token number">255.255</span>.255.0 up
<span class="token function">ifconfig</span> eth1:1 <span class="token number">192.168</span>.1.32 netmask <span class="token number">255.255</span>.255.0 up
<span class="token function">ifconfig</span>
<span class="token comment"># 这时就看到 eth1 增加来 2 个别名， eth1:0 eth1:1</span>

<span class="token comment"># 如果需要机器重启后仍保持这两个虚拟的 IP</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ifconfig eth1:0 192.168.1.31 netmask 255.255.255.0 up&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/rc.local
<span class="token builtin class-name">echo</span> <span class="token string">&quot;ifconfig eth1:0 192.168.1.32 netmask 255.255.255.0 up&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来配置基于 IP 的虚拟主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    server <span class="token punctuation">{</span>
     listen <span class="token number">80</span><span class="token punctuation">;</span>
     server_name <span class="token number">192.168</span>.1.31<span class="token punctuation">;</span>
     <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
     listen <span class="token number">80</span><span class="token punctuation">;</span>
     server_name <span class="token number">192.168</span>.1.32<span class="token punctuation">;</span>
     <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置-location-块" tabindex="-1"><a class="header-anchor" href="#配置-location-块" aria-hidden="true">#</a> 配置 location 块</h4><blockquote><p>location 块的配置，应该是最常用的了</p></blockquote><p>location [ = | ~ | ~* | ^~ ] uri {...} 这里内容分 2 块，匹配方式和 uri， 其中 uri 又分为 标准 uri 和正则 uri 先不考虑 那 4 种匹配方式</p><ol><li>nginx 首先会再 server 块的多个 location 中搜索是否有标准 uri和请求字符串匹配， 如果有，记录匹配度最高的一个；</li><li>然后，再用 location 块中的正则 uri和请求字符串匹配， 当第一个正则 uri匹配成功，即停止搜索， 并使用该 location 块处理请求；</li><li>如果，所有的正则 uri都匹配失败，就使用刚记录下的匹配度最高的一个标准 uri处理请求</li><li>如果都失败了，那就失败喽</li></ol><p>再看 4 种匹配方式：</p><ul><li>=: 用于标准 uri前，要求请求字符串与其严格匹配，成功则立即处理</li><li>^~: 用于标准 uri前，并要求一旦匹配到，立即处理，不再去匹配其他的那些个正则 uri</li><li>~: 用于正则 uri前，表示 uri 包含正则表达式， 并区分大小写</li><li>~*: 用于正则 uri前， 表示 uri 包含正则表达式， 不区分大小写</li></ul><blockquote><p>^~ 也是支持浏览器编码过的 URI 的匹配的哦， 如 /html/%20/data 可以成功匹配 /html/ /data</p></blockquote><h4 id="root-配置请求的根目录" tabindex="-1"><a class="header-anchor" href="#root-配置请求的根目录" aria-hidden="true">#</a> [root] 配置请求的根目录</h4><p>Web 服务器收到请求后，首先要在服务端指定的目录中寻找请求资源</p><blockquote><p>root /var/www;</p></blockquote><p><strong>root 后跟的指定目录是上级目录</strong> 该上级目录下要含有和 location 后指定名称的同名目录才行，末尾“/”加不加无所谓</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /c/ <span class="token punctuation">{</span>
      root /a/
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),x={href:"https://link.juejin.cn/?target=http%3A%2F%2Flocation%2Fc",target:"_blank",rel:"noopener noreferrer"},f=i(`<h4 id="alias-更改-location-的-uri" tabindex="-1"><a class="header-anchor" href="#alias-更改-location-的-uri" aria-hidden="true">#</a> [alias] 更改 location 的 URI</h4><p>除了使用 root 指明处理请求的根目录，还可以使用 alias 改变 location 收到的 URI 的请求路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~ ^/data/<span class="token punctuation">(</span>.+<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>htm<span class="token operator">|</span>html<span class="token punctuation">))</span>$ <span class="token punctuation">{</span>
    <span class="token builtin class-name">alias</span> /locatinotest1/other/<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>alias 后跟的指定目录是准确的，并且末尾必须加“/”，否则找不到文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /c/ <span class="token punctuation">{</span>
      <span class="token builtin class-name">alias</span> /a/
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={href:"https://link.juejin.cn?target=http%3A%2F%2Flocation%2Fc",target:"_blank",rel:"noopener noreferrer"},w=i(`<h4 id="设置网站的默认首页" tabindex="-1"><a class="header-anchor" href="#设置网站的默认首页" aria-hidden="true">#</a> 设置网站的默认首页</h4><p>index 指令主要有 2 个作用：</p><ul><li>对请求地址没有指明首页的，指定默认首页</li><li>对一个请求，根据请求内容而设置不同的首页，如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~ ^/data/<span class="token punctuation">(</span>.+<span class="token punctuation">)</span>/web/$ <span class="token punctuation">{</span>
    index index.<span class="token variable">$1</span>.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置网站的错误页面" tabindex="-1"><a class="header-anchor" href="#设置网站的错误页面" aria-hidden="true">#</a> 设置网站的错误页面</h4><p>error_page 404 /404.html; error_page 403 /forbidden.html; error_page 404 =301 /404.html;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /404.html <span class="token punctuation">{</span>
    root /myserver/errorpages/<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基于-ip-配置-nginx-的访问权限" tabindex="-1"><a class="header-anchor" href="#基于-ip-配置-nginx-的访问权限" aria-hidden="true">#</a> 基于 IP 配置 nginx 的访问权限</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    deny <span class="token number">192.168</span>.1.1<span class="token punctuation">;</span>
    allow <span class="token number">192.168</span>.1.0/24<span class="token punctuation">;</span>
    allow <span class="token number">192.168</span>.1.2/24<span class="token punctuation">;</span>
    deny all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从 192.168.1.0 的用户时可以访问的，因为解析到 allow 那一行之后就停止解析了</p></blockquote><h4 id="基于密码配置-nginx-的访问权限" tabindex="-1"><a class="header-anchor" href="#基于密码配置-nginx-的访问权限" aria-hidden="true">#</a> 基于密码配置 nginx 的访问权限</h4><p>auth_basic &quot;please login&quot;; auth_basic_user_file /etc/nginx/conf/pass_file;</p><blockquote><p>这里的 file 必须使用绝对路径，使用相对路径无效</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># /usr/local/apache2/bin/htpasswd -c -d pass_file user_name</span>
<span class="token comment"># 回车输入密码，-c 表示生成文件，-d 是以 crypt 加密。</span>

name1:password1
name2:password2:comment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),q={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwiki.nginx.org%2FHttpAuthDigestModule",target:"_blank",rel:"noopener noreferrer"},$=i(`<h1 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h1><h2 id="架设简单文件服务器" tabindex="-1"><a class="header-anchor" href="#架设简单文件服务器" aria-hidden="true">#</a> 架设简单文件服务器</h2><p>将 /data/public/ 目录下的文件通过 nginx 提供给外部访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#mkdir /data/public/</span>
<span class="token comment">#chmod 777 /data/public/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes <span class="token number">1</span><span class="token punctuation">;</span>
error_log logs/error.log info<span class="token punctuation">;</span>
events <span class="token punctuation">{</span>
    use epoll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
http <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
        <span class="token comment"># 监听 8080 端口</span>
        listen <span class="token number">8080</span><span class="token punctuation">;</span>
        location /share/ <span class="token punctuation">{</span>
            <span class="token comment"># 打开自动列表功能，通常关闭</span>
            autoindex on<span class="token punctuation">;</span>
            <span class="token comment"># 将 /share/ 路径映射至 /data/public/，请保证 nginx 进程有权限访问 /data/public/</span>
            <span class="token builtin class-name">alias</span> /data/public/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-正向代理" tabindex="-1"><a class="header-anchor" href="#nginx-正向代理" aria-hidden="true">#</a> nginx 正向代理</h2><ul><li>正向代理指代理客户端访问服务器的一个中介服务器，代理的对象是客户端。正向代理就是代理服务器替客户端去访问目标服务器</li><li>反向代理指代理后端服务器响应客户端请求的一个中介服务器，代理的对象是服务器。</li></ul><ol><li>配置</li></ol><p>代理服务器配置 nginx.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
    resolver x.x.x.x<span class="token punctuation">;</span>
<span class="token comment">#       resolver 8.8.8.8;</span>
    listen <span class="token number">82</span><span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
            proxy_pass http://<span class="token variable">$http_host</span><span class="token variable">$request_uri</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    access_log  /data/httplogs/proxy-<span class="token variable">$host</span>-aceess.log<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>location 保持原样即可，根据自己的配置更改 listen port 和 dnf 即 resolver 验证： 在需要访问外网的机器上执行以下操作之一即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://yourproxyaddress：proxyport（建议）
<span class="token number">2</span>. <span class="token function">vim</span> ~/.bashrc
    <span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span>http://yourproxyaddress：proxyport
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 不足 nginx 不支持 CONNECT 方法，不像我们平时用的 GET 或者 POST，可以选用 apache 或 squid 作为代替方案。</p><h2 id="nginx-服务器基础配置实例" tabindex="-1"><a class="header-anchor" href="#nginx-服务器基础配置实例" aria-hidden="true">#</a> nginx 服务器基础配置实例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user nginx nginx<span class="token punctuation">;</span>

worker_processes <span class="token number">3</span><span class="token punctuation">;</span>

error_log logs/error.log<span class="token punctuation">;</span>
pid myweb/nginx.pid<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    use epoll<span class="token punctuation">;</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include mime.types<span class="token punctuation">;</span>
    default_type applicatioin/octet-stream<span class="token punctuation">;</span>

    sendfile on<span class="token punctuation">;</span>

    keepalive_timeout <span class="token number">65</span><span class="token punctuation">;</span>

    log_format access.log <span class="token string">&#39;$remote_addr [$time_local] &quot;$request&quot; &quot;$http_user_agent&quot;&#39;</span><span class="token punctuation">;</span>

    server <span class="token punctuation">{</span>
        listen <span class="token number">8081</span><span class="token punctuation">;</span>
        server_name myServer1<span class="token punctuation">;</span>

        access_log myweb/server1/log/access.log<span class="token punctuation">;</span>
        error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>

        location /server1/location1 <span class="token punctuation">{</span>
            root myweb<span class="token punctuation">;</span>
            index index.svr1-loc1.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location /server1/location2 <span class="token punctuation">{</span>
            root myweb<span class="token punctuation">;</span>
            index index.svr1-loc2.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        listen <span class="token number">8082</span><span class="token punctuation">;</span>
        server_name <span class="token number">192.168</span>.0.254<span class="token punctuation">;</span>

        auth_basic <span class="token string">&quot;please Login:&quot;</span><span class="token punctuation">;</span>
        auth_basic_user_file /opt/X_nginx/nginx/myweb/user_passwd<span class="token punctuation">;</span>

        access_log myweb/server2/log/access.log<span class="token punctuation">;</span>
        error_page <span class="token number">404</span> /404.html<span class="token punctuation">;</span>

        location /server2/location1 <span class="token punctuation">{</span>
            root myweb<span class="token punctuation">;</span>
            index index.svr2-loc1.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location /svr2/loc2 <span class="token punctuation">{</span>
            <span class="token builtin class-name">alias</span> myweb/server2/location2/<span class="token punctuation">;</span>
            index index.svr2-loc2.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location <span class="token operator">=</span> /404.html <span class="token punctuation">{</span>
            root myweb/<span class="token punctuation">;</span>
            index <span class="token number">404</span>.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#./sbin/nginx -c conf/nginx02.conf</span>
nginx: <span class="token punctuation">[</span>warn<span class="token punctuation">]</span> the <span class="token string">&quot;user&quot;</span> directive makes sense only <span class="token keyword">if</span> the master process runs with super-user privileges, ignored <span class="token keyword">in</span> /opt/X_nginx/nginx/conf/nginx02.conf:1
<span class="token builtin class-name">.</span>
├── <span class="token number">404</span>.html
├── server1
│   ├── location1
│   │   └── index.svr1-loc1.htm
│   ├── location2
│   │   └── index.svr1-loc2.htm
│   └── log
│       └── access.log
└── server2
    ├── location1
    │   └── index.svr2-loc1.htm
    ├── location2
    │   └── index.svr2-loc2.htm
    └── log
        └── access.log

<span class="token number">8</span> directories, <span class="token number">7</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-myserver1-的访问" tabindex="-1"><a class="header-anchor" href="#测试-myserver1-的访问" aria-hidden="true">#</a> 测试 myServer1 的访问</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://myserver1:8081/server1/location1/
this is server1/location1/index.svr1-loc1.htm

http://myserver1:8081/server1/location2/
this is server1/location1/index.svr1-loc2.htm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试-myserver2-的访问" tabindex="-1"><a class="header-anchor" href="#测试-myserver2-的访问" aria-hidden="true">#</a> 测试 myServer2 的访问</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://192.168.0.254:8082/server2/location1/
this is server2/location1/index.svr2-loc1.htm

http://192.168.0.254:8082/svr2/loc2/
this is server2/location1/index.svr2-loc2.htm

http://192.168.0.254:8082/server2/location2/
<span class="token number">404</span> <span class="token number">404</span> <span class="token number">404</span> <span class="token number">404</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用缓存" tabindex="-1"><a class="header-anchor" href="#使用缓存" aria-hidden="true">#</a> 使用缓存</h2><p>创建缓存目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span>  /tmp/nginx_proxy_cache2
<span class="token function">chmod</span> <span class="token number">777</span> /tmp/nginx_proxy_cache2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># http 区域下添加缓存区配置</span>
proxy_cache_path /tmp/nginx_proxy_cache2 <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>cache_one:512m <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60s <span class="token assign-left variable">max_size</span><span class="token operator">=</span>1000m<span class="token punctuation">;</span>

<span class="token comment"># server 区域下添加缓存配置</span>
<span class="token comment">#缓存相应的文件（静态文件）</span>
location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>htm<span class="token operator">|</span>html<span class="token operator">|</span>css<span class="token operator">|</span>js<span class="token operator">|</span>flv<span class="token operator">|</span>ico<span class="token operator">|</span>swf<span class="token punctuation">)</span><span class="token punctuation">(</span>.*<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     proxy_pass http://IP: 端口；<span class="token comment">#如果没有缓存则通过 proxy_pass 转向请求</span>
     proxy_redirect off<span class="token punctuation">;</span>
     proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
     proxy_cache cache_one<span class="token punctuation">;</span>
     proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 1h<span class="token punctuation">;</span>            <span class="token comment">#对不同的 HTTP 状态码设置不同的缓存时间，h 小时，d 天数</span>
     proxy_cache_valid <span class="token number">301</span> 1d<span class="token punctuation">;</span>
     proxy_cache_valid any 1m<span class="token punctuation">;</span>
     expires 30d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-location-反向代理到已有网站" tabindex="-1"><a class="header-anchor" href="#使用-location-反向代理到已有网站" aria-hidden="true">#</a> 使用 location 反向代理到已有网站</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~/bianque/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
        proxy_pass http://127.0.0.1:8888/<span class="token variable">$1</span>/?<span class="token variable">$args</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>加内置变量 <img src="https://cdn.nlark.com/yuque/0/2022/svg/12790529/1670396668670-6ee10968-18ab-408d-adf7-df7cd0b9d25e.svg#clientId=u32b6717e-c88b-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;id=u28af2ef2&amp;margin=[object Object]&amp;originHeight=30&amp;originWidth=575&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u67554514-4cce-415c-99bf-55605fd85f4&amp;title=" alt="" loading="lazy">args\`是非必须的</li><li>$1 取自正则表达式部分()里的内容</li></ul></blockquote><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="ngx-http-sub-module-替换响应中内容" tabindex="-1"><a class="header-anchor" href="#ngx-http-sub-module-替换响应中内容" aria-hidden="true">#</a> ngx_http_sub_module 替换响应中内容</h3><ul><li>ngx_http_sub_module nginx 用来替换响应内容的一个模块（应用：有些程序中写死了端口，可以通过此工具将页面中的端口替换为其他端口）</li></ul><h3 id="配置-http-强制跳转-https" tabindex="-1"><a class="header-anchor" href="#配置-http-强制跳转-https" aria-hidden="true">#</a> 配置 http 强制跳转 https</h3><p>在 nginx 配置文件中的 server 区域添加如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$scheme</span> <span class="token operator">=</span> <span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ https://<span class="token variable">$host</span><span class="token variable">$uri</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function z(I,S){const a=p("ExternalLinkIcon");return t(),c("div",null,[r,n("p",null,[s("server_name "),n("a",d,[s("myserver.com"),e(a)]),s(),n("a",u,[s("www.myserver.com"),e(a)]),s("; server_name "),v,s(" myserver2.*; # 使用通配符")]),n("blockquote",null,[n("p",null,[s("不允许的情况： server_name www.ab*"),n("a",m,[s("d.com"),e(a)]),s("; # *只允许出现在 www 和 com 的位置")])]),b,k,h,n("p",null,[s("server_name ~^www.(.+).com$; # 当请求通过 "),n("a",g,[s("www.myserver.com"),e(a)]),s(" 请求时， myserver 就被记录到$1中，在本 server 的上下文中就可以使用 如果一个名称 被多个虚拟主机的 server_name 匹配成功，那这个请求到底交给谁处理呢？看优先级：")]),_,n("p",null,[s("访问站点 "),n("a",x,[s("http://location/c"),e(a)]),s(" 访问的就是 /a/c 目录下的站点信息。")]),f,n("p",null,[s("访问站点 "),n("a",y,[s("http://location/c"),e(a)]),s(" 访问的就是 /a/ 目录下的站点信息。 【注】一般情况下，在 location / 中配置 root，在 location /other 中配置 alias 是一个好习惯。")]),w,n("blockquote",null,[n("p",null,[s("经过 basic auth 认证之后没有过期时间，直到该页面关闭； 如果需要更多的控制，可以使用 HttpAuthDigestModule "),n("a",q,[s("wiki.nginx.org/HttpAuthDig…"),e(a)])])]),$])}const j=l(o,[["render",z],["__file","nginx-base-configs-demo.html.vue"]]);export{j as default};
