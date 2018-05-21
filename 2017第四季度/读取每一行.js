const readline = require('readline');
const path = require('path');
const fs = require('fs');
// let filepath = path.join(__dirname, "app.js")
let input = fs.createReadStream('/Users/jim001/Desktop/URLList.txt');
const rl = readline.createInterface({
    input: input    //也可以作为标准输入(终端输入)
});
let i=0;
rl.on('line', (line) => {   //\t相当于表格中的竖线~
    console.log(`${++i}\t   ${line.match(/[^.]+$/)[0]}`);   //方括号里的点号'.'不用转译
});
rl.on('close', (line) => {
    console.log("读取完毕！");
});
