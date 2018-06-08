const robotjs = require('robotjs')
const fs = require('fs')
const buffer = require('buffer')
const image = robotjs.screen.capture(0, 0, 50, 50).image
// console.log(image)
// fs.writeFileSync('./test.png',image,()=>{})
fs.writeFile('./avatar3', image, function(err) {
    if(err) {console.log(err)}
});

// new buf

// 宣布测试失败。。。