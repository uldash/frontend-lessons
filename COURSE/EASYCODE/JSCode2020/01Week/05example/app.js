// Numbers
const num1 = 10;
const num2 = 20;
let value;

// + * / - %

value = 100;
value += 1;
console.log(value);

value = 4;
value %= 3;
console.log(value);

value = 10;
value++;
console.log(value);

value = 10;
++value;
console.log(value);

value = 0.6 + 0.7;
//value = parseFloat(value.toFixed(2));
value = (0.6 * 10 + 0.7 * 10) / 10;
console.log(value);

// Math
value = Math;
console.table(value);

value = Math.PI;
console.table(value);

value = Math.random();
console.table(value);

value = Math.round(2.456); // округляет по правилам математики
console.table(value);

value = Math.ceil(2.1); // округляет до большего целого
console.table(value);

value = Math.floor(2.9); // округляет до меньшего целого
console.table(value);

value = Math.trunc(5.667); //отбрасывает дробную часть
console.table(value);

value = Math.floor(Math.random() * 10 + 1);
console.table(value);

const arr = ['black', 'red', 'yellow', 'pink', 'white', 'blue', 'orange', 'green'];
value = Math.floor(Math.random() * arr.length);
console.log(value, arr[value]);