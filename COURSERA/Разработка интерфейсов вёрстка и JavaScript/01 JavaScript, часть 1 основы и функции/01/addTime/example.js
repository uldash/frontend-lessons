function addTime(hours, minutes, interval) {
    var timeToMinute = hours * 60 + minutes + interval;
    //var strHours = ((timeToMinute - timeToMinute % 60) % 24).toString();
    var strHours = (parseInt(timeToMinute / 60) % 24).toString();
    var strMinutes = (timeToMinute % 60).toString();
    if (strHours.length == 1) {
        strHours = '0' + strHours;
    }
    if (strMinutes.length == 1) {
        strMinutes = '0' + strMinutes;
    }
    return strHours + ':' + strMinutes;
};

console.info(addTime(12, 30, 30));//13:00
console.info(addTime(23, 59, 31));//00:30
console.info(addTime(11, 50, 61));//12:51
console.info(addTime(23, 1, 80));//00:21