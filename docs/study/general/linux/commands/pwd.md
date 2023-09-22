---
icon: edit
date: 2023-09-22
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | pwd

## 一、命令介绍

pwd(print working directory)命令用于显示用户当前所在目录的绝对路径。

## 二、命令格式

```
pwd [选项]
```

## 三、命令选项

| 选项 | 含义                                  |
| ---- | ------------------------------------- |
| -L   | 显示逻辑工作目录,输出时跟随符号链接   |
| -P   | 显示物理工作目录,输出时不跟随符号链接 |

## 四、使用示例

1. 显示当前工作目录

   ```
   pwd
   ```

   输出:

   ```
   /home/user
   ```

2. 比较不同选项效果
   目录结构:

   ```shell
   /home/user/
              realdir/ 
              linkdir -> realdir
   ```

   输出对比:

   ```shell
   # 默认行为(-L) 
   
   pwd
   /home/user/linkdir
   
   # 使用-P参数
   
   pwd -P  
   /home/user/realdir
   
   ```

## 五、常见用途

- 在脚本中获取当前工作目录
- 和cd命令配合使用切换目录
- 理解目录符号链接的区别

## 六、注意事项

- 输出路径不包含结尾斜杠/
- 显示的是shell进程的工作目录,而不是脚本进程的目录
  综合起来,PWD命令用法并不复杂,但掌握其参数和细节用法,可以帮助我们更好地运维管理Linux系统。