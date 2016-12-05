describe("loginCtrl",function(){
  var $rootScope,
	  $scope,
	  controller;

	beforeEach(function(){
       module('gulpApp');

       inject(function($injector){
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        controller = $injector.get('$controller')("loginCtrl",{$scope: $scope});
       });

       describe("Action Handlers", function(){
           describe("eatSlice",function(){

               it("Should decrement the no",function(){
               	expect($scope.slices).toEqual(8);
               	$scope.eatSlice();
               	expect($scope.slices).toEqual(7);
               });
               it("should do nothing when slice is 0", function(){
                  $scope.slices = 0;
                  $scope.eatSlice();
                  expect($scope.slices).toEqual(0);
               });
           });
       });

	}); 

	 describe("Intializatio",function(){
          it("should instantiate slices to 8", function(){
             expect($scope.slices).toEqual(8);
          });
	 });
   
});	