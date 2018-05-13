(() => {
    console.log(/\((.*)\)/.exec("rgba(124, 234 , 22,0.5 )")[1].split(",").map((x) => Number(x.trim())));
})();
