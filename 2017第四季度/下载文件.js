const request = require('request'); //此模块简化了http模块请求
const fs = require('fs');
const path = require('path');


const list = [];


request('https://csdnimg.cn/cdn/content-toolbar/51.jpg').pipe(fs.createWriteStream('/Users/jim001/Desktop/CSDN.jpg'));
