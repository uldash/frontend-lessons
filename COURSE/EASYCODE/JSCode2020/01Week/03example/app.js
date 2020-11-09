// var
// let, const

var name = 'Den';
console.log(name);
name = 'Denis';
console.log(name);

var age;
console.log(age);
age = 30;
console.log(age);

var $name = 'Ivan';
console.log($name)
var _name = 'Ilya';
console.log(_name);

var userAge = 30;
var user_age = 20;
var UserAge = 10; // классы
var userage = 40;

// негативные эффекты var
// переопределение переменной
var car = 'bmw';
var car = 'audi';
var car = 'mazda';
console.log(car);

// всплытие переменной
console.log(car2);
var car2 = 'audi';


// let избавили от указанного выше поведения
// + let обладает блочной областью видимости, в отличие от
// var, которая обладает глобальной областью видимости

// let car1 = 'bmw';
let car1 = 'audi';
console.log(car1);

// всплытие переменной
// console.log(car3);
// let car3 = 'audi';

// const тоже самое что и let, но не переопределяется
// и не инициализируются без значения
const firstName = 'Tom';
console.log(firstName);
// const firstName = 'Fred';

// но константы мутабельные
const user = {
    name: 'Bill',
    age: 20,
};
console.table(user);

// не получиться изменить - запрет на переопределение
// user = {
//     name: 'Donald',
//     age: 30,
// };

// но можно изменить значения внутри объекта
user.name = 'Keni';
console.table(user);
