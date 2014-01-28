module.exports = function(config) {
  config.set({
    basePath: './..',
    autoWatch: true,
    frameworks: ['mocha', 'requirejs'],
    files: [
        {pattern: 'grunt/js/**/*.js', included: false},
        {pattern: 'test/specs/*Spec.js', included: false},
        {pattern: 'test/libraries/*.js', included: false},
        'test/config.js'
    ],
    // global config of your BrowserStack account
    browserStack: {
      username: process.env.BROWSERSTACK_USER,
      accessKey: process.env.BROWSERSTACK_API
    },
    // define BrowserStack browsers
    customLaunchers: {
      bs_firefox_mac: {
          base: 'BrowserStack',
          browser: 'firefox',
          browser_version: '21.0',
          os: 'OS X',
          os_version: 'Mountain Lion'
      },
      bs_iphone5: {
          base: 'BrowserStack',
          device: 'iPhone 5',
          os: 'ios',
          os_version: '7.0'
      }
    },

    browsers: [ 'PhantomJS', 'Firefox', 'Chrome' ], // 'bs_iphone5', 'bs_firefox_mac','Firefox', , 'Chrome'

    // level of logging: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.DEBUG,

    reporters: ['progress', 'coverage'],
    preprocessors: { 'grunt/js/**/*': 'coverage' },
    coverageReporter : { type : 'html', dir : 'test/coverage/'},
    singleRun: true,

    plugins: [
        'karma-firefox-launcher',
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-mocha',
        'karma-requirejs'
    ]

  });
};

