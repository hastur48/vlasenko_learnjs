function fib(number) {
    let prevPrev = 1;
    let prev = 1;

    for (let start = 3; start <= number; start++) {
        let current = prev + prevPrev;
        prevPrev = prev;
        prev = current
    }
    return prev;
}

console.log( fib(77) )