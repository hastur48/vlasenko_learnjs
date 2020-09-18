function* pseudoRandom(seed) {
    try {
        seed = Number(seed);
    } catch (error) {
        console.log(error);
    }

    let value = seed;

    while (true) {
        value = value * 16807 % 2147483647;
        yield value;
    }


}