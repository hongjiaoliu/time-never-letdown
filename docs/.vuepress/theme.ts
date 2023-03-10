import { hopeTheme } from "vuepress-theme-hope";
import { Navbar} from "./navbar.js";
import { Sidebar} from "./sidebar.js";

export default hopeTheme({
  hostname: "https://liuhongjiao.cn",

  // 全局默认作者
  author: {
    name: "哇哩哇哩哇",
    url: "https://liuhongjiao.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoLabel: "GitHub",

  docsDir: "docs",
  docsBranch: "master",

  // 全屏按钮
  fullscreen: true,
  // 在深色模式，浅色模式和自动之间切换 (默认)
  darkmode: "switch",
  // 纯净模式，会禁用一些花哨的动画以及一些色彩
  // pure: true,

  // 阿里妈妈图标的前缀
  iconPrefix: "iconfont icon-",
  // Iconfont 精选图标 和 阿里妈妈的互斥
  // iconAssets: "iconfont",

  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime"],

  blog: {
    // 个人介绍页地址
    // intro: "/about-the-author/",
    // sidebarDisplay: "mobile",
    // 圆角
    // roundAvatar: true,
    medias: {
      Email: "69611188@163.com",
      Gitee: "https://gitee.com/maohoo",
      GitHub: "https://github.com/hongjiaoliu",
    },
  },
  
  sidebar:"heading",

  locales: {
    "/": {
      // navbar
      navbar: Navbar,

      // sidebar
      sidebar: Sidebar,

      // 页脚支持
      footer: '<div style="width:600px;margin:0 auto; padding:20px 0;"><a target="_blank" href="https://beian.miit.gov.cn/"  style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">冀ICP备2023002189号-1</p></a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011402013606" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/beian_icon.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京公网安备 11011402013606号</p></a></div>',
      displayFooter: true,

      blog: {
        description: "人生的道路从来不会一成不变，有坦途，也必然有曲径；有阳光，也必然有云雨；有过去，势必有明天。不要奢望只活在阳光里，没有雨露滋润的生命岂能成长。",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "在GitHub上编辑",
      },
    }

  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,
    // 该插件会监听页面滚动事件。当页面滚动至某个 标题锚点 后，如果存在对应的 标题链接 ，那么该插件会将路由 Hash 更改为该 标题锚点 。
    // activeHeaderLinks: true,
    // copyright: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "hongjiaoliu/time-never-letdown",
      repoId: "R_kgDOIz2AxQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIz2Axc4CT9Av",
    },
 

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    }
  }
});
