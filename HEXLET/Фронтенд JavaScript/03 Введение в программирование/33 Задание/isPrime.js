/*
Напишите функцию isPrime. Она принимает число и возвращает true,
если число является простым, и false в ином случае.

Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.
Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

Используйте цикл for и арифметические шорткаты.

isPrime(1);     // false
isPrime(7);     // true
isPrime(10);    // false
(Число 1 не считаем простым).
*/
//import { assert } from 'assert';
const assert = require('assert');

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(1));     // false
console.log(isPrime(7));     // true
console.log(isPrime(10));    // false
console.log(isPrime(-3));    // false
console.log(isPrime(0));    // false
console.log(isPrime(-1));    // false
console.log(isPrime(1));    // false
console.log('==========================');

assert.equal(isPrime(1), false);
assert.equal(isPrime(7), true);