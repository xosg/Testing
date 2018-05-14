/* 
/* 官方文档:
/* https://seleniumhq.github.io/selenium/docs/api/javascript/
/* 
 * * * * * * * * * * */

const request = require('request');
const fs = require('fs');
var { Builder, By, until, Key } = require('selenium-webdriver');


let keyword = 'dog';
let amount = 30;

var driver = new Builder().forBrowser('firefox').build();
//会在本目录寻找驱动文件

driver.get('https://pic.baidu.com');
//Creates a condition that will loop until an element is found with the given locator.
driver.wait(until.elementLocated({ css: '#kw' }), 3000, '网络响应超时').then(() => {
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
                        downloadFromList(arr, amount);
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
});
// driver.wait(until.titleContains('百度'), 3000);

//从urlList中下载前num个资源
let downloadFromList = (list, num) => {
    for (let i = 0; i < num; i++) {
        let stream = request.get(list[i]).on('response', (res) => {
            let fileName = i + '.' + res.headers["content-type"].match('[^/]*$')[0];
            stream.pipe(fs.createWriteStream(`./pic/${fileName}`));
        })
    }
}


// driver.wait(until.elementLocated({ id: 'kw' }), 3000);   //等到元素可访问
// driver.getTitle((title)=>{console.log(title)});
// driver.getTitle().then((title) => {console.log('hi')});
// driver.getTitle().then((title) => { console.log(title) });
// driver.findElement({ id: 'kw' }).sendKeys('webdriver', Key.RETURN).then(() => {

// });     //append
// driver.wait(until.titleContains('百度'), 3000);
// driver.findElement(By.id('su')).click();
// driver.quit();   //关闭浏览器
