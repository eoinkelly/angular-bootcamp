'use strict';

angular.module('directives', []).
  // example directive
  directive('repeatDone', function() {
    return function(scope, element, attrs) {
      if (scope.$last) { // all are rendered
        scope.$eval(attrs.repeatDone); // evaluate our repeat-done attribute
      }
    };
  });
