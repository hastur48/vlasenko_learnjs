function filterRangeInPlace(arr, a, b) {
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index] > b || arr[index] <a) {
            arr.splice(index, 1);
            index--;
        }
    }
}
let arr = [1, 2, 3, 4, 5]
filterRangeInPlace(arr, 3, 5);
console.log(arr);
