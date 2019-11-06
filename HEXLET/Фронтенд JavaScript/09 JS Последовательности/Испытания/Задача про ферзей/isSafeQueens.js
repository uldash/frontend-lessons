/*
Задача о восьми ферзях — широко известная задача по расстановке фигур на шахматной доске. Исходная формулировка: "Расставить на стандартной 64-клеточной шахматной доске 8 ферзей так, чтобы ни один из них не находился под боем другого". Подразумевается, что ферзь бьёт все клетки, расположенные по вертикалям, горизонталям и обеим диагоналям.

// из материалов Википедии

Задачу можно обобщить следующим образом: "На шахматной доске со стороной N, расставить N ферзей так, чтобы ни один из них не находился под боем другого".

isSafeQueens.js
Реализуйте и экспортируйте по умолчанию isSafeQueens, которая принимает комбинацию ферзей в виде списка и проверяет, является ли данная расстановка решением задачи.

Комбинации формируются следующим образом:

(2, 4, 1, 3)

где каждое число — это позиция ферзя по вертикали, а порядок числа в списке — позиция ферзя по горизонтали.

Для примера выше, доска будет выглядеть так:

     1   2   3   4
    ___ ___ ___ ___
1  |___|___|_*_|___|
2  |_*_|___|___|___|
3  |___|___|___|_*_|
4  |___|_*_|___|___|
Пример работы:

const queens = l(2, 4, 1, 3);

isSafeQueens(queens); // true
*/
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { length, l, isEmpty, reverse, toString as listToString, isList, head, tail, cons as consList, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

// для ладьей
const isSafeRocks = (lst, acc = true) => {
    const isSafe = (lst, acc) => {
        // console.log(listToString(lst) + '\t' + length(lst))
        if (length(lst) < 2) {
            return acc;
        }
        // console.log(`${head(lst)}===${head(tail(lst))}`)
        if (head(lst) === head(tail(lst))) {
            return acc = false;
        }
        return isSafe(cons(head(lst), tail(tail(lst))), acc)
    }

    if (length(lst) < 2) {
        return acc;
    }
    if (!isSafe(lst, acc)) {
        return false;
    }
    return isSafeRocks(tail(lst), acc)
}

// для слонов
const isSafeBishops = (lst, acc = true) => {
    const isSafePlus = (lst, acc) => {
        //console.log(listToString(lst) + '\t' + length(lst))
        if (length(lst) < 2) {
            return acc;
        }
        //console.log(`${head(lst) + 1}===${head(tail(lst))}`)
        if (head(lst) + 1 === head(tail(lst))) {
            return acc = false;
        }
        return isSafePlus(cons(head(lst) + 1, tail(tail(lst))), acc)
    }
    const isSafeMinus = (lst, acc) => {
        //console.log(listToString(lst) + '\t' + length(lst))
        if (length(lst) < 2) {
            return acc;
        }
        //console.log(`${head(lst) + 1}===${head(tail(lst))}`)
        if (head(lst) - 1 === head(tail(lst))) {
            return acc = false;
        }
        return isSafeMinus(cons(head(lst) - 1, tail(tail(lst))), acc)
    }

    if (length(lst) < 2) {
        return acc;
    }
    if (!isSafePlus(lst, acc)) {
        return false;
    }
    if (!isSafeMinus(lst, acc)) {
        return false;
    }
    return isSafeBishops(tail(lst), acc)
}
// для королев
const isSafeQueens = (list) => {
    return isSafeBishops(list) && isSafeRocks(list)
}


export default isSafeQueens;

/*
const isSafeQueens = (list) => {
  if (isEmpty(list)) {
    return true;
  }
  const y1 = head(list);
  const checkSafe = reduce(
    (y2, x) => (!x || y1 === y2 || Math.abs(y1 - y2) === x ? false : x + 1),
    1,
    tail(list),
  );
  return checkSafe ? isSafeQueens(tail(list)) : false;
};
*/

//let rocks = l(2, 4, 1, 3);
//console.log(isSafeRocks(rocks)); // true
//rocks = l(4, 1, 5, 5);
//console.log(isSafeRocks(rocks)); // true

//let bishops = l(2, 4, 1, 3);
//console.log(isSafeBishops(bishops)); // true
//bishops = l(4, 1, 3, 3);
//console.log(isSafeBishops(bishops)); // true

let queens = l(2, 4, 1, 3);
console.log(isSafeQueens(queens)); // true
queens = l(3, 6, 2, 5, 1, 4);
console.log(isSafeQueens(queens)); // true
queens = l(1, 5, 8, 6, 3, 7, 2, 4);
console.log(isSafeQueens(queens)); // true
queens = l(2, 4, 6, 1, 3, 5);
console.log(isSafeQueens(queens)); // true

queens = l(2, 1, 3);
console.log(isSafeQueens(queens)); // false
queens = l(1, 2, 3, 4, 5, 6);
console.log(isSafeQueens(queens)); // false
queens = l(1, 5, 8, 6, 3, 7, 2, 8);
console.log(isSafeQueens(queens)); // false
queens = l(1, 6, 2, 3, 4, 5);
console.log(isSafeQueens(queens)); // false
queens = l(1, 7, 3, 6, 4, 2, 5, 8);
console.log(isSafeQueens(queens)); // false
queens = l(1, 3, 5, 3, 6, 2);
console.log(isSafeQueens(queens)); // false
