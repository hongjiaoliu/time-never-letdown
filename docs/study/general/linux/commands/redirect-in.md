---
icon: edit
date: 2023-09-11
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | 输入重定向

### 入门级别

#### 什么是输入重定向？

输入重定向是一种将文件或命令的输出发送到另一个命令的方法，而不是使用键盘输入。这对于自动化任务和处理大量数据非常有用。

#### 基本语法

```bash
command < input_file
```

- `command` 是要接收输入的命令。
- `<` 符号用于指定输入文件。
- `input_file` 是包含要传递给命令的输入数据的文件。

#### 示例

假设有一个名为 `input.txt` 的文本文件，内容如下：

```
Hello, Linux!
This is an example.
```

我们可以使用输入重定向将该文件的内容传递给 `cat` 命令以查看内容：

```bash
cat < input.txt
```

这将会输出：

```
Hello, Linux!
This is an example.
```

### 进阶级别

#### 使用管道结合输入重定向

输入重定向可以与管道 (`|`) 结合使用，以便将多个命令的输出传递给一个命令。这对于数据处理和过滤非常有用。

#### 示例

假设我们有一个名为 `data.txt` 的文件，包含以下内容：

```
apple
banana
cherry
```

我们可以使用输入重定向和 `grep` 命令来过滤包含特定字母的行：

```bash
cat data.txt | grep "a" > filtered.txt
```

这将会把包含字母 "a" 的行写入名为 `filtered.txt` 的文件中。

### 高级级别

#### 使用 Here 文档

Here 文档是一种高级输入重定向技术，允许您直接在脚本中嵌入多行文本。

#### 示例

```bash
cat << EOF > output.txt
This is line 1.
This is line 2.
EOF
```

这将会创建一个名为 `output.txt` 的文件，并将文本插入其中。

### 总结

输入重定向是Linux中强大的工具，可以帮助您处理文件和命令的输入。从基本的文件输入重定向到结合管道和高级的Here文档，它为自动化和数据处理提供了多种灵活的方式。

希望这个教程对您有所帮助，让您更好地理解和利用Linux的输入重定向功能。
