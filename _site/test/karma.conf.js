module.exports = function(config) {
  config.set({
    basePath: './..',
    autoWatch: true,
    frameworks: ['mocha', 'requirejs'],
    files: [
        {pattern: '_includes/**/**/*.html'},
        {pattern: 'static/lib/jquery-2.0.3.js', included: false},
        {pattern: 'grunt/js/**/*.js', included: false},
        {pattern: 'test/specs/*Spec.js', included: false},
        {pattern: 'test/libraries/*.js', included: false},
        'test/config.js'
    ],

    browsers: [ 'PhantomJS', 'Firefox', 'Chrome' ],

    // level of logging: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.DEBUG,

    reporters: ['progress', 'coverage'],
    preprocessors: {
        '**/*.js': 'coverage',
        '_includes/**/**/*.html': 'html2js'},
    coverageReporter : { type : 'html', dir : 'test/coverage/'},
    singleRun: false, //will stay alive now

    plugins: [
        'karma-firefox-launcher',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-mocha',
        'karma-requirejs',
        'karma-html2js-preprocessor'
    ]

  });
};

