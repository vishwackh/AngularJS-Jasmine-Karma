// Suite
describe('Testing a Hello World controller', function() {
  var $controller,$state,controller,$compile,element,$rootScope;
  var $scope = {};

  // Setup for all tests
  beforeEach(function(){
    // loads the app module
    module('appmodule');
    inject(function(_$controller_, _$state_, _$compile_, _$rootScope_){

      // inject removes the underscores and finds the $controller Provider
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $state = _$state_;
      $compile = _$compile_;

      // $controller takes an object containing a reference to the $scope
      controller = $controller('Controller', { $scope: $scope });

    });

    spyOn($state,'go');
  });

  // Test (spec)
  it('should say \'Hello World\'', function() {

    // the assertion checks the expected result
    expect($scope.title).toEqual('Hello World');
  });

  it('checks the routing to other page via $state with spyOn',function(){
    //since the function in the controller is written using vm(virtualMachine), should be invoked using controller.
    expect(controller.login).toBeDefined();

    //invoke the function
    controller.login();

    //since we assinged loginId to 'jamsine@karma' and it's tested for existance.
    expect(controller.loginId).toBeDefined();

    //after invoking the method the logics inside the method can be tested.

    //checks whether the 'spied' method with state has been triggered
    expect($state.go).toHaveBeenCalled();

    //checks whether the 'spied' method with state has been triggered along with matching parameters
    expect($state.go).toHaveBeenCalledWith('secondPage',{userId:controller.loginId});



  });

  it('Testing a directive',function(){

   var element = $compile('<a-great-eye></a-great-eye>')($rootScope);
    expect(element.html()).toContain('lidless, wreathed in flame, {{1+1}} times');

  });

  // ... Other tests here ...
});
