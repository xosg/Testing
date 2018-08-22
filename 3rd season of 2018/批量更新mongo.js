var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("assessment");
    var whereStr = {
        "type": 'en'
    }; // 查询条件
    var updateStr = {
        $rename: {
            'skill-test.18-T':'skill-test.d18_6'
        }
    };
    dbo.collection("staff").updateMany({}, updateStr, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " 条文档被更新");
        db.close();
    });
});