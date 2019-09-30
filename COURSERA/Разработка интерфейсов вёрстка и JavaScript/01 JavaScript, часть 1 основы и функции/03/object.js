var tweet = {};

Object.defineProperty(tweet, 'text',
    {
        value: 'Ого сколько фронтедеров, #wstdays',
        writable: false
    });
console.info(tweet.text);
tweet.text = 'Hellow';
console.info(tweet.text); // свойство только для чтения

console.info(Object.getOwnPropertyDescriptor(tweet, 'text'));