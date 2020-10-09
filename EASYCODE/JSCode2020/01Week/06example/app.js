const firstName = 'Denis';
const lastName = 'Ivanov';
const age = 30;
const str = 'Hello my Name is Denis';

let value;

value = firstName + lastName;
console.log(value);

value = firstName + ' ' + lastName;
console.log(value);

value += ' I am ' + age;
console.log(value);

value = firstName.length;
console.log(value);
console.log(typeof (value));

value = firstName[2];
console.log(value);

value = firstName[firstName.length - 1];
console.log(value);

value = firstName.toUpperCase();
console.log(value, firstName);

value = firstName.concat(' ', lastName);
console.log(value);

value = str.indexOf('is', 15);
console.log(value);

value = str.indexOf('!', 15);
console.log(value);

value = str.includes('is');
console.log(value);

value = str.includes('!');
console.log(value);

value = str.slice(0, 5);
console.log(value);

value = str.slice(0, -3);
console.log(value);

value = str.replace('Denis', 'Ivan');
console.log(value);

