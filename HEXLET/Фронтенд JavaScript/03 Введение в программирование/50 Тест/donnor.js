let multiplier = 10;

const deterministic = num => {
    console.log(multiplier++);
    return num * 10;
};
const func = num => num * multiplier;

module.exports = deterministic;
module.exports = func;