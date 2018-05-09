function getIntersection() {
    let len = arguments.length;

    if (len ===1) return arguments[0];

    //每次得出两个的交集,然后递归调用
    let a0 = arguments[0];
    let a1 = arguments[1];

    //判断number型
    if (typeof a0[0] !== "number" || typeof a0[1] !== "number" || typeof a1[0] !== "number" || typeof a1[1] !== "number")
        return null;

    //判断大小,保证小的在左边,大的在右边
    if (a0[0] > a0[1]) {
        let tem = a0[0];
        a0[0] = a0[1];
        a0[1] = tem;
    }
    if (a1[0] > a1[1]) {
        let tem = a1[0];
        a1[0] = a1[1];
        a1[1] = tem;
    }

    //判断空集
    if (a0[0] > a1[1] || a0[1] < a1[0])
        return null;

    //!!!!!!构造前两个区间交集的算法:
    //交集区间 = 两个区间中:从较大的起点(小)到较小的终点(大)
    //如果区间长度<0(右-左)则空集
    let left = a0[0] > a1[0] ? a0[0] : a1[0];
    let right = a0[1] > a1[1] ? a1[1] : a0[1];
    if (left > right) return null;

    let sec = [left, right];

    //当递归到最简情况返回结果
    if (len === 2) return sec;
    //利用递归
    let newArr = Array.from(arguments).slice(2, len);
    newArr.unshift(sec);    //unshift返回number型
    let str = newArr.map((item) => '[' + item.toString() + ']').join(',');

    //利用eval以未知数量的参数调用函数!!!!!!
    //有更好的方法吗?
    return eval(`getIntersection(${str})`);
}

console.log(getIntersection([1, 9], [2, 8], [0, 51]));
console.log(getIntersection([19, 9],[10,100]));
console.log(getIntersection([10,100]));