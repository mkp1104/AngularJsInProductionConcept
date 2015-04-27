(function () {
  'use strict';

  describe('selectLocationCtrl', function () {

    var $rootScope, scope;

    beforeEach(module('app'));

    beforeEach(function () {
      angular.mock.inject(function (_$rootScope_, $controller, listStateSvc) {
        $rootScope = _$rootScope_;

        listStateSvc.set(listStateSvc.createList());

        scope = $rootScope.$new();
        $controller('selectLocationCtrl', {
          $scope: scope
        });
      });
    });

    it('should set locationsLoading', function () {
      expect(scope.locationsLoading && typeof(scope.locationsLoading.then)).toBe('function');
    });
  });
})();