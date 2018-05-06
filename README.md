# web-env-cli
适用在网吧一键安装前端开发环境,需要先安装node,兼容32位和64位windows和mac,  
纯原生node,无依赖,一百多行代码超级精简,npm一秒下载  
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
  npm install -g web-env-cli  //全局安装

  cd ~/Desktop  //进入到桌面 或指定目录

  webenv init  //下载vsc , git , 记得先把git安装了
  // 因为git是即时安装的 所以环境变量不一定即时生效  重新开一个窗口再敲一遍webenv init 才能克隆成功  
  git clone https://github.com/username/sth.git  //填写你的git项目地址 私有项目可以填入账号密码 克隆到桌面  

  git clone https://github.com/username/sth.git,git clone https://username:password@github.com/username/sth.git  //同时克隆多个项目需要逗号分隔
```

## 注意  
+ git安装后git的环境变量不一定即时生效 所以可能需要重开一个 shell窗口再敲一遍`webenv init`  
+ npm在个别网吧也是可能会出现环境变量没有生效而出现cnpm下载失败 也是要重开窗口再敲一遍`webenv init`
+ 下载链接可能会因为307跳转而导致下载失效，如果失效可以提交bug  
+ git版本指定了'2.16.3' 可以去改 但是不一定能下载的了 具体要看git的官网链接 和镜像地址
+ vsc 指定了1.23.0版本 想下其他版本 需要自己去改
+ config.gitAddresses 是个数组 可以填上一些项目地址 直接批量下载项目
  + 如果没填 就手动输入项目地址英文逗号分隔  
+ 下载时间根据自己的网速 (我公司的网络大概2-3分钟才能下载完)
+ 克隆项目失败可能是有相同的文件名