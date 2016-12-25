(function() {
    'use strict';

    app.controller('Controller', Controller);

    Controller.$inject = ['$scope','$state'];

    /* @ngInject */
    function Controller($scope,$state) {
        
        //vm is virtualMachine concept and used to avoid the usage of $scope
        var vm = this;
        vm.loginValue = 'jasmine';
        vm.loginId = 'jasmine@karma';
        $scope.title = 'Hello World';
        vm.login = function(){
            if(vm.loginValue === 'jasmine'){
                $state.go('secondPage',{userId:vm.loginId});
            }
        };
        vm.login();
    }
})();
