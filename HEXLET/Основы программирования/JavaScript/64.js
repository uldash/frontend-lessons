/*
    Реализуйте функцию getSentenceTone, которая принимает строку и определяет
    тон предложения. Если все символы в верхнем регистре,
    то это вопль — 'scream'. В ином случае — нормальное предложение — 'normal'.

    Примеры вызова:
    getSentenceTone('Hello'); // => normal
    getSentenceTone('WOW'); // => scream
*/

const getSentenceTone = (text) => {
    if (text.toUpperCase() === text) {
        return 'scream';
    }
    return 'normal'
};

console.log(getSentenceTone('Hello')); // => normal
console.log(getSentenceTone('WOW')); // => scream
