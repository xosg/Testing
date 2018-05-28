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




var driver = new Builder().forBrowser('firefox').build();
//会在本目录寻找驱动文件

const window = driver.manage().window();

(async function main() {


    await driver.get('https://pic.baidu.com');
    window.fullscreen();
    //Creates a condition that will loop until an element is found with the given locator.
    await driver.wait(until.elementLocated({ css: '#kw' }), 3000, '网络响应超时');
    await driver.findElement(By.id('kw')).sendKeys(keyword, Key.RETURN);


    // (function loop() {
    // driver.executeScript("document.querySelectorAll('#wrapper #imgContainer #imgid .imgpage .imglist .imgitem').length").then((length) => {
    // console.log(length);
    // })
    // })();
    // });
    // driver.wait(until.titleContains('百度'), 3000);

    //从urlList中下载前num个资源
})();
