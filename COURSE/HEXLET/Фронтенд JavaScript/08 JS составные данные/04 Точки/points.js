/*
Реализуйте и экспортируйте следующие функции для работы с точками:

getQuadrant — функция, которая вычисляет квадрант, в котором находится точка. Ниже приведена схема, 
показывающая номера квадрантов на плоскости.

           +
         2 | 1
           |
   +----------------+
           |
         3 | 4
           +

   const point = makePoint(1, 5);
   getQuadrant(point); // 1
   getQuadrant(makePoint(3, -3)); // 4

Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на одной из осей координат), 
то функция должна возвращать null:

   const point = makePoint(0, 7);
   getQuadrant(point); // null
   getQuadrant(makePoint(2, 0)); // null

getSymmetricalPoint — функция, возвращающая новую точку, симметричную относительно начала координат. Такая симметричность означает, что меняются знаки у x и y.

   getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)

calculateDistance — функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)

   calculateDistance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28
*/

import { makePoint, getX, getY, toString, quadrant } from 'hexlet-points';
import assert from 'assert';

const getQuadrant = point => {
    let result = null;
    if (getX(point) > 0 && getY(point) > 0){
        result = 1;
    }
    if (getX(point) < 0 && getY(point) > 0){
        result = 2;
    }
    if (getX(point) < 0 && getY(point) < 0){
        result = 3;
    }
    if (getX(point) > 0 && getY(point) < 0){
        result = 4;
    }
    return result;
};

const getSymmetricalPoint = (point) => toString(makePoint(-getX(point), -getY(point)));

const calculateDistance = (point1, point2) => Math.sqrt((getX(point2) - getX(point1)) ** 2
 + (getY(point2) - getY(point1)) ** 2).toFixed(2);

export { getQuadrant, getSymmetricalPoint, calculateDistance};

/*
assert.equal(getQuadrant(makePoint(1, 5)), 1);
assert.equal(getQuadrant(makePoint(-3, 3)), 2);
assert.equal(getQuadrant(makePoint(-1, -5)), 3);
assert.equal(getQuadrant(makePoint(3, -3)), 4);
assert.equal(getQuadrant(makePoint(0, 0)), null);

assert.equal(getSymmetricalPoint(makePoint(1, 5)),toString(makePoint(-1,-5)));
assert.equal(getSymmetricalPoint(makePoint(10, 10)),toString(makePoint(-10,-10)));

assert.equal(calculateDistance(makePoint(-2,-3),makePoint(-4,4)),7.28);
*/

console.log(getQuadrant(makePoint(0, 0))); // null
console.log(getQuadrant(makePoint(5, 0))); // null
console.log(getQuadrant(makePoint(1, 5))); // 1
console.log(getQuadrant(makePoint(-3, 10))); // 2
console.log(getQuadrant(makePoint(-2, -5))); // 3
console.log(getQuadrant(makePoint(4, -1))); // 4

console.log(getSymmetricalPoint(makePoint(10, 10))); // makePoint(-10, -10)
console.log(getSymmetricalPoint(makePoint(-10, -10))); // makePoint(10, 10)
console.log(getSymmetricalPoint(makePoint(10, -10))); // makePoint(-10, 10)

console.log(calculateDistance(makePoint(-2, -3), makePoint(-4, 4))); // 7.28;


import { makePoint, getX, getY } from '@hexlet/points'; // eslint-disable-line

/*
// BEGIN (write your solution here)
const getQuadrant = point => {
    let result = null
    if (getX(point) > 0 && getY(point) > 0){
        result = 1;
    }
    if (getX(point) < 0 && getY(point) > 0){
        result = 2;
    }
    if (getX(point) < 0 && getY(point) < 0){
        result = 3;
    }
    if (getX(point) > 0 && getY(point) < 0){
        result = 4;
    }
    return result;
};

const getSymmetricalPoint = point => makePoint(-getX(point),-getY(point));

const calculateDistance = (point1, point2) => Math.sqrt((getX(point2)-getX(point1))**2 + (getY(point2)-getY(point1))**2);

export {getQuadrant,getSymmetricalPoint,calculateDistance}
// END
*/