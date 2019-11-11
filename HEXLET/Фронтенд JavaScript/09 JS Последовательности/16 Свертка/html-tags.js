/*
Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

import { node, append, make, reduce } from '@hexlet/html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2

Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.

import { make, append, node } from '@hexlet/html-tags';

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

emptyTagsCount('blockquote', html6); // 2
*/

import {
    node, append, make, is, getName, getValue,
} from 'hexlet-html-tags';
import {
    l, isEmpty, head, tail, cons, toString,
} from 'hexlet-pairs-data';

export const reduce = (func, acc, data) => {
    if (isEmpty(data)) {
        return acc;
    }

    const element = head(data);
    const tailElements = tail(data);
    return reduce(func, func(element, acc), tailElements);
};

export const emptyTagsCount = (tag, elements) => reduce(
    (element, acc) => ((is(tag, element) && getValue(element) === '') ? acc + 1 : acc), 0, elements,
);

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

console.log(reduce((element, acc) => (is('h1', element) ? acc + 1 : acc), 0, html3)); // 2

const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max, head(list), list);
console.log(toString(list2));

const list3 = reduce((item, acc) => item + acc, 0, list);
console.log(toString(list3));

const html01 = make();
const html02 = append(html01, node('h1', 'scheme'));
const html03 = append(html02, node('p', 'is a lisp'));
const html04 = append(html03, node('blockquote', ''));
const html05 = append(html04, node('blockquote', ''));
const html06 = append(html05, node('blockquote', 'quote'));

console.log(emptyTagsCount('blockquote', html06)); // 2
