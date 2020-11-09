let value;

// Number to string
value = 10;
console.log(value);
console.log(typeof (value));

value = String(10);
console.log(value);
console.log(typeof (value));

value = String(10 + 2);
console.log(value);
console.log(typeof (value));

value = (10).toString();
console.log(value);
console.log(typeof (value));

// Boolean to string

value = String(true);
console.log(value);
console.log(typeof (value));

value = String([12, 2, 3]);
console.log(value);
console.log(typeof (value));

value = String({ name: 'Tom' });
console.log(value);
console.log(typeof (value));

// Неявное преобразование
value = 30 + '' + 30;
console.log(value);
console.log(typeof (value));

value = true + 30;
console.log(value);
console.log(typeof (value));

// String to number
value = Number('23');
console.log(value);
console.log(typeof (value));

value = Number(false);
console.log(value);
console.log(typeof (value));

value = Number(null);
console.log(value);
console.log(typeof (value));

value = Number('23asas');
console.log(value);
console.log(typeof (value));

value = Number([1, 2]);
console.log(value);
console.log(typeof (value));

value = parseInt('200saasasasas');
console.log(value);
console.log(typeof (value));

value = parseInt('qwqw 200');
console.log(value);
console.log(typeof (value));

value = parseFloat('200.212px');
console.log(value);
console.log(typeof (value));

// Boolean
value = Boolean('asasas');
console.log(value);
console.log(typeof (value));

value = Boolean('222');
console.log(value);
console.log(typeof (value));

value = Boolean('');
console.log(value);
console.log(typeof (value));

value = Boolean(0);
console.log(value);
console.log(typeof (value));

value = Boolean(undefined);
console.log(value);
console.log(typeof (value));

value = Boolean(null);
console.log(value);
console.log(typeof (value));

value = Boolean({});
console.log(value);
console.log(typeof (value));

value = Boolean([]);
console.log(value);
console.log(typeof (value));



