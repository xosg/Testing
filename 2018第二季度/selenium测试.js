/* 
/* 官方文档:
/* https://seleniumhq.github.io/selenium/docs/api/javascript/
/* 
 * * * * * * * * * * */

const request = require('request');
const fs = require('fs');
const sleep = require('sleep');
const http = require('http');

var { Builder, By, until, Key } = require('selenium-webdriver');


const type = ['jpeg', 'jpg', 'png', 'gif'];

let keyword = 'dog';
let amount = 30;
let diretory = './pic/';

var driver = new Builder().forBrowser('firefox').build();
//会在本目录寻找驱动文件

(async function main() {


    await driver.get('https://pic.baidu.com');
    //Creates a condition that will loop until an element is found with the given locator.
    await driver.wait(until.elementLocated({ css: '#kw' }), 3000, '网络响应超时');
    driver.findElement(By.id('kw')).sendKeys(keyword, Key.RETURN).then(() => {
        (function loop() {
            driver.executeScript('window.scrollTo(0,document.body.scrollHeight)');
            driver.sleep(500);
            // driver.findElement({ css: 'body' }).sendKeys(Key.PAGE_DOWN);
            // if (driver.findElements({ css: '#wrapper #imgContainer #imgid .imgpage .imglist .imgitem' }).length > 30)
            // break;
            driver.executeScript("return document.querySelectorAll('#wrapper #imgContainer #imgid .imgpage .imglist .imgitem').length").then((l) => {
                if (l >= amount) {
                    // console.log(l);
                    driver.executeScript(`return Array.from(document.querySelectorAll('#wrapper #imgContainer #imgid .imgpage .imglist .imgitem')).map((i)=>i.getAttribute('data-objurl'))`).then((arr) => {
                        // 返回的数据类型是尽可能的相似,所以这里直接返回arr
                        try {
                            downloadFromList(arr, amount);
                            // driver.quit();
                        } catch (e) {

                        }
                    })
                    return;
                } else {
                    //利用递归实现同步
                    loop();
                }
            });
        })();


        // (function loop() {
        // driver.executeScript("document.querySelectorAll('#wrapper #imgContainer #imgid .imgpage .imglist .imgitem').length").then((length) => {
        // console.log(length);
        // })
        // })();
    });
    // });
    // driver.wait(until.titleContains('百度'), 3000);

    //从urlList中下载前num个资源
})();


let downloadFromList = (list, num) => {
    if (!fs.existsSync(diretory)) fs.mkdir(diretory);

    // let i = 0;
    // let flag = setInterval(() => {
    //     if (i >= num) clearInterval(flag);
    //     request(list[i]).pipe(fs.createWriteStream(diretory + i + list[i].match('\.[^.]+$')[0]));
    //     console.log(i);
    //     i++;
    // }, 400)
    let i = 0;
    (function loop() {  //递归实现同步
        if (i >= num) {
            driver.quit();
            return;
        };
        http.get(list[i], function (res) {
            res.setEncoding('binary');//转成二进制
            var content = '';
            res.on('data', function (data) {
                content += data;
            }).on('end', function () {
                let ext = res.headers["content-type"].match('[^/]*$')[0];
                if (type.indexOf(ext) === -1)
                    ext = list[i].match(/[^.]*$/)[0];
                let fileName = `${i}.${ext}`;
                fs.writeFile(diretory + fileName, content, 'binary', function (err) {
                    if (err) { };
                    console.log(i + '\t成功');
                    // sleep.msleep(parseInt(Math.random()*1000));
                });
                loop(++i);
            });
        }).on('error', (err) => {   //中断整个程序?
            console.log(i+'\t!失!败!:')
            console.log(err);
            loop(++i);
        });
    })();

    // }
    // let stream = request.get(list[i]).on('response', (res) => {
    //     let fileName = i + '.' + res.headers["content-type"].match('[^/]*$')[0];
    //     stream.pipe(fs.createWriteStream(diretory + fileName));
    //     loop(++i);
    // })
}
    // sleep.sleep(0.5);



    //try & catch无法捕获异步方法的错误....