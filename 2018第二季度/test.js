const request = require('request');
const fs = require('fs');

let fileName = '';

let stream = request.get('http://imgsrc.baidu.com/imgad/pic/item/dcc451da81cb39db04544f6adb160924ab183071.jpg')
    .on('response', (res) => {
        fileName = res.headers["content-type"].replace('/','.');
        stream.pipe(fs.createWriteStream(`./${fileName}`));
    })

        //输出返回的内容
        // console.log(body);
        // fs.writeFile('./pic.jpeg',body);