'use strict';

angular.module('twitchApiApp')
  .directive('twitchStreams', function () {
    return {
      templateUrl: 'views/twitchStreams.html',
      restrict: 'E'
    };
  });
