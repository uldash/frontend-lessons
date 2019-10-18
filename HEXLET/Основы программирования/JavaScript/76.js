/*
Реализуйте функцию doesContain, которая проверяет (с учётом регистра),
 содержит ли строка указанную букву. Функция принимает два параметра:
Строка
Буква для поиска

Пример вызова:
doesContain('Renly', 'R'); // true
doesContain('Renly', 'r'); // false
doesContain('Tommy', 'm'); // true
doesContain('Tommy', 'd'); // false
*/

const doesContain = (str, chr) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === chr) {
            return true;
        }
    }
    return false;
}

console.log(doesContain('Renly', 'R')); // true
console.log(doesContain('Renly', 'r')); // false
console.log(doesContain('Tommy', 'm')); // true
console.log(doesContain('Tommy', 'd')); // false
