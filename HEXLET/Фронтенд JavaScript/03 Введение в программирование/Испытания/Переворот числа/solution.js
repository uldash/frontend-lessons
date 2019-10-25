/*
Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в
переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
*/

const reverseInt = (number) => {
    let str = String(Math.abs(number));
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return number < 0 ? -Number(result) : Number(result);
}

//export default reverseInt
console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321
console.log(reverseInt(8900)); // 98
