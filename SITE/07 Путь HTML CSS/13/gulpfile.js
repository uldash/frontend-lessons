const { task, src, watch, dest, parallel, series } = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    purgeCss = require('gulp-purgecss'),
    minifyCss = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),

    src_folder = './src/',
    dist_folder = './dist/';
//=========== RELEASE START ============================
task('release-clean', () => del([dist_folder]));
task('release-html', () => {
    return src(src_folder + '*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
        }))
        .pipe(dest(dist_folder, { overwrite: true }))
});
task('release-img', () => {
    return src(src_folder + 'img/**/*')
        .pipe(imagemin())
        .pipe(dest(dist_folder + 'img/', { overwrite: true }))
});
task('release-css', () => {
    return src(src_folder + 'css/style.css')
        .pipe(autoprefixer())
        .pipe(minifyCss({
            level: { 1: { specialComments: 'none' } },
            processImport: true,
        }))
        .pipe(dest(dist_folder + 'css/', { overwrite: true }))
});
task('release-fnt', () => {
    return src(src_folder + 'fnt/**/*')
        .pipe(dest(dist_folder + 'fnt/', { overwrite: true }))
});


task('release', series('release-clean', 'release-html', 'release-img', 'release-css', 'release-fnt'));
//=========== RELEASE START ============================

