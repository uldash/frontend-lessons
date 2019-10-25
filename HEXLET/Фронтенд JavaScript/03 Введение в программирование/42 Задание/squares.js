/*
Реализуйте функцию square, которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.
*/
const assert = require('assert');

const square = num => num * num;
const sumOfSquares = (firstNum, secondNum) => square(firstNum) + square(secondNum);
const squareSumOfSquares = (firstNum, secondNum) => square(sumOfSquares(firstNum, secondNum));

assert.equal(square(5), 25);
assert.equal(square(10), 100);

assert.equal(sumOfSquares(5, 10), 125);
assert.equal(sumOfSquares(10, -9), 181);

assert.equal(squareSumOfSquares(1, 1), 4);
assert.equal(squareSumOfSquares(2, 3), 169);
