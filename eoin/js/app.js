'use strict';

// the controllers module exists just to depend on all the controllers individually
angular.module('controllers', ['home-ctrl', 'rest-test-ctrl']);

// create the main application module
angular.module('App', ['filters', 'controllers', 'directives', 'ngRoute', 'restangular'])
  
  // configure Restangular service
  .config(function(RestangularProvider) {
    // RestangularProvider.setBaseUrl('http://angular-bootcamp-demo.herokuapp.com');
    RestangularProvider.setBaseUrl('http://localhost:3000');
    RestangularProvider.setRequestSuffix('.json');

    // This is where you can hook into the requests and responses sent/recieved
    // by Restangular to massage them into what you want for your app.
    // Restangular tutorial: http://www.ng-newsletter.com/posts/restangular.html
    // Restangular docs: https://github.com/mgonto/restangular

    // can add element transformations here to add custom methods to Restangular objects

    // can add request interceptors here to translate the response we get from the server

    // can add response interceptors here to translate the response we get from the server

    // can add error interceptors here to translate the response we get from the server

    // can add custom fields - this lets you map attributes on the backend to
    // different attributes in the Restangular objects in memory
  })

  // Rectangular setup for MongoDB
  // =============================
  // TODO: 
  // * change api key to your own
  // * change database name from 'startup-wknd' to your own
  // .constant('apiKey', 'your api key here')
  //
  // .config(function (RestangularProvider, apiKey) {
  //   RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/startup-wknd');
  //   RestangularProvider.setDefaultRequestParams({
  //     apiKey: apiKey
  //   });
  //   RestangularProvider.setRestangularFields({
  //     id: '_id.$oid'
  //   });
  //
  //   RestangularProvider.setRequestInterceptor(
  //     function (elem, operation) {
  //
  //       if (operation === 'put') {
  //         elem._id = undefined;
  //         return elem;
  //       }
  //       return elem;
  //     });
  // })

  // configure $compile service
  .config(function ($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })

  // configure $route service
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/home.tpl.html', controller: 'HomeCtrl'});
    $routeProvider.when('/rest-test', {templateUrl: 'views/rest-test.tpl.html', controller: 'RestTestCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
