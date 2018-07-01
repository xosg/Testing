const fs = require('fs')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jinSHUcheng@0815',
    database: 'myblog'
});

connection.connect();

connection.query('SELECT * from t_article', function (error, results, fields) {
    if (error) throw error;

    for (let post of results) {
        fs.writeFileSync(`./posts/${post.title.replace(/\/|:/,'-')}.md`, post.content)
    }
    connection.end();
});



// 引用是保存在栈上，对象是保存在堆中.
// 基础数据类型和引用变量都是值传递(完全拷贝)
// 函数参数无论如何都是在栈中创建一个新的变量



// alert方法是浏览器级别的, 和浏览器通知一样, 不是网页级别的, 所以无法js控制alert窗口...