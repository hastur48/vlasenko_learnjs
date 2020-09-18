function printListCycle(list) {
    let currentList = list;
    while (currentList.next !== null) {
        console.log(currentList.value);
        currentList = currentList.next;
    }
    console.log(currentList.value);
}

function printListRec(list) {
    console.log(list.value);
    if (list.next !== null) printListRec(list.next);
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

printListCycle(list);
printListRec(list);
