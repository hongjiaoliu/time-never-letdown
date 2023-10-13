---
icon: edit
date: 2023-10-13
category:
  - FE
tag:
  - 桌面应用开发
  - electron
---

# Electron 概览

您好,我尝试根据您的要求编写了一篇 Electron 技术文章的Markdown格式文本:
# Electron - 桌面应用开发框架
## 背景
随着 web 技术的发展,越来越多的开发者开始使用 web 技术来开发桌面应用。相比传统的桌面应用开发方式,使用 web 技术开发桌面应用有许多优势:
- 前端工程师可以利用已掌握的 web 技术开发桌面应用
- 代码可重用性高,前后端统一使用 web 技术开发
- 跨平台,利用 Electron 可以使同一代码打包生成 Windows、Mac 和 Linux 多个平台的安装包
- 更简单、高效的开发流程,开发调试过程使用熟悉的 web 技术
Electron 正是在这个背景下诞生的,它为使用 web 技术开发桌面应用提供了解决方案。
## Electron 简介
Electron 由 GitHub 开发,采用 JavaScript、HTML 和 CSS 等 web 技术进行桌面应用开发。
通过将 Chromium 和 Node.js 合并到同一个运行时环境中,Electron 允许使用 HTML、CSS 和 JavaScript 构建完整的桌面应用程序。应用运行在使用 web 页面作为 GUI 的 Chromium 浏览器中,可以访问 Node.js 提供的后端功能。
Electron 架构包括:
- **Main Process**: 主进程,用于创建和管理 BrowserWindow 实例等功能。
- **Renderer Process**: 渲染进程,每个 web 页面运行在独立的渲染进程中。
- **Main和Renderer进程间通信**: 通过IPC通道进行通信。
## 开发桌面应用步骤
使用 Electron 开发桌面应用的基本步骤如下:
1. 安装 Electron

   ```bash
   npm install electron --save-dev
   ```

2. 创建主程序文件 main.js

   ```js
    const {app, BrowserWindow} = require('electron')
   
      function createWindow () {
        const win = new BrowserWindow()
   
        win.loadFile('index.html')
   
      }
   
      app.on('ready', createWindow)
     
   ```

   main.js 作为主进程,在应用启动时被执行,用于创建浏览器窗口及其它初始化工作。
3. 创建网页文件 index.html
   

```html
 <!DOCTYPE html>
   <html>
   <head>
     <meta charset="UTF-8">
     <title>Hello World!</title>
   </head>
   <body>
     <h1>Hello World!</h1> 
     We are using node <script>document.write(process.versions.node)</script>,
     Chrome <script>document.write(process.versions.chrome)</script>,
     and Electron <script>document.write(process.versions.electron)</script>.
   </body>
   </html>
```


   显示在浏览器窗口中的网页 UI 内容。
4. 打包和运行
   - 运行
     
     ```bash
     electron .
     ```
     
     
     在开发阶段,可以直接运行以试运行应用。
     
   - 打包
     使用 [electron-packager](https://github.com/electron/electron-packager) 或 [electron-builder](https://www.electron.build/) 生成对应平台的应用安装文件。
     以上就是使用 Electron 开发桌面应用的基本步骤。Electron 提供了一系列丰富的 API 用于访问底层操作系统功能,可以建立功能强大的桌面应用。
## 适用场景
Electron 适用于:
- 需要使用 native 功能的跨平台工具或应用程序,如文件系统访问、系统通知等
- 基于 web 技术栈的应用程序,希望搭载成桌面应用分发
- 对界面样式有特殊需求的应用程序
- 开发需要统一浏览器环境的应用程序
许多知名的桌面
- 应用都是使用 Electron 开发的,例如:
  - Visual Studio Code
  - Slack
  - Discord
  - Twitch
  - WhatsApp
  - Microsoft Teams
  等。
  Electron 凭借其跨平台、易于集成 web 技术栈的特点,被广泛应用于桌面应用的开发。随着 Electron 的不断发展,它还在吸引更多的开发者加入到桌面应用的开发中。
  ## 总结
  Electron 通过将 Chromium 和 Node.js 合并到同一个运行环境,极大地简化了使用 web 技术开发跨平台桌面应用程序的复杂度。它拥有庞大的用户群和活跃的开源社区。
  要开发出功能强大、体验优良的 Electron 应用,开发者需要充分利用好 Electron 提供的丰富的原生 API,同时结合 web 技术的优势,做出最佳的技术选择。
  对于许多需要跨平台、希望整合 web 技术的桌面应用来说,Electron 无疑是一个不错的选择。随着Electron 的发展,相信会有越来越多的优秀桌面应用出现。
