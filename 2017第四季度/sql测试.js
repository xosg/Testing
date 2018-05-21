const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jinSHUcheng@0815',
    database: 'myblog'
});

connection.connect();

connection.query('SELECT * FROM t_visitor', function (error, results, fields) {
    if (error) throw error;
    // console.log('The result is: ', results[0].user_password);
    for (let item of results) { //results数组,代表每一行,每一行都是对象
        let str = '';
        for (let i in item) {
            str += item[i] + '\t';
        }
        console.log(str);
    }
    connection.end();   //断开连接后,否则程序不退出
    // process.exit(0);
});