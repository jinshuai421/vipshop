const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// 搭建服务器
gulp.task('server', done => {
    connect.server({
        root: 'dist',
        livereload: true
    })
    done();
});
// html
gulp.task('html', done => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
    done();
});
// CSS
gulp.task('sass', done => {
    gulp.src('src/css/**')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
    done();
});
// js
gulp.task('js', done => {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
    done();
});
// img
gulp.task('img', done => {
    gulp.src('src/img/**')
        .pipe(gulp.dest('dist/img'));
    done();
});
// font
gulp.task('font', done => {
    gulp.src('src/font/**')
        .pipe(gulp.dest('dist/font'))
    done();
});
// 监听
gulp.task('watch', done => {
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/css/*.scss', gulp.series('sass'));
    gulp.watch('src/js/*.js', gulp.series('js'));
    done();
});

gulp.task('default', gulp.parallel('server', 'watch'));