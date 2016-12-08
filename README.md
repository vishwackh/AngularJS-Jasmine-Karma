<p align="center">
  <a href="http://gulpjs.com">
    <img  src="https://github.com/vishwackh/AngularJS-Jasmine-Karma/blob/master/app/images/karmajasmin.jpg">
  </a>
  <p align="center">**AngularJS-Jasmine-Karma**</p>
</p>

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

<p align="center">
  <a href="http://gulpjs.com">
    <img  src="https://github.com/vishwackh/AngularJS-Jasmine-Karma/blob/master/app/images/angularjs-unit-testing-introduction-7-638.jpg">
  </a>
</p>  
## AngularJS
AngularJS is one of the most popular single-page application frameworks. 

## Why Karma?
 
Karma is a javascript command line tool that can be used to spawn a web server which loads your application.

The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.

<a href="http://karma-runner.github.io" >http://karma-runner.github.io</a>

## Why Jasmine?

Jasmine is an open source behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

- Jasmine provides functions to help with structuring your tests and also making assertions.

<a href="https://github.com/vishwackh/AngularJS-Jasmine-Karma/wiki/Jasmine">more detail...</a>

<a href="http://jasmine.github.io" >http://jasmine.github.io</a>

## Why ANGULAR MOCKS?

ANGULAR MOCKS Allows you to inject and mock Angular services for unit tests.

<a href="https://docs.angularjs.org/guide/unit-testing" >guide/unit-testing</a>

## Project Setup:
-- Setting up our TDD Enveirment Project Setup --

-  Let`s start from scratch. First, we need to create a basic project structure with a folder that contain our sources, and a folder that contains our specs. then we can init a package.json $ npm init
- $ npm install karma let`s install Karma (and all the plugins your project needs) locally in the project's directory. (don`t forget to use the --save-dev flags)
- $ npm install karma-jasmine $ npm install karma-chrome-launcher since we going to use jasmine, let`s install tha karma adaptor plugin for jasmine. we will also install the chrome launcher plugin to enable karma to launch chrome browser fo us
- $ npm install -g karma-cli Finally, we will install the karma command line interface (cli) globally, which enable us to easily configure karma in our project
- $ karma init with the karma cli installed, we can create our configuration file fast and easy.
- $ karma start $ karma run Let`s take karma for a test drive: in webstorm, right click on the configuration file and choose run. if you don`t use webstorm, start the karma server with start, and run you tests with run (karma start / karma start karma.conf.js)

## quick intruduction to the Jasmine framwork Jasmine

in jasmine, we begin by creating a test suite with the global **describe** function that wrap our specs. specs are defined by the global function **it**. inside the spec we can describe our expextations by using tha **expect** function chained to a matcher function

```js
describe("suite name", function() { 

	it("contains spec with an expectation", function() { 
	expect(true).toBe(true); 
	}); 

});
```
we can run code before and after each spec in a suite block using the beforeEach and afterEach functions

```js 
describe("suite name", function() { 

  beforeEach(function () {//excute before each spec}) 

  it("contains spec with an expectation", function() {
  expect(true).toBe(true); 
  }); 
 
 afterEach(function () {//excute after each spec}) }); 
``` 
 jasmine use spies to track calls to a function with all it`s arguments. There are special matchers for interacting with spies. The toHaveBeenCalled and The toHaveBeenCalledWith
 
 ```js
 // spy on the method setBar of foo object 
 
 spyOn(foo, 'setBar'); 
 
	 it("contains spec with an expectation", function() { 
		 expect(foo.setBar).toHaveBeenCalled(); 
		 expect(foo.setBar).toHaveBeenCalledWith(32); 
	 }); 
 }); 
``` 
## Testing AngularJS 
### Test Driven Development in practice 

We are going to develop a small app. in the process we will learn how to unit test the building blocks of every AngularJS application: controllers, services, directives, events & http requests. First, let`s get some resources using bower

```js
$ bower install angular 
$ bower install angular-mocks 
```
## Controller 
In order to test controllers we need to holds an instance of the controller, initialize a scope for it and testing our expectations against that scope.
```js
 // get the module that contain the controller 
 beforeEach(module('appmodule')); 
 // inject the $controller and the rootScope 
 beforeEach(inject(function ($rootScope, $controller) { 
 // create a fresh new scope for the controller 
 scope = $rootScope.$new(); 
 // create a controller with this scope 
 ctrl = $controller('appController',{$scope: scope}); 
 })); 
```
## Services
In order to test services we need to use the $injector to get an instance of the service
```js
// get the module that contain the service 
beforeEach(module('appmodule')); 
// inject the $injector 
beforeEach(inject(function ($injector) { 
// use the $injector to get a hold on the service 
service = $injector.get(‘ServiceName’); 
})); 
```
##  Directive
In order to test a directive, we need to create an element that will host the directive and compile it with a scope. in our spec, we need trigger the digest.
```js
// get the module that contain the service 
beforeEach(module('appmodule')); 
// inject the $compile service and the $rootScope 
beforeEach(inject(function ($compile, $rootScope) { 
// use the $rootScope to create a scope for the directive 
scope = $rootScope; 
// create an angular element from a HTML string 
element = angular.element(‘<div my-directive ></div>’) 
// compile the element with the scope 
$compile(element)(scope) 
scope.$apply() 
})); 
```
## http requests
the $httpBackend is a fake HTTP Back-end implementaion. in the most basic use we can verify that a request is made & stub responses
```js
// inject the $httpBackend service and the $rootScope 
beforeEach(inject(function ($httpBackend) { 
	// use the $rootScope to create a scope for the directive 
	httpBackend = $httpBackend; 
	it("somting that make a request", function() { 
	// expect a request 
	httpBackend.expectGET(‘api’).respond(200); 
	// code that make a request 
	httpBackend.flush(); // do`nt forget to flush.. 
	}); 
})); 
```
## Productive Tips 
-- Making testing even more easier --

When the number of test suites and specs grows larger, the overall test speed is affected. jasmine include some usfull syntax to control it. 
```js
	// run this usite 
	ddescribe() 
	// run this spec 
	iit() 
	// run this spec 
	xit() 
```	
webstorm users can install the <a href="http://plugins.jetbrains.com/plugin/7233?pr=idea">ddescriber for jasmine</a>

## Reference
- Karma runs on Node.js and is available as an NPM package. Setup steps can be found [here](http://karma-runner.github.io/0.12/intro/installation.html)
- The current tests are constructed using the [Jasmine framework](http://jasmine.github.io/).



