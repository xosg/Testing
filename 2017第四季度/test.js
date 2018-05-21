let request = require('request');
let readline = require('readline');
let fs = require('fs');

let urlList = [];
let nameList = [];

let k1 = false, k2 = false;

let rl1 = readline.createInterface({
    input: fs.createReadStream('/Users/jim001/Desktop/name.txt')
});

rl1.on('line', (line) => {  //注意,此事件读取外设,很慢(延后执行)
    nameList.push(line);
});

rl1.on('close', () => {


    let rl2 = readline.createInterface({
        input: fs.createReadStream('/Users/jim001/Desktop/URLList.txt')
    });

    rl2.on('line', (line) => {
        urlList.push(line);
    });


    rl2.on('close', main);
});

let main = () => {
    for (let i = 0; i < 15; i++) {
        let url = urlList[i];
        request(url).pipe(fs.createWriteStream(`/Users/jim001/Desktop/提示音/${nameList[i]}.${url.match(/[^.]+$/)[0]}`));
    }
};
