/*
Реализуйте и экспортируйте по умолчанию функцию invertCase,
которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
*/

function invertCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += (str[i] === str[i].toUpperCase()) ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return result;
}

export default invertCase;

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS'));     // i LOvE js