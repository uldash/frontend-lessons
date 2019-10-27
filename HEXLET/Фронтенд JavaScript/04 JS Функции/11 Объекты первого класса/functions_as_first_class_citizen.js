const identity = v => v;
const sum2 = identity((a, b) => a + b);
console.log(sum2(3, 5)); // => 8
const sum3 = identity((a, b, c) => a + b + c);
console.log(sum3(3, 5, 2)); // => 10
