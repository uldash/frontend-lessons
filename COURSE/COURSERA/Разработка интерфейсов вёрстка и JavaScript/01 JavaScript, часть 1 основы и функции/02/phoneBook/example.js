var phoneBook = {};

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

function phoneBookCommand(command) {
    var re = /,*\s{1}|,/; //сначала запятая ноль или более раз за ней один пробел или запятая
    var cmd = command.split(re);
    switch (cmd[0]) {
        case 'SHOW':
            console.info(show(phoneBook));
            break;
        case 'ADD':
            console.info(add(phoneBook, cmd[1], cmd.slice(2).map(item => item.trim())));
            break;
        case 'REMOVE_PHONE':
            console.info(removePhone(phoneBook, cmd.slice(1).map(item => item.trim())));
            break;
    };
};

phoneBookCommand('ADD Ivan 555-10-01,555-10-03');
phoneBookCommand('ADD Ivan 555-10-02');
phoneBookCommand('SHOW');
phoneBookCommand('REMOVE_PHONE 555-10-03');
phoneBookCommand('SHOW');
phoneBookCommand('ADD Alex 555-20-01');
phoneBookCommand('SHOW');
phoneBookCommand('REMOVE_PHONE 555-20-01');
phoneBookCommand('SHOW');