---
icon: edit
date: 2023-03-16
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基础 | chown/vim/cat 


## chown

命令：

```shell
chown（更改用户及用户组，全拼：change owner）
chown [-cfhvR] [--help] [--version] user[:group] file...
参数：
user : 新的文件拥有者的使用者 ID
group : 新的文件拥有者的使用者组(group)
-c : 显示更改的部分的信息
-f : 忽略错误信息
-h :修复符号链接
-v : 显示详细的处理信息
-R : 处理指定目录以及其子目录下的所有文件
--help : 显示辅助说明
--version : 显示版本
```

示例：

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

## vim 

### 常用基本操作

```shell
i: 在当前光标所在字符的前面，转为输入模式；    

a: 在当前光标所在字符的后面，转为输入模式；    

o: 在当前光标所在行的下方，新建一行，并转为输入模式；   

 I：在当前光标所在行的行首，转换为输入模式    

A：在当前光标所在行的行尾，转换为输入模式    

O：在当前光标所在行的上方，新建一行，并转为输入模式；
```

### ESC模式下

```shell
yy ：复制 （yy前面可加数字，例如:2yy复制两行，）

p: 粘贴

dd:删除(同yy)

ctrl + v:列选中（列选中模式下，复制是y,删除是d）

shift +v 行选中 （操作同上）

g:回到文件最上面

G：到大文件最后

shift + ^ :行开始

shift + $ :行尾部

批量操作：

选中模式下shift + i/a/o 输入内容，按ESC即可
```

## cat 

```shell
英文：concatenate）命令用于连接文件并打印到标准输出设备上。

语法格式：cat [-AbeEnstTuv] [--help] [--version] fileName；

参数说明：

-n 或 --number：由 1 开始对所有输出的行数编号。

-b 或 --number-nonblank：和 -n 相似，只不过对于空白行不编号。

-s 或 --squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行。

-v 或 --show-nonprinting：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。

-E 或 --show-ends : 在每行结束处显示 $。

-T 或 --show-tabs: 将 TAB 字符显示为 ^I。

-A, --show-all：等价于 -vET。

-e：等价于"-vE"选项；

-t：等价于"-vT"选项
```

实例：

```shell
cat -n textfile1 > textfile2

cat -b textfile1 textfile2 >> textfile3

cat /dev/null > /etc/test.txt      //清空文件内容

cat IMG_FILE > /dev/fd0         //把image_file写到软盘
```



