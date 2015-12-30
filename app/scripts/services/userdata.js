'use strict';

angular.module('twitchApiApp')
  .service('userData', function ($http, USER) {
    this.getUser = function (userName, cb) {
      $http.get(USER.url + userName).then(cb);
    };
  });
