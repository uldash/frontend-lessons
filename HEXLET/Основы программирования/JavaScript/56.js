/*
    Реализуйте функцию, которая принимает на вход номер кредитки 
    (состоящей из 16 цифр) и возвращает его скрытую версию, 
    которая может использоваться на сайте для отображения.
    Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581.
    Другими словами, функция заменяет первые 12 символов, на четыре звездочки. 
    Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию - 4
*/

const getHiddenCard = (number, asterisk = 4) => {
    //return '*'.repeat(asterisk) + number.toString().substring(number.toString().length - 4);
    return '*'.repeat(asterisk) + number.toString().substr(-4);
};

const hiddenCardNumber = getHiddenCard('2034399002125581');
console.log(hiddenCardNumber); // ****5581
console.log(getHiddenCard(2034399002125581));