const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');


let mainWindowId;


const url = 'https://blog.csdn.net/github_38885296/article/list/2'


;
(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/s?ie=UTF-8&wd=test');
        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);


        //To get the window handle, you can use getWindowHandle method.
        driver.getWindowHandle().then(async function (id) {
            mainWindowId = id
            // 输出一串数字




// driver对象其实是整个浏览器,但默认指向一个窗口...



            let ele;
            await (ele = driver.findElement({
                css: '#content_left > div:nth-child(4) > h3 > a'
            }))

            await ele.click();

            await driver.sleep(2000)

            driver.getAllWindowHandles().then(async function (windowHandles) {
                console.log(`Total number of windows: ` + windowHandles.length);
                for (let name of windowHandles) {
                    if (mainWindowId !== name) {

                        await driver.switchTo().window(name);
                        break
                    }
                }
                await driver.get('http://www.jd.com')
                await driver.sleep(2000)
                await driver.navigate().refresh();
                await driver.sleep(2000)
                await driver.close()
                await driver.switchTo().window(mainWindowId);
                await driver.sleep(2000)
                await driver.get('http://www.baidu.com')

            })


        })


        // driver.get('http://www.jd.com')

    } finally {
        // 同步代码块
        // Promise.all()
        // await driver.quit();
    }
})();