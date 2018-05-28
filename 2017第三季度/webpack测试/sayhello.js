let mustache = require('mustache');
let template = `<h1>Hello <i>{{name}}</i></h1>`
mustache.parse(template);
exports.sayHello = toWhom => mustache.render(template, {
    name: toWhom
})

// console.log(exports.sayHello(`Jim`))


//nodejs和浏览器的区别是核心库的不同:
//浏览器没有文件系统和子进程;node灭有dom和css模型