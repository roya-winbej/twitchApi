'use strict';

angular.module('twitchApiApp')
  .service('twitchData', function ($http, API) {
    this.getData = function (user, cb) {
      $http.get(API.url + user).then(cb);
    };
  });
