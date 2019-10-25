/*
Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и
возвращает наименьшую разницу между ними.

Примеры:
diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/

const assert = require('assert');

function diff(a, b) {
    let one = Math.abs(a - b);
    let two = 360 - Math.abs(a - b);
    return one < two ? one : two;
}

assert.equal(diff(0, 45), 45);
assert.equal(diff(0, 180), 180);
assert.equal(diff(0, 190), 170);
assert.equal(diff(120, 280), 160);