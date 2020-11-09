/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var timeToMinute = hours * 60 + minutes + interval;
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

