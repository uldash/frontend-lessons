/*
    Reduce, свертка
    Подсчитать количество заголовков
*/

import { node, append, make, is, reduce } from 'hexlet-html-tags';
import { l, isEmpty, head, tail, cons, toString } from 'hexlet-pairs-data'

export const headersCount = (tagName, elements) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return acc;
        }

        const item = head(items);
        const newAcc = is(tagName, item) ? acc + 1 : acc;
        return iter(tail(items), newAcc);
    };
    return iter(elements, 0);
}

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));

const html4 = append(html3, node('h1', 'haskell'));
const html5 = append(html4, node('p', 'pure'));
const html6 = append(html5, node('h2', 'php'));

console.log(headersCount('h1', html6)); //2


const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max, head(list), list);
console.log(toString(list2)); //38

const list3 = reduce((item, acc) => item + acc, 0, list);
console.log(toString(list3)); //30
