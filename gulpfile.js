'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    Server = require('karma').Server;

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: true
    }, done).start()
});

gulp.task('less', function () {
    return gulp.src('./*.less')
        .pipe($.less())
        .pipe($.minifyCss())
        .pipe(gulp.dest('.'));
});

gulp.task('updateNpmDependencies', function(){
    return gulp.src('package.json')
        .pipe($.david({ update: true }))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function(){
    gulp.watch('./*.less', ['less']);
});
