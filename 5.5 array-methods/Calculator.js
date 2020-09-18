function Calculator() {
    this.methods = {
        '+': (a, b) => (a + b),
        '-': (a, b) => (a - b)
    };

    this.calculate = function (str) {
        let split = str.split(' ');
        let a = +split[0];
        let b = +split[2];
        let operator = split[1];

        if (isNaN(a) || isNaN(b) || !this.methods[operator]) {
            return NaN;
        }
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}