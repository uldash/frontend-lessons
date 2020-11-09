/*
Реализуйте и экспортируйте по умолчанию функцию take, которая возвращает список,
состоящий из первых n (значение передается первым параметром) элементов исходного
(переданного вторым параметром) списка. Остальные детали работы функции демонстрирует нижеприведённый код:

take(3, l()); // ()
take(3, l(1, 2)); // (1, 2)
take(1, l(7, 2)); // (7)
*/
import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

const take = (n, lst) => {
    if (isEmpty(lst) || n === 0) {
        return l()
    }
    return cons(head(lst), take(n - 1, tail(lst)))
}

export default take

console.log(listToString(take(3, l()))); // ()
console.log(listToString(take(3, l(1, 2, 4, 5, 6, 7)))); // (1, 2,4)
console.log(listToString(take(2, l(1, 2, 4, 5, 6, 7)))); // (1, 2)
console.log(listToString(take(2, l(1, 2)))); // (1, 2)
console.log(listToString(take(1, l(7, 2)))); // (7)
