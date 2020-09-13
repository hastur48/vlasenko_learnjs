let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let result = JSON.stringify(meetup, function (key, value) {
    return (key != "" && value == meetup) ? undefined : value;
});