/*
function timeout(ms) {
    return new Promise((resolve, reject) => {   //promise新建后立即执行这个函数
        setTimeout(resolve, ms, 'done');    //第三个及以后的参数是作为以一个函数的参数列表
    });
}

timeout(1500).then((value) => {
    console.log(value);
});*/


let promise = new Promise(function(resolve,rejeact){
    console.log('Promise');
    resolve();
});

promise.then(function(){
    console.log('Resolved');
});

console.log('Hi');

// Promise
// Hi
// Resolved