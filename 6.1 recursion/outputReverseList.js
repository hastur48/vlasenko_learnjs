function printReverseListRec(list) {
    if (list.next) printReverseListRec(list.next);
    console.log(list.value);
}

function printReverseListCycle(list) {
    let currentList = list;
    let value = [];
    while (currentList) {
        value.push(currentList.value)
        currentList = currentList.next;
    }

    for (let index = value.length - 1; index >= 0; index--) {
        console.log(value[index]);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printReverseListCycle(list);