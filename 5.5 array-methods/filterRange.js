function filterRange(arr, a, b) {
    return arr.filter((item) => (item >= a && item <= b))
}

let result  = filterRange([1, 2, 3, 4, 5], 1, 3);
console.log(result);