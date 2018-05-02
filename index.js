
const util = require('util');
const process=require('process');
const path=require('path');
const fs=require('fs');

const exec = util.promisify(require('child_process').exec); 

const config = {
    gitV:'2.16.3',
    gitAddresses:[]
}

class OneKey {
    constructor(){
        this.platform='windows';
    }
    // 判断平台
    whatPlatform(){
        switch(process.platform){
            case 'win32':
                this.platform='windows';
                break;
            case 'darwin':
                this.platform='mac'
                break;
            default:
                throw new Error('暂不兼容除了windows,mac外的其他操作系统')
        }
        console.log('当前操作系统是: '+this.platform)
    }
    // 下载cnpm
    async downloadCNPM(){
        try{// console.log('已经安装cnpm')
            await exec('cnpm')
        }catch(error){//如果没有安装cnpm
            await exec('npm install -g cnpm --registry=https://registry.npm.taobao.org')
                .catch(rej=>{throw new Error('cnpm初始化错误'+rej)})
        }
        console.log('cnpm初始化完毕')
    }
    // 下载yarn
    async downloadYARN(){
        try{// console.log('已经安装cnpm')
            await exec('yarn')
        }catch(error){//如果没有安装cnpm
            await exec('npm install -g yarn')
                .catch(rej=>{throw new Error('yarn初始化错误'+rej)})
        }
        console.log('yarn初始化完毕')
    }
    // 下载npm模块
    async downloadModules(){
        try {
            require('axios');
        } catch (error) {
            await exec('yarn add axios')
                .catch(rej=>{throw new Error('axios初始化错误'+rej)})
        }
        console.log('axios初始化完毕')
    }
    // 下载git
    async downloadGit(){
        let name, url, openMethod;
        switch(this.platform){
            case 'windows':
                name='Git-'+config.gitV+'-64-bit.exe'
                openMethod='start '+name
                url='https://npm.taobao.org/mirrors/git-for-windows/v'+config.gitV+'.windows.1/Git-'+config.gitV+'-64-bit.exe'
                break;
            case 'mac':
                name='git-'+config.gitV+'-intel-universal-mavericks.dmg';
                openMethod='open '+name
                url='https://jaist.dl.sourceforge.net/project/git-osx-installer/git-'+config.gitV+'-intel-universal-mavericks.dmg'
                break;
        }
        await this.download(url,name)
        console.log('git初始化完毕')
        exec(openMethod)
    }
    // 下载vsc
    async downloadVSC(){
        let name, url, openMethod;
        switch(this.platform){
            case 'windows':
                name='VSCodeSetup-ia32-1.22.2.exe'
                openMethod='start '+name
                url='https://vscode.cdn.azure.cn/stable/3aeede733d9a3098f7b4bdc1f66b63b0f48c1ef9/VSCodeSetup-ia32-1.22.2.exe'
                break;
            case 'mac':
                name='VSCode-darwin-stable.zip';
                openMethod='open '+name
                url='https://vscode.cdn.azure.cn/stable/3aeede733d9a3098f7b4bdc1f66b63b0f48c1ef9/VSCode-darwin-stable.zip'
                break;
        }
        await this.download(url,name)
        console.log('vscode初始化完毕')
        exec(openMethod)
    }
    // git 克隆
    gitCloneAddress(){
        let readable=process.stdin;
        let { gitAddresses } = config;
        try{
            if(gitAddresses.length>0){
                gitAddresses.forEach(_gitAddress=>{
                    exec('git clone '+_gitAddress)
                })
            }else{
                readable.resume();//开启输入
                console.log('> 请输入git项目地址 多个则用英文逗号隔开: ')
                readable.once('data',function(data) {
                    gitAddresses=data.toString().split(',')
                    gitAddresses.forEach(_gitAddress=>{
                        exec('git clone '+_gitAddress)
                    })
                    readable.pause()
                })
            }
        }catch(err){
            throw new Error('git clone 错误'+err)
        }
    }
    // 检测下载函数
    async download(_url,_name){
        let axios = require('axios')
        if(!fs.existsSync(_name)){
            await axios({
                url:_url,
                responseType:'arraybuffer',
            }).then(res=>{
                fs.writeFile(_name,res.data)
            }).catch(rej=>{throw new Error(_name+'下载错误'+rej)})
        }
    }
    // 初始化
    init(){
        this.whatPlatform()
        this.downloadCNPM()
        this.downloadYARN()
        .then(()=>this.downloadModules())
        .then(()=>Promise.all([this.downloadGit(),this.downloadVSC()]).then(()=>{}))
        .then(()=>{this.gitCloneAddress()})
        // .catch(process.exit(1))
    }
}

var one = new OneKey();
one.init();