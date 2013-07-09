/*global describe:true, beforeEach:true, it:true */

var assert = require('assert');
var helpers = require('yeoman-generator').test;
var path = require('path');

describe('Flight package generator test', function () {

  beforeEach(function (cb) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) cb(err);
      cb();
    });

    helpers.assertGeneratorMakesExpected = function (generator, expected, cb) {
      helpers.mockPrompt(generator, {
        'normalize': 'Y'
      });

      generator.run([], function () {
        helpers.assertFiles(expected);
        cb();
      });
    };
  });

  describe('flight-package:app', function () {
    var flightPackage;

    beforeEach(function (cb) {
      var deps = ['../../lib/generators/app'];
      flightPackage = helpers.createGenerator('flight-package:app', deps, ['foo']);
      flightPackage.options['skip-install'] = true;
      cb();
    });

    it('runs sucessfully', function () {
      flightPackage.run();
    });

    it('creates expected files', function (cb) {
      var expected = [
        // dotfiles
        '.gitignore',
        '.gitattributes',
        '.jshintrc',
        // config files
        'bower.json',
        'karma.conf.js',
        'package.json',
        // docs
        'CHANGELOG.md',
        'CONTRIBUTING.md',
        'LICENSE.md',
        'README.md',
        // app
        'lib/foo.js',
        // test
        'test/test-main.js',
        'test/spec/foo.spec.js'
      ];

      helpers.assertGeneratorMakesExpected(flightPackage, expected, cb);
    });
  });
});
