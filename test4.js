function treeMap(json) {
    if (json.length === 0) return null;
    for (let item of json) {
        //如果这是一个对象
        if (item.length === undefined) {
            //打印
            console.log(item.id);
        } else {
            //利用递归深度遍历这个数组
            treeMap(item)
        }
    }
}