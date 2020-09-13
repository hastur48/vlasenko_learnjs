function formatDate(date) {
    let currentTime = new Date();

    let difference = currentTime - date;

    let output;

    if (difference < 1000) {
        output = 'right now';
    } else if (difference < 60 * 1000) {
        output = `${Math.round(difference / 1000)} seconds ago`;
    } else if (difference < 3600 * 1000) {
        output = `${Math.round(difference / (60 * 1000))} minutes ago`;
    } else {
        output = `${currentTime.getDate()}.${currentTime.getMonth()}.${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}`
    }
    return output;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );