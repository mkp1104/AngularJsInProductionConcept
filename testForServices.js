(function () {
	'use strict';
	describe('seedListSvc', function () {

		var seedListService, http, q, userContextService;

		beforeEach(function () {
			module('app', function ($httpProvider, $provide) {
				var userContextServiceSpy = jasmine.createSpyObj('userContextSvc', ['getApiClientKey', 'getOrgKey']);
				userContextServiceSpy.getApiClientKey.and.returnValue('x');
				userContextServiceSpy.getOrgKey.and.returnValue('a');
				$provide.value('userContextSvc', userContextServiceSpy);
				$httpProvider.interceptors.pop('authInterceptor');
				$httpProvider.interceptors.pop('errorInterceptor');
			});

			inject(function ($httpBackend, $q, seedListSvc, userContextSvc) {
				http = $httpBackend;
				q = $q;
				userContextService = userContextSvc;
				seedListService = seedListSvc;
			});

		});

		it('exists', function () {
			expect(seedListService).not.toBeUndefined();
		});

		describe('getSeedListData', function () {

			it('exists', function () {
				expect(seedListService.getSeedListData).not.toBeUndefined();
			});

			describe('when called', function () {

				var resourceUrl, expectedResult;


				afterEach(function () {
					http.verifyNoOutstandingExpectation();
				});

				it('returns seedList for organization A', function () {
					resourceUrl = '/api/clients/x/orgs/a/seedLists';
					expectedResult = {
						results: {
							seedLists: [{
								'SeedListName': 'SeedList 1'
							}]
						}
					};
					http.expectGET(resourceUrl).respond(expectedResult);
					var retVal;
					seedListService.getSeedListData().then(function (data) {
						retVal = data;
					});
					http.flush();
					expect(retVal).toBe(expectedResult.results.Recipes);
				});
			});
		});

	});
})(window.app);