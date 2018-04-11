function remove(arr, item) {
    return arr.filter(i => i !== item);
}

console.log(remove([1, 2, 3, 4, 2], 2));
