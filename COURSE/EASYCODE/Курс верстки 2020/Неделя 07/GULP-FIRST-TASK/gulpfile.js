// const gulp = require('gulp');

const { task, src, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function cssPrefix() {
    return src('src/css/**/*.css')
        .pipe(autoprefixer())
        .pipe(dest('dist/css'))
};

task('css-prefix', cssPrefix);

task('watch', () => {
    watch('src/css/**/*.css', cssPrefix);
});

exports.default = function () {
    watch('src/css/**/*.css', cssPrefix);
};