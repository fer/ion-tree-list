module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-ng-html2js-preprocessor'],
        files: [
            'bower_components/ionic/release/js/ionic.bundle.js',
            'bower_components/angular-mocks/angular-mocks.js',
            '*.html',
            'ion-*.js',
            'tests/unit/*.spec.js'
        ],
        preprocessors: {
            '**/*.tmpl.html': ['ng-html2js']
        },
        browsers: ['PhantomJS'],
        singleRun: true
    })
};