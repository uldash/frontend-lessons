const factorial = (n) => {
    let acc = 1;
    for (let i = 1; i <= n; i++) {
        acc *= i;
    }
    return acc;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));