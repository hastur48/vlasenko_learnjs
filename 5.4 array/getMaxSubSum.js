function getMaxSubSum(arr) {
    let maxSum = arr[0];
    let currentSum = 0;

    for (let value of arr) {
        currentSum += value;
        maxSum = Math.max(maxSum, currentSum);
        if ( currentSum < 0) currentSum = 0;
    }

    return maxSum;

}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([-2, -1, -3]) ); // 0