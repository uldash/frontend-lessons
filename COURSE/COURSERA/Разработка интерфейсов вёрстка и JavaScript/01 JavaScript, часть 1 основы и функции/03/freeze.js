// Заморозка объекта

var tweet = {
    likes: 16,
    getLikes: function () {
        return this.likes;
    }
};

console.info(Object.getOwnPropertyDescriptor(tweet, 'likes'));
Object.freeze(tweet);
console.info(Object.getOwnPropertyDescriptor(tweet, 'likes'));
console.info(Object.isFrozen(tweet));