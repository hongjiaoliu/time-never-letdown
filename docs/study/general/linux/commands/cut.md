---
icon: edit
date: 2023-11-10
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---
# 基础 | cut

# Linux命令：cut教程

Cut 是一个在 Linux 系统中常用的文本处理工具，主要用于提取文本中的某个部分。

## 入门篇

### cut命令基本格式

```
cut [选项]... [文件]...
```

### cut命令选项

- `-d`：指定字段分隔符，默认是制表符。
- `-f`：选择要显示的字段。
- `-c`：以字符为单位进行分割。

### cut命令的基本使用

假设我们有一个叫做 `data.txt` 的文件，其内容如下：

```text
John,Doe,120 jefferson st.,Riverside, NJ, 08075
Jack,McGinnis,220 hobo Av.,Phila, PA,09119
"John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075
Stephen,Tyler,"7452 Terrace ""At the Plaza"" road",SomeTown,SD, 91234
```

1. 我们使用 `-d` 选项来指定 `,` 作为字段分隔符，并使用 `-f` 选项来选择显示第一和第二字段：

```bash
cut -d ',' -f 1,2 data.txt
```

输出：

```text
John,Doe
Jack,McGinnis
"John ""Da Man""",Repici
Stephen,Tyler
```

2. 如果我们想要选择显示文本的某个字符范围，我们可以使用 `-c` 选项：

```bash
cut -c 1-10 data.txt
```

输出：

```text
John,Doe,12
Jack,McGin
"John ""Da
Stephen,Tyl
```

## 进阶篇

### 使用 cut 命令与其他命令配合

1. 使用 `cut` 命令与 `sort` 命令配合，可以对文本进行排序：

```bash
cut -d ',' -f 1,2 data.txt | sort
```

2. 使用 `cut` 命令与 `grep` 命令配合，可以对文本进行过滤：

```bash
cut -d ',' -f 1,2 data.txt | grep John
```

3. 使用 `cut` 命令与 `awk` 命令配合，可以进行复杂的文本处理：

```bash
awk -F ',' '{print $1,$2}' data.txt | cut -d ' ' -f 1
```

### 面向软件工程师常用场景

1. 提取日志的特定字段

如果你的日志格式是以空格分隔的，你可以使用 `cut` 命令来提取特定的字段。例如，你想要提取下面日志行的第4个字段：

```text
127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
```

你可以使用如下命令：

```bash
echo '127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326' | cut -d ' ' -f 4
```

2. 提取文件的特定列

如果你有一个CSV文件，你可以使用 `cut` 命令来提取特定的列。例如，你想要提取下面CSV文件的第2列：

```
Name,Age,Location
Alice,20,New York
Bob,30,Los Angeles
Charlie,40,San Francisco
```

你可以使用如下命令：

```bash
cut -d ',' -f 2 data.csv
```

以上就是 cut 命令的基本使用方法，希望对你有所帮助。

