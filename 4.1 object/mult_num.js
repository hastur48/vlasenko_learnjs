let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumbersOn2(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumbersOn2(menu)
console.log(menu);