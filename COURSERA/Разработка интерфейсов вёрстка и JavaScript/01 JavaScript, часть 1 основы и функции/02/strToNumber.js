var usdInputAsText = 100;
var usdInputAsInt = Number(usdInputAsText);
console.info(usdInputAsInt);
var usdInputAsInt = parseInt(usdInputAsText, 10);
console.info(usdInputAsInt);
var usdInputAsInt = parseInt(usdInputAsText, 2);
console.info(usdInputAsInt);
var incorrect = parseInt('foo');
console.info(incorrect);

var binTest = 0b0101;
var usdInputAsInt = parseInt(binTest);
console.info(usdInputAsInt);

