const getIncreasedNumFunction = multiplier => num => num * multiplier;

// Function === num => num * 3
console.log(getIncreasedNumFunction(3));
// (num => num * 3)(15) ---> 15 * 3 === 45
console.log(getIncreasedNumFunction(3)(15));

// Function === num => num * 10
console.log(getIncreasedNumFunction(10));
// Function(5) === (num => num * 10)(5) ---> 5 * 10 === 50
console.log(getIncreasedNumFunction(10)(5));
// Function(5)(2) === (num => num * 10)(5)(2) ---> (5 * 10)(2) === 50(2) ---> TypeError
//getIncreasedNumFunction(10)(5)(2);