/*
Напишите функцию smallestDivisor. Она должна находить наименьший целый делитель числа. Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой. На этот раз реализуйте императивный итеративный процесс, что означает:

не используйте рекурсию
используйте переменные
используйте цикл while
*/
const smallestDivisor = (num) => {
    if (num === 1) {
        return 1;
    }
    if (num < 1) {
        return NaN;
    }
    let iter = 2;
    while (iter <= num) {
        if (num % iter === 0) {
            return iter;
        }
        iter++;
    }
}

console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17

