/*
Однажды вы сидели дома, когда курьер Василий принес вам коробку. С коробкой шла записка следующего содержания:
Коробка состоит из двух отсеков, в одном из которых письмо, а в другом лежит еще одна коробка, в которой также 
два отсека и точно также один отсек с письмом, а в другом - коробка. Коробки могут быть вложены друг в друга сколько угодно раз. 
Вам нужно добраться до коробки, внутри которой нет вложенной коробки ни в одном из двух отсеков, и отдать ее курьеру.

Подчеркну, что во всех коробках, кроме той последней, в одном отсеке письмо (любые данные, которые не являются парой),
а в другом - всегда коробка, но никогда не две коробки одновременно. Сами отсеки при этом могут меняться, то есть в 
одной коробке отсеком с письмом может быть первый, а в другой - последний.

Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход "коробку" (пару), 
находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.

import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons(
  null,
  cons('one', 'two'),
);
toString(findPrimitiveBox(pair)); // ('one', 'two')

const pair2 = cons(
  cons(null, cons(1, 5)),
  null,
);
toString(findPrimitiveBox(pair2)); // (1, 5)
*/

import { cons, car, cdr, toString, isPair } from 'hexlet-pairs';

const findPrimitiveBox = pair => {
  if (!isPair(car(pair)) && !isPair(cdr(pair))){
    return pair;
  }
  return isPair(car(pair)) ? findPrimitiveBox(car(pair)) : findPrimitiveBox(cdr(pair));
}

const pair = cons(
    null,
    cons('one', 'two'),
  );
  console.log(toString(findPrimitiveBox(pair))); // ('one', 'two')
  
  const pair2 = cons(
    cons(null, cons(1, 5)),
    null,
  );
  console.log(toString(findPrimitiveBox(pair2))); // (1, 5)
  