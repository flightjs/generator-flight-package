# Flight package generator

[![Build Status](https://secure.travis-ci.org/flightjs/generator-flight-package.png?branch=master)](http://travis-ci.org/flightjs/generator-flight-package)

Get up and running with everything you need to create a standalone component
using Twitter's lightweight, JavaScript framework,
[Flight](http://flightjs.github.io/).

This is a [Flight](http://flightjs.github.io/) generator for
[Yeoman](http://yeoman.io/).


## Recommended setup

Install [Node.js](http://nodejs.org/) (which comes with npm). It's best to have
npm version 1.2.x or above installed.

Next, globally install the Flight package generator. This will automatically
install [Bower](http://bower.io/), [Yo](http://yeoman.io/), and
[Karma](http://karma-runner.github.io/) as global dependencies. These tools
will help fetch and manage your dependencies, generate the boilerplate code,
and run your Jasmine unit tests.

```
npm install -g generator-flight-package
```

Make a new directory, and `cd` into it:

```
mkdir flight-packagename && cd $_
```

You're now ready to generate a package!


## The generator

To generate a standalone Flight component as a package:

```
yo flight-package <package-name>
```

**N.B.** All your Node and client-side dependencies will be installed automatically
unless you include the `--skip-install` option.

### flight-package

Flight makes it easy to create, share, and depend on standalone Flight
components, e.g.,
[flight-storage](https://github.com/cameronhunter/flight-storage).  This
generator is designed to setup everything you need to create a Flight component
suitable for registration with the Bower package manager.

Example:

```
yo flight-package foo
```

Produces a package named `flight-foo` with the following output:

```
.
├── bower_components
├── lib
│   └── foo.js
├── node_modules
├── test
│   ├── spec
│   │   └── foo.spec.js
│   └── test-main.js
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── bower.json
├── package.json
├── karma.conf.js
└── Gruntfile.js
```

#### Locally installed software

Automatically installs all the Flight framework dependencies, and sets up a
Node-based toolchain for your development workflow.

**via Bower**

* [Flight](http://flightjs.github.io/) (and its dependencies: ES5 Shim, jQuery)
* [Jasmine jQuery](https://github.com/velesin/jasmine-jquery) extensions
* [Jasmine Flight](https://github.com/flightjs/jasmine-flight) extensions

**via npm**

* [Grunt](http://gruntjs.com/) task runner
* [Karma](http://karma-runner.github.io/) unit test runner


## Running your package's tests

The generated package uses a local installation of Karma to run the unit tests.
Karma makes it easy to run and automatically re-run your unit tests in real
browsers:

```
karma start
```

This is the recommended approach because the moment your unit tests start
failing, you'll be notified in the terminal.

To run your unit tests just once in PhantomJS (for CI), you must install
PhantomJS and then run:

```
npm test
```

For further information about configuring Karma, please refer to the [Karma
website](http://karma-runner.github.io/).


## Releasing new versions of your package

The generated package uses Grunt to help automate the process of incrementing
version numbers in package manifests, commiting the changes, tagging a new
release, and pushing the changes and tags to your remote repository. This can
all be done with the following command (remember to update your CHANGELOG
first):

```
grunt bump:<patch|minor|major>
```

Alternatively, you can use the following command to bump the versions and do
nothing else:

```
grunt bump-only:<patch|minor|major>
```


## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
