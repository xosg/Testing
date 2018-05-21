const http = require('http');
const fs = require('fs');
const url = require('url');
const mime = require('mime');

http.createServer(function (request, response) {

    //这里拼接的意义是,此文件所在目录作为网站根目录
    let localFile = __dirname + url.parse(request.url).pathname;
    //同步查询文件-->决定之后走向
    if (!fs.existsSync(localFile)) {
        console.log(localFile);
        response.end('file not exist !!');
        console.log('404');
        return;
    }
    response.writeHead(200, {'Content-Type': mime.getType(localFile)});
    response.end(fs.readFileSync(localFile));

}).listen(8888);

console.log('Server running at \nhttp://127.0.0.1:8888/');