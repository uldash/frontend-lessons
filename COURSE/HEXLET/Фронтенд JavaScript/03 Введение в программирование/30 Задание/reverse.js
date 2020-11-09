const reverse = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

const reverseRecursia = (str, i = 0) => (i === str.length) ? '' : `${reverseRecursia(str, i + 1)}${str[i]}`;

console.log(reverse('hello, world!'));
console.log(reverse(''));
console.log(reverseRecursia('hello, world!'));
