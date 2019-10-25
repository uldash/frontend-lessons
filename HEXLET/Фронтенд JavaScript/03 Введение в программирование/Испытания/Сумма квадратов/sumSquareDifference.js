/*
Сумма квадратов первых десяти натуральных чисел это 1**2 + 2**2 + 3**2 + ... + 10**2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)**2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом 
суммы и суммой квадратов первых n натуральных чисел.
*/

const assert = require('assert');

function sumSquareDifference(n) {
    let sumSquare = 0;
    let squareSum = 0;
    for (let i = 1; i <= n; i++) {
        sumSquare += i ** 2;
        squareSum += i;
    }
    return squareSum ** 2 - sumSquare;
}

//export default sumSquareDifference;
assert.equal(sumSquareDifference(10), 2640);