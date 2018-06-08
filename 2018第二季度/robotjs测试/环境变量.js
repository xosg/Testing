// 获取系统的环境变量

// console.log(process.env.USER)
// console.log(process.env.PATH)
// console.log(process.env.NODE_PATH)
// console.log(process.env.SHELL)

// 不可iterator遍历?
for (let index in process.env) {
    console.log(index + '\t' + process.env[index])
}