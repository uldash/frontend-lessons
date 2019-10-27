/*
Реализуйте алгоритм числа Zero и операции Succ (увеличение числа на единицу) в соответствии с арифметикой Чёрча.
Не забудьте про экспорт.

Пример:
const two = Succ(Succ(Zero));

// Немного хитрый способ трансформировать число черча в обычное представление.
// Откровенно говоря, устройство самих чисел еще хитрее ;)
two(x => x + 1)(0); // 2

const four = Succ(Succ(two));
four(x => x + 1)(0); // 4
*/

// ноль это False в лямба исчислении
const Zero = f => x => x;
//const one = f => x => f(x);
//const two = f => x => f(f(x));
//const three = f => x => f(f(f(x)));
//const four = f => x => f(f(f(f(x))));
//const Succ = n => f => a => f(n(f)(a));

//см видео https://youtu.be/pAnLQ9jwN-E
const Succ = n => f => x => f(n(f)(x));

console.log(Zero(x => x + 1)(0));//0

const one = Succ(Zero)
console.log(one(x => x + 1)(0)); // 1

const two = Succ(one);
console.log(two(x => x + 1)(0)); // 2

const three = Succ(Succ(one));
console.log(three(x => x + 1)(0)); // 2

const four = Succ(Succ(two));
console.log(four(x => x + 1)(0)); // 4
