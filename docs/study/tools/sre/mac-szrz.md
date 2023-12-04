---
icon: edit
date: 2023-12-04
category:
  - 通用技能
tag:
  - Mac
  - Iterm2
star: true
---
# 基础 | szrz

## 安装rz sz 

```shell
brew install lrzsz
```
建立rz、sz软连接到/usr/local/bin

```shell
which rz
```

如果返回结果不是/usr/local/bin , 建议建立软连接

```shell
sudo ln -s /xxxx/xxx/rz /usr/local/bin/
```
其中/xxxx/xxx/rz 为which rz的结果 


## 下载iterm2-recv-zmodem.sh、iterm2-send-zmodem.sh

![图 0](https://cdn.liuhongjiao.cn/images/2023/12/04/mac-szrz/1701651633277.png)  

下载zip包，拿到这两个shell脚本
![图 1](https://cdn.liuhongjiao.cn/images/2023/12/04/mac-szrz/1701651692811.png)  

## 将iterm2-recv-zmodem.sh、iterm2-send-zmodem.sh 放入/usr/local/bin

解压之后
将
iterm2-send-zmodem.sh
iterm2-recv-zmodem.sh

移动到/usr/local/bin/下面

## 配置iterm2

配置iterm2

进入 Preperences --> Profiles–>Advanced找到Triggers点击edit

![图 2](https://cdn.liuhongjiao.cn/images/2023/12/04/mac-szrz/1701651880798.png)  

然后这样进行配置

Regular expression: rz waiting to receive.**B0100

Action: Run Silent Coprocess

Parameters: /usr/local/bin/iterm2-send-zmodem.sh
1
2
3
Regular expression: **B00000000000000

Action: Run Silent Coprocess

Parameters: /usr/local/bin/iterm2-recv-zmodem.sh


![图 3](https://cdn.liuhongjiao.cn/images/2023/12/04/mac-szrz/1701651980112.png)  


**注意**   上面是iterm2-send-zmodem.sh 下面是iterm2-recv-zmodem.sh  一定不能放反位置了 要不然上传下载命令执行也会反着





