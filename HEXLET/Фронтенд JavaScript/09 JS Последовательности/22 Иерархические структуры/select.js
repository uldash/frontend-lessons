/*
Работа с древовидными структурами в промышленном программировании достаточно частая ситуация. 
Например, вывод файловой структуры в нашем редакторе — типичный пример работы с деревьями.

select.js

Реализуйте и экспортируйте по умолчанию функцию select, которая принимает на вход имя тега и html список, 
а возвращает список всех нод, соответствующих имени. Ноды возвращаются в том виде, в котором они представлены 
в дереве. Порядок, в котором ноды возвращаются — не важен.

Предположим, что у нас есть такой html:

<h1>scheme</h1>
<p>is a lisp</p>
<ul>
    <li>item 1</li>
    <li>item 2</li>
</ul>
<ol>
    <li>item 1</li>
    <li>item 2</li>
</ol>
<p>
    is a functional lang
</p>
<ul>
    <li>item</li>
</ul>
<div>
    <p>text</p>
</div>
<div>
    <div>
        <p>text</p>
    </div>
</div>
<h1>prolog</h1>
<p>is about logic</p>
Тогда:

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

select('li', dom);
// [('li', 'item 1'), ('li', 'item 2'), ('li', 'item 1'), ('li', 'item 2'), ('li', 'item')]

select('p', dom);
// [('p', 'is a lisp'), ('p', 'text'), ('p', 'text'), ('p', 'is about logic'), ('p', 'is a functional language')]
*/


import { toString as htmlToString, make, node, append, getName, reduce, map, hasChildren, is, children, getValue } from 'hexlet-html-tags'
import { length, cons as consList, l, toString as listToString, isList, head, tail, isEmpty, concat, filter } from 'hexlet-pairs-data'
import { isPair, toString, car, cons } from 'hexlet-pairs';

let dom;
const dom1 = make();
const children1 = l(node('a', l(node('span', 'scheme'))));
const dom2 = append(dom1, node('h1', children1));
const dom3 = append(dom2, node('p', 'is a lisp'));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children2));
const children3 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children3));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children4 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children4));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));
const dom10 = append(dom9, node('h1', 'prolog'));
dom = append(dom10, node('p', 'is about logic'));

console.log(listToString(dom) + '\n');

const select = (tagName, dom) => reduce((item, acc) => {
    const acc2 = hasChildren(item) ? concat(select(tagName, children(item)), acc) : acc;
    return is(tagName, item) ? consList(item, acc2) : acc2;
}, l(), dom);

export default select;

console.log(listToString(select('span', dom)));
console.log(length(select('span', dom))); // 2
console.log(listToString(select('section', dom)));
console.log(length(select('section', dom))); //0
console.log(listToString(select('li', dom)));
console.log(length(select('li', dom))); // 5
console.log(listToString(select('p', dom)));
console.log(length(select('p', dom))); // 5
console.log(listToString(select('h1', dom)));
console.log(length(select('h1', dom))); //2
console.log(listToString(select('div', dom)));
console.log(length(select('div', dom))); // 3