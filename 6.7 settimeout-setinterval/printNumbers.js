function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function time() {
        console.log(current);
        if (current === to) {
            setTimeout(time, 1000);
        }
        current++;

    }, 1000);
}