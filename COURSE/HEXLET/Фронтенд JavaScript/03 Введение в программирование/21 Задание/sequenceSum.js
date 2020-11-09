/*
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum,
которая находит сумму последовательности целых чисел. 
Последовательность задается двумя значениями: begin - начало последовательности, 
end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6.
 Сумма такой последовательности будет: 20.

import sequenceSum from './sequenceSum';

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
*/

function sequenceSum(begin, end) {
    if (begin > end) {
        return NaN;
    }
    if (begin === end) {
        return begin;
    }
    return begin + sequenceSum(++begin, end);
}

console.log(sequenceSum(0, 0));//toBe(0);
console.log(sequenceSum(1, 1));//toBe(1);
console.log(sequenceSum(1, 5));//toBe(15);
console.log(sequenceSum(2, 6));//toBe(20);
console.log(sequenceSum(-1, -1));//toBe(-1);
console.log(sequenceSum(-5, 4));//toBe(-5);
console.log(Number.isNaN(sequenceSum(2, 1)));//toBe(true);
console.log(Number.isNaN(sequenceSum(1, -5)));//toBe(true);