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
    // 求交集
    let intersectionSet = goodA.arrayOfUsers.filter(x => goodB.arrayOfUsers.indexOf(x) !== -1);
    return parseFloat((intersectionSet.length / base).toFixed(2))

}

// 商品类
class Good {
    constructor(ID) {
        this.id = ID;
        this.matchGood = -1;
        this.matchestSimilarity = NaN;
        this.numberOfUsers = 0;
        this.arrayOfUsers = [];
    }
}


// 用户表和产品表基本对称(多对多的关系)

class User {
    constructor(ID) {
        this.id = ID;
        this.numberOfGoods = 0;
        this.arrayOfGoods = [];
    }
}

// 元数据对
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




    for (let i = 0; i <= goods.length; i++) {
        // js中没有二维数组这个类
        if (!goods[i]) continue
        relation[i] = []
        for (let j = i + 1; j <= goods.length; j++) {
            if (!goods[j]) continue
            relation[i][j] = similarity(goods[i], goods[j])
            // console.log(relation[i][j])
        }
        goods[i].matchestSimilarity = Math.max(...(relation[i].filter(x => !!x)))
        goods[i].matchGood = relation[i].indexOf(goods[i].matchestSimilarity)
        // console.log(i + ' ' + goods[i].matchGood)
    }

    (function writeList() {

        for (let good of goods) {
            if (!good) continue
            let data = good.id + ' ' + good.matchGood + ' ' + good.matchestSimilarity + '\n\r'
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
    })();


}