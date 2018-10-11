const sharp = require('sharp');
const fs = require('fs');


let fileBuff = fs.readFileSync('./input.gif')

let width = 200
// 黄金比例0.618
let golden = (5 ** (1 / 2) - 1) / 2

sharp(fileBuff)
    .resize(width, Math.round(width * golden))
    .webp({
        quality: 30,
        lossless: false
    })
    // .jpeg({
    //     quality: 30
    // })
    .toFile('./output.webp', (err, info) => {
        if (err) console.log(err.message)
    });
// A Promises/A+ promise is returned when callback is not provided.