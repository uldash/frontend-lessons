/*
Инкремент и декремент — не очень важные операции в JavaScript, и без них всегда можно обойтись. 
Задание в этом уроке не связано напрямую с этой темой, но вы можете использовать 
инкремент и декремент чтобы привыкнуть к ним. В остальном это упражнение — ещё одна тренировка работы с циклами,
строками и условиями.

Реализуйте функцию filterString, принимающую на вход строку и символ,
и возвращающую новую строку, в которой удален переданный символ во всех его позициях.

Пример вызова:
const str = 'If I look back I am lost';
filterString(str, 'I'); // 'f  look back  am lost'
filterString(str, 'o'); // 'If I lk back I am lst'
*/

const filterString = (str, chr) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != chr) {
            result += str[i];
        }
    }
    return result;
}

const str = 'If I look back I am lost';
console.log(filterString(str, 'I')); // 'f  look back  am lost'
console.log(filterString(str, 'o')); // 'If I lk back I am lst'
