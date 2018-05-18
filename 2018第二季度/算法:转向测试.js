const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];


console.log(`note: imagine U R now walking on the straight (UP) direction, then U choose to turn either left or right on random, let the machine guess what ur final direction is ?`)
console.log(`note: The sequence support only 'L' or 'R'; for instance, 'LLRRR'`);

//模块化编程
(function question() {

    rl.question(`Enter the sequence of direction :\n`, (sequence) => {

        let index = 0;  //初试方向:UP
        for (let dir of sequence) {
            if (['L', 'R'].indexOf(dir) === -1) {
                console.log(`INPUT ERROR: '${dir}' is not allowed , please reinput :`);
                question();
                return;
            }
            //将数组变成一个循环
            if (dir === 'L' && --index === -1) index = 3;
            else if (dir === 'R' && ++index === 4) index = 0;
        }

        console.log(`OK, Ur final direction is: ${directions[index]}`);

        rl.close();
    });
})();