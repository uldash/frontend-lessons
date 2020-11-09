/*
    Модифицируйте функцию printNumbers так, чтобы она выводила числа в обратном порядке.
    Для этого нужно идти от верхней границы к нижней. То есть, счетчик должен быть
    инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.
    
    Пример вызова и вывода:
    printNumbers(4);
    // => 4
    // => 3
    // => 2
    // => 1
    // => finished!
*/
const printNumbers = (firstNumber) => {
    // BEGIN
    let i = firstNumber;
    while (i > 0) {
        console.log(i);
        i--;
    }
    console.log('finished!');
    // END
};

printNumbers(3);