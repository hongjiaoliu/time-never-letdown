---
icon: edit
date: 2023-01-31
category:
  - Server
tag:
  - Python
  - Core-python
---

# 如何识别python版本与pip版本

## 查询python版本

```shell
 python -V
```

输出 

```shell
Python 2.7.5
```

## 查询pip在哪里 

```shell
whereis pip3
```

输出

```shell
pip3: /usr/bin/pip3 /usr/bin/pip3.6
```

## 查询pip对应的python

```shell
cat /usr/bin/pip3
```

输出

```shell
#!/usr/bin/python3

# -*- coding: utf-8 -*-
import re
import sys

try:
    from pip import main
except ImportError:
    # user has most probably upgraded pip in their home
    # so let them run it anyway until ~/.local/bin makes it in front of the PATH
    from pip._internal import main

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(main())
```

关注一下第一行,指明了python路径

```shell
#!/usr/bin/python3
```