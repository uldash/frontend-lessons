import { isList, reverse, cons as consList, l, isEmpty, head, tail, concat, toString as listToString, isEqual } from 'hexlet-pairs-data';
import { make, node, append, is, toString as htmlToString, hasChildren, children, reduce, filter, map } from 'hexlet-html-tags';

const select = (query, dom) => reduce((dom, acc) => {
    if (isEmpty(query)) {
        return acc;
    }
    const newAcc = hasChildren(dom) ? concat(select(query, children(dom)), acc) : acc;
    console.log(`DOM:\t ${head(query)}\t:\t${listToString(l(dom))}`)
    return is(head(query), dom) ? consList(dom, newAcc) : newAcc;
}, l(), dom)


const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('p', l(node('ul', children1))));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('div', l(node('a', l(node('div', l(node('p', l(node('span', 'text'))))))))));
const dom11 = append(dom10, node('h1', 'prolog'));
const dom = append(dom11, node('p', 'is about logic'));

console.log(listToString(dom));
console.log();
console.log(htmlToString(select(l('p', 'ul', 'li'), dom)));