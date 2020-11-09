/*

*/
const deterministic = require('./donnor');
const func = require('./donnor');

console.log(func(7)); // 70
console.log(deterministic(7)); // 70
console.log(func(7)); // 77
console.log(deterministic(7)); // 70
console.log(func(7)); // 84