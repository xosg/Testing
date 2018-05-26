const md = require('md')
const fs = require('fs')
const child = require('child_process')

let text1 = `## hello world

A modern **markdown** parser!

- [ ] todo
- [x] done
`

let text2 = `
# hello node
---
## hello node
### hello node
#### hello node
##### hello node
###### hello node

![](http://h.hiphotos.baidu.com/image/h%3D300/sign=edc450837e8b4710d12ffbccf3cfc3b2/b64543a98226cffc49721710b5014a90f603ea3c.jpg)
`

const html = md(text2)

console.log(html)

if (!fs.existsSync('./output/')) fs.mkdir('./output/')
let file = './output/html.html'

fs.writeFileSync(file, html) //如果没有就创建性文件, 但目录不行

child.exec('open ' + file)