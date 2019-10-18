/*
    Реализуйте функцию normalizeUrl, которая выполняет так называемую нормализацию данных.
    Она принимает адрес сайта и возвращает его с https:// в начале.
    Функция принимает адреса только в виде АДРЕС или http://АДРЕС (адреса вида https://АДРЕС в функцию попасть не могут),
    но всегда возвращает адрес в виде https://АДРЕС.

    Есть два пути решения:
    Можно сравнить первые 8 символов строки-аргумента со строкой http://.
    Можно использовать метод startsWith чтобы проверить, содержится ли в строке-аргументе подстрока http://
    А потом на основе этого добавлять или не добавлять https://.

    Примеры вызова:
    normalizeUrl('google.com'); // 'https://google.com'
    normalizeUrl('http://ai.fi'); // 'https://ai.fi'
*/

const normalizeUrl = (url) => {
    //console.log(url.substring(0, 7))
    if (url.substring(0, 7) === 'http://') {
        return 'https://' + url.slice(7);
    } else {
        return 'https://' + url;
    }
};

console.log(normalizeUrl('google.com')); // 'https://google.com'
console.log(normalizeUrl('http://ai.fi')); // 'https://ai.fi'