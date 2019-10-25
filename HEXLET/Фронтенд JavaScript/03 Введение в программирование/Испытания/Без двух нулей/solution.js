/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей
и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было
двух нулей идущих подряд.
Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения:
0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем
их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:
import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10
*/

const assert = require('assert');

const fac = n => n === 1 ? 1 : n * fac(n - 1);

function withoutTwoZeros(zero, one) {
    let result = 0;

    // сколькими способами можно переставить n предметов, расположенных на n различных местах,
    // если среди n предметов имеются k различных типов (k < n), т. е. есть одинаковые предметы.
    // p = n!/(n1!*n2!*...*nk!)
    result = fac(zero + one) / (fac(zero) * fac(one));
    // result -= fac(zero + one) / fac(one);
    return result;
}

//assert.equal(fac(1), 1);
//assert.equal(fac(4), 24);
//assert.equal(fac(10), 3628800);

/*
console.log(withoutTwoZeros(3, 1)); // 0
console.log(withoutTwoZeros(3, 2)); // 1
console.log(withoutTwoZeros(1, 1)); // 2
console.log(withoutTwoZeros(3, 5)); // 20
console.log(withoutTwoZeros(1, 3)); // 4
console.log(withoutTwoZeros(2, 2)); // 3
console.log(withoutTwoZeros(2, 4)); // 10
console.log(withoutTwoZeros(4, 6)); // 35
console.log(withoutTwoZeros(5, 6)); // 21
console.log(withoutTwoZeros(5, 7)); // 56
console.log(withoutTwoZeros(6, 8)); // 84
*/

//построим массив, где на 
const perebor = (a, b) => {
    let result = 0;
    let binaryNum = ''.padStart(a + b, '1');
    //console.log(binaryNum);
    for (let index = 0; index <= parseInt(binaryNum, 2); index++) {
        let tmpStr = index.toString(2).padStart(a + b, '0');
        if (!tmpStr.includes('00')) {
            if (((tmpStr.match(/0/g) || []).length === a) && ((tmpStr.match(/1/g) || []).length === b)) {
                console.log(tmpStr);
                result++;
            }
        }
        //  console.log(tmpStr);
        //if (((tmpStr.match(/0/g) || []).length === a) && ((tmpStr.match(/1/g) || []).length === b)) {
        //    result++;
        //}
        //}
        //console.log(index.toString(2).padStart(a + b, '0'));
    }
    return result;
}

console.log(perebor(2, 2));