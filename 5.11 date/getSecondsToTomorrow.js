function getSecondsToTomorrow() {
    let currentTime = new Date();

    let tomorrow = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1);

    let difference = tomorrow - currentTime;
    return Math.round(difference / 1000);
}