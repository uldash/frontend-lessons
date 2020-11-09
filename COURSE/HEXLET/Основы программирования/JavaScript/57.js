// Заменить первую букву заглавной и вывести на экран

const capitalize = name => name[0].toUpperCase() + name.slice(1);

const name = 'arya';
console.log(capitalize(name)); // => Arya
