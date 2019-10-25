const x = 7;
const f = (x) => () => () => x;
console.log(f(10)()());

const isRightNum = (num) => {
    const res = (num > 3) && (num ** 2 < 26) && (num !== 5);
    return res;
};
console.log(isRightNum(4))