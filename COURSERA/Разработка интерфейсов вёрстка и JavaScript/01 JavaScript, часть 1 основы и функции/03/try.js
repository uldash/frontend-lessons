try {
    throw new Error('Ошибка');
    console.log('Привет!')
} catch (err) {
    console.log(err.message);
}