// You will need to download additional components to work with each of the major browsers. The drivers for Chrome, Firefox, and Microsoft's IE and Edge web browsers are all standalone executables that should be placed on your system PATH. Apple's safaridriver is shipped with Safari 10 for OS X El Capitan and macOS Sierra. You will need to enable Remote Automation in the Develop menu of Safari 10 before testing.

// 所有的驱动放在/usr/local/bin下

const request = require("request")
const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

const {
    JSDOM
} = require("jsdom");
const url = 'https://blog.csdn.net/github_38885296/article/list/9'
const cssSelector = 'div.article-item-box.csdn-tracking-statistics>h4>a';

(function main() {

    request(url, function (error, response, body) {
        if (error) console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.

        const dom = new JSDOM(body);
        const list = dom.window.document.querySelectorAll(cssSelector);
        // 先将浏览器的DOM元素集合(NodeList)转换成数组,才能使用数组原型的方法
        let urlList = Array.from(list).map(e => e.getAttribute('href'))
        runSelenium(urlList.slice(0,8))

    });
})();


async function runSelenium(urlList) {
    // 此时会打开窗口,url是空的('data:,')
    let driver = await new Builder().forBrowser('chrome').build();
    // 异步函数的内部是同步的,可以用try
    try {
        // 抓紧时间用qq登录....
        // www.csdn.net
        await driver.sleep(15000)

        // 循环就是将内部代码展开,不影响同步流程
        for (let url of urlList) {
            // 会等到窗口加载完毕(所以可以手动刷新(⊙o⊙)…)
            await driver.get(url);
            await driver.findElement({
                css: '#comment_content'
            }).sendKeys(url);
            await driver.sleep(500)
            await driver.findElement({
                css: '#commentform > div > div.right-box > input'
            }).click();
            await driver.sleep(3500)

        }

        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        await driver.quit();
    }
};