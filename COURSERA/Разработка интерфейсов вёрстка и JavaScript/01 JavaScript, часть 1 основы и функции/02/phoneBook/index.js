// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

function add(book, name, phone) {
    if (book.hasOwnProperty(name)) {
        book[name] = book[name].concat(phone);
    } else {
        book[name] = phone;
    }
    //console.info(book)
    return true;
};

function removePhone(book, phone) {
    phone.forEach(function (element) {
        for (let item in book) {
            if (book[item].indexOf(element) !== -1) {
                //console.info('Телефон для удаления:' + element + ' откуда удалить:' + item + ' ' + book[item]);
                //удалить из масива найденный элемент
                book[item].splice([book[item].indexOf(element)], 1);
            };
        };
    });
    return true;
};

function show(book) {
    var resArr = [];
    for (var item in book) {
        if (book[item].length > 0) {
            resArr.push(item + ': ' + book[item].join(', '));
        };
    };
    return resArr.sort();
};

module.exports = function (command) {
    var re = /,*\s{1}|,/; //сначала запятая ноль или более раз за ней один пробел или запятая
    var cmd = command.split(re);
    switch (cmd[0]) {
        case 'SHOW':
            return show(phoneBook);
        case 'ADD':
            return add(phoneBook, cmd[1], cmd.slice(2));
        case 'REMOVE_PHONE':
            return removePhone(phoneBook, cmd.slice(1));
    };
};
