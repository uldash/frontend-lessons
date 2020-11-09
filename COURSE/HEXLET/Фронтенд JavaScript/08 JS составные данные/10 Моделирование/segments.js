/*
Рассмотрим задачу представления отрезков на прямой плоскости. Каждый отрезок представляется как пара точек: начало и конец. 
Он может быть описан, например, так: [(1, 3), (5, 4)]. Это означает, что наш отрезок начинается в точке (1, 3) 
и заканчивается в точке (5, 4) координатной плоскости.
В этом задании необходимо разработать абстракцию для работы с отрезками (англ. segment), 
которая позволяет строить их из точек, извлекать из отрезков составные части (начало или конец сегмента), 
а также получать текстовое представление сегмента.

Абстракция заключается в том, что конкретное представление сегмента определяется внутри функций, описывающих работу с отрезками 
и зависит от создателя библиотеки. С точки зрения клиента библиотеки (кода который ее вызывает), не важно как конкретно устроен сегмент, важно только то, что есть некоторый набор функций (абстракция), позволяющий работать с ним.

segments.js

Определите и экспортируйте следующие функции:

Конструктор makeSegment, который принимает на вход две точки и возвращает сегмент. Первая точка это начало сегмента, вторая это конец.

Селекторы startSegment и endSegment, которые извлекают из сегмента его начальную и конечную точку соответственно.

Вспомогательную функцию segmentToString, которая возвращает текстовое представление сегмента: [(1, 2), (-4, -2)].

Функцию midpointSegment, которая находит точку на середине отрезка по формулaм: x = (x1 + x2) / 2 и y = (y1 + y2) / 2.

Пример использования абстракции:
import { makePoint, getX, getY, toString as pointToString } from '@hexlet/points';

// не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// работать используя функции для работы с сегментами
const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]

const point1 = startSegment(segment);
console.log(pointToString(point1)); // (1, 2)

const point2 = endSegment(segment);
console.log(pointToString(point2)); // (-4, -2)

pointToString(startSegment(segment)) === pointToString(makePoint(1, 2)); // true

pointToString(midpointSegment(segment)); // (-1.5, 0)

Подсказки:
Поскольку на текущий момент мы знакомы только с парами для работы с составными данными, то и реализация сегментов должна быть основана на них.
Описание функции toString (в коде она импортирована под псевдонимом pointToString) из библиотеки @hexlet/points можно посмотреть в файле 
документации docs/hexlet-points.md
 */

import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

const makeSegment = (point1,point2) => makePoint(point1,point2);

const startSegment = (segment) => getX(segment);

const endSegment = (segment) => getY(segment);

const segmentToString = (segment) => `[${pointToString(getX(segment))}, ${pointToString(getY(segment))}]`;

const midpointSegment = (segment) => {
    const x1 = getX(startSegment(segment)), x2 = getX(endSegment(segment));
    const y1 = getY(startSegment(segment)), y2 = getY(endSegment(segment));
    return makePoint((x1 + x2) / 2,(y1 + y2) / 2);
}

export {makeSegment, startSegment,endSegment,segmentToString,midpointSegment};

// не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// работать используя функции для работы с сегментами
/*
const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]

const point1 = startSegment(segment);
console.log(pointToString(point1)); // (1, 2)

const point2 = endSegment(segment);
console.log(pointToString(point2)); // (-4, -2)

console.log(pointToString(startSegment(segment)) === pointToString(makePoint(1, 2))); // true

console.log(pointToString(midpointSegment(segment))); // (-1.5, 0)
*/

const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
const segment2 = makeSegment(makePoint(2, 8), makePoint(4, -2));

console.log(pointToString(startSegment(segment))); // (1, 2)
console.log(pointToString(startSegment(segment2))); // (2, 8)

console.log(pointToString(endSegment(segment))); // (-4, -2)
console.log(pointToString(endSegment(segment2))); // (4, -2)

console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]
console.log(segmentToString(segment2)); // [(2, 8), (4, -2)]

console.log(pointToString(midpointSegment(segment))); // (-1.5, 0)
console.log(pointToString(midpointSegment(segment2))); // (3, 3)
