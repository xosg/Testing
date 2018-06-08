for (let path of process.mainModule.paths) {
    console.log(path)
}

// 结果发现是会逐级向上寻找node_modules目录，直到根目录