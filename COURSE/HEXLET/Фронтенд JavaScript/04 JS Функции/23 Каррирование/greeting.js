/*
 Сколько раз нужно вызвать цепочку функций 
 const greeting = () => () => () => () => console.log('Hey!'), чтобы дойти до конца?
*/

const greeting = () => () => () => () => console.log('Hey!');
greeting()()()();