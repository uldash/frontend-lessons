/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var resArr = [];
    tweet.split(' ').forEach(function (item) {
        if (item.indexOf('#') == 0) {
            resArr.push(item.slice(1));
        }
    });
    return resArr;
};
