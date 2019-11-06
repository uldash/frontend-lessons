/*
html-tags.js
Реализуйте и экспортируйте функцию filter для библиотеки html-tags, используя итеративный процесс:

import { node, append, make, filter, toString as htmlToString } from '@hexlet/html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter((element) =>
  !is('h1', element), html3);

//<p>content</p>
htmlToString(processedHtml);
Реализуйте и экспортируйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

import { toString as pairToString } from '@hexlet/pairs-data';
import { make, append, node } from '@hexlet/html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is life'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

listToString(quotes(dom5)); // ('i am sexy, and i know it', 'live is life');
*/
import { l, isEmpty, cons, head, tail, reverse, toString } from 'hexlet-pairs-data';
import { is, node, append, make, toString as htmlToString, getValue } from 'hexlet-html-tags';

/*
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
*/
export const filter = (func, elements, acc = l()) => {
    if (isEmpty(elements)) {
        return reverse(acc);
    }
    const current = head(elements);
    const tailElements = tail(elements);
    if (func(current)) {
        return filter(func, tailElements, cons(current, acc));
    }
    return filter(func, tailElements, acc);
}

export const quotes = (elements, acc = l()) => {
    if (isEmpty(elements)) {
        return reverse(acc);
    }

    const current = head(elements);
    const tailElements = tail(elements);

    if (is('blockquote', current)) {
        return quotes(tailElements, cons(getValue(current), acc));
    }
    return quotes(tailElements, acc);

}

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter((element) =>
    !is('h1', element), html3);

//<p>content</p>
console.log(htmlToString(processedHtml));

const dom01 = make();
const dom02 = append(dom01, node('h1', 'scheme'));
const dom03 = append(dom02, node('p', 'is a lisp'));
const dom04 = append(dom03, node('blockquote', 'live is life'));
const dom05 = append(dom04, node('blockquote', 'i am sexy, and i know it'));

console.log(toString(quotes(dom05))); // ('i am sexy, and i know it', 'live is life');