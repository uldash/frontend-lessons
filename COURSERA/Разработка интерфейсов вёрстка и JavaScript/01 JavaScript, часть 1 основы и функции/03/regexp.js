var tweet = { text: 'Node.js, и модули, Джеймс о проблемах Node.js #node.js #modules #модули' };
console.info(/#[a-z0-9]+/gi.test(tweet.text));

var tweetWithoutHashtag = 'Я и ИоТ, пятый доклад на WSD'
console.info(/#[a-z0-9]+/gi.test(tweetWithoutHashtag));

Object.defineProperty(tweet, 'linkify', {
    get: function () {
        return this.text.replace(
            // /(#([a-z0-9а-я]+))/gi,
            /(#([\wа-я]+))/gi,
            '<a href="$2">$1</a>'
        );
    }
});

console.info(tweet.linkify);

console.info('мороз и солнце'.replace(/[а-я]+/, 'снег'));