---
icon: edit
date: 2023-09-25
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | mv

# Linux mv命令详解教程

## 一、mv命令简介

mv(move)命令用于对文件或目录进行移动或重命名。

## 二、mv语法

mv的基本语法如下:
```
mv [选项] 源文件 目标文件
mv [选项] 源文件... 目标目录
```

### 2.1 常用选项

- -f:强制移动,不提示确认
- -i:交互模式,移动前询问用户确认
- -u:只在源文件比较新时更新目标文件
- -v:显示移动过程
- -b:备份,若目标文件存在,先备份后覆盖
- -n:不覆盖目标文件

## 三、mv使用示例

### 3.1 移动文件到指定目录

```
mv file1.txt mydir/
```

### 3.2 移动多个文件到指定目录

```
mv file1.txt file2.txt mydir/
```

### 3.3 对文件重命名

```
mv file1.txt fileone.txt
```

### 3.4 移动目录及其内容

```
mv mydir/ outputdir/
```

### 3.5 强制移动不提示

```
mv -f file1.txt mydir/
```

### 3.6 移动前备份目标文件

```
mv -b file1.txt file2.txt
```

### 3.7 不覆盖目标文件

```
mv -n file1.txt file2.txt
```

## 四、mv实战案例

### 4.1 移动多个日志文件到指定目录

```
mv access.log error.log /var/log/
```

### 4.2 对文件改名

```
mv install.log installed.log
```

### 4.3 强制移动目录

```
mv -f backup/ old/
```

## 五、mv注意事项

- 确认源文件存在,目标目录存在
- mv不会提示文件已存在,直接覆盖
- 注意mv操作的目录权限

## 六、总结

mv命令可以便捷地对文件和目录进行移动和重命名。掌握mv各种选项的使用,可以大大提高我们的工作效率