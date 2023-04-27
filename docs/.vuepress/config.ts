import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
import type { HeadConfig } from "vuepress";

const head: HeadConfig[] = [
  ['meta',{name:'baidu_union_verify',content:'0b1f86cf9f95a06866dba08d15b9504d'}]
]

export default defineUserConfig({
  base: "/",
  head:head,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "L - 时光不负",
      description: "哇哩哇哩哇个人博客",
    }
  },

  theme,

  shouldPrefetch: false,
});
