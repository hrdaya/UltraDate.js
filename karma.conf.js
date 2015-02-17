module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/UltraDate.js',
            'src/UltraDate.ja.js',
            'test/*.js'
        ],
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        preprocessors: {
            'src/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};