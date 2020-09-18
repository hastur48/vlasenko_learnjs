function debounce(func, timeout) {
    let isReady = false;

    return function () {
        if (isReady) return;

        func.apply(this, arguments);

        isReady = true;

        setTimeout(() => isReady = false, timeout);
    }
}