/*
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:
import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh
Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод substr.
*/

const reverse = (str, i = 0) => (i === str.length) ? '' : `${reverse(str, i + 1)}${str[i]}`;

console.log(reverse('abc'));
console.log(reverse(''));
//export default reverse