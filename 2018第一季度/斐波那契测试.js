function getNthFibonacci(count) {
    if(count<2)return 1;
    else return getNthFibonacci(count-1)+getNthFibonacci(count-2);
}

console.log(getNthFibonacci(4));

//斐波那契是:1,1,2,3,5,8,11,.....