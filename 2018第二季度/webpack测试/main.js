window.addEventListener('load', () => {
    document.write(require(`./sayhello`).sayHello(`node`))
})


//L浏览器会提示
//Uncaught ReferenceError: require is not defined