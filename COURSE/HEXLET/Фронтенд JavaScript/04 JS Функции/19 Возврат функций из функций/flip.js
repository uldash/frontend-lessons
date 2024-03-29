/*
Во многих языках программирования существует интересная функция flip.
Её необычность заключается в том, что единственная цель этой функции —
это преобразовать другую функцию так, чтобы порядок её аргументов был обратным.

Например, у нас может быть функция pow, которая возводит первый аргумент в степень второго.
flip вернет нам новую функцию, у которой первый аргумент — это степень, а второй — это число,
которое нужно возводить в эту степень.

Эта функция бывает очень полезна при активной работе с функциями высшего порядка, она часто
упрощает возможность комбинировать функции между собой.

solution.js
Реализуйте и экспортируйте по умолчанию функцию flip. Данная версия flip работает только с
функциями принимающими два аргумента.
*/

const flip = f => (a, b) => f(b, a);

// subtraction
const sub = (a, b) => a - b;
const reverseSub = flip(sub);

console.log(sub(5, 3)); // 2
console.log(reverseSub(5, 3)); // -2

// exponentiation
const wop = flip(Math.pow);

console.log(Math.pow(1, 2)); // 1
console.log(wop(1, 2)); // 2

console.log(Math.pow(3, 2)); // 9
console.log(wop(3, 2)); // 8