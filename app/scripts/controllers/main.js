'use strict';

angular.module('twitchApiApp')
  .controller('MainCtrl', function ($scope, twitchData, userData) {

    var users = ['starladder1', 'AmazHS', 'freecodecamp', 'habathcx','RobotCaleb', 'noobs2ninjas', 'medrybw'];

    $scope.users = [];
    $scope.usersOnline = [];
    $scope.usersOffline = [];



    users.forEach(function (user) {

      var tmpObj = {};

      userData.getUser(user, function (res) {
        tmpObj.logo = res.data.logo;
        tmpObj.name = res.data.name;

        twitchData.getData(user, function (res) {
          if(res.data.stream) {
            tmpObj.online = true;
            tmpObj.stream = res.data.stream;
            tmpObj.icon = 'online';
            $scope.users.push(tmpObj);
          } else {
            tmpObj.online = false;
            tmpObj.icon = 'offline';
            $scope.users.push(tmpObj);
          }

          $scope.usersOnline = $scope.users.filter(function (user) {
            if (user.online) {
              return user;
            }
          });

          $scope.usersOffline = $scope.users.filter(function (user) {
            if (!user.online) {
              return user;
            }
          });

          $scope.allUsers = $scope.users;

        });


      });

    });


    $scope.online = function () {
      $scope.allUsers = $scope.usersOnline;
    };

    $scope.offline = function () {
      $scope.allUsers = $scope.usersOffline;
    };

    $scope.all = function () {
      $scope.allUsers = $scope.users;
    };



  });
