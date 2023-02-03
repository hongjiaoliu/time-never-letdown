import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    {
      text: "一、Core-Java",
      icon: "note",
      collapsible: true,
      children: [
        {
          text: "1.1、基础",
          icon: "note",
          prefix: "core-java/base/",
          children: "structure",
        },
        {
          text: "1.2、集合",
          icon: "note",
          prefix: "core-java/collections/",
          children: "structure",
        },
      ]
    },
    {
      text: "二、Java企业级开发",
      icon: "note",
      collapsible: true,
      children: [
        {
          text: "2.1、Spring",
          icon: "note",
          prefix: "enterprise/spring/",
          children: "structure",
        },
        {
          text: "2.2、SpringMVC",
          icon: "note",
          prefix: "enterprise/spring-mvc/",
          children: "structure",
        },
        {
          text: "2.3、SpringBoot",
          icon: "note",
          prefix: "enterprise/springboot/",
          children: "structure",
        },
        {
          text: "2.4、Dubbo",
          icon: "note",
          prefix: "enterprise/dubbo/",
          children: "structure",
        },
        {
          text: "2.5、Nginx",
          icon: "note",
          prefix: "enterprise/nginx/",
          children: "structure",
        },
        {
          text: "2.6、ElasticSearch",
          icon: "note",
          prefix: "enterprise/es/",
          children: "structure",
        },
        {
          text: "2.7、ZooKeeper",
          icon: "note",
          prefix: "enterprise/zk/",
          children: "structure",
        },
      ]
    },
    {
      text: "三、数据库",
      icon: "note",
      collapsible: true,
      children: [
        {
          text: "3.1、Mysql",
          icon: "note",
          prefix: "db/mysql/",
          children: "structure",
        },
        {
          text: "3.2、Redis",
          icon: "note",
          prefix: "db/redis/",
          children: "structure",
        },
        {
          text: "3.3、MongoDB",
          icon: "note",
          prefix: "db/mongodb/",
          children: "structure",
        },
      ]
    },
    {
      text: "四、通用技能",
      icon: "note",
      collapsible: true,
      children: [
        {
          text: "4.1、Linux | 常识",
          icon: "note",
          prefix: "general/linux/base",
          children: "structure"
        },
        {
          text: "4.2、Linux | 命令",
          icon: "note",
          prefix: "general/linux/commands",
          children: "structure"
        },
        {
          text: "4.3、Linux | 文件",
          icon: "note",
          prefix: "general/linux/files",
          children: "structure"
        }
      ]
    },
    {
      text: "五、扩展系列",
      icon: "note",
      collapsible: true,
      children: [
        {
          text: "5.1、Python",
          icon: "note",
          prefix: "expand/python/",
          children: "structure",
        },
        {
          text: "5.2、Vue",
          icon: "note",
          prefix: "expand/vue/",
          children: "structure",
        },
        {
          text: "5.3、React",
          icon: "note",
          prefix: "expand/react/",
          children: "structure",
        },
      ]
    },
    {
      icon: "discover",
      text: "踩坑系列",
      prefix: "pits/",
      link: "pits/",
      collapsible: true,
      children: "structure",
    },
    "intro"
  ],
});
