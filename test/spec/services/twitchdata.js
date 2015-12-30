'use strict';

describe('Service: twitchData', function () {

  // load the service's module
  beforeEach(module('twitchApiApp'));

  // instantiate service
  var twitchData;
  beforeEach(inject(function (_twitchData_) {
    twitchData = _twitchData_;
  }));

  it('should do something', function () {
    expect(!!twitchData).toBe(true);
  });

});
