var { Builder, By, until, Key } = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')   //会在本目录寻找驱动文件
    .build();

driver.get('https://www.baidu.com');
// driver.wait(until.titleContains('百度'), 3000);
driver.wait(until.elementLocated({ id: 'kw' }), 3000);   //等到元素可访问
// driver.findElement(By.id('kw')).sendKeys('webdriver', Key.RETURN);
// driver.getTitle((title)=>{console.log(title)});
// driver.getTitle().then((title) => {console.log('hi')});
// driver.getTitle().then((title) => { console.log(title) });
driver.findElement({ id: 'kw' }).sendKeys('webdriver', Key.RETURN).then(() => {

});     //append
// driver.wait(until.titleContains('百度'), 3000);
// driver.findElement(By.id('su')).click();
// driver.quit();   //关闭浏览器
