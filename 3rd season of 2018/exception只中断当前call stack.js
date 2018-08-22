const express = require('express')
const app = express()

app.get('/', (req, res) => {
    if (req.query.str.length > 5) throw new Error('123')
    res.send('<h1>Hello World!</h1>')

})

app.listen(3000, () => console.log('http://localhost:3000'))