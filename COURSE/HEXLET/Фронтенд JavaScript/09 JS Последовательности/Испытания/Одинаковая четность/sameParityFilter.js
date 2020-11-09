/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список и возвращает новый,
состоящий из элементов, у которых такая же чётность, как и у первого элемента входного списка.

Примеры
sameParity(l(-1, 0, 1, -3, 10, -2)); // (-1, 1, -3)
sameParity(l(2, 0, 1, -3, 10, -2)); // (2, 0, 10, -2)
sameParity(l()); // ()
*/
import { l, isEmpty, head, tail, cons, reverse, toString as listToString, isEqual, isList, concat, filter } from 'hexlet-pairs-data'; // eslint-disable-line

const sameParity = (lst) => {
    if (isEmpty(lst)) {
        return lst;
    }
    const flag = head(lst) & 1;
    return filter(item => (flag ? item & 1 : !(item & 1)), lst)
}

export default sameParity;

console.log(listToString(sameParity(l(-1, 0, 1, -3, 10, -2)))); // (-1, 1, -3)
console.log(listToString(sameParity(l(2, 0, 1, -3, 10, -2)))); // (2, 0, 10, -2)
console.log(listToString(sameParity(l()))); // ()
