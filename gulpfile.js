var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    prefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    notify = require("gulp-notify"),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    uncss = require('gulp-uncss'),
    sass = require('gulp-sass');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

//css
gulp.task('css', function () {
    return gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(prefixer({browsers: ['last 4 versions'] }))
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());
});

//html
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
    gulp.watch('sass/includes/*.sass', ['css'])
    gulp.watch('app/*.html', ['html'])
});

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);