// Services

// register lodash as a service so we can use it with the Angular DI system
angular.module('lodash', [])
  .factory('_', function() {
    'use strict';
    return window._; // assumes lodash has already been loaded as a global
  });
