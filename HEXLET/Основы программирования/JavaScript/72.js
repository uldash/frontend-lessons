/*
Реализуйте функцию countChars, которая считает повторения указанного символа в строке.
(В программировании говорят «количество вхождений символа в строке»).
Функция принимает на вход два параметра: строку и символ. Функция возвращает число.

Пример вызова:
const str = 'If I look back I am lost';
countChars(str, 'I'); // 3
countChars(str, 'z'); // 0
countChars(str, 'o'); // 3
*/

const countChars = (str, chr) => {
    let index = 0;
    for (element of str) {
        if (element === chr) {
            index++;
        }
    }
    return index;
};

const str = 'If I look back I am lost';
console.log(countChars(str, 'I')); // 3
console.log(countChars(str, 'z')); // 0
console.log(countChars(str, 'o')); // 3