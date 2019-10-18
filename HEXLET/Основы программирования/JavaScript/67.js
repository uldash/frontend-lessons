/*
    Реализуйте функцию convertText, которая принимает на вход строку и,
    если первая буква не заглавная, возвращает перевернутый вариант исходной строки. 
    Если первая буква заглавная, то строка возвращается без изменений.

    Примеры вызова:
    convertText('Hello'); // => 'Hello'
    convertText('hello'); // => 'olleh'
*/
const reverse = (str, i = 0) => (i >= str.length) ? '' : `${reverse(str, i + 1)}${str[i]}`;

const convertText = text => (text[0].toUpperCase() === text[0] ? text : reverse(text));

console.log(convertText('Hello')); // => 'Hello'
console.log(convertText('hello')); // => 'olleh'
