/*
На электронной карте Вестероса, которую реализовал Сэм, союзники Старков 
отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.

Напишите для Сэма функцию whoIsThisHouseToStarks, которая принимает на вход 
фамилию семьи и возвращает одно из трех значений: 'friend', 'enemy', 'neutral'.

Правила определения:
Друзья ('friend'): ‘Karstark’, ‘Tally’
Враги ('enemy'): ‘Lannister’, ‘Frey’
Любые другие семьи считаются нейтральными

Примеры вызова:
whoIsThisHouseToStarks('Karstark'); // => 'friend'
whoIsThisHouseToStarks('Frey');     // => 'enemy'
whoIsThisHouseToStarks('Joar');     // => 'neutral'
whoIsThisHouseToStarks('Ivanov');   // => 'neutral'
*/

const whoIsThisHouseToStarks = (family) => {
    if (family === 'Karstark' || family === 'Tally') {
        return 'friend';
    } else if (family === 'Lannister' || family === 'Frey') {
        return 'enemy';
    } else {
        return 'neutral';
    }
};

console.log(whoIsThisHouseToStarks('Karstark')); // => 'friend'
console.log(whoIsThisHouseToStarks('Frey'));     // => 'enemy'
console.log(whoIsThisHouseToStarks('Joar'));     // => 'neutral'
console.log(whoIsThisHouseToStarks('Ivanov'));   // => 'neutral'
