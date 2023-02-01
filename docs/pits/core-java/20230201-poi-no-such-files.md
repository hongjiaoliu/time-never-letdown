---
icon: edit
date: 2023-02-01
category:
  - Server
tag:
  - Java
  - Core-java
  - POI
star: true
---

# POI读取流地址转存临时目录报错

## 一、背景

某项目改造升级上传excle的方式：磁盘挂载—》 存储桶，已上线2个月正常，突然从2023-01-30 凌晨开始报错


## 二、报错


```java
  [2023-01-31 16:50:21.056] {INFO} com.koolearn.message.worker.rocketmq.SmsApplyListener 515 - ========>下载并读取excel, 耗时: 964ms,read excel.
[2023-01-31 16:50:21.071] {ERROR} com.koolearn.message.worker.rocketmq.SmsApplyListener 124 - 发送短信异常, smsApplyId:75648
java.lang.RuntimeException: java.io.IOException: No such file or directory
    at org.apache.poi.xssf.streaming.SXSSFWorkbook.createAndRegisterSXSSFSheet(SXSSFWorkbook.java:628)
    at org.apache.poi.xssf.streaming.SXSSFWorkbook.<init>(SXSSFWorkbook.java:230)
    at org.apache.poi.xssf.streaming.SXSSFWorkbook.<init>(SXSSFWorkbook.java:185)
    at org.apache.poi.xssf.streaming.SXSSFWorkbook.<init>(SXSSFWorkbook.java:160)
    at com.koolearn.message.worker.util.ExcelUtil.<init>(ExcelUtil.java:104)
    at com.koolearn.message.worker.rocketmq.SmsApplyListener.getExcelData(SmsApplyListener.java:518)
    at com.koolearn.message.worker.rocketmq.SmsApplyListener.sendMcApply(SmsApplyListener.java:179)
    at com.koolearn.message.worker.rocketmq.SmsApplyListener.sendApply(SmsApplyListener.java:142)
    at com.koolearn.message.worker.rocketmq.SmsApplyListener.call(SmsApplyListener.java:118)
    at com.koolearn.message.worker.rocketmq.SmsApplyListener.call(SmsApplyListener.java:58)
    at com.koolearn.framework.rocketmq.client.MessageConsumer$_ConsumerCallback.consume(MessageConsumer.java:203)
    at com.koolearn.framework.rocketmq.client.MessageConsumer$AbstractConsumer.consume(MessageConsumer.java:104)
    at com.koolearn.framework.rocketmq.client.MessageConsumer.consumeMessage(MessageConsumer.java:40)
    at com.koolearn.framework.rocketmq.client.RocketMQConsumer$2.consumeMessage$original$1iTnawet(RocketMQConsumer.java:105)
    at com.koolearn.framework.rocketmq.client.RocketMQConsumer$2.consumeMessage$original$1iTnawet$accessor$K1QZCxge(RocketMQConsumer.java)
    at com.koolearn.framework.rocketmq.client.RocketMQConsumer$2$auxiliary$yZCFSMV5.call(Unknown Source)
    at org.apache.skywalking.apm.agent.core.plugin.interceptor.enhance.InstMethodsInter.intercept(InstMethodsInter.java:93)
    at com.koolearn.framework.rocketmq.client.RocketMQConsumer$2.consumeMessage(RocketMQConsumer.java)
    at org.apache.rocketmq.client.impl.consumer.ConsumeMessageConcurrentlyService$ConsumeRequest.run(ConsumeMessageConcurrentlyService.java:411)
    at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)
    at java.util.concurrent.FutureTask.run(FutureTask.java:266)
    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
    at java.lang.Thread.run(Thread.java:748)
Caused by: java.io.IOException: No such file or directory
    at java.io.UnixFileSystem.createFileExclusively(Native Method)
    at java.io.File.createTempFile(File.java:2024)
    at org.apache.poi.util.TempFile$DefaultTempFileCreationStrategy.createTempFile(TempFile.java:105)
    at org.apache.poi.util.TempFile.createTempFile(TempFile.java:60)
    at org.apache.poi.xssf.streaming.SheetDataWriter.createTempFile(SheetDataWriter.java:80)
    at org.apache.poi.xssf.streaming.SheetDataWriter.<init>(SheetDataWriter.java:63)
    at org.apache.poi.xssf.streaming.SheetDataWriter.<init>(SheetDataWriter.java:68)
    at org.apache.poi.xssf.streaming.SXSSFWorkbook.createSheetDataWriter(SXSSFWorkbook.java:292)
    at org.apache.poi.xssf.streaming.SXSSFSheet.<init>(SXSSFSheet.java:69)
    at org.apache.poi.xssf.streaming.SXSSFWorkbook.createAndRegisterSXSSFSheet(SXSSFWorkbook.java:624)
    ... 23 more
```

## 三、定位

关键点在于这两行

```java
Caused by: java.io.IOException: No such file or directory
	at java.io.UnixFileSystem.createFileExclusively(Native Method)
```

定位源码至poi读取文件字节流转存到服务器临时目录，如果没有特殊指定为：linux系统为：/tmp， 对应的系统变量为：System.getProperty("java.io.tmpdir")

查看服务器上该文件确实不存在，后经重启应用后便恢复正常。

## 四、经验

+ 牢记线上问题黄金法则：出现线上问题，如近期有上线先无脑回滚；如近期无上线，则先无脑重启。
+ POI转存excle读取的系统临时目录，可以通过重启应用解决不存在的问题。