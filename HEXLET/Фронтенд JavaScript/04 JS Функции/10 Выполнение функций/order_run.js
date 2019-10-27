/*
JavaScript считается энергичным языком, то есть языком с аппликативным порядком вычисления, 
а это значит, что аргументы вычисляются до того, как попадают внутрь функций.
Как видно, вычисление идет с самого глубокого уровня слева направо.
*/
const f1 = () => console.log('called f1');
const f2 = () => console.log('called f2');
const f3 = () => console.log('called f3');
const f4 = () => console.log('called f4');
const f5 = () => console.log('called f5');
const f6 = () => console.log('called f6');

f1(f2(f4(), f5()), f3(f6()));
// called f4
// called f5
// called f2
// called f6
// called f3
// called f1