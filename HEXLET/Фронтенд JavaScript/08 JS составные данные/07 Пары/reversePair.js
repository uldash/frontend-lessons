/*
Реализуйте функцию reversePair, которая принимает на вход пару и возвращает другую, в которой значения переставлены местами:

import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons('one', 'two');
console.log(toString(reversePair(pair))); // ('two', 'one')
*/

import { cons, car, cdr, toString } from 'hexlet-pairs';

const reversePair= (pair) => cons(cdr(pair), car(pair));

console.log(toString(reversePair(cons('one', 'two'))));
