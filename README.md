# web-env-cli
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
```
  npm install -g web-env-cli

  cd ~/Desktop  //进入到桌面

  webenv init  //下载vsc , git , 你的项目到桌面
```

## 注意  
+ 下载链接可能会因为307跳转而导致下载失效，如果失效可以提交bug
+ git版本指定了'2.16.3' 可以去改 但是不一定能下载的了 具体要看git的官网链接 和镜像地址
+ vsc 指定了1.22.2版本 想下其他版本 需要自己去改
+ config.gitAddresses 是个数组 可以填上一些项目地址 直接批量下载项目
  + 如果没填 就手动输入项目地址英文逗号分隔  
  `E.g. git clone http://username1:password1@127.0.0.1/res/res.git1,git clone http://username2:password2@127.0.0.1/res/res.git2`
+ 下载时间根据自己的网速 (我公司的网络大概2-3分钟才能下载完)