import { make, node, append, getName, reduce, map, hasChildren, is, children, getValue } from 'hexlet-html-tags'
import { cons as consList, l, toString as listToString, isList, head, tail, isEmpty, concat, filter } from 'hexlet-pairs-data'
import { isPair, toString, car } from 'hexlet-pairs';

const dom1 = make(); // Список нод, то есть это лес, а не дерево
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children1));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', 'text'))))));

const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));


console.log(listToString(dom) + '\n');

const select = (tag, dom) => {
    const lst = reduce((item, acc) => {
        if (hasChildren(item)) {
            return consList(select(tag, children(item)), acc)
        }
        if (is(tag, item)) {
            return consList(item, acc)
        }
        return acc
    }, l(), dom)

    return lst;
}

console.log(listToString(select('p', dom)));
