(function init() {
    global['fs'] = require('fs');
    global['goods'] = []
    global['users'] = []
    // 相似度表格
    global['relation'] = []
    global['paths'] = {
        srcFile: './安全编程数据/Movielens_user943_item1682_link82525.txt',
        goodTable: './middle/good表.txt',
        userTable: './middle/user表.txt'
    }

    global['data'] = []

    var lineReader = require('readline').createInterface({
        input: fs.createReadStream(paths.srcFile) // 建立 txt 文件的读取流
    });

    lineReader.on('line', readFromLine)
    lineReader.on('close', afterRead)
})();




// 求商品间的相似度
function similarity(goodA, goodB) {
    let base = (goodA.numberOfUsers * goodB.numberOfUsers) ** (1 / 2)
    let intersectionSet = goodA.arrayOfUsers.filter(x => goodB.arrayOfUsers.indexOf(x) !== -1);
    return (intersectionSet.length / base).toFixed(1)

}

// 商品类
class Good {
    constructor(ID) {
        this.id = ID;
        this.numberOfUsers = 0;
        this.arrayOfUsers = [];
    }

}

class User {
    constructor(ID) {
        this.id = ID;
        this.numberOfGoods = 0;
        this.arrayOfGoods = [];
    }
}

class Pair {
    constructor(userID, goodID) {
        this.userId = userID
        this.goodId = goodID

    }
}


function readFromLine(line) {
    // console.log(line)
    let [userId, goodId] = line.split(',')
    data.push(new Pair(userId, goodId));

    (() => {
        if (!goods[goodId])
            goods[goodId] = new Good(goodId)

        goods[goodId].numberOfUsers += 1
        goods[goodId].arrayOfUsers.push(userId)
    })();

    (() => {
        if (!users[userId])
            users[userId] = new User(userId)

        users[userId].numberOfGoods += 1
        users[userId].arrayOfGoods.push(goodId)
    })();

}



// console.log(goods)


function afterRead() {

    for (let good of goods) {
        if (!good) continue
        let data = good.id + ' ' + good.numberOfUsers + ' ' + good.arrayOfUsers.join(',') + '\n\r'
        fs.appendFile(paths.goodTable, data, err => {
            if (err) console.log(err)
        })
    }

    for (let user of users) {
        if (!user) continue
        let data = user.id + ' ' + user.numberOfGoods + ' ' + user.arrayOfGoods.join(',') + '\n'
        fs.appendFile(paths.userTable, data, err => {
            if (err) console.log(err)
        })
    }

}