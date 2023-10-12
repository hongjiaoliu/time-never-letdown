---
icon: edit
date: 2023-10-12
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基础 | chown

## 一、命令简介

chown命令用于变更文件或目录的所属用户和所属组。

## 二、语法

```
chown [OPTION]... [OWNER][:[GROUP]] FILE...
```

## 三、参数

- OWNER:指定新的文件所属用户
- GROUP:指定新的文件所属组
- FILE:要改变所属用户和所属组的文件或目录
  **常用选项:**
- -R:递归处理,将指定目录下的所有文件及子目录一并处理
- -c:显示更改的部分的信息
- -v:显示详细的处理信息
- --help:显示帮助信息
- --version:显示版本信息

## 四、使用示例

1. 将文件file1的所属用户改为user1:

   ```
   chown user1 file1
   ```

2. 将目录dir1和其子目录及文件所有所属用户都改为user1:

   ```
   chown -R user1 dir1
   ```

3. 将文件file1的所属组改为group1:

   ```
   chown :group1 file1
   ```

4. 将目录dir1及其子目录下所有文件所属用户改为user1,所属组改为group1:

   ```
   chown -R user1:group1 dir1
   ```

5. 只改变文件file1的所属组为group1:

   ```
   chown .:group1 file1
   ```
6. 其他
    ```shell
    chown mail:mail log2012.log
    chown -R -v root:mail test6
    chown :mail log2012.log
    chown root: log2012.log
    chown root testshown 把 /home/user/testshown 的所有者设置 root
    chown root:root testshown1  将文件testshown1的拥有者设为 root，群体的使用者 root
    chown -R root:root *  将当前前目录下的所有文件与子目录的拥有者皆设为 root，群体的使用者 root
    chown :1001 /home/user/testshown 把 /home/user/testshown 的关联组设置为 1001 （关联组ID），不改变所有者
    ```

## 五、注意事项

- 只有文件所有者或超级用户可以改变文件所属用户和所属组
- 改变目录的所属用户和组,其下的子文件和子目录的所属用户和组也会同时改变
- 使用chown时要注意文件和目录的访问权限

## 六、总结

chown是一个很常用的管理文件所属用户和组的命令,需要理解其语法和各个选项的含义,结合实际情况使用,才能发挥它的作用。掌握了chown,可以更好地管理系统中的文件权限。