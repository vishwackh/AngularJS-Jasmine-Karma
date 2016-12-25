app.config(function($stateProvider, $urlRouterProvider) {
    // Default Route when Page not defined in setup
    $urlRouterProvider.otherwise('firstPage');
    $stateProvider
        .state('firstPage', {
            url: '/firstPage',
            templateUrl: 'modules/first/views/firstPage.html',
            controller:'firstPageCtrl',
            controllerAs:'first'
        })
        .state('secondPage', {
            url: '/secondPage/:loginId',
            templateUrl: 'modules/second/views/secondPage.html',
            controller:'secondPageCtrl',
            controllerAs:'second'
        })
        .state('thirdPage', {
            url: '/thirdPage',
            templateUrl: 'modules/third/views/thirdPage.html',
            controller:'thirdPage',
            controllerAs:'third'
        });
  });
