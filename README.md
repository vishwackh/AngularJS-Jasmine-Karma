# AngularJS-Jasmine-Karma

## Quick Start?
```js
$ git clone https://github.com/vishwackh/AngularJS-Jasmine-Karma.git
```
To run the sample, open a command prompt and execute the following commands:

 -  npm install (to install karma package)
 -  npm install -g gulp (to install gulp globally)
 -  npm install -g karma-cli (to install karma cli globally)
 -  bower install (to install front-end packages)
 -  gulp test (to start karma and run tests / Run test once and exit)
 - gulp dev-test (to start karma and run tests / Watch for file changes and re-run tests on each change)

## About Unit Testing:
The primary goal of unit testing is to take the smallest piece of testable software in the application, isolate it from the remainder of the code, and determine whether it behaves exactly as you expect.

## Testing AngularJS Application :
AngularJS build around the concept of dependency injection & loose coupling to the DOM which make it a very tesable.

Test Driven Developemnt :
Test Driven Developemnt a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards.

<image>

## Why Karma?

The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.

<a href="http://karma-runner.github.io" >http://karma-runner.github.io</a>

## Why Jasmine?

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

<a href="http://jasmine.github.io" >http://jasmine.github.io</a>

## Project Setup:
-- Setting up our TDD Enveirment Project Setup --

-  Let`s start from scratch. First, we need to create a basic project structure with a folder that contain our sources, and a folder that contains our specs. then we can init a package.json $ npm init
- $ npm install karma let`s install Karma (and all the plugins your project needs) locally in the project's directory. (don`t forget to use the --save-dev flags)
- $ npm install karma-jasmine $ npm install karma-chrome-launcher since we going to use jasmine, let`s install tha karma adaptor plugin for jasmine. we will also install the chrome launcher plugin to enable karma to launch chrome browser fo us
- $ npm install -g karma-cli Finally, we will install the karma command line interface (cli) globally, which enable us to easily configure karma in our project
- $ karma init with the karma cli installed, we can create our configuration file fast and easy.
- $ karma start $ karma run Let`s take karma for a test drive: in webstorm, right click on the configuration file and choose run. if you don`t use webstorm, start the karma server with start, and run you tests with run (karma start / karma start karma.conf.js)

## quick intruduction to the Jasmine framwork Jasmine

## 
## Reference
 - Karma runs on Node.js and is available as an NPM package. Setup steps can be found [here](http://karma-runner.github.io/0.12/intro/installation.html)
- The current tests are constructed using the [Jasmine framework](http://jasmine.github.io/).



