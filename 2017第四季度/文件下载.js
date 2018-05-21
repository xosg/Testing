const http = require('http');
const express = require('express');
const fs = require("fs");
let port = 3000;
let exec = require('child_process').exec;   //子进程调用shell命令
const app = express();
app.get('/download/*', function (req, res, next) {

    //第一种方式
    //var f="F:/ftproot/NW.js.docx";
    //var f="f:/ftproot/我是中文的语言.txt"
    ////var f = req.params[0];
    //f = path.resolve(f);
    //console.log('Download file: %s', f);
    //res.download(f);

    //第二种方式
    const path = "/Users/jim001/Desktop/简历/素材图片/最终版.png";
    const frs = fs.createReadStream(path);
    res.writeHead(200, {
        'Content-Type': 'application/force-download',   //强制下载
        'Content-Disposition': 'attachment; filename=myphoto.png'
    });
    frs.pipe(res);  //输入流管道通向输出流(http请求和响应都是流)

});

http.createServer(app).listen(port);
console.log(`下载请访问:\nhttp://localhost:${port}/download/test`);
setTimeout(() => {
    exec(`open http://localhost:${port}/download/test`, (error, stdout, stderr) => {
        // 获取命令执行的输出
    })
}, 150);