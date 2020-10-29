const { task, src, watch, dest, parallel, series } = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    purgeCss = require('gulp-purgecss'),
    minifyCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream'),
    browserSync = require('browser-sync').create(),

    src_folder = './src/',
    src_assets_floder = src_folder + 'assets/',
    dist_folder = './dist/',
    node_module_folder = './node_modules/';

sass.compiler = require('node-sass');


//=========== DEV START ============================
// task('style-reset', () => {
//     return src(node_module_folder + 'reset.css/reset.css')
//         .pipe(rename('_reset.scss'))
//         .pipe(dest(src_folder + 'scss/', { overwrite: true }))
// });

// task('awesome-font', () => {
//     return src(node_module_folder + '@fortawesome/fontawesome-free/webfonts/fa-solid-900.w*')
//         .pipe(dest(src_folder + 'fnt/', { overwrite: true }))
// });

// task('copy-fonts', () => {
//     return src('src/assets/fnt/**')
//         .pipe(dest(src_folder + 'fnt/', { overwrite: true }))
// });

task('scss', () => {
    return src(src_folder + 'scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(src_folder + 'css/'))
});

task('img-copy', () => {
    return src(src_assets_floder + 'img/*.*')
        .pipe(dest(src_folder + 'img/'))
});

// task('js-concat', () => {
//     return src(src_assets_floder + 'js/**/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(concat('main.js'))
//         .pipe(sourcemaps.write())
//         .pipe(dest(src_folder + 'js/', { overwrite: true }))
// });

// task('generateSprite', () => {
//     const spriteData = src(src_assets_floder + 'sprite/*.*')
//         .pipe(spritesmith({
//             imgName: 'sprite.png',
//             imgPath: '../img/sprite.png',
//             cssName: '_sprite.scss',
//             padding: 5
//         }));
//     const imgStream = spriteData.img
//         .pipe(dest(src_assets_floder + 'img'));
//     const cssStream = spriteData.css
//         .pipe(dest(src_folder + 'scss/mixins'));
//     return merge(imgStream, cssStream);
// });

// task('change-html', () => {
//     return src('./src/*.html')
//         .pipe(browserSync.reload({ stream: true }))
// });

// task('browser-sync', function () {
//     browserSync.init({
//         server: {
//             baseDir: "./src/",
//         }
//     });
// });

task('watch', () => {
    // watch(src_assets_floder + 'js/**/*.*', parallel('js-concat'));
    // watch(src_assets_floder + 'sprite/*.*', parallel('generateSprite'));
    watch(src_assets_floder + 'img/*.*', parallel('img-copy'));
    watch(src_folder + 'scss/**/*.scss', parallel('scss'));
});
//task('default', parallel('style-reset', 'copy-fonts', 'awesome-font', 'img-copy', 'scss', 'js-concat', 'watch'));
task('default', parallel('img-copy', 'scss', 'watch'));
//=========== DEV END ============================

//=========== RELEASE START ============================
// task('release-clean', () => del([dist_folder]));
// task('release-html', () => {
//     return src(src_folder + '*.html')
//         .pipe(htmlmin({
//             collapseWhitespace: true,
//             removeComments: true,
//         }))
//         .pipe(dest(dist_folder, { overwrite: true }))
// });
// task('release-img', () => {
//     return src(src_folder + 'img/**/*')
//         .pipe(imagemin())
//         .pipe(dest(dist_folder + 'img/', { overwrite: true }))
// });
// task('release-js', () => {
//     return src(src_assets_floder + 'js/**/*.js')
//         .pipe(concat('main.js'))
//         .pipe(uglify())
//         .pipe(dest(dist_folder + 'js/', { overwrite: true }))
// });
// task('release-css', () => {
//     return src(src_folder + 'scss/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer())
//         .pipe(purgeCss({
//             content: [dist_folder + '*.html', dist_folder + 'js/**/*.js']
//         }))
//         .pipe(minifyCss({ level: { 1: { specialComments: 'none' } } }))
//         .pipe(dest(dist_folder + 'css/', { overwrite: true }))
// });
// task('release-fnt', () => {
//     return src(src_folder + 'fnt/**/*')
//         .pipe(dest(dist_folder + 'fnt/', { overwrite: true }))
// });


// task('release', series('release-clean', 'release-html', 'release-img', 'release-js', 'release-css', 'release-fnt'));
//=========== RELEASE START ============================
