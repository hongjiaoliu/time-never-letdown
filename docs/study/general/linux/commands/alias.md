---
icon: edit
date: 2023-11-09
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---
# 基础 | alias

### 1. alias命令简介

alias命令用于设置命令的别名,可以用来创建方便记忆和使用的命令缩写。
基本语法:

```
alias 别名='原命令' 
```

### 2. alias命令使用详解

- 设置别名 

  ```bash
  alias 别名='原命令'
  ```

- 查看已定义的所有别名

  ```bash
  alias
  
  ```

- 删除指定的别名

  ```bash
  unalias 别名
  ```

- 使别名立即生效

  ```bash
  source ~/.bashrc
  ```

### 3. 软件工程师工作场景

#### (1) Git相关

- git分支切换缩写

  ```bash
  alias gcm='git checkout master'
  alias gcd='git checkout develop' 
  ```

- git add和git commit缩写 

  ```bash
  alias ga='git add'
  alias gc='git commit'
  ```

- git状态查看缩写

  ```bash
  alias gs='git status'
  ```

- git pull请求缩写

  ```bash
  alias gpo='git pull origin' 
  ```

#### (2) 目录切换缩写

```bash
alias dotfiles='cd ~/.dotfiles'  
alias projects='cd ~/projects'
```

#### (3) Python解释器快捷启动 

```bash
alias py='python'
```

#### (4) 常用工具查找缩写

```bash
alias ff='find . -name' 
```

#### (5) Vim编辑器快捷键 

```bash
alias v='vim'
alias sv='sudo vim' 
```

#### (6) 常用包管理工具

```bash
 alias pipu='pip uninstall'
alias pipi='pip install'
alias npmi='npm install'
```

#### (7) Docker管理缩写

```bash
alias dbu='docker build' 
alias di='docker images'
alias drun='docker run'
```

#### (8) 系统监控指标

```bash
alias meminfo='free -lm'
alias cpuinfo='lscpu'
```

#### (9) 网络连接工具

```bash
alias myip='curl ipinfo.io/ip'
alias speedtest='speedtest-cli' 
```


以上借助alias命令的设置可以大大提高软件工程师的工作效率,强烈建议将常用的alias设置添加到~/.bashrc文件中,实现永久保存。

### 4. 保存并生效

将设置好的alias添加到~/.bashrc文件最后:

```bash
vim ~/.bashrc
```

# 添加alias

```
alias ll='ls -alF' 
```

# 保存并退出

```
source ~/.bashrc # 使alias生效
```


### 5.其他

```bash
-='cd -'
...=../..
....=../../..
.....=../../../..
......=../../../../..
1='cd -1'
2='cd -2'
3='cd -3'
4='cd -4'
5='cd -5'
6='cd -6'
7='cd -7'
8='cd -8'
9='cd -9'
_='sudo '
afind='ack -il'
diff='diff --color'
egrep='egrep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
fgrep='fgrep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
globurl='noglob urlglobber '
grep='grep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
history=omz_history
l='ls -lah'
la='ls -lAh'
ll='ls -lh'
ls='ls -G'
lsa='ls -lah'
md='mkdir -p'
mvnc='mvn clean'
mvncc='mvnc compile'
mvncc-d='mvncc -P dev'
mvncc-p='mvncc -P product'
mvncc-r='mvncc -P release'
mvncc-t='mvncc -P test'
mvncd='mvnc deploy'
mvncd-d='mvncd -P dev'
mvncd-p='mvncd -P product'
mvncd-r='mvncd -P release'
mvncd-t='mvncd -P test'
mvnci='mvnc install'
mvnci-d='mvnci -P dev'
mvnci-p='mvnci -P product'
mvnci-r='mvnci -P release'
mvnci-t='mvnci -P test'
mvncp='mvnc package'
mvncp-d='mvncp -P dev'
mvncp-p='mvncp -P product'
mvncp-r='mvncp -P release'
mvncp-t='mvncp -P test'
python=python3
rd=rmdir
run-help=man
st='open -a /Applications/Sublime\ Text.app'
which-command=whence
```