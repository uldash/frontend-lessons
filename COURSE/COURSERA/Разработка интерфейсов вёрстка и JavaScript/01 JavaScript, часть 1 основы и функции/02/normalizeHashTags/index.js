/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var resArr = [];
    hashtags.map(Function.prototype.call, String.prototype.toLowerCase).forEach(function (item) {
        if (resArr.indexOf(item) == -1) {
            resArr.push(item);
        }
    });
    return resArr.join(', ');
};
