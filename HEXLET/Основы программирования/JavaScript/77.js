/*
Реализуйте функцию sumOfSeries, которая считает сумму ряда целых чисел.
Ряд задаётся двумя числами — начальным и конечным.

Функция принимает два аргумента-числа и возвращает сумму ряда. 
Например, для аргументов 4, 7 сумма будет 4 + 5 + 6 + 7 = 22.

sumOfSeries(1, 2); // 3
sumOfSeries(1, 3); // 6
sumOfSeries(4, 7); // 22
Если начальное и конечное числа равны, то результатом будет то же число:
sumOfSeries(1, 1); // 1
*/

const sumOfSeries = (firstNumber, secondNumber) => {
    let result = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i;
    }
    return result;
}

console.log(sumOfSeries(1, 2)); // 3
console.log(sumOfSeries(1, 3)); // 6
console.log(sumOfSeries(4, 7)); // 22
console.log(sumOfSeries(1, 1)); // 1
