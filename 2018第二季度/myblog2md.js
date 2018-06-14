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