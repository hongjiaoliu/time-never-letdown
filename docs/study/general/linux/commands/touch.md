---
icon: edit
date: 2023-09-15
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | touch
## 介绍

`touch` 命令是一个常用的Linux工具，用于创建新的空文件或者更新已有文件的时间戳。它有多种选项，包括 `-a`、`-c`、`-d`、`-r`、`-m` 和 `-t`，可以帮助你在不同场景下灵活使用。

## 基本用法

### 创建新文件

要创建一个新文件，只需指定文件名作为 `touch` 命令的参数，如下所示：

```

touch filename.txt
```

### 更新文件时间戳

如果要更新已有文件的访问和修改时间戳，可以使用 `touch` 命令，如下：

```

touch existing_file.txt
```

## 高级用法

### 使用 `-a` 选项

`-a` 选项用于更新访问时间戳（atime）。以下是示例：

```

touch -a existing_file.txt
```

### 使用 `-c` 选项

`-c` 选项用于仅在文件不存在时才创建文件。如果文件已经存在，`touch` 不会进行任何操作。示例：

```

touch -c new_file.txt
```

### 使用 `-d` 选项

`-d` 选项用于指定日期时间以及文件名，以创建或更新文件的时间戳。示例：

```

touch -d "2023-09-13 15:30:00" existing_file.txt
```

### 使用 `-r` 选项

`-r` 选项用于从另一个文件复制时间戳。以下示例将 `existing_file.txt` 的时间戳复制到 `new_file.txt`：

```

touch -r existing_file.txt new_file.txt
```

### 使用 `-m` 选项

`-m` 选项用于更新修改时间戳（mtime）。示例：

```

touch -m existing_file.txt
```

### 使用 `-t` 选项

`-t` 选项允许你指定一个自定义的时间戳，格式为 `[CC]YY]MMDDhhmm[.ss]`。示例：

```

touch -t 202309131530.00 existing_file.txt
```

## 常见用例

### 创建一个新的日志文件

```

touch new_log.txt
```

### 更新配置文件的访问时间

```

touch -a config.ini
```

### 复制一个文件的时间戳到另一个文件

```

touch -r template.txt new_document.txt
```

### 指定特定的日期和时间来更新文件时间戳

```

touch -d "2023-09-13 15:30:00" important_file.txt
```

这是一个关于 `touch` 命令的基本教程，它涵盖了常见的选项和用法。你可以根据自己的需求进一步探索该命令的其他选项和功能。

