/*
Пары неотрицательных целых чисел можно представить числами и арифметическими операциями. 
Можно считать, что пара чисел a и b – это 2^a * 3^b.

Функции car и cdr при этом будут просто вычислять значения a и b 
(кратности двойки и тройки, соответственно), раскладывая аргумент на множители.

Например, имея пару 5, 8 в виде числа 209952 (2^5 * 3^8), можно получить 
первый элемент пары, разложив число на множители и вычислив факторизацию для числа 2, 
а второй элемент пары – разложив число на множители и вычислив факторизацию для числа 3.

pairs.js

Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:

cons
car
cdr

Пример:

const pair = cons(5, 8);    // 2^5 * 3^8 = 209952
car(pair); // 5
cdr(pair); // 8

Подсказки
Пара – это число, поэтому, чтобы получить из него исходные значения a и b, нужно раскладывать число на множители.
*/

const cons = (a,b) => 2**a * 3 ** b;

const factors = m => {
    let a = 0;
    let b = 0;
    while (m !== 1){
        if (m % 2 === 0){
            a++;
            m /=2;
        } else if (m % 3 === 0){
            b++;
            m /=3;
        }
        if (a===0 && b === 0) {
            return -1
        }
    }
    return {
        a: a,
        b: b,
    };
}
const car = pair => factors(pair).a;
const cdr = pair => factors(pair).b;

export {cons, car, cdr};

/*
const factor = (base, value) => {
  if (value % base !== 0) {
    return 0;
  }
  return 1 + factor(base, value / base);
};

export const cons = (a, b) => (2 ** a) * (3 ** b);
export const car = (pair) => factor(2, pair);
export const cdr = (pair) => factor(3, pair);
*/

const pair = cons(5, 8);    
console.log(pair); // 2^5 * 3^8 = 209952
console.log(car(pair)); // 5
console.log(cdr(pair)); // 8
