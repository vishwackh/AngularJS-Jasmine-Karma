'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.html',
            controller:'loginCtrl'
        })

        .state('signup', {
            url: '/signup',
            templateUrl: 'modules/signup/signup.html',
            controller:'loginCtrl'
        });
})
.run(function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      });
