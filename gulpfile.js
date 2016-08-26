/**
 * Created by zhangdongming on 16-7-25.
 */
'use strict'
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssMin=require('gulp-minify-css'),
    rename=require('gulp-rename');

gulp.task('bootstrap', function () {
    gulp.src('bower_components/bootstrap/less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('src'));
});
gulp.task('default', function () {
    gulp.watch('bower_components/bootstrap/less/*.less', ['bootstrap']);
    gulp.watch('bower_components/bootstrap/less/mixins/*.less', ['bootstrap']);
});
gulp.task('minifyCss',function () {
    gulp.src('src/bootstrap.css')
        .pipe(cssMin())
        .pipe(rename('ani_bootstrap.min.css'))
        .pipe(gulp.dest('src'))
});