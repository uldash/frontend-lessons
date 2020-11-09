import { l, isEmpty, cons, head, tail, reverse, toString } from 'hexlet-pairs-data';

/*
    как фильтер устроен изнутри
*/

export const filter = (func, elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const current = head(elements);
    const tailElements = tail(elements);
    if (func(current)) {
        return cons(current, filter(func, tailElements));
    }
    return filter(func, tailElements);
}

const list = l('', 0, 10, 'go go', -5, 'string');
const list2 = filter(Number.isInteger, list);
console.log(toString(list2));

const list3 = filter(item => typeof item === 'string', list);
console.log(toString(list3));