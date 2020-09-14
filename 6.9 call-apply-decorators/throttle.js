function throttle(func, timeout) {
    let isReady = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isReady) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isReady = true;

        setTimeout(function () {
            isReady = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, timeout)
    }

    return wrapper;
}