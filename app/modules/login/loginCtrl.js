'use strict';

app.controller('loginCtrl',function($scope){
$scope.eatSlice = function(){
	if($scope.slices){
		$scope.slices--;
	}
};
$scope.slices = 8;
});
