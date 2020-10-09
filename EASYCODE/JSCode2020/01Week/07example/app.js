// Шаблонные строки

const firstName = 'Denis';
const lastName = 'Ivanov';
const age = 30;

let str;

str = 'Hello my name is' + ' ' + firstName + ' ' + lastName;
console.log(str);

str = '<ul>' +
    '<li>Name:' + firstName + '</li>' +
    '<li>LastName:' + lastName + '</li>' +
    '<li>Age:' + age + '</li>' +
    '</ul>';
console.log(str);
document.body.innerHTML = str;

str = `
<ul>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>age: ${age}</li>
    <li>Math.random: ${Math.random()}</li>
</ul>
`;

console.log(str);
document.body.innerHTML = str;