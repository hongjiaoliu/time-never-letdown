import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/study/": [
    "",
    {
      text: "一、Core-Java",
      icon: "java",
      collapsible: true,
      children: [
        {
          text: "1.1、基础",
          icon: "note",
          prefix: "core-java/base/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "1.2、集合",
          icon: "note",
          prefix: "core-java/collections/",
          collapsible: true,
          children: "structure",
        },
      ]
    },
    {
      text: "二、Java企业级开发",
      icon: "advance",
      collapsible: true,
      children: [
        {
          text: "2.1、Spring",
          icon: "note",
          prefix: "enterprise/spring/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.2、SpringMVC",
          icon: "note",
          prefix: "enterprise/spring-mvc/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.3、SpringBoot",
          icon: "note",
          prefix: "enterprise/springboot/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.4、Dubbo",
          icon: "note",
          prefix: "enterprise/dubbo/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.5、Nginx",
          icon: "note",
          prefix: "enterprise/nginx/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.6、ElasticSearch",
          icon: "note",
          prefix: "enterprise/es/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.7、ZooKeeper",
          icon: "note",
          prefix: "enterprise/zk/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.8、Docker",
          icon: "note",
          prefix: "enterprise/docker/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "2.9、K8S",
          icon: "note", 
          prefix: "enterprise/k8s/",
          collapsible: true,
          children: "structure",
        },
      ]
    },
    {
      text: "三、数据库",
      icon: "mysql",
      collapsible: true,
      children: [
        {
          text: "3.1、Mysql",
          icon: "note",
          prefix: "db/mysql/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "3.2、Redis",
          icon: "note",
          prefix: "db/redis/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "3.3、MongoDB",
          icon: "note",
          prefix: "db/mongodb/",
          collapsible: true,
          children: "structure",
        },
      ]
    },
    {
      text: "四、通用技能",
      icon: "structure",
      collapsible: true,
      children: [
        {
          text: "4.1、Linux | 常识",
          icon: "note",
          prefix: "general/linux/base",
          collapsible: true,
          children: "structure"
        },
        {
          text: "4.2、Linux | 命令",
          icon: "note",
          prefix: "general/linux/commands",
          collapsible: true,
          children: "structure"
        },
        {
          text: "4.3、Linux | 文件",
          icon: "note",
          prefix: "general/linux/files",
          collapsible: true,
          children: "structure"
        }
      ]
    },
    {
      text: "五、扩展系列",
      icon: "more",
      collapsible: true,
      children: [
        {
          text: "5.1、Python",
          icon: "note",
          prefix: "expand/python/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "5.2、Vue",
          icon: "note",
          prefix: "expand/vue/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "5.3、React",
          icon: "note",
          prefix: "expand/react/",
          collapsible: true,
          children: "structure",
        },
      ]
    },
    {
      icon: "discover",
      text: "踩坑系列",
      prefix: "pits/",
      collapsible: true,
      children: "structure",
    }
  ],
  "/pw/":[
    {
      icon: "blog",
      text: "个人网站搭建",
      // prefix: "pw/",
      collapsible: true,
      children: "structure",
    }
  ],
  "/pits/":[
    {
      icon: "edit",
      text: "踩坑",
      collapsible: true,
      children: "structure",
    }
  ],
  "/essay/":[
    {
      icon: "edit",
      prefix: "work/",
      text: "工作日常",
      collapsible: true,
      children: "structure",
    },
    {
      icon: "edit",
      prefix: "life/",
      text: "生活日常",
      collapsible: true,
      children: "structure",
    }
  ],
  "/":[
    "",
    "about"
  ]

});
