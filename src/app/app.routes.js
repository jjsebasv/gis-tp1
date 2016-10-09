angular.module('app-gistp').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('layout.landing');
    });

    $stateProvider
      .state('layout', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/layout.html'
          }
        }
      })
      .state('layout.landing', {
        url: '/gis',
        views: {
          landing: {
            templateUrl: '../app/components/landing/landing.html',
            controller: 'LandingController',
            controllerAs: 'landingCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
