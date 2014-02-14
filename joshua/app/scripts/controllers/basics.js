'use strict';

angular.module('joshuaApp')
  .controller('BasicsCtrl', function ($scope) {
      $scope.template = 'ng-model.html'
      $scope.variable = 'initial value';
      $scope.list = ['one', 'two', 'three'];

      $scope.add = function(newItem) {
        console.log(newItem)
        $scope.list.push(newItem);
      }
  });
