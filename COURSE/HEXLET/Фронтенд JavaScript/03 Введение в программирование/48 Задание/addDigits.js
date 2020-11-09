/*
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:
Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Пример:
addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8
*/
const assert = require('assert');

const summDigits = num => {
    let result = 0;
    let iter = num;
    while (iter != 0) {
        result += iter % 10;
        //iter = iter / 10 | 0; // целочисленное деление
        iter = (iter - iter % 10) / 10; // целочисленное деление
    }
    return result;
}
const addDigits = num => {
    let result = num;
    while (result > 9) {
        result = summDigits(result);
    }
    return result;
}

// export default addDigits

console.log(summDigits(101)); // 2
console.log(summDigits(123)); // 6

console.log(addDigits(10)); // 1
console.log(addDigits(19)); // 1
console.log(addDigits(38)); // 2
console.log(addDigits(1259)); // 8
console.log(addDigits(598997686567)); // 4
console.log(addDigits(999999999999)); // 9