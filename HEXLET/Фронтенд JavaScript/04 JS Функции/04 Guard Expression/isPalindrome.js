/*
Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.
*/

const assert = require('assert');

const isPalindrome = (str) => {
    if (str.length < 2) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
};

//export default isPalindrome


assert.equal(isPalindrome('radar'), true);
assert.equal(isPalindrome('a'), true);
assert.equal(isPalindrome('abs'), false);
