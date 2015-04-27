(function () {

  'use strict';

  describe('notification container directive', function () {
    var $compile, $rootScope, element, notificationService;

    beforeEach(module('app'));

    beforeEach(module('templates'));

    beforeEach(inject(function (_$compile_, _$rootScope_, alertSvc, $templateCache) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      notificationService = alertSvc;
      $templateCache.put('/templates/alertContainer.html','<div class="alert"></div>');
      notificationService.add({ Message: 'test', Type: 'Blocker', Source: 'recipe' });
      var html = '<alert-container source="recipe"></alert-container>';
      element = $compile(html)($rootScope);
      $rootScope.$digest();
    }));

    it('exists', function () {
      console.log(element);
      expect(element.hasClass('alert')).toBe(true);
    });
  });

})(window.app);
