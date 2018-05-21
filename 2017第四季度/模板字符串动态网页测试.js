const http = require('http');
const url = require('url');
const index = require('./view/主页');

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/html'});

    // 发送响应数据 "Hello World"
    response.end(index.indexStr(url.parse(request.url, true).query));
}).listen(8888);

// 终端打印如下信息
console.log('http://127.0.0.1:8888/?name=Jim');