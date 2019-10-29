/*
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of n^3, the cube above will have 
volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. 
Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be an 
integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if 
such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
mov rdi, 1071225
call find_nb            ; rax <-- 45

mov rdi, 91716553919377
call find_nb            ; rax <-- -1
*/

function findNb(m) {
    let end = Math.ceil(Math.cbrt(m));
    let result = 0;
    for (let i=1;i<=end;i++){
            result += i**3;
        if (result === m){
            return i;
        }
    }
    return (-1);
}

console.log(findNb(4183059834009)); // 2022
console.log(findNb(135440716410000)); // 4824
console.log(findNb(40539911473216)); // 3568
console.log(findNb(24723578342962)); // -1
console.log(findNb(1071225)); // 45
console.log(findNb(9)); // 2
console.log(findNb(10)); // -1