/**
 * Created by zhangdongming on 16-7-25.
 */
'use strict'
var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('bootstrap', function () {
    gulp.src('bower_components/bootstrap/less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('src'));
});
gulp.task('default', function () {
    gulp.watch('bower_components/bootstrap/less/*.less', ['bootstrap']);
    gulp.watch('bower_components/bootstrap/less/mixins/*.less', ['bootstrap']);
});