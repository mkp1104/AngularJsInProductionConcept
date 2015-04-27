(function (app) {
  'use strict';

  app.controller('LogoutCtrl', ['$scope', '$location', 'authSvc', 'sessionSvc', function (scope, location, auth, session) {

    scope.currentUser = function () {
      return session.get('username');
    };

    scope.logout = function () {
      session.clear('username');
      auth.setToken(undefined);
      location.path(app.currentRoute);
    };

    if (!auth.hasToken()) {
      scope.logout();
    }
  }]);

})(window.app);