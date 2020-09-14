function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

function spy(func) {

    wrapper.calls = [];

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }



    return wrapper;

}