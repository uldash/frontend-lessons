/*
    Удаление тегов <h2>
*/

import { l, isEmpty, cons, head, tail, reverse, filter } from 'hexlet-pairs-data';
import { node, append, make, toString, is } from 'hexlet-html-tags';

export const removeHeaders = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const element = head(elements);
    const tailElements = tail(elements);
    if (is('h2', element)) {
        return removeHeaders(tailElements);
    }
    return cons(element, removeHeaders(tailElements));
};

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));

//const processedHtml = removeHeaders(html3);
const processedHtml = filter(element => !is('h2', element), html3);
console.log(toString(processedHtml));