var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("assessment");
    // 坑,和mongo shell语法不一样
    dbo.collection("user").find({}).project({
        name:0,
        _id:0,
        staffId:0,
        cryptedPas:0,
        root:0,
        identity:0,
        assessment:0
    }).toArray(function (err, list) { // 返回集合中所有数据
        if (err) throw err;
        console.log(list);
        db.close();
    });
});
