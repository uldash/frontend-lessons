/*
"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр.
Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. Билет с номером 231002 не является счастливым,
так как 2 + 3 + 1 != 0 + 0 + 2.

isHappyTicket.js
Реализуйте и экспортируйте по умолчанию функцию isHappy, проверяющую является ли номер счастливым
(номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:
use function Ticket\isHappy;

isHappy('385916'); // true
isHappy('231002'); // false
isHappy('1222'); // false
isHappy('054702'); // true
isHappy('00'); // true
*/

const assert = require('assert');

function isHappy(ticket) {
    let left = 0;
    let rigth = 0;
    let half = ticket.length / 2;
    if (Math.ceil(half) !== half) {
        return false;
    }
    for (let i = 0; i < half; i++) {
        left += Number(ticket[i]);
        rigth += Number(ticket[half + i]);
    }
    return left === rigth;
}

/*
const isHappy = (num) => {
    let balance = 0;

    for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
        balance += +num[i] - +num[j];
    }
    return balance === 0;
};
*/

//export default isHappy;

assert.equal(isHappy('385916'), true);
assert.equal(isHappy('231002'), false);
assert.equal(isHappy('1222'), false);
assert.equal(isHappy('054702'), true);
assert.equal(isHappy('00'), true);
//assert.equal(isHappy('000'), false);
