# webnev
适用在网吧一键安装前端开发环境,需要先安装node,兼容windows,mac
因为本人长期在网吧敲代码 所以才开发的这个项目  


[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/web-env-cli)

## 具体功能  
+ 判断平台  
+ 下载cnpm  
+ 下载yarn  
+ 下载git  
+ 下载vsc  
+ git项目克隆

##  使用  
``` js
  npm install web-env-cli
```

## 注意  
+ 过程中用到axios 下载软件 下载完毕后没用的东西可以删掉
+ git版本指定了'2.16.3' 可以去改 但是不一定能下载的了 具体要看git的官网链接 和镜像地址
+ vsc 指定了1.22.2版本 想下其他版本 需要自己去改
+ config.gitAddresses 是个数组 可以填上一些项目地址 直接批量下载项目
  + 如果没填 就手动输入项目地址英文逗号分隔
+ 下载时间根据自己的网速 (我公司的网络大概2-3分钟才能下载完)