import square from './square';
import { getTriangleArea } from './myMathModule';

export default (n) => getTriangleArea(n, square(n) / 2);

console.log(getTriangleArea(5, 10));