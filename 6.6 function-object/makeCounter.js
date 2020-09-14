function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.set = value => counter.count = value;

    counter.decrease = () => counter.count--;

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

console.log( counter() );
console.log( counter.set(5) );
console.log( counter() );