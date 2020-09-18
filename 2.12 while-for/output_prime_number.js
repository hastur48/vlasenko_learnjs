let n = 10;

prime:
for (let number = 2; number <= n; number++){
    for (let divider = 2; divider < number; divider++) {
        if (number % divider === 0)
            continue prime;
    }
    console.log(number);
}