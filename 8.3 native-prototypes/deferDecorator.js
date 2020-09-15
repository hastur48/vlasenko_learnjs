function f(a, b) {
    alert( a + b );
}

Function.prototype.defer = function (ms) {
    let context = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};