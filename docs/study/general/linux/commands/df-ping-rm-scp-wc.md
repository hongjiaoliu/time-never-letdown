---
icon: edit
date: 2023-03-16
category:
  - 通用技能
tag:
  - Linux
  - Linux命令
star: true
---

# 基本 | df/ping/rm/scp/wc

1.df命令（disk free）显示目前在 Linux 系统上的文件系统磁盘使用情况统计
-h, --human-readable 使用人类可读的格式(预设值是不加这个选项的...)
-H, --si 很像 -h, 但是用 1000 为单位而不是用 1024
2.ping
http://confluence.koolearn-inc.com/display/daxue/ping
3.命令：rm（英文全拼：remove）
1）命令格式：
rm [选项] 文件… 
2）命令功能：
删除一个目录中的一个或多个文件或目录，如果没有使用- r选项，则rm不会删除目录。如果使用 rm 来删除文件，通常仍可以将该文件恢复原状。
3）命令参数：
    -f, --force    忽略不存在的文件，从不给出提示。
    -i, --interactive 进行交互式删除
    -r, -R, --recursive   指示rm将参数中列出的全部目录和子目录均递归地删除。
    -v, --verbose    详细显示进行的步骤
4.scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。
用法：
scp [可选参数] file_source file_target 
参数：
● -1： 强制scp命令使用协议ssh1
● -2： 强制scp命令使用协议ssh2
● -4： 强制scp命令只使用IPv4寻址
● -6： 强制scp命令只使用IPv6寻址
● -B： 使用批处理模式（传输过程中不询问传输口令或短语）
● -C： 允许压缩。（将-C标志传递给ssh，从而打开压缩功能）
● -p：保留原文件的修改时间，访问时间和访问权限。
● -q： 不显示传输进度条。
● -r： 递归复制整个目录。
● -v：详细方式显示输出。scp和ssh(1)会显示出整个过程的调试信息。这些信息用于调试连接，验证和配置问题。
● -c cipher： 以cipher将数据传输进行加密，这个选项将直接传递给ssh。
● -F ssh_config： 指定一个替代的ssh配置文件，此参数直接传递给ssh。
● -i identity_file： 从指定文件中读取传输时使用的密钥文件，此参数直接传递给ssh。
● -l limit： 限定用户所能使用的带宽，以Kbit/s为单位。
● -o ssh_option： 如果习惯于使用ssh_config(5)中的参数传递方式，
● -P port：注意是大写的P, port是指定数据传输用到的端口号
● -S program： 指定加密传输时所使用的程序。此程序必须能够理解ssh(1)的选项。
例子：
scp a.txt testscp.txt wangning@10.155.19.141:/home/wangning 拷贝a.txt到远程
scp -r ./abc testscp.txt wangning@10.155.19.141:/home/wangning 拷贝abc目录到远程服务器
scp -P 22 -C ./abc testscp.txt wangning@10.155.19.141:/home/wangning 指定端口 并打开压缩功能，拷贝abc目录到远程服务器
5.命令：wc（英文全拼world count）
1）语法：
     wc [-clw][--help][--version][文件...]；
2）命令功能：
      用于计算字数，也可以统计文件数量；
3）参数：
     c或--bytes或--chars 只显示Bytes数。
       -l或--lines 显示行数。
      -w或--words 只显示字数。
例子：
1.统计文件字数：
$ wc testfile testfile_1 testfile_2  #统计三个文件的信息  
3 92 598 testfile                    #第一个文件行数为3、单词数92、字节数598  
9 18 78 testfile_1                   #第二个文件的行数为9、单词数18、字节数78  
3 6 32 testfile_2                    #第三个文件的行数为3、单词数6、字节数32  
15 116 708 总用量                    #三个文件总共的行数为15、单词数116、字节数708
4）统计文件数量：
ls -l ｜grep “a*” ｜wc -l