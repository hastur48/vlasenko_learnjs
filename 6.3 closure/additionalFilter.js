function inBetween(begin, end) {
    return function (result) {
        return result >= begin && result <= end;
    }
}

function inArray(array) {
    return function (result) {
        return array.includes(result);
    }
}