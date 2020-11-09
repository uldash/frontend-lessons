/*
Реализуйте и экспортируйте функцию extractHeaders, которая извлекает тексты всех 
заголовков h2 из переданного html и возвращает html в котором каждый из этих текстов обернут в p.

Например такой html в строковом представлении 
<h2>header1</h2><h2>header2</h2><p>content</p> превратится в такой 
<p>header1</p><p>header2</p>. Ниже развернутый пример.

import { node, append, make, reduce, toString as htmlToString } from '@hexlet/html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

htmlToString(extractHeaders(html3));
// => <p>header1</p><p>header2</p>

Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег. 
Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc, которая
уже импортирована в модуль html-tags.

import { make, append, node } from '@hexlet/html-tags';

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

wordsCount('h2', 'lisp', html4); // 3
*/

import { node, append, make, reduce, toString as htmlToString, is, getValue, map } from 'hexlet-html-tags';
import { filter } from 'hexlet-html-tags';
import { l, isEmpty, head, tail, cons, toString } from 'hexlet-pairs-data'

export const extractHeaders = (items) => {
    const headers = filter((item) => is('h2', item), items);
    const words = map(item => (node('p', getValue(item))), headers);
    return words;
}

export const wordsCount = (tag, word, items) => {
    const headers = filter((item) => is(tag, item), items);
    const counter = reduce((item, acc) => (wc(word, getValue(item)) + acc), 0, headers);
    return counter;
}

export const wc = (word, text) => {
    const re = new RegExp(word, 'g');
    return (text.match(re) || []).length;
};

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

console.log(htmlToString(extractHeaders(html3)));
// => <p>header1</p><p>header2</p>

const html01 = append(make(), node('h2', 'header1 lisp'));
const html02 = append(html01, node('p', 'content'));
const html03 = append(html02, node('h2', 'lisp header2 lisp'));
const html04 = append(html03, node('p', 'content lisp'));

//console.log(wc('lisp', getValue(head(html04))));
//console.log(htmlToString(wordsCount('h2', 'lisp', html04))); // 3
console.log(wordsCount('h2', 'lisp', html04)); // 3