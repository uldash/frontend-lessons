/*
Напишите и экспортируйте по умолчанию функцию zip, которая принимает на вход два списка и возвращает третий,
в котором каждый элемент это список элементов исходных списков, стоящих на тех же позициях.

const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);

//  ((1, 2), (5, 3), (3, 2), (8, 1))
const result = zip(list1, list2);

Как видно из примера, если списки различаются по длине,
то длина результирующего списка равна длине короткого списка.
*/
import { l, isEmpty, head, tail, cons, reverse, toString as listToString, isEqual } from 'hexlet-pairs-data'; // eslint-disable-line

// iteracia
/*
const zip = (list1, list2, acc = l()) => {
    if (isEmpty(list1) || isEmpty(list2)) {
        return reverse(acc);
    }
    const newAcc = cons(l(head(list1), head(list2)), acc);
    return zip(tail(list1), tail(list2), newAcc);
}
*/
// recursia 
const zip = (list1, list2, acc = l()) => {
    if (isEmpty(list1) || isEmpty(list2)) {
        return l();
    }
    const newAcc = cons(l(head(list1), head(list2)), acc);
    return cons(l(head(list1), head(list2)), zip(tail(list1), tail(list2)));
}


export default zip;

const list1 = l(1, 5, 3, 8, 9);
const list2 = l(2, 3, 2, 1);

//  ((1, 2), (5, 3), (3, 2), (8, 1))
const result = zip(list1, list2);
console.log(listToString(result));
