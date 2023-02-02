import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "L - 时光不负",
      description: "哇哩哇哩哇个人博客",
    }
  },

  theme,

  shouldPrefetch: false,
});
