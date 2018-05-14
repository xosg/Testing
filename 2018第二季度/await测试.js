function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

async function f1() {   //async函数将原始对象转换成promise
    var x = await resolveAfter2Seconds(10);     //await将promise转换成它的消息值
    console.log(x); // 10
}
f1();


// typeof await 20
// "number"