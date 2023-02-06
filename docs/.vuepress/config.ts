import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/./",

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
