/*
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет,
является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень:
3^3, а 81 — это четвёртая: 3^4.

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
*/
const assert = require('assert');

function isPowerOfThree(num) {
    let i = num;
    if (i === 1) {
        return true;
    }
    while (i > 3) {
        i = i / 3;
    }
    if (i === 3) {
        return true;
    }
    return false;
}
/*
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
*/

//export default isPowerOfThree
assert.equal(isPowerOfThree(1), true)
assert.equal(isPowerOfThree(3), true)
assert.equal(isPowerOfThree(9), true)
assert.equal(isPowerOfThree(27), true)
assert.equal(isPowerOfThree(81), true)
assert.equal(isPowerOfThree(4782969), true)
assert.equal(isPowerOfThree(2), false)
assert.equal(isPowerOfThree(4), false)
assert.equal(isPowerOfThree(10), false)
assert.equal(isPowerOfThree(82), false)
//assert.equal(isPowerOfThree(94143178827),true)
