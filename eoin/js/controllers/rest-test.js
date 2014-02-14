'use strict';

angular.module('rest-test-ctrl', ['restangular'])
  .controller('RestTestCtrl', function ($scope, $log, Restangular, $http) {
    $log.log('In RestTestCtrl()');

    // var userToAdd = {
    //   name:'AngularJS Superhero',
    //   email:'superhero@angularjs.org'
    // };

    // $http example

    // Get list of databases from MongoDB
    // $http.get('https://api.mongolab.com/api/1/databases',
    //   {
    //     params: { apiKey:'AZoqYGFFD8zN7IGaOHTeZ2QrbKpysm2e' }
    //   }
    // )
    // .success(function (data, status, headers, config) {
    //   $log.log('in success handler');
    //   $log.log(data);
    // })
    // .error(function (data, status, headers, config) {
    //   $log.log('in error handler');
    // });

    // Restangular example
    // ===================
    var posts = Restangular.all('posts'); // calling getList on this will issue GET /databases
    posts.getList().then(function (posts) {
      $log.log(posts);
    });

    Restangular.one('posts', 1).get().then(function (post) {
      $log.log(post);
    });
  });
