// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54

module.exports = function (config) {
  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: [
      'jasmine',
      'requirejs'
    ],

    // list of files / patterns to load in the browser
    files: [
      // loaded without require
      'vendor/jquery/dist/jquery.js',
      'vendor/jasmine-jquery/lib/jasmine-jquery.js',
      'vendor/jasmine-flight/lib/jasmine-flight.js',

      // loaded with require
      {pattern: 'vendor/flight/**/*.js', included: false},
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'test/spec/**/*.spec.js', included: false},

      'test/test-main.js'
    ],

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress'
    // CLI --reporters progress
    reporters: ['progress'],

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // CLI --browsers Chrome, Firefox, Safari
    browsers: [
      'Chrome'
    ],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 20000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    plugins: [
      'karma-jasmine',
      'karma-requirejs',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ]
  });
};
