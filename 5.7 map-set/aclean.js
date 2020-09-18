function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word)
    }
    console.log(map);

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"