/*
Реализуйте функцию-предикат isArgumentsForSubstrCorrect, которая принимает три аргумента:
строку
индекс, с которого начинать извлечение
длину извлекаемой подстроки
Функция возвращает false, если хотя бы одно из условий истинно:

Отрицательная длина извлекаемой подстроки
Отрицательный заданный индекс
Заданный индекс выходит за границу всей строки
Длина подстроки в сумме с заданным индексом выходит за границу всей строки
В ином случае функция возвращает true.

Не забывайте, что индексы начинаются с 0, поэтому индекс последнего элемента — это «длина строки минус 1».

Пример вызова:
const str = 'Sansa Stark';
isArgumentsForSubstrCorrect(str, -1, 3); // false
isArgumentsForSubstrCorrect(str, 4, 100); // false
isArgumentsForSubstrCorrect(str, 10, 10); // false
isArgumentsForSubstrCorrect(str, 11, 1); // false
isArgumentsForSubstrCorrect(str, 3, 3); // true
isArgumentsForSubstrCorrect(str, 0, 5); // true
*/
const isArgumentsForSubstrCorrect = (str, index, length) => {
    if (length < 0 || index < 0 || index >= str.length || index + length >= str.length) {
        return false;
    }
    return true;
};

const str = 'Sansa Stark';

console.log(isArgumentsForSubstrCorrect(str, -1, 3)); // false
console.log(isArgumentsForSubstrCorrect(str, 4, 100)); // false
console.log(isArgumentsForSubstrCorrect(str, 10, 10)); // false
console.log(isArgumentsForSubstrCorrect(str, 11, 1)); // false
console.log(isArgumentsForSubstrCorrect(str, 3, 3)); // true
console.log(isArgumentsForSubstrCorrect(str, 0, 5)); // true

