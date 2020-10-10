// function declaretion как и var всплывает
function sayHello(firstName = 'Tom', lastName = 'Gudvin') {
    // console.log(firstName, lastName)
    // console.log('Hello World!!');
    return `Hello ${firstName} ${lastName}`;
}

let res = sayHello('Den', 'Ivanov');
console.log(res)

res = sayHello('Bill');
console.log(res);

let x = 10;

function foo(x = 30) {
    // let x = 20;
    // x = 20;
    console.log(x)
}

foo();
console.log(x);

const user = {
    name: 'Den',
    age: 30,
}

function getObj(obj) {
    obj.name = 'tom'
    console.log(obj);
}

getObj(user);
console.log(user);

// function expression в отличие от function declaration
// не всплывает, т.е. её нельзя вызвать до объявления
const square = function (x) {
    return x * x;
}

console.log(square(4));

// самовызывающаяся функция, анонимная, 
// такие функции используются для инкапсуляции переменных
// (function(){
// })()

(function (msg) {
    console.log(msg);
})('Hello world!!!')