import { makePoint, getX, getY, toString, quadrant } from 'hexlet-points';

const point = makePoint(1, -1);
console.log(getX(point));
console.log(getY(point));

console.log(point); // don't do it
console.log(toString(point));
console.log(quadrant(point));
