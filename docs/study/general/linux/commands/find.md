---
icon: edit
date: 2023-08-18
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---
# 基本 | find

## 入门

### 基本用法

`find` 命令用于在文件系统中查找文件和目录。其基本语法如下：

```bash
find [起始目录] [匹配选项] [动作]
```

其中，`起始目录` 是您希望开始查找的目录，`匹配选项` 用于指定搜索条件，`动作` 是在找到匹配项后要执行的操作。

### 查找文件

以下命令将在当前目录及其子目录中查找名为 `filename.txt` 的文件：

```bash
find . -name filename.txt
```

### 查找目录

要查找名为 `dirname` 的目录，可以使用：

```bash
find /path/to/search -type d -name dirname
```

## 进阶

### 条件组合

您可以组合多个条件来更精确地查找文件。例如，查找 `.txt` 文件并限制在特定深度内：

```bash
find /path/to/search -maxdepth 2 -type f -name "*.txt"
```

### 执行动作

您可以在找到匹配项后执行不同的动作，例如删除或执行其他命令。以下示例将删除所有名为 `temp.txt` 的文件：

```bash
find /path/to/search -type f -name "temp.txt" -delete
```

### 使用正则表达式

`find` 还支持正则表达式匹配。以下示例将查找以 `.log` 或 `.txt` 结尾的文件：

```bash
find /path/to/search -type f -regex ".*(.log|.txt)$"
```

## 高阶

### 查找并执行操作

您可以结合 `-exec` 选项来在找到匹配项后执行操作。例如，以下示例将在匹配的文件上执行 `ls -l` 命令：

```bash
find /path/to/search -type f -name "*.txt" -exec ls -l {} ;
```

### 时间过滤

- 您可以使用 `-ctime`、`-mtime` 或 `-atime` 等选项来根据文件的修改、访问和创建时间进行查找(单位为天)

- 您可以使用 `-cmin`、`-mmin` 或 `-amin` 等选项来根据文件的修改、访问和创建时间进行查找(单位为分钟)

**三种时间**
 - a 访问时间 Access Time 
 - m 修改时间（内容） Modify Time 
 - c 变更时间（状态） Change Time  

#### 1. `-ctime` 选项

`-ctime` 选项用于查找在指定天数内状态更改过的文件。状态更改包括文件的权限和所有权更改，不包括文件内容的修改。

```bash
# 查找在过去7天内状态更改过的文件
find /path/to/search -type f -ctime -7
```
#### 2.`-mtime` 选项

`-mtime` 选项用于查找在指定天数内修改过内容的文件。

```
# 查找在过去30天内修改过的文件
find /path/to/search -type f -mtime -30
```
#### 3.`-atime` 选项

`-atime` 选项用于查找在指定天数内被访问过的文件。

```
# 查找在过去14天内被访问过的文件
find /path/to/search -type f -atime -14
```

#### 4.使用 `+` 和 `-`

您还可以使用 + 表示大于指定天数，- 表示小于指定天数。

```
# 查找超过90天未修改过的文件
find /path/to/search -type f -mtime +90

# 查找不到7天内被访问过的文件
find /path/to/search -type f -atime -7

```

#### 5.混合过滤条件
您还可以结合多个过滤条件进行更精确的时间过滤。

```
# 查找在过去30天内修改过内容并且在过去7天内被访问过的文件
find /path/to/search -type f -mtime -30 -atime -7

```

### 结论

通过本教程，您学习了 `find` 命令的基本和高级用法，以及如何在文件系统中查找文件和目录。这将有助于您更有效地管理和组织文件。

以上就是关于 Linux `find` 命令的教程。希望您能够充分利用这个命令，以提升您的文件管理和查找技能。

