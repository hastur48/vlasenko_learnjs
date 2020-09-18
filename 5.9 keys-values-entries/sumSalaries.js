let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    values = Object.values(salaries);
    let sum = 0;
    for (let value in values) {
        sum += value
    }
    return sum;
}