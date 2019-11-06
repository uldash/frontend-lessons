/*
Реализуйте и экспортируйте по умолчанию функцию flatten, которая делает плоским вложенный список.

const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

// (1, 2, 3, 5, 4, 3, 2)
flatten(list);
*/

import { l, isEmpty, head, tail, cons, reverse, toString as listToString, isEqual, isList, concat } from 'hexlet-pairs-data'; // eslint-disable-line

/*
const flatten = (lst) => {
    if (isEmpty(lst)) {
        return lst
    }
    if (isList(head(lst))) {
        return flatten(head(lst))
    }
    return cons(head(lst), flatten(tail(lst)))
}
*/
const flatten = (lst) => {
    const flat = (lst, acc = l()) => {
        if (isEmpty(lst)) {
            return acc;
        }
        let newAcc = acc;
        if (!isList(head(lst))) {
            newAcc = cons(head(lst), acc)
        } else {
            newAcc = concat(flat(head(lst)), acc)
        }
        return flat(tail(lst), newAcc);
    }

    return reverse(flat(lst))
}
export default flatten;
/*
const flatten = list => (
  reduce(
    (element, acc) => (
      isList(element) ? concat(flatten(element), acc) : cons(element, acc)
    ),
    l(),
    reverse(list),
  )
);
*/

const list1 = l();
// ()
console.log(listToString(flatten(list1)));

const list2 = l(1, 2, l(3, 5), l(l(4, 3), 2));
// '(1, 2, 3, 5, 4, 3, 2)'
console.log(listToString(flatten(list2)));

const list3 = l(l(1, l(5), l(), l(l(-3, 'hi'))), 'string', 10, l(l(l(5))));
// '(1, 5, -3, hi, string, 10, 5)'
console.log(listToString(flatten(list3)));