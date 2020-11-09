/*
Реализуйте абстракцию (набор функций) для работы с прямоугольником, стороны которого всегда параллельны осям. 
Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке задачи достаточно знать только три параметра для однозначного задания прямоугольника на плоскости: 
координаты левой-верхней точки, ширину и высоту. Зная их, мы всегда можем построить прямоугольник одним единственным способом.

      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |
Основной интерфейс:

makeRectangle (конструктор) - создаёт прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту.
Селекторы getStartPoint, getWidth и getHeight

Вспомогательные функции для выполнения расчетов:

square - возвращает площадь прямоугольника (a * b).
perimeter - возвращает периметр прямоугольника (2 * (a + b)).
containsTheOrigin - проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри). 
Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах (их можно вычислить в момент проверки).

Так как это интерфейсные функции, то они должны быть экспортированы. Если этого не сделать, система модулей js не даст ими воспользоваться.
*/

import { makePoint, getX, getY, toString as pointToString} from 'hexlet-points';
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

const makeRectangle = (point, width,height) => makePoint(point, makePoint(width,height));

const getStartPoint = (rectangle) => car(rectangle);

const getWidth = (rectangle) => car(cdr(rectangle));

const getHeight = (rectangle) => cdr(cdr(rectangle));

const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);

const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));

const containsTheOrigin = (rectangle) => {
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
    let x0 = getX(getStartPoint(rectangle));
    let y0 = getY(getStartPoint(rectangle));
    let width = getWidth(rectangle);
    let height = getHeight(rectangle);
    let p1 = makePoint(x0,          y0);
    let p2 = makePoint(x0 + width,  y0);
    let p3 = makePoint(x0 + width,  y0 - height);
    let p4 = makePoint(x0,          y0 - height);
    //console.log(`p1:${pointToString(p1)}, p2:${pointToString(p2)}, p3:${pointToString(p3)}, p4:${pointToString(p4)}`);
    //console.log(`p1:${getQuadrant(p1)}, p2:${getQuadrant(p2)}, p3:${getQuadrant(p3)}, p4:${getQuadrant(p4)}`);
    return getQuadrant(p1) !== getQuadrant(p2) && getQuadrant(p2) !== getQuadrant(p3) && getQuadrant(p3) !== getQuadrant(p4) && getQuadrant(p4) !== getQuadrant(p1);
};

export {makeRectangle, getStartPoint, getWidth, getHeight, square, perimeter, containsTheOrigin};

const rectangle = makeRectangle(makePoint(0, 1), 5, 4);

console.log(pointToString(getStartPoint(rectangle))); // '(0, 1)'
console.log(getWidth(rectangle)); // 5
console.log(getHeight(rectangle)); // 4

console.log(square(rectangle)); // 20
console.log(perimeter(rectangle)); // 18

console.log(containsTheOrigin(makeRectangle(makePoint(-4, 3), 5, 4))); // true
console.log(containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2))); // false
console.log(containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8))); // false
