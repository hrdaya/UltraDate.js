module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'UltraDate.js',
      'locale/ja.js',
      'test/**/*.js'
    ],
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    preprocessors: {
      'UltraDate.js': 'coverage',
      'locale/ja.js': 'coverage'
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    plugins: [
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]
  });
};
