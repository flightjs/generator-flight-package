/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var pkg = require('./../../../package.json');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('name', { type: String, required: false });
  if (!this.name) {
    throw new Error('Package needs a name, e.g., "yo flight-package name"');
  }
  this.genVersion = pkg.version;

  this.sourceRoot(path.join(__dirname, '../../templates/'));

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Setup the default directory structure
 *
 * @api public
 */

Generator.prototype.setupEnv = function setupEnv() {
  this.mkdir('lib');
  this.mkdir('test');
  this.mkdir('test/spec');
};

/**
 * Generate the standard project files
 *
 * Copy over basic files that don't require any app-specific data.
 * Other files are templates that require app-specific data.
 *
 * @api public
 */

Generator.prototype.projectFiles = function projectFiles() {
  // Create in generated root
  this.copy('karma.conf.js', 'karma.conf.js');
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
  this.copy('jshintrc', '.jshintrc');
  this.copy('travis.yml', '.travis.yml');
  this.copy('CHANGELOG.md', 'CHANGELOG.md');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.template('bower.json', 'bower.json');
  this.template('package.json', 'package.json');
  this.template('CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('LICENSE.md', 'LICENSE.md');
  this.template('README.md', 'README.md');

  // Create in generated 'app' dir
  this.template('lib/component.js', 'lib/' + this.name + '.js');
  this.template('test/spec/spec.js', 'test/spec/' + this.name + '.spec.js', {
    'requirePath': 'lib/' + this.name,
    'type': 'component'
  });

  // Create in generated 'test' dir
  this.copy('test/test-main.js', 'test/test-main.js');
};

Generator.name = 'Flight package';
