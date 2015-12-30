'use strict';

angular
  .module('twitchApiApp', [])
  .constant('API', {
    'url': 'https://api.twitch.tv/kraken/streams/'
  })
  .constant('USER', {
    'url': 'https://api.twitch.tv/kraken/users/'
  });
