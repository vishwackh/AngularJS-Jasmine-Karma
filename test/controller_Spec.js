// Suite
describe('Testing a Hello World controller', function() {
  var $controller;

  // Setup for all tests
  beforeEach(function(){
    // loads the app module
    module('appmodule');
    inject(function(_$controller_){
      // inject removes the underscores and finds the $controller Provider
      $controller = _$controller_;
    });
  });

  // Test (spec)
  it('should say \'Hello World\'', function() {
    var $scope = {};
    // $controller takes an object containing a reference to the $scope
    var controller = $controller('Controller', { $scope: $scope });
    // the assertion checks the expected result
    expect($scope.title).toEqual('Hello World');
  });

  // ... Other tests here ...
});
