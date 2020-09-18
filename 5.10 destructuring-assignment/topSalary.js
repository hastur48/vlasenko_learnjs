let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 300
};

function topSalary(salaries) {
    let maxSalary = 0;
    let topWorker = '';
    for (let [key, value] of Object.entries(salaries)) {
        if (maxSalary < value)  (maxSalary = value, topWorker = key);
    }
    return topWorker;
}

console.log(topSalary(salaries));