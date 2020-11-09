const { task, src, watch, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin');
const spritesmith = require('gulp.spritesmith')
const merge = require('merge-stream')
sass.compiler = require('node-sass');

function scss() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest('dist/css'));
};

function imgmin() {
    return src('src/assets/images/*.*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
};

function generateSprite() {
    const spriteData = src('src/assets/sprite/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../images/sprite.png',
            cssName: '_sprite.scss',
            padding: 5

        }));
    const imgStream = spriteData.img
        .pipe(dest('src/assets/images'));
    const cssStream = spriteData.css
        .pipe(dest('src/scss/mixins'));
    return merge(imgStream, cssStream);
};

function fontsFontAwesome() {
    return src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(dest('./dist/fonts'))
}

task('getFontAwesome', fontsFontAwesome)

task('watch', () => {
    scss();
    imgmin();
    generateSprite();

    watch('src/assets/sprite/*.*', generateSprite);
    watch('src/assets/images/*.*', imgmin);
    watch('src/scss/**/*.scss', scss);
});