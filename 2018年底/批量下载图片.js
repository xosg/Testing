const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path')
const input_file = path.join(__dirname, '古墓丽影图片url列表.txt')



fs.readFile(input_file, 'utf8', function (err, data) {
    if (err) throw err;
    let urlList = data.split('\n');



    for (let url of urlList) {

        let req = http
        if (url.split(':')[0] === 'https') req = https

        req.get(url, resp => {
            let bufList = [];

            resp.on('data', buf => {
                count++
                bufList.push(buf)
            });

            resp.on('end', x => {
                let fullBuf = Buffer.concat(bufList)
                fs.writeFile(path.join(__dirname, 'tomb raider', url.split('/').reverse()[0]), fullBuf, err => {
                    if (err) console.log(err.message)
                    else console.log(url)
                })
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
});