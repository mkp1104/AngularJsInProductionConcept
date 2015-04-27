(function (app) {
  'use strict';
  
  app.directive('toggleMapButton', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        isMapVisible: '='
      },
      link: function (scope) {
        scope.toggleMap = function () {
          scope.isMapVisible = (scope.isMapVisible === true) ? false : true;
        };
      },
      templateUrl: '/modules/listBuild/Views/toggleMap.html'
    };
  });
})(window.app);