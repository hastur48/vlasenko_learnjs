function sum(a) {
    let currentSum = a;

    function func(b) {
        currentSum += b;
        return func;
    }

    func.toString = function() {
        return currentSum;
    }

    return func;
}

let v = sum(1)(2)(3)(5)(6);
console.log(+v);