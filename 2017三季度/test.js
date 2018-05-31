
let http = require('http');

http.get('http://www.41242342.com/', function (res) {
    res.setEncoding('binary');//转成二进制
    var content = '';
    res.on('error',(err)=>{
        console.log(err);
        process.exit(0);
    })
    res.on('data', function (data) {
        content += data;
    }).on('end', function () {
        let fileName = 'test.' + res.headers["content-type"].match('[^/]*$')[0];
        fs.writeFile(diretory + fileName, content, 'binary', function (err) {
            if (err) { };
            console.log('保存');
            // sleep.msleep(parseInt(Math.random()*1000));
        });
        // loop(++i);
    });

    // console.log('helloworld');
}).on('error',(err)=>{
    console.log(err);
    // process.exit(0);
    console.log('helloworld');
});


//同步发生错误需要catch //Uncaught error
//异步发生错误需要监听error事件 //Unhandled 'error' event