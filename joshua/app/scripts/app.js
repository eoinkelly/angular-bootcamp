'use strict';

angular.module('joshuaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/basics', {
          templateUrl: 'views/basics.html',
          controller: 'BasicsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
