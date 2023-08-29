---
icon: edit
date: 2023-08-29
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | tar

`tar` 是一个用于创建和提取归档文件（压缩文件）的命令，通常在命令行终端中使用。以下是从入门到高阶的`tar`命令详细讲解。

## 入门

### 1. 创建归档文件

要创建一个归档文件，可以使用以下命令：

```bash
tar -cvf 目标文件名 源文件1 源文件2 ...
```

例如，要创建一个名为`archive.tar`的归档文件，包含文件`file1.txt`和`file2.txt`，可以执行以下命令：

```bash
tar -cvf archive.tar file1.txt file2.txt
```

## 进阶

### 2. 提取归档文件内容

要从归档文件中提取内容，可以使用以下命令：

```bash
tar -xvf 归档文件名
```

例如，要从`archive.tar`中提取内容，可以执行以下命令：

```bash
tar -xvf archive.tar
```

### 3. 列出归档文件内容

你可以使用以下命令来列出归档文件中的内容：

```bash
tar -tvf 归档文件名
```

例如：

```bash
tar -tvf archive.tar
```

## 高阶

### 4. 压缩归档文件

要将归档文件压缩，可以使用以下命令：

```bash
tar -czvf 压缩文件名.tar.gz 源文件1 源文件2 ...
```

例如，要将文件`file1.txt`和`file2.txt`创建为压缩文件`archive.tar.gz`，可以执行以下命令：

```bash
tar -czvf archive.tar.gz file1.txt file2.txt
```

### 5. 解压缩归档文件

要解压缩压缩的归档文件，可以使用以下命令：

```bash
tar -xzvf 压缩文件名.tar.gz
```

例如，要解压缩压缩文件`archive.tar.gz`，可以执行以下命令：

```bash
tar -xzvf archive.tar.gz
```

### 6. 压缩和解压指定目录

你可以使用 `-C` 选项来指定要在哪个目录下进行压缩或解压缩操作：

```bash
tar -czvf 压缩文件名.tar.gz -C 指定目录 源文件1 源文件2 ...
tar -xzvf 压缩文件名.tar.gz -C 指定目录
```

## 总结

通过`tar`命令，你可以轻松创建、提取和管理归档文件，还可以进行压
