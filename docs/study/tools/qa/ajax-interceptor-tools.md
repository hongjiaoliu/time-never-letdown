---
icon: edit
date: 2023-09-13
category:
  - 提效工具
tag:
  - QA工具
  - 提效
star: true
---

# Chrome插件 Ajax Interceptor Tools使用教程
## 概述
在前端开发中，调试和拦截Ajax请求是非常重要的一部分。Chrome插件"Ajax Interceptor Tools"可以帮助开发人员轻松地拦截、修改和分析页面中的Ajax请求。本教程将从入门到高阶，逐步介绍如何使用该插件进行前端测试。
## 1. 安装插件
### 下载插件文件
首先，你需要下载"Ajax Interceptor Tools"插件的压缩文件（通常是一个.zip文件）。你可以在插件的官方网站或开源代码库中找到下载链接。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632688799-cbcc9370-033c-4313-b79e-d8f3613d6ad3.png#averageHue=%23fafafa&clientId=u116f654d-29f8-4&from=paste&height=386&id=u44fc150f&originHeight=386&originWidth=1311&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52967&status=done&style=none&taskId=u48c57cb0-c2f5-4a23-86ee-cc3c4aeef84&title=&width=1311)
### 安装插件到Chrome浏览器

1. 解压下载的插件文件到一个目录中。
2. 打开Chrome浏览器，在地址栏中输入`chrome://extensions/`并按下回车键。
3. 在扩展程序页面的右上角，启用"开发者模式"。
4. 点击页面左上角的"加载已解压的扩展程序"按钮。
5. 在弹出的文件选择对话框中，选择刚刚解压的插件目录并确认。
## 2. 基本拦截
### 打开开发者工具
在Chrome浏览器中，按下`F12`键或右键点击页面并选择"检查"，即可打开开发者工具。
### 导航到Ajax Interceptor Tools面板
在开发者工具中，你将看到一个选项卡，名为"U-Network"（Ajax Interceptor Tools）。点击该选项卡以打开插件的面板。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632802437-afadd0ae-82f6-42f0-bcd4-8c679de103ca.png#averageHue=%23f7f8f9&clientId=u116f654d-29f8-4&from=paste&height=311&id=u7df82077&originHeight=311&originWidth=1423&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32273&status=done&style=none&taskId=u51aece4f-079a-4860-8eea-64db99b75db&title=&width=1423)
### 开启拦截功能
在面板的顶部，你会看到一个开关按钮，用于启用或禁用拦截功能。确保该按钮处于启用状态，以开始拦截Ajax请求。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632843429-9b72cfed-c43a-4c13-904b-5b331a09fc72.png#averageHue=%23f6f7f8&clientId=u116f654d-29f8-4&from=paste&height=292&id=u83cc3af1&originHeight=292&originWidth=1180&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29323&status=done&style=none&taskId=u005c4b19-519f-44e4-b8b0-6167dff485d&title=&width=1180)
### 查看拦截的请求
刷新页面或触发页面上的某些操作，以触发Ajax请求。在"U-Network"面板上，你将看到列出的请求列表。点击其中一个请求，以查看其详细信息，包括URL、请求方法、参数等。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691632887005-985f388f-6258-47c8-b23c-62d6659bbe0a.png#averageHue=%23f0f1f3&clientId=u116f654d-29f8-4&from=paste&height=144&id=uf12ed5ae&originHeight=144&originWidth=1870&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33292&status=done&style=none&taskId=u6b97b5b3-baeb-4cec-b61a-f514de2d888&title=&width=1870)
然后点对应请求的Action按钮  配置拦截信息，本例以api/v2/project/project-ad接口为例
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633052626-a87845fb-a263-4b60-ad89-f92b08e134e3.png#averageHue=%233dca65&clientId=u116f654d-29f8-4&from=paste&height=161&id=u3757ce5f&originHeight=161&originWidth=1919&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36982&status=done&style=none&taskId=u2328ac98-1903-4101-9248-9d387ece6b3&title=&width=1919)
弹出
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633123888-18c6108c-f95b-441d-ac6f-b5093cc41498.png#averageHue=%23fafaf9&clientId=u116f654d-29f8-4&from=paste&height=712&id=u6e4abbe7&originHeight=712&originWidth=1919&originalType=binary&ratio=1&rotation=0&showTitle=false&size=131751&status=done&style=none&taskId=u268a2fb5-7fd4-4c1a-a4ad-a430d70288c&title=&width=1919)
## 3. 修改请求
### 拦截请求后的操作
在"U-Network"面板中，你可以针对拦截到的请求执行多种操作。你可以暂停拦截、清除已拦截的请求，或者开始拦截之前清除现有的请求。
### 修改请求参数
点击某个请求，在请求详细信息页面中，你可以看到请求的参数。你可以直接编辑这些参数，然后点击"应用"按钮，以应用修改后的参数。
### 修改请求头部
除了参数，你还可以修改请求的头部信息。在请求详细信息页面中，找到"请求头部"部分，编辑头部字段并点击"应用"按钮。
## 4. 模拟响应
### 自定义响应数据
在"U-Network"面板中，你不仅可以拦截请求，还可以模拟响应。点击请求，然后在响应部分编辑响应数据。你可以输入JSON、XML等数据格式，以模拟服务器返回的响应。
比如本实例中，我需要修改原有的response
修改前response，着重看adCatId：103的部分，我需要手动修改其返回值，添加adVos集合
```json
{
"code": 0,
"msg": "请求成功",
"data": [
{
"adCatId": 102,
"adCatName": "专四专八课表PC端-轮播图",
"adCatType": 1,
"adVos": [
{
"adJumpType": 3,
"linkUrl": "https://www.koolearn.com/product/c_104_152589.html",
"couponCode": "",
"productId": "",
"popUpGuideDefault": true,
"popUpGuideTxt": "",
"popUpGuidePic": "",
"popUpGuideLink": "",
"id": 428,
"adName": "专四专八课表PC端-轮播图",
"adContent": "",
"onlineTime": 1640853929000,
"offlineTime": 1735634730000,
"crmFlag": false,
"crmTemplateId": "",
"imgUrl": "https://guonei-cos.koocdn.com/flowrate/2023/02/24/365ffcae595744139d4c529e4a4a8d4f.png",
"popBtn": "",
"popupBtnVos": "",
"allocationRuleId": "",
"allocationPopWap": "",
"allocationPopPc": "",
"crmFirstSource": "1",
"crmSecondSource": "",
"crmProductGroup": "16",
"againConvertConfig": ""
}
]
},
{
"adCatId": 103,
"adCatName": "专四专八课表PC端-优惠券",
"adCatType": 2,
"adVos": ""
},
{
"adCatId": 411,
"adCatName": "专四专八PC端引流二维码",
"adCatType": 2,
"adVos": ""
},
{
"adCatId": 417,
"adCatName": "专四专八PC端弹窗广告",
"adCatType": 4,
"adVos": ""
}
]
}
```
修改后：
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": [
        {
            "adCatId": 102,
            "adCatName": "专四专八课表PC端-轮播图",
            "adCatType": 1,
            "adVos": [
                {
                    "adJumpType": 3,
                    "linkUrl": "https://www.koolearn.com/product/c_104_152589.html",
                    "couponCode": "",
                    "productId": "",
                    "popUpGuideDefault": true,
                    "popUpGuideTxt": "",
                    "popUpGuidePic": "",
                    "popUpGuideLink": "",
                    "id": 428,
                    "adName": "专四专八课表PC端-轮播图",
                    "adContent": "",
                    "onlineTime": 1640853929000,
                    "offlineTime": 1735634730000,
                    "crmFlag": false,
                    "crmTemplateId": "",
                    "imgUrl": "https://guonei-cos.koocdn.com/flowrate/2023/02/24/365ffcae595744139d4c529e4a4a8d4f.png",
                    "popBtn": "",
                    "popupBtnVos": "",
                    "allocationRuleId": "",
                    "allocationPopWap": "",
                    "allocationPopPc": "",
                    "crmFirstSource": "1",
                    "crmSecondSource": "",
                    "crmProductGroup": "16",
                    "againConvertConfig": ""
                }
            ]
        },
        {
            "adCatId": 103,
            "adCatName": "专四专八课表PC端-优惠券",
            "adCatType": 2,
            "adVos": [
                {
                    "adJumpType": 2,
                    "linkUrl": "",
                    "couponCode": "27284e3c7b7ed1cc",
                    "productId": "",
                    "popUpGuideDefault": true,
                    "popUpGuideTxt": "",
                    "popUpGuidePic": "https://guonei-osstest.koocdn.com/flowrate/2022/01/13/30ac698781804085a66e2ca1394bfbba.jpg",
                    "popUpGuideLink": "https://m.koolearn.com/",
                    "id": 303,
                    "adName": "23考研课表头图优惠券区-左边",
                    "adContent": "",
                    "onlineTime": 1640332772000,
                    "offlineTime": 1711954436000,
                    "crmFlag": true,
                    "crmTemplateId": "",
                    "imgUrl": "https://guonei-osstest.koocdn.com/flowrate/2021/12/30/3875fc7072cb4e0f914fe0e923c7fc6e.jpg",
                    "popBtn": "",
                    "popupBtnVos": "",
                    "allocationRuleId": "",
                    "allocationPopWap": "",
                    "allocationPopPc": "",
                    "crmFirstSource": "14",
                    "crmSecondSource": "优惠券600-2个产品单价200",
                    "crmProductGroup": "16",
                    "againConvertConfig": {
                        "againConvertType": 1,
                        "popUpGuideLink": "",
                        "popUpGuidePic": "",
                        "popUpGuideBtn": "",
                        "allocationRuleId": 21,
                        "allocationPopPic": "https://guonei-costest.koocdn.com/flowrate/2023/07/17/52e85500b2f343599e4e8e7a53199477.png"
                    }
                }
            ]
        },
        {
            "adCatId": 411,
            "adCatName": "专四专八PC端引流二维码",
            "adCatType": 2,
            "adVos": ""
        },
        {
            "adCatId": 417,
            "adCatName": "专四专八PC端弹窗广告",
            "adCatType": 4,
            "adVos": ""
        }
    ]
}
```
然后刷新页面 可以看到103对应的页面模块已经可以正常展现  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633441016-3527057e-c311-4ae8-9585-759e44813257.png#averageHue=%23e9cfab&clientId=u116f654d-29f8-4&from=paste&height=556&id=u3476bc2c&originHeight=556&originWidth=1919&originalType=binary&ratio=1&rotation=0&showTitle=false&size=469404&status=done&style=none&taskId=ua9ca8100-9213-4ceb-a34f-338d2cd4411&title=&width=1919)
### 模拟不同的HTTP状态码
除了响应数据，你还可以修改响应的HTTP状态码。在响应部分，找到"状态码"字段，输入你想要模拟的状态码，并点击"应用"按钮。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633481707-a700ae10-d1ba-4b5b-b0d8-246b0b58ae4f.png#averageHue=%23f9f7f6&clientId=u116f654d-29f8-4&from=paste&height=309&id=uc5ff5a5a&originHeight=309&originWidth=576&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28994&status=done&style=none&taskId=u575094a8-2552-451d-b5aa-f73a80c6bc3&title=&width=576)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633498389-522cc026-fde5-4998-a16b-4e38cd90581e.png#averageHue=%23787878&clientId=u116f654d-29f8-4&from=paste&height=454&id=u1fdd8f4a&originHeight=454&originWidth=572&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50083&status=done&style=none&taskId=u77400e85-7f14-4c48-b01d-fa3a150ca14&title=&width=572)
### 模拟错误场景
通过修改响应数据和状态码，你可以模拟各种错误场景，如服务器错误、无网络连接等，以测试应用在不同情况下的行为。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633505197-6c46941a-7e69-474f-b388-24e51370e151.png#averageHue=%23787878&clientId=u116f654d-29f8-4&from=paste&height=454&id=u3692ed5b&originHeight=454&originWidth=572&originalType=binary&ratio=1&rotation=0&showTitle=false&size=50083&status=done&style=none&taskId=u14e2ca88-9da7-4b4d-9801-7be61740c32&title=&width=572)
修改返回的code  模拟错误场景  
## 5. 高级功能
### 正则表达式拦截
在"U-Network"面板的顶部，你会找到一个输入框，允许你使用正则表达式来拦截特定的URL。这对于只拦截满足特定条件的请求非常有用。
### 多个规则同时生效
你可以在"U-Network"面板中设置多个拦截规则，并且它们可以同时生效。这使得你可以同时拦截和修改多个请求。
### 请求导入导出
你还可以保存拦截的请求，以便后续分析和测试。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12790529/1691633601787-ae763f83-192d-4971-b403-94bb6e74d36b.png#averageHue=%23faf8f7&clientId=u116f654d-29f8-4&from=paste&height=355&id=u14c63c4b&originHeight=355&originWidth=581&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34316&status=done&style=none&taskId=u221dda64-1574-4077-9201-7a4449feb57&title=&width=581)
## 6. 使用案例
### 修复页面上的Bug
当你在页面上遇到Bug时，你可以使用"U-Network"拦截请求，分析网络请求和响应，找出问题所在，并模拟不同情况以验证修复是否成功。

