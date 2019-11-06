import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// реализация функции map
export const map = (func, elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const newElement = func(head(elements));
    return cons(newElement, map(func, tail(elements)));
}


console.log(listToString(map((x => 2 * x), l(3, 5, 6))));
