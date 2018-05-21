//express_demo.js 文件
const express = require('express');
const app = express();
const child = require('child_process');

app.get('/', function (req, res) {  //访问根目录就是没有路径的域名
    res.setHeader("content-Type", "text/html");
    res.setHeader("Cache-control", "no-cache");
    res.send('<h1>Hello World</h1>');
});

const server = app.listen(8081, function () {

    // const host = server.address().address;
    const port = server.address().port;

    console.log(`应用实例，访问地址为 \nhttp://localhost:${port}`);

    child.exec(`open http://localhost:${port}`);
});