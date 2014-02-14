'use strict';

angular.module('rest-test-ctrl', ['restangular'])
  .controller('RestTestCtrl', function ($scope, $log, Restangular, $http, _) {

    // $http example
    // =============

    $http.get('http://localhost:3000/posts.json')
    .success(function (data, status, headers, config) {
      $log.log('============= $http results:');
      _.each(data, function (post) {
        $log.log('Title: ' + post.title);
        $log.log('Content: ' + post.content);
      });
    })
    .error(function (data, status, headers, config) {
      $log.log('$http error happened');
    });

    // Restangular example
    // ===================

    var posts = Restangular.all('posts');

    posts.getList().then(function (posts) {
      $log.log('============= Restangular results:');
      _.each(posts, function (post) {
        $log.log('Title: ' + post.title);
        $log.log('Content: ' + post.content);
      });
    });

    // GET /posts/1
    Restangular.one('posts', 1).get().then(function (post) {
      $log.log('============= Restangular get single result:');
      $log.log('Title: ' + post.title);
      $log.log('Content: ' + post.content);
    });

    var myPost = {
      title:   'new post from restangular',
      content: 'Restangular rocks'
    };

    // POST /posts
    posts.post(myPost).then(
        function (response) { $log.log('post saved with id ' + response.id + ' saved OK'); }, // success function
        function () { $log.log('Problem saving post'); }                                      // failure function
        );

  });
