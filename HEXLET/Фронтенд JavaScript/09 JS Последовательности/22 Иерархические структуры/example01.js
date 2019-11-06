import { make, node, append, getName, reduce, hasChildren, is, children } from 'hexlet-html-tags'
import { cons, l, toString as listToString, isList, head, tail, isEmpty, concat } from 'hexlet-pairs-data'
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

//console.log(listToString(dom4));
console.log(listToString(dom));
/*
console.log(isPair(dom1));
console.log(isPair(dom2));
console.log(isPair(dom3));
console.log(isPair(dom4));
console.log()
console.log(isList(dom1));
console.log(isList(dom2));
console.log(isList(dom3));
console.log(isPair(dom4));

console.log(toString(head(dom4)));
console.log(toString(tail(dom4)));
*/
const select = (tree, tag) => {
    const iter = (list, acc = l()) => {
        if (!hasChildren(list) && is(tag, list)) {
            cons(list, acc)
            console.log(toString(list));
            console.log(listToString(acc));

            //console.log(toString(acc));
            return cons(list, acc)
        }
    };
    //console.log('\t' + listToString(reduce(iter, l(), tree)));
    return reduce(iter, l(), tree);
};
/*
const tree = (dom, acc) => {
    if (isEmpty(dom)) {
        return acc;
    }
    const element = head(dom);
    const tailElements = tail(dom);
    return tree(tailElements, cons(element, acc));
}
*/
//console.log(listToString(l(0, l(l(0, 100), 0), 10)));
//console.log(toString(select(l(0, l(l(0, 100), 0), 10))));
select(dom, 'p');
//console.log(toString(select(dom4, 'p')));
//console.log(reduce(tree, l(), dom4))