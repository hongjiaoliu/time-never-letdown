import{_ as n,V as a,W as s,$ as t}from"./framework-2197e39d.js";const p={},o=t(`<h1 id="chrome插件-ajax-interceptor-tools使用教程" tabindex="-1"><a class="header-anchor" href="#chrome插件-ajax-interceptor-tools使用教程" aria-hidden="true">#</a> Chrome插件 Ajax Interceptor Tools使用教程</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>在前端开发中，调试和拦截Ajax请求是非常重要的一部分。Chrome插件&quot;Ajax Interceptor Tools&quot;可以帮助开发人员轻松地拦截、修改和分析页面中的Ajax请求。本教程将从入门到高阶，逐步介绍如何使用该插件进行前端测试。</p><h2 id="_1-安装插件" tabindex="-1"><a class="header-anchor" href="#_1-安装插件" aria-hidden="true">#</a> 1. 安装插件</h2><h3 id="下载插件文件" tabindex="-1"><a class="header-anchor" href="#下载插件文件" aria-hidden="true">#</a> 下载插件文件</h3><p>首先，你需要下载&quot;Ajax Interceptor Tools&quot;插件的压缩文件（通常是一个.zip文件）。你可以在插件的官方网站或开源代码库中找到下载链接。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632688799-cbcc9370-033c-4313-b79e-d8f3613d6ad3.png#averageHue=%23fafafa&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=386&amp;id=u44fc150f&amp;originHeight=386&amp;originWidth=1311&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=52967&amp;status=done&amp;style=none&amp;taskId=u48c57cb0-c2f5-4a23-86ee-cc3c4aeef84&amp;title=&amp;width=1311" alt="image.png" loading="lazy"></p><h3 id="安装插件到chrome浏览器" tabindex="-1"><a class="header-anchor" href="#安装插件到chrome浏览器" aria-hidden="true">#</a> 安装插件到Chrome浏览器</h3><ol><li>解压下载的插件文件到一个目录中。</li><li>打开Chrome浏览器，在地址栏中输入<code>chrome://extensions/</code>并按下回车键。</li><li>在扩展程序页面的右上角，启用&quot;开发者模式&quot;。</li><li>点击页面左上角的&quot;加载已解压的扩展程序&quot;按钮。</li><li>在弹出的文件选择对话框中，选择刚刚解压的插件目录并确认。</li></ol><h2 id="_2-基本拦截" tabindex="-1"><a class="header-anchor" href="#_2-基本拦截" aria-hidden="true">#</a> 2. 基本拦截</h2><h3 id="打开开发者工具" tabindex="-1"><a class="header-anchor" href="#打开开发者工具" aria-hidden="true">#</a> 打开开发者工具</h3><p>在Chrome浏览器中，按下<code>F12</code>键或右键点击页面并选择&quot;检查&quot;，即可打开开发者工具。</p><h3 id="导航到ajax-interceptor-tools面板" tabindex="-1"><a class="header-anchor" href="#导航到ajax-interceptor-tools面板" aria-hidden="true">#</a> 导航到Ajax Interceptor Tools面板</h3><p>在开发者工具中，你将看到一个选项卡，名为&quot;U-Network&quot;（Ajax Interceptor Tools）。点击该选项卡以打开插件的面板。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632802437-afadd0ae-82f6-42f0-bcd4-8c679de103ca.png#averageHue=%23f7f8f9&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=311&amp;id=u7df82077&amp;originHeight=311&amp;originWidth=1423&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=32273&amp;status=done&amp;style=none&amp;taskId=u51aece4f-079a-4860-8eea-64db99b75db&amp;title=&amp;width=1423" alt="image.png" loading="lazy"></p><h3 id="开启拦截功能" tabindex="-1"><a class="header-anchor" href="#开启拦截功能" aria-hidden="true">#</a> 开启拦截功能</h3><p>在面板的顶部，你会看到一个开关按钮，用于启用或禁用拦截功能。确保该按钮处于启用状态，以开始拦截Ajax请求。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632843429-9b72cfed-c43a-4c13-904b-5b331a09fc72.png#averageHue=%23f6f7f8&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=292&amp;id=u83cc3af1&amp;originHeight=292&amp;originWidth=1180&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=29323&amp;status=done&amp;style=none&amp;taskId=u005c4b19-519f-44e4-b8b0-6167dff485d&amp;title=&amp;width=1180" alt="image.png" loading="lazy"></p><h3 id="查看拦截的请求" tabindex="-1"><a class="header-anchor" href="#查看拦截的请求" aria-hidden="true">#</a> 查看拦截的请求</h3><p>刷新页面或触发页面上的某些操作，以触发Ajax请求。在&quot;U-Network&quot;面板上，你将看到列出的请求列表。点击其中一个请求，以查看其详细信息，包括URL、请求方法、参数等。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632887005-985f388f-6258-47c8-b23c-62d6659bbe0a.png#averageHue=%23f0f1f3&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=144&amp;id=uf12ed5ae&amp;originHeight=144&amp;originWidth=1870&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=33292&amp;status=done&amp;style=none&amp;taskId=u6b97b5b3-baeb-4cec-b61a-f514de2d888&amp;title=&amp;width=1870" alt="image.png" loading="lazy"> 然后点对应请求的Action按钮 配置拦截信息，本例以api/v2/project/project-ad接口为例 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633052626-a87845fb-a263-4b60-ad89-f92b08e134e3.png#averageHue=%233dca65&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=161&amp;id=u3757ce5f&amp;originHeight=161&amp;originWidth=1919&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=36982&amp;status=done&amp;style=none&amp;taskId=u2328ac98-1903-4101-9248-9d387ece6b3&amp;title=&amp;width=1919" alt="image.png" loading="lazy"> 弹出 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633123888-18c6108c-f95b-441d-ac6f-b5093cc41498.png#averageHue=%23fafaf9&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=712&amp;id=u6e4abbe7&amp;originHeight=712&amp;originWidth=1919&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=131751&amp;status=done&amp;style=none&amp;taskId=u268a2fb5-7fd4-4c1a-a4ad-a430d70288c&amp;title=&amp;width=1919" alt="image.png" loading="lazy"></p><h2 id="_3-修改请求" tabindex="-1"><a class="header-anchor" href="#_3-修改请求" aria-hidden="true">#</a> 3. 修改请求</h2><h3 id="拦截请求后的操作" tabindex="-1"><a class="header-anchor" href="#拦截请求后的操作" aria-hidden="true">#</a> 拦截请求后的操作</h3><p>在&quot;U-Network&quot;面板中，你可以针对拦截到的请求执行多种操作。你可以暂停拦截、清除已拦截的请求，或者开始拦截之前清除现有的请求。</p><h3 id="修改请求参数" tabindex="-1"><a class="header-anchor" href="#修改请求参数" aria-hidden="true">#</a> 修改请求参数</h3><p>点击某个请求，在请求详细信息页面中，你可以看到请求的参数。你可以直接编辑这些参数，然后点击&quot;应用&quot;按钮，以应用修改后的参数。</p><h3 id="修改请求头部" tabindex="-1"><a class="header-anchor" href="#修改请求头部" aria-hidden="true">#</a> 修改请求头部</h3><p>除了参数，你还可以修改请求的头部信息。在请求详细信息页面中，找到&quot;请求头部&quot;部分，编辑头部字段并点击&quot;应用&quot;按钮。</p><h2 id="_4-模拟响应" tabindex="-1"><a class="header-anchor" href="#_4-模拟响应" aria-hidden="true">#</a> 4. 模拟响应</h2><h3 id="自定义响应数据" tabindex="-1"><a class="header-anchor" href="#自定义响应数据" aria-hidden="true">#</a> 自定义响应数据</h3><p>在&quot;U-Network&quot;面板中，你不仅可以拦截请求，还可以模拟响应。点击请求，然后在响应部分编辑响应数据。你可以输入JSON、XML等数据格式，以模拟服务器返回的响应。 比如本实例中，我需要修改原有的response 修改前response，着重看adCatId：103的部分，我需要手动修改其返回值，添加adVos集合</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">102</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八课表PC端-轮播图&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;adJumpType&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token property">&quot;linkUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.koolearn.com/product/c_104_152589.html&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;couponCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;popUpGuideDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;popUpGuideTxt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;popUpGuidePic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;popUpGuideLink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">428</span><span class="token punctuation">,</span>
<span class="token property">&quot;adName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八课表PC端-轮播图&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;adContent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;onlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1640853929000</span><span class="token punctuation">,</span>
<span class="token property">&quot;offlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1735634730000</span><span class="token punctuation">,</span>
<span class="token property">&quot;crmFlag&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token property">&quot;crmTemplateId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://guonei-cos.koocdn.com/flowrate/2023/02/24/365ffcae595744139d4c529e4a4a8d4f.png&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;popBtn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;popupBtnVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;allocationRuleId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;allocationPopWap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;allocationPopPc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;crmFirstSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;crmSecondSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;crmProductGroup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;againConvertConfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">103</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八课表PC端-优惠券&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">411</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八PC端引流二维码&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">417</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八PC端弹窗广告&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">102</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八课表PC端-轮播图&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;adJumpType&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;linkUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.koolearn.com/product/c_104_152589.html&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;couponCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuideDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuideTxt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuidePic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuideLink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">428</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;adName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八课表PC端-轮播图&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;adContent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;onlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1640853929000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;offlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1735634730000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmFlag&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmTemplateId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://guonei-cos.koocdn.com/flowrate/2023/02/24/365ffcae595744139d4c529e4a4a8d4f.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popBtn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popupBtnVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;allocationRuleId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;allocationPopWap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;allocationPopPc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmFirstSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmSecondSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmProductGroup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;againConvertConfig&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">103</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八课表PC端-优惠券&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;adJumpType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;linkUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;couponCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;27284e3c7b7ed1cc&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;productId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuideDefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuideTxt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuidePic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://guonei-osstest.koocdn.com/flowrate/2022/01/13/30ac698781804085a66e2ca1394bfbba.jpg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popUpGuideLink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://m.koolearn.com/&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">303</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;adName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;23考研课表头图优惠券区-左边&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;adContent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;onlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1640332772000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;offlineTime&quot;</span><span class="token operator">:</span> <span class="token number">1711954436000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmFlag&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmTemplateId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;imgUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://guonei-osstest.koocdn.com/flowrate/2021/12/30/3875fc7072cb4e0f914fe0e923c7fc6e.jpg&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popBtn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;popupBtnVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;allocationRuleId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;allocationPopWap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;allocationPopPc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmFirstSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmSecondSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;优惠券600-2个产品单价200&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;crmProductGroup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;againConvertConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;againConvertType&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;popUpGuideLink&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;popUpGuidePic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;popUpGuideBtn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;allocationRuleId&quot;</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;allocationPopPic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://guonei-costest.koocdn.com/flowrate/2023/07/17/52e85500b2f343599e4e8e7a53199477.png&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">411</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八PC端引流二维码&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;adCatId&quot;</span><span class="token operator">:</span> <span class="token number">417</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;专四专八PC端弹窗广告&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adCatType&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;adVos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后刷新页面 可以看到103对应的页面模块已经可以正常展现<br><img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633441016-3527057e-c311-4ae8-9585-759e44813257.png#averageHue=%23e9cfab&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=556&amp;id=u3476bc2c&amp;originHeight=556&amp;originWidth=1919&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=469404&amp;status=done&amp;style=none&amp;taskId=ua9ca8100-9213-4ceb-a34f-338d2cd4411&amp;title=&amp;width=1919" alt="image.png" loading="lazy"></p><h3 id="模拟不同的http状态码" tabindex="-1"><a class="header-anchor" href="#模拟不同的http状态码" aria-hidden="true">#</a> 模拟不同的HTTP状态码</h3><p>除了响应数据，你还可以修改响应的HTTP状态码。在响应部分，找到&quot;状态码&quot;字段，输入你想要模拟的状态码，并点击&quot;应用&quot;按钮。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633481707-a700ae10-d1ba-4b5b-b0d8-246b0b58ae4f.png#averageHue=%23f9f7f6&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=309&amp;id=uc5ff5a5a&amp;originHeight=309&amp;originWidth=576&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=28994&amp;status=done&amp;style=none&amp;taskId=u575094a8-2552-451d-b5aa-f73a80c6bc3&amp;title=&amp;width=576" alt="image.png" loading="lazy"><img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633498389-522cc026-fde5-4998-a16b-4e38cd90581e.png#averageHue=%23787878&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=454&amp;id=u1fdd8f4a&amp;originHeight=454&amp;originWidth=572&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=50083&amp;status=done&amp;style=none&amp;taskId=u77400e85-7f14-4c48-b01d-fa3a150ca14&amp;title=&amp;width=572" alt="image.png" loading="lazy"></p><h3 id="模拟错误场景" tabindex="-1"><a class="header-anchor" href="#模拟错误场景" aria-hidden="true">#</a> 模拟错误场景</h3><p>通过修改响应数据和状态码，你可以模拟各种错误场景，如服务器错误、无网络连接等，以测试应用在不同情况下的行为。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633505197-6c46941a-7e69-474f-b388-24e51370e151.png#averageHue=%23787878&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=454&amp;id=u3692ed5b&amp;originHeight=454&amp;originWidth=572&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=50083&amp;status=done&amp;style=none&amp;taskId=u14e2ca88-9da7-4b4d-9801-7be61740c32&amp;title=&amp;width=572" alt="image.png" loading="lazy"> 修改返回的code 模拟错误场景</p><h2 id="_5-高级功能" tabindex="-1"><a class="header-anchor" href="#_5-高级功能" aria-hidden="true">#</a> 5. 高级功能</h2><h3 id="正则表达式拦截" tabindex="-1"><a class="header-anchor" href="#正则表达式拦截" aria-hidden="true">#</a> 正则表达式拦截</h3><p>在&quot;U-Network&quot;面板的顶部，你会找到一个输入框，允许你使用正则表达式来拦截特定的URL。这对于只拦截满足特定条件的请求非常有用。</p><h3 id="多个规则同时生效" tabindex="-1"><a class="header-anchor" href="#多个规则同时生效" aria-hidden="true">#</a> 多个规则同时生效</h3><p>你可以在&quot;U-Network&quot;面板中设置多个拦截规则，并且它们可以同时生效。这使得你可以同时拦截和修改多个请求。</p><h3 id="请求导入导出" tabindex="-1"><a class="header-anchor" href="#请求导入导出" aria-hidden="true">#</a> 请求导入导出</h3><p>你还可以保存拦截的请求，以便后续分析和测试。 <img src="https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633601787-ae763f83-192d-4971-b403-94bb6e74d36b.png#averageHue=%23faf8f7&amp;clientId=u116f654d-29f8-4&amp;from=paste&amp;height=355&amp;id=u14c63c4b&amp;originHeight=355&amp;originWidth=581&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=34316&amp;status=done&amp;style=none&amp;taskId=u221dda64-1574-4077-9201-7a4449feb57&amp;title=&amp;width=581" alt="image.png" loading="lazy"></p><h2 id="_6-使用案例" tabindex="-1"><a class="header-anchor" href="#_6-使用案例" aria-hidden="true">#</a> 6. 使用案例</h2><h3 id="修复页面上的bug" tabindex="-1"><a class="header-anchor" href="#修复页面上的bug" aria-hidden="true">#</a> 修复页面上的Bug</h3><p>当你在页面上遇到Bug时，你可以使用&quot;U-Network&quot;拦截请求，分析网络请求和响应，找出问题所在，并模拟不同情况以验证修复是否成功。</p>`,45),e=[o];function i(r,c){return a(),s("div",null,e)}const l=n(p,[["render",i],["__file","ajax-interceptor-tools.html.vue"]]);export{l as default};