let mustache = require('mustache');
let template = `<h1>Hello <i>{{name}}</i></h1>`
mustache.parse(template);
exports.sayHello = toWhom => mustache.render(template, {
    name: toWhom
})

// console.log(exports.sayHello(`Jim`))