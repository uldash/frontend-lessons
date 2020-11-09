// применить функцию, указанную в первом аргументе дважды ко второму аргументу
const callTwice = (f, arg) => f(f(arg))

console.log(callTwice(Math.sqrt, 16)); // 2
console.log(callTwice(x => x ** 2, 3)); // (3**2)**2 = 81