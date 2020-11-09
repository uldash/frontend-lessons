/*
Назовем счастливыми числами те, которые в результате ряда преобразований вида 
"сумма квадратов цифр" превратятся в единицу. Например:

7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.

Вывод: исходное число 7 - счастливое.

isHappyNumber.js
Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, 
если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.

Подсказки
Воспользуйтесь вспомогательной функцией sumOfSquareDigits, которая принимает на вход число и 
возвращает "сумму квадратов цифр" этого числа.
Длина строки str находится так: str.length
*/

const asssert = require('assert');

const summOfSquareDigits = num => {
    let result = 0;
    let iter = num;
    while (iter != 0) {
        result += (iter % 10) ** 2;
        iter = (iter - iter % 10) / 10; // целочисленное деление
    }
    return result;
}

function isHappyNumber(num) {
    let result = num;
    while (result !== 9) {
        result = summOfSquareDigits(result);
        //        console.log(result);
        if (result < 10) {
            break;
        }
    }
    return result === 1;
}
//export default isHappyNumber
/*
asssert.equal(summOfSquareDigits(7), 49);
asssert.equal(summOfSquareDigits(49), 97);
asssert.equal(summOfSquareDigits(97), 130);
asssert.equal(summOfSquareDigits(130), 10);
asssert.equal(summOfSquareDigits(10), 1);
*/

asssert.equal(isHappyNumber(1), true);
asssert.equal(isHappyNumber(7), true);
asssert.equal(isHappyNumber(13), true);
asssert.equal(isHappyNumber(0), false);
asssert.equal(isHappyNumber(2), false);
asssert.equal(isHappyNumber(90), false);

