'use strict';

angular.module('rest-test-ctrl', ['restangular'])
  .controller('RestTestCtrl', function ($scope, $log, Restangular) {
    $log.log('In RestTestCtrl()');
  });
