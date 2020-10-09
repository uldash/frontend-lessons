//  Однострочный комментарий

/*
    Многострочный комментарий
*/

/**
 *  JSDoc комментарий
 */

/**
 *  Типы данных
 *  1. Примитивные
 *      - Number: 2019, 1.5, NaN, Infinity
 *      - String: 'Hello', "Hello", `Hello`
 *      - Boolean: true, false
 *      - Null: null
 *      - Undefined: undefined
 *      - Symbol()
 */


console.log(2019, 1.5);
console.log(2019 * 'dfdf');
console.log(2019 * '2.5');
console.log(2019 / 0);

console.log('Hello');
console.log("Hello");
console.log(`Hello`);

console.log(true);

console.log(null); // значение не известно

var a;
console.log(a);

console.log(Symbol());

/**
 *  Типы данных
 *  2. Объекты (Reference type) Передаются по ссылке
 *      - Object: {name: 'Den', age: 30}
 *      - Array: [1, 2, 3]
 *      - Function: function foo(){}
 *      - Date: new Date()
 *      ....
 */

console.table({ name: 'Lena', age: 20 });
console.log('\n');

console.log([1, 2, 'Hello', 4]);


/**
 *  Особенности:
 *      1. JS динамически типизированный язык
 *      2. Одна и та же переменная может хранить в себе любой тип данных
 *      3. Нам не нужно определять тип данных при создании переменных
 *      4. Если мы хотим использовать статическую типизацию, мы можем
 *          использовать TypeScript или Flow
 */


