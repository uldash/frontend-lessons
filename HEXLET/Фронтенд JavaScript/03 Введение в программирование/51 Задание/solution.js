/*
    Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
    solution('hello, world!'); // Hello, World!
*/

function solution(str) {
    function lowerToUpper(match) {
        return match.toUpperCase();
    }
    //return str.replace(/^.|^ [a-z]| [a-z]/g, lowerToUpper); //error
    //return str.replace(/^ [a-z]|^.| [a-z]/g, lowerToUpper); //done
    return str.replace(/^[_a-z]| [a-z]/g, lowerToUpper);
}
//export default solution
console.log(solution('hello world anytime'));
console.log(solution('  hello,   world!'));
console.log(solution(' many different words inside sentence'));
