function getSecondsToday() {
    let currentTime = new Date();

    let today = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());

    let difference = currentTime - today;
    return Math.round(difference / 1000);
}