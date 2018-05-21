const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('你认为 Node.js 中文网怎么样？', (answer) => {
//     对答案进行处理
// console.log(`多谢你的反馈：'${answer}'`);
//
// rl.close();
// process.exit(0);
// });

let count = 0;
rl.on('line', (input) => {
    console.log(`接收到：${input}`);
    if (++count === 3) process.exit(0);
});