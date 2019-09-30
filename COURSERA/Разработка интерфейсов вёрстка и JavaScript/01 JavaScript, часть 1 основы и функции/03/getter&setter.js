// Геттеры и сеттеры
// Простое определение функций доступа к свойствам объекта

var tweet = {
    likes: 16,
    getLikes: function () {
        return this.likes;
    },
    setLikes: function (value) {
        this.likes = parseInt(value) || 0;
        return this;
    }
};

console.info(tweet.getLikes());
tweet.setLikes(20);
console.info(tweet.getLikes());

// Использование геттера и сеттера
var tweetGS = { _likes: 16 };
Object.defineProperty(tweetGS, 'likes', {
    get: function () {
        return this._likes;
    },
    set: function (value) {
        this._likes = parseInt(value) || 0;
    }
});

// Сработал геттер
console.info(tweetGS.likes);
// Сработал  сеттер
tweetGS.likes = 17;
// Сработал геттер
console.info(tweetGS.likes);
