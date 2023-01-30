import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "一、Core-Java",
      icon: "note",
      collapsible: true,
      children: [
        {
          text: "1.1、集合",
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
          prefix: "spring/",
          children: "structure",
        },
        {
          text: "2.2、SpringMVC",
          icon: "note",
          prefix: "spring-mvc/",
          children: "structure",
        },
        {
          text: "2.3、SpringBoot",
          icon: "note",
          prefix: "springboot/",
          children: "structure",
        },
        {
          text: "2.4、Dubbo",
          icon: "note",
          prefix: "dubbo/",
          children: "structure",
        },
        {
          text: "2.5、Nginx",
          icon: "note",
          prefix: "nginx/",
          children: "structure",
        },
        {
          text: "2.6、ElasticSearch",
          icon: "note",
          prefix: "es/",
          children: "structure",
        },
        {
          text: "2.7、ZooKeeper",
          icon: "note",
          prefix: "zk/",
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
          text: "Mysql",
          icon: "note",
          prefix: "db/mysql/",
          children: "structure",
        },
        {
          text: "Redis",
          icon: "note",
          prefix: "db/redis/",
          children: "structure",
        },
        {
          text: "MongoDB",
          icon: "note",
          prefix: "db/mongodb/",
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
