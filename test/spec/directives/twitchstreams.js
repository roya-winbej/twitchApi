'use strict';

describe('Directive: twitchStreams', function () {

  // load the directive's module
  beforeEach(module('twitchApiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<twitch-streams></twitch-streams>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the twitchStreams directive');
  }));
});
