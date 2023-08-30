---
icon: edit
date: 2023-08-28
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | cat

`cat`（concatenate的缩写）是一个用于查看、合并文件内容的命令，通常在命令行终端中使用。以下是从入门到高阶的`cat`命令详细讲解。

## 入门

### 1. 查看单个文件内容

要查看一个文件的内容，只需在命令行中输入以下命令：

```bash
cat 文件名
```

例如，要查看文件`file.txt`的内容，可以执行以下命令：

```bash
cat file.txt
```

## 进阶

### 2. 查看多个文件内容

你可以同时查看多个文件的内容，只需在命令中列出它们的名称：

```bash
cat 文件1 文件2 文件3
```

例如：

```bash
cat file1.txt file2.txt file3.txt
```

### 3. 合并文件内容

`cat` 命令也可以用于合并多个文件的内容，并将合并后的结果输出到标准输出（通常是终端）或者写入到一个新文件中：

```bash
cat 文件1 文件2 > 合并后文件
```

例如：

```bash
cat file1.txt file2.txt > merged_file.txt
```

## 高阶

### cat命令参数详解

`cat`（concatenate的缩写）是一个用于查看、合并文件内容的命令，它还支持一些参数来修改输出的方式。以下是这些参数的详细教程。

#### -b 参数

`-b` 参数会在输出的每一行前面加上行号，但会忽略空白行。

```bash
cat -b 文件名
```

#### -n 参数

`-n` 参数会在输出的每一行前面加上行号，不会忽略空白行。

```bash
cat -n 文件名
```

#### -s 参数

`-s` 参数会将连续多个空行合并成一个空行。

```bash
cat -s 文件名
```

#### -E 参数

`-E` 参数会在每一行的结尾显示一个 `$` 符号，用于表示行尾。

```bash
cat -E 文件名
```

#### -T 参数

`-T` 参数会将制表符（Tab字符）显示为 `^I`。

```bash
cat -T 文件名
```

#### -A 参数

`-A` 参数相当于同时使用 `-vET` 参数，会显示非打印字符，并在每一行的结尾显示 `$` 符号。

```bash
cat -A 文件名
```

---

### 5. 将内容追加到文件

使用`>>`操作符可以将 `cat` 命令的输出内容追加到现有文件中：

```bash
cat 文件1 >> 目标文件
```

例如：

```bash
cat file.txt >> target_file.txt
```

## 总结

通过`cat`命令，你可以查看文件的内容，合并文件内容以及在输出中显示行号。无论是在入门阶段还是在高级用法中，`cat`都是一个非常有用的命令。
---