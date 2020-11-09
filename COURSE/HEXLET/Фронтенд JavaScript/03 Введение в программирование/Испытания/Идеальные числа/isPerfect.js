/*
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, 
и false — в ином случае.

Совершенное число — положительное целое число, равное сумме его положительных делителей 
(не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/

const assert = require('assert');

function isPerfect(num) {
    let result = 0;
    let upperBorder = Math.ceil(num / 2);
    if (num < 2) {
        return false;
    }
    for (let i = 1; i <= upperBorder; i++) {
        if (num % i === 0) {
            result += i;
        }
    }
    return num === result;
}

//export default isPerfect;


assert.equal(isPerfect(6), true);
assert.equal(isPerfect(28), true);
assert.equal(isPerfect(496), true);
assert.equal(isPerfect(8128), true);
assert.equal(isPerfect(33550336), true);
assert.equal(isPerfect(-6), false);
assert.equal(isPerfect(-28), false);
assert.equal(isPerfect(44), false);
assert.equal(isPerfect(0), false);
assert.equal(isPerfect(10), false);

