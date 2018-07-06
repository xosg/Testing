const express = require('express')
const app = express();

app.use(express.static('./public'))




let server = app.listen(8081, function () {

    let host = server.address().address
    let port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})