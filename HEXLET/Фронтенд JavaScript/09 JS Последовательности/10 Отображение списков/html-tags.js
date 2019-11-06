/*
html-tags.js
Реализуйте и экспортируйте функцию map для библиотеки html-tags. Реализация должна быть построена с
использованием итеративного процесса (без циклов, на основе рекурсии).
Эта функция подобна той что описывалась в теории для списков, только текущая реализация работает с html-списком.
Параметры и их порядок у функций аналогичный. Первый — функция-трансформер, второй — коллекция
(в нашем случае список html-тегов).

import { make, append, node, value, is } from '@hexlet/html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);

Реализуйте и экспортируйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

import { make, append, node, value, is, toString as htmlToString } from '@hexlet/html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
htmlToString(mirror(dom3));
Экспортируйте все созданные функции.

Примечание
Функцию b2p можно использовать для наглядного сопоставления частного варианта операции отображения с 
обобщённой реализацией операции отображения (собственно, map).

Подсказки
Функция reverseStr (псевдоним функции reverse из модуля по работе со строками strings) делает переворот строки.
При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки @hexlet/pairs-data и использовать её для отладки решений. Эта функция возвращает строковое представление списка
При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки @hexlet/html-tags и использовать её для отладки решений. Эта функция возвращает строковое представление html-списка
Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases)
*/

import { make, append, node, is, toString as listToString, getValue, getName } from 'hexlet-html-tags';
import { l, isEmpty, cons, head, tail, reverse } from 'hexlet-pairs-data';

export const map = (func, elements, acc = l()) => isEmpty(elements) ? reverse(acc) : map(func, tail(elements), cons(func(head(elements)), acc));

export const mirror = (elements) => {
  const reverse = (str, i = 0) => (i >= str.length) ? '' : `${reverse(str, i + 1)}${str[i]}`;

  if (isEmpty(elements)) {
    return l();
  }
  const element = head(elements);
  let newElement = node(getName(element), reverse(getValue(element)));
  return cons(newElement, mirror(tail(elements)));
}

/*
export const map = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const newElement = func(head(elements));
  return cons(newElement, map(func, tail(elements)));
}
*/

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));


// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
  if (getName(element) === 'h1') {
    return node('h2', getValue(element));
    return element;
  }
  return element;
}, dom3);


console.log(listToString(dom3));
console.log(listToString(processedDom));

const dom01 = make();
const dom02 = append(dom01, node('h1', 'scheme'));
const dom03 = append(dom02, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
console.log(listToString(mirror(dom03)));