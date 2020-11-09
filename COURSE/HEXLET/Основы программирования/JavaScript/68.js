/*
    Напишите функцию isFalsy, которая проверяет, 
    трактуется ли переданное значение как ложное с точки зрения JavaScript. 
    Для выполнения этой проверки вам понадобится сравнить false с переданным значением, используя ==.

    Примеры вызова:
    isFalsy('   '); // => true
    isFalsy(false); // => true
    isFalsy(3); // => false
*/

const isFalsy = arg => arg == false;

console.log(isFalsy('   ')); // => true
console.log(isFalsy(false)); // => true
console.log(isFalsy(3)); // => false

