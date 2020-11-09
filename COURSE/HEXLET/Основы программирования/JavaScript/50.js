// Стрелочные функции

const test = {
    name: 'test object',
    createAnonFunction: function () {
        return function () { // анонимная функция обладает собственными контекстом выполнения
            console.log(this.name);
            console.log(arguments);
        };
    },

    createArrowFunction: function () {
        return () => { //анонимная стрелочная функция не имеет собственного контекста выполнения
            console.log(this.name);
            console.log(arguments);
        };
    }
};

const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction('hello', 'world');

anon();
// undefined
// [Arguments] {}
arrow();
// test object
// [Arguments] { '0': 'hello', '1': 'world' }

// Реверс строки в одну строку
const reverse = (str, i = 0) => (i >= str.length) ? '' : `${reverse(str, i + 1)}${str[i]}`;
console.log(reverse('Hello!'));