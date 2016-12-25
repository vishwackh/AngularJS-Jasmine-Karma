app.config(function($stateProvider, $urlRouterProvider) {
    // Default Route when Page not defined in setup
    $urlRouterProvider.otherwise('firstPage');
    $stateProvider
        .state('firstPage', {
            url: '/firstPage',
            templateUrl: 'modules/first/views/firstPage.html',
            controller:'firstPageCtrl'
        })
        .state('secondPage', {
            url: '/secondPage',
            templateUrl: 'modules/second/views/secondPage.html',
            controller:'secondPageCtrl'
        })
        .state('thirdPage', {
            url: '/thirdPage',
            templateUrl: 'modules/third/views/thirdPage.html',
            controller:'thirdPage'
        });
  });
