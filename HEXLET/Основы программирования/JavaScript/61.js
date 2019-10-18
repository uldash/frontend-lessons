/*
Джон поручил Сэму реализовать автоматическое распознавание солдат Ланнистеров на видео. 
Идея автоматизировать дозор крепости казалась ему привлекательной. 
В процессе работы Сэму понадобилось написать функцию, которая определяет, Ланнистер ли перед ним или нет. 
Немного подумав, Сэм выделил следующие правила определения Ланнистера:

Если у солдата доспехи красного цвета И нет щита
ИЛИ если у солдата есть щит с изображением льва, то это Ланнистер.

Напишите функцию isLannisterSoldier, которая принимает на вход два аргумента:

Цвет доспехов (строка). Если доспехи красные, то строка red.
null если щита нет. Строка lion если щит есть, и на нём изображен лев.
Функция возвращает true если распознан Ланнистер, и false если не распознан.

Примеры вызова:

isLannisterSoldier('red', 'lion'); // => true
isLannisterSoldier('blue', null);  // => false
*/

const isLannisterSoldier = (armor, shield) => (armor === 'red' && shield === null) || shield === 'lion';

console.log(isLannisterSoldier('red', 'lion')); // => true
console.log(isLannisterSoldier('blue', null));  // => false
