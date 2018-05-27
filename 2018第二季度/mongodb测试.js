// mongodb的语法和sql有河大的差别, 它是一种面向对象的点分语法..

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myobj = {
        name: "菜鸟教程",
        url: "www.runoob"
    };
    dbo.collection("newCol").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});


// > db.adminCommand( { renameCollection: "test.newCol", to: "test.col1" } )