function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
}