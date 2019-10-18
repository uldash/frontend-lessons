const getEvenNumbersUpTo = (num) => {
    let counter = num;
    let result = '';

    while (counter > 1) {
        if (counter % 2 === 0) {
            result = `${counter},${result}`;
        }
        counter--;
    }
    result = result.substring(0, result.length - 1) + '.'
    return result;
}

console.log(getEvenNumbersUpTo(10));