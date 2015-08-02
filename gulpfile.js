'use strict';

var gulp = require('gulp'),
    Server = require('karma').Server;

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/tests/karma.conf.js',
        singleRun: false
    }, done).start()
});