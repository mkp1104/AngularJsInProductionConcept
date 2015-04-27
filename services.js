(function (app) {
  'use strict';

  var sessionKeyPrefix = 'user.session.';
  var session = {
    get: function (key) {
      return sessionStorage.getItem(sessionKeyPrefix + key);
    },
    set: function (key, value) {
      if (value === undefined || value === null) {
        this.clear(key);
      }
      else {
        sessionStorage.setItem(sessionKeyPrefix + key, value);
      }
    },
    clear: function (key) {
      sessionStorage.removeItem(sessionKeyPrefix + key);
    }
  };

  app.factory('sessionSvc', function () {
    return session;
  });

})(window.app);