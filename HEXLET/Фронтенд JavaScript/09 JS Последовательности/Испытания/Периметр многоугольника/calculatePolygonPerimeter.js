/*
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход упорядоченный список точек,
являющихся вершинами многоугольника, вычисляет и возвращает периметр многоугольника.

Примечания
Список реализован с помощью абстракции из библиотеки hexlet-pairs-data
Точка реализована с помощью абстракции из библиотеки hexlet-points
Многоугольник имеет не менее трёх вершин, поэтому, если на вход передан список, содержащий менее трёх точек,
то функция должна вернуть null
Порядок точек, определяющих многоугольник, имеет значение (разный порядок может определять разные (неконгруэнтные) многоугольники).
Поэтому при вычислении периметра надо придерживаться порядка, заданного во входном списке точек
В остальном считаем, что передан корректный многоугольник, то есть дополнительных проверок делать не надо

Примеры
За примерами работы обращайтесь в модуль с тестами: __tests__/calculatePolygonPerimeter.test.js

Подсказки
Используйте функцию toString из библиотеки hexlet-pairs-data для отладки решений. Она возвращает строковое представление списка.
При необходимости вы можете самостоятельно импортировать функцию toString из библиотеки hexlet-points. Эта функция возвращает строковое представление точки.
Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases).
*/

import { toString as listToString, tail, head, l, length, reverse } from 'hexlet-pairs-data';
import { toString as pointsToString, makePoint, getX, getY } from 'hexlet-points';

const cutLength = (a, b) => {
    return Math.sqrt((getX(b) - getX(a)) ** 2 + (getY(b) - getY(a)) ** 2)
}

// будем рекурсивно вычислять периметр многоугольника, состоящего из n-1 вершин
const calculatePolygonPerimeter = (lst, acc = length(lst) > 2 ? cutLength(head(lst), head(reverse(lst))) : null) => {
    if (length(lst) < 2 || acc === null) {
        return acc;
    }
    const a = head(lst)
    const b = head(tail(lst))
    const newAcc = acc + cutLength(a, b);
    return calculatePolygonPerimeter(tail(lst), newAcc);
}

export default calculatePolygonPerimeter;

//example
const a = makePoint(1, 1);
const b = makePoint(3, 3);
const c = makePoint(4, 1);
const d = makePoint(3, -2);
const e = makePoint(7, -2);
const f = makePoint(9, 0);
const g = makePoint(2, -6);
const h = makePoint(-1, -1);
const i = makePoint(-5, 7);

console.log(calculatePolygonPerimeter(l())); // 8.064
console.log(calculatePolygonPerimeter(l(a))); // 8.064
console.log(calculatePolygonPerimeter(l(a, b))); // 8.064

console.log(calculatePolygonPerimeter(l(a, b, c)).toFixed(3)); // 8.064
console.log(calculatePolygonPerimeter(l(a, b, f, e, d)).toFixed(3)); // 19.971
console.log(calculatePolygonPerimeter(l(a, b, f, e, d, c)).toFixed(3)); // 22.527
console.log(calculatePolygonPerimeter(l(a, c, b, f, e, d)).toFixed(3)); // 22.378

