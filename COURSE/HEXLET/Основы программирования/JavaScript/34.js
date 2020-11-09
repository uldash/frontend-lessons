function reverse(str) {
    let rts = '';
    for (let i = str.length; i--; i >= 0) {
        rts += str[i];
    }
    return rts;
}

const result = reverse('Hello!');
console.log(result); // => !olleH
