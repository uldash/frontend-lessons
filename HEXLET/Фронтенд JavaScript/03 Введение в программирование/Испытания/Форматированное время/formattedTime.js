/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут
(прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:
formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
*/

const assert = require('assert');

function return2digits(num) {
    if (num < 10) {
        return '0' + num;
    }
    return String(num);
}
function formattedTime(min) {

    return `${return2digits(Math.floor(min / 60) % 24)}:${return2digits(min % 60)}`;
}

assert.equal(formattedTime(5), '00:05');
assert.equal(formattedTime(15), '00:15');
assert.equal(formattedTime(60), '01:00');
assert.equal(formattedTime(67), '01:07');
assert.equal(formattedTime(175), '02:55');
assert.equal(formattedTime(600), '10:00');
assert.equal(formattedTime(754), '12:34');
assert.equal(formattedTime(1445), '00:05');
assert.equal(formattedTime(1504), '01:04');

//console.log(formattedTime(1504));