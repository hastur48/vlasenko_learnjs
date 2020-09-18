function sumToRec(number) {
    if (number === 1) return number;
    return number + sumToRec(number - 1);

}

console.log( sumToRec(5) );

function sumToCycle(number) {
    let sum = 0;
    for (let current = 1; current <= number; current++) {
        sum += current;
    }
    return sum;
}

console.log( sumToCycle(5) );

function sumToFormula(number) {
    let sum = (1 + number) * number / 2
    return sum
}

console.log( sumToFormula(5) );