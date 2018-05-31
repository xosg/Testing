async function showData() {
    // 假装请求数据1
    var data1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data1');
        }, 1000);
    }).then(()=>{
        console.log('1');
    });

    console.log('2');

    // 假装请求数据2且此请求依赖数据1
    var data2 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data2');
        }, 1000);
    });

    // 展示数据2
    console.log('3');
}
console.log('仔细观察输出的顺序');
showData();