//使用最新版的模块
//推荐模块api查询网站:
//npm.taobao.org
const mime = require('mime');
//...经测试,只是根据路径名称(更准确说是后缀名)判断mime的,没有读取文件....
console.log(mime.getType('/test/Users/jim001/Desktop/简历/金恒昱的简历(web)14.pdf'));