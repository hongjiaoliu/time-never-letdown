---
icon: edit
date: 2023-09-13
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | 三剑客-awk

## 1. awk简介

awk是Linux系统中一种强大的文本处理工具,可以对文本和数据进行格式化处理。awk会将输入的文件或标准输入中的每一行都看作一个记录,然后按指定方式处理文本和数据。

## 2. awk基本用法

awk的基本语法格式如下:
awk 'pattern { action }' file

- pattern表示awk在数据中查找的内容,pattern可以是正则表达式。

- action是在找到匹配内容时所执行的一系列命令。

- file表示要处理的文件。
  示例:找出/etc/passwd文件中 UID 小于1000的用户

  ```shell
  awk -F: '$3 < 1000 {print $1}' /etc/passwd
  ```

  这个命令中,-F指定了字段分隔符为冒号,:。$3表示第3个字段,也就是UID。$1表示用户名。所以这个命令的效果是打印出/etc/passwd文件中UID小于1000的用户名。

## 3. awk内置变量

awk有一些内置变量,可以直接在command action中使用:

- NR:表示当前记录Number,即行号

- NF:表示当前记录的字段总数(列数)

- $0:表示整条记录的内容

- $1-$n:表示当前记录的第n个字段

- FS:字段分隔符,默认是空格
  示例:打印每个用户的UID和用户名

  ```shell
  awk -F ':' '{ print $1,"[",$3,"]" }' /etc/passwd
  ```

  

## 4. awk条件过滤

可以使用一些条件过滤来选择处理哪些行:

- /正则表达式/:匹配正则表达式的行

- 关系表达式:结果为真的行,如 $3 > 1000

- 模式匹配表达式:~表示模式开始。!~表示不匹配模式

- 逻辑运算符:&&(与)、||(或)
  示例:找出UID大于1000的用户

  ```shell
  awk -F: '$3 > 1000 {print $1}' /etc/passwd 
  ```

  

## 5. awk统计求和

awk可以进行数值的统计和求和操作。

- 统计行数:END { print NR }

- 求和:END { print sum }
  示例:统计/etc/passwd文件中用户数

  ```shell
  awk 'END { print NR }' /etc/passwd
  ```

  

求和每个用户的UID:

```shell
awk -F: '{sum+=$3} END {print sum}' /etc/passwd
```



## 6. awk进阶

awk还提供了更多高级功能,如数组、循环等。

- 数组:awk中数组的索引可以是数字也可以是字符串

  ```shell
  awk '{array[$1] = $2} END {for (i in array) {print i, array[i]}}' file
  ```

  

- 循环:awk支持while、do...while、for循环

  ```shell
  awk '{ i = 1; while (i <= 3) {print $1} i++ }' file
  ```

  通过数组和循环,可以进行更复杂的数据统计。awk是Linux中非常强大的数据处理工具。熟练掌握awk,可以大大提高工作效率。

## 7. awk统计分组

awk可以通过关联数组(Associative Arrays)来进行数据分组统计。
示例:统计/etc/passwd每个shell的用户数量
bash

```shell
awk -F':' '{shells[$7]++} END{for(i in shells) print i, shells[i]}' /etc/passwd
```

上例通过shells数组收集了每个shell对应的用户数量,END block打印出结果。

## 8. awk格式化输出

awk可以用print进行格式化输出。

- print:默认输出方式

- printf格式化输出:格式符有%s %d %f等
  示例:格式化输出/etc/passwd的用户信息
  bash

  ```shell
  awk -F':' '{ printf "Username: %s, UID: %s, Home: %s\n", $1, $3, $6 }' /etc/passwd
  ```

  

## 9. awk结合Shell

awk可以和Shell结合使用:

- 命令替代:用awk实现grep,wc等功能

- 变量传递:将Shell变量传递给awk
  示例:用awk实现wc -l功能

  ```shell
  awk 'END{print NR}' file
  ```

  统计文件大小:

  ```bash
  ls -l | awk '{sum+=$5} END{print sum}'
  ```

## 10. awk进阶示例

下面是一个awk的复杂示例:

```bash

awk -F':' '{
  uid[$3]++; 
  if ($7=="/bin/bash") bash_users++;
  if ($3>=1000) {high_uid++; sum_highuid+=$3;}
}
END {
  print "Total users:", NR; 
  print "Total bash users:", bash_users;
  print "Total UID >= 1000:", high_uid;
  print "Average UID >= 1000:", sum_highuid/high_uid;
}' /etc/passwd
```

这段代码统计了:总用户数、bash用户数、UID大于等于1000的用户数和平均值。
awk是一个非常强大和高效的文本处理工具,掌握awk对提高工作效率很有帮助。需要通过大量的练习才能熟练使用。



## 11. awk处理json、xml、csv数据

awk不仅可以处理文本,也可以处理json、xml、csv等结构化数据。

### 处理JSON数据

可以使用jk库解析json:

```bash
bash
awk '
  @include "awk/json.awk"
  @load "json"

  BEGIN{ 
    json = '{"name":"John", "age":30}'
    json2awk(json)
    print json["name"], json["age"]
  }
'
```



### 处理XML数据

使用xk库解析xml:

```bash
awk '
  @include "awk/xml.awk"
  @load "xml"

  BEGIN {
    xml = "<data><name>John</name><age>30</age></data>"
    doc = xml2awk(xml)
    print doc["name"][1], doc["age"][1]
  }
'
```



### 处理CSV数据

设置FS解析csv:

```bash
awk '
  BEGIN {
    FS="," 
  }
  {
    print $1, $2
  } 
' data.csv
```



## 12. awk结合正则表达式

awk的模式中可以使用正则表达式进行复杂匹配:

```bash
awk '/^[a-z]+/ {print $0}' file # 匹配以小写字母开头的行

awk '!/th[eo]n/ {print $0}' file # 不匹配then和theon的行

awk '/foo/ && !/bar/ {print $0}' file # 匹配foo且不匹配bar的行
```

正则表达式让awk的匹配能力大大增强。
熟练使用awk+正则表达式可以在日志或文本处理中大显身手。



## 13. awk结合外部命令

awk可以调用外部Linux命令,结合Linux强大的命令行工具做更复杂的任务。
示例:统计Apache访问日志中前10个IP

```bash
awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -10
```

这个命令结合了sort、uniq、head等命令。
再例如:

```bash
awk '{system("dig +short -x " $1)}' ip.txt
```

这个命令通过dig将IP地址反解为域名。

## 14. awk小技巧

一些简化awk编程的小技巧:

- 变量初始化:

  ```bash
  BEGIN{
  count=0;
  total=0;
  }
  ```

  

- 快速打印:

  ```bash
  print $0 可以简化为 {print}
  ```

  

- 条件语句:
  if(条件){动作} 可以简化为 条件{动作}

- 方便调试:
  打印变量,{print var} 
  打印每行内容,{print $0}

## 15. awk进阶应用

除了文本处理,awk也可以做一些进阶的系统/网络管理工作。

### 系统监控

监测系统负载:

```bash
awk '{print $1 " " $2 " " $3}' /proc/loadavg
```

监测磁盘使用:

```bash
df -h | awk 'NR!=1{print $5}'
```



### 网络监控

监测网站响应时间:

```bash
ping www.example.com -c 5 | awk -F'/' 'END{print "Average: " $4}'
```

分析Apache日志:

```bash
awk '{print $1}' /var/log/apache2/access.log | sort | uniq -c | sort -n
```

### 系统管理

备份配置文件:

```bash
awk '{print "> " $0}' /etc/nginx/nginx.conf > nginx.conf.bak
```

### 日志分析

分析SSH失败登录:

```bash
awk '/Failed/{print $1 " " $2 " " $3}' /var/log/auth.log
```

这些都是awk在系统/网络管理方面的典型应用。熟练掌握awk,对运维工程师非常有帮助。awk允许你用简单的方式完成很多任务。

## 总结

awk是一个非常强大和高效的文本处理语言,熟练掌握awk,运用自如,对Linux系统管理/运维非常有帮助。awk值得你投入时间学习与实践。

