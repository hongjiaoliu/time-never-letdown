---
icon: edit
date: 2023-09-18
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | xargs

## 1. xargs 命令简介

`xargs` 命令用于将输入数据转换为命令行参数。它能够处理管道或stdin并将其转换为特定命令的命令行参数。
xargs命令的基本语法如下:
```shell
xargs [options] [command]
```
xargs命令会将stdin的内容转换为命令行参数,这些参数会被传递给指定的命令command。如果不指定command,默认命令是echo。

## 2. xargs命令用法

### 2.1 将find命令结果作为xargs参数

find命令通常与xargs命令配合使用,例如:
```shell
find . -type f -name "*.py" | xargs ls -l
```
这条命令会将find查找到的所有py文件列表通过管道传递给xargs,xargs再将文件列表作为参数传递给ls -l命令。

### 2.2 将stdin作为参数

可以将stdin传递给xargs:
```shell
echo "foo bar" | xargs echo
```
这条命令会将"foo bar"作为参数传递给echo命令。

### 2.3 -I 选项:替换参数

使用 `-I` 选项可以将每个参数替换为一个指定字符串,例如:
```shell
find . -type f | xargs -I {} cp {} /backup
```
这条命令会将找到的所有文件复制到/backup目录,其中{}会被替换为每个文件路径。

### 2.4 -n 选项:指定一次处理的参数个数

使用 `-n` 选项可以指定每次传递给命令的参数个数,例如:
```shell
find . -type f | xargs -n 3 cp {} /backup
```
这条命令每次将3个文件路径作为参数传递给cp命令。

### 2.5 -P 选项:并行执行

使用 `-P` 选项可以并行执行命令,例如:
```shell
find . -type f | xargs -P 4 -n 1 echo
```
这条命令会以4个进程并行执行echo命令。

### 2.6 -0 选项:使用null分隔参数

find命令的`-print0`选项输出使用null分隔的参数,配合xargs的`-0`选项可以正确处理包含空格等特殊字符的文件:
```shell
find . -type f -print0 | xargs -0 ls -l
```
## 3. xargs命令高级用法

### 3.1 指定定界符

使用`-d`选项可以指定输入的定界符,例如输入使用逗号分隔:
```shell
echo "foo,bar,baz" | xargs -d ',' echo
```

### 3.2 控制每次执行的参数个数

- -L 选项:根据行数控制参数个数
  ```shell
  xargs -L 3 echo
  ```
- -n 选项:根据参数个数控制参数个数
    ```shell
    xargs -n 3 echo
    ```

### 3.3 重复执行命令

- 使用`-r`选项将命令重复执行指定次数:
  ```shell
  echo "foo bar" | xargs -r 3 echo
  ```

### 3.4 用`xargs`将命令结果拼接成一行输出

默认情况下,`xargs` 会将每个参数的输出结果分行显示。如果要将所有结果拼接到一行,可以:
```shell
find . -type f | xargs -I {} echo -n '{} ' 
```
加上`-n`选项,echo不会换行,从而将输出拼到一行。

### 3.5 用xargs排除某些文件

可以用`grep -v`排除某些文件后,再将结果传给xargs:
```shell
find . -type f | grep -v 'tmp' | xargs ls -l
```
这样可以不列出临时文件tmp。

### 3.6 用xargs处理 输入包含空格的文件

对于文件路径包含空格的文件,可以:
```shell
find . -print0 | xargs -0 rm
```
find使用-print0打印null字节作为文件名分隔符,xargs使用-0选项,可以正确处理包含空格的文件。

### 3.7 限制xargs命令的最大进程数

使用-P选项可以限制xargs同时起的进程数:
```shell
echo {1..10} | xargs -n 3 -P 2 echo
```

## 4. xargs命令的错误处理

### 4.1 检查每个命令是否执行成功

xargs默认即使个别命令失败也会继续执行后面的命令。要检查每个命令是否成功执行:
```shell
find . -type f | xargs -I {} sh -c 'cp {} /backup || exit 255'
```
用`sh -c`执行命令,如果失败就退出状态码255。

### 4.2 在命令前面加echo

可以在命令前加`echo`,打印出即将执行的命令:
```shell
find . -type f | xargs -I {} echo cp {} /backup
```
这可以避免直接执行可能有错误的命令。

### 4.3 测试命令行长度

某些系统有最大命令行长度限制,可以先用`xargs -t`测试一下命令长度:
```shell
find . -type f | xargs -t cp {} /backup
```
-t会打印出执行的命令,不执行。

### 4.4 设置最大命令行长度

使用`-s`选项可以设置最大命令行长度,如果超过这个限制会报错:
```shell
find . -type f | xargs -s 100 cp {} /backup 
```
以上是`xargs`命令错误处理的一些方法,可以避免命令执行错误。正确使用xargs可以大大提高我们的工作效率。