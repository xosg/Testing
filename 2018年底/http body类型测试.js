const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const fs = require('fs')



app.use(bodyParser.raw({
    inflate: true,
    // type: 'application/octet-stream',
    verify: (req, res, buf, encoding) => {
        // console.log(' test')
    }
}));


app.all(/.*/, (req, res) => {
    // console.log(req.body)
    // fs.writeFile('./test.csv', req.body, (err) => {
    //     if (err) throw err;
    // })
    console.log(req.body)
    res.sendFile(__dirname + '/test.csv')
})

app.listen(port, () => console.log(`http://localhost:${port}`))