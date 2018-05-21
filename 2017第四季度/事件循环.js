// 引入 events 模块
const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

// 绑定 connection 事件处理程序
eventEmitter.on('connect', function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_receive');
});

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_receive', function dataHandler() {
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connect');    //并不耗时

console.log("程序执行完毕。");

//都是同一个EventEmitter控制事件的收发

//自定义事件的魅力