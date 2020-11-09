/*
Все создаваемые функции, в рамках этого задания, должны быть реализованы независимо друг от друга, 
то есть их нельзя использовать для реализации друг друга.

list.js

Реализуйте и экспортируйте функцию has, которая проверяет, является ли переданное значение элементом списка.

const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false

Реализуйте и экспортируйте функцию reverse, которая переворачивает список, используя итеративный процесс.

const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)

Реализуйте и экспортируйте функцию concat, которая соединяет два списка, используя рекурсивный процесс 
(попробуйте сначала представить, как работала бы функция copy, которая принимает на вход список и возвращает его копию).

const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
*/

import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

const has = (numbers, num) => (isEmpty(numbers)?false:(head(numbers) === num)?true:has(tail(numbers),num));

const reverse = (numbers, newNumbers = l()) => isEmpty(numbers)?newNumbers:reverse(tail(numbers), cons(head(numbers), newNumbers));

const concat = (numbers1, numbers2) => {
    if (isEmpty(numbers1)){
        return numbers2;
    }
    return cons(head(numbers1), concat(tail(numbers1),numbers2));
};

const copy = numbers => {
    if (isEmpty(numbers)){
        return l()
    }
    return cons(head(numbers),tail(numbers))
};

export {has, reverse, concat};

const numbers = l(3, 4, 5, 8);
console.log('Has:')
console.log(has(numbers, 8)); // true
console.log(has(numbers, 0)); // false

const numbersForReverse = l(3, 4, 5);
console.log('Reverse:')
console.log(listToString(reverse(numbersForReverse))); // (5, 4, 3)

const numbers1 = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
console.log('Concat:')
console.log(listToString(concat(numbers1, numbers2))); // (3, 4, 5, 8, 3, 2, 9)

const numbersForCopy = l(3, 4, 5, 8, 9);
console.log('Copy:')
console.log(listToString(copy(numbersForCopy))); // (3, 4, 5, 8)

