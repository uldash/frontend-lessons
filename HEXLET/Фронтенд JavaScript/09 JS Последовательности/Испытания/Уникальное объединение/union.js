/*
Напишите и экспортируйте по умолчанию функцию union, которая принимает на вход два списка и возвращает третий,
являющийся объединением уникальных значений двух исходных списков.

const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);

const result = union(list1, list2);
// (2, 3, 1, 7, 5, 8, 9)

Подсказки
Порядок уникальных значений в итоговом списке должен соответствовать порядку появления этих значений в исходных
списках (сначала в первом переданном списке, потом - во втором).
*/
import { l, isEmpty, cons, reduce, filter, has, reverse, toString as listToString, concat, head } from 'hexlet-pairs-data';


const union = (list1, list2) => {
    const foo = (item, acc) => (has(acc, item) ? acc : cons(item, acc));
    const uniqList1 = reduce((item, acc) => foo(item, acc), l(), list1);
    const uniqList = reduce((item, acc) => foo(item, acc), uniqList1, list2);
    return reverse(uniqList);
}
/*
const union = (list1, list2) => {
    const foo = (item, acc) => (has(acc, item) ? acc : cons(item, acc));
    const uniqList = reduce((item, acc) => foo(item, acc), l(), concat(list1, list2));
    return reverse(uniqList);
}
*/

export default union;
const list1 = l(2, 3, 2, 1, 7);
const list2 = l(1, 5, 3, 5, 8, 9);

const result = union(list1, list2);
// (2, 3, 1, 7, 5, 8, 9)
console.log(listToString(result));
