/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, 
состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта 
строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
- Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
- Закрывающая скобка не должна идти впереди открывающей.

import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false
*/

function areBracketsBalanced(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            result++;
        }
        if (str[i] === ')') {
            result--;
        }
        if (result < 0) {
            return false;
        }
    }
    return !result;
}

console.log(areBracketsBalanced('(())'));  // true
console.log(areBracketsBalanced('((())')); // false
console.log(areBracketsBalanced('())(')); // false