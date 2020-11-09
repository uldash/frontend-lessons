const savePassword = password => passwordForCheck => password === passwordForCheck;
const secret = 'qwerty';
// Возвращается предикат
/*
const isCorrectPassword = passwordForCheck => secret(это 
    константа, заданная во время определения функции isCorrectPassword) === passwordForCheck;
*/

const isCorrectPassword = savePassword(secret);

// Теперь можно проверять
console.log(isCorrectPassword('wrong password')); // => false
console.log(isCorrectPassword('qwerty')); // => true

// тут используется прием, называемый - частичное применение