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

const withoutTwoZeros = (a, b) => {
    const numberChar = (str, chr) => {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            if (chr === str[i]) {
                result++;
            }
        }
        return result;
    }
    let result = 0;
    let binaryNum = ''.padStart(a + b, '1');
    //console.log(binaryNum);
    for (let index = 0; index <= parseInt(binaryNum, 2); index++) {
        let tmpStr = index.toString(2).padStart(a + b, '0');
        if (!tmpStr.includes('00')) {
            if ((numberChar(tmpStr, '0') === a) && (numberChar(tmpStr, '1') === b)) {
                //if (((tmpStr.match(/0/g) || []).length === a) && ((tmpStr.match(/1/g) || []).length === b)) {
                //console.log(tmpStr);
                result++;
            }
        }
    }
    return result;
}
/*
const withoutTwoZeros = (a, b) => {
  if (a > b + 1) {
    return 0;
  }
  if (a === 0 || b === 0) {
    return 1;
  }

  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};
*/
assert.equal(withoutTwoZeros(3, 1), 0);
assert.equal(withoutTwoZeros(3, 2), 1);
assert.equal(withoutTwoZeros(1, 1), 2);
assert.equal(withoutTwoZeros(3, 5), 20);
assert.equal(withoutTwoZeros(1, 3), 4);
assert.equal(withoutTwoZeros(2, 2), 3);
assert.equal(withoutTwoZeros(2, 4), 10);
assert.equal(withoutTwoZeros(4, 6), 35);
assert.equal(withoutTwoZeros(5, 6), 21);
assert.equal(withoutTwoZeros(5, 7), 56);
assert.equal(withoutTwoZeros(6, 8), 84);
