/*
    Реализуйте функцию mysubstr, которая извлекает из строки подстроку указанной длины,
    начиная с первого символа. Функция принимает на вход два параметра:
    исходную строку и длину подстроки, которую необходимо вернуть.

    Пример вызова:
    const str = 'If I look back I am lost';
    mysubstr(str, 1); // => 'I'
    mysubstr(str, 7); // => 'If I lo'
 */

const mysubstr = (str, index) => {
    let result = '';
    let counter = 0;

    while (counter < index) {
        result += str[counter];
        counter++;
    }
    return result;
};

const str = 'If I look back I am lost';

console.log(mysubstr(str, 1)); // => 'I'
console.log(mysubstr(str, 7)); // => 'If I lo'