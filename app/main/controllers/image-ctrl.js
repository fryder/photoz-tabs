'use strict';
angular.module('main')
.controller('MultiImageCtrl', function ($log, $cordovaImagePicker, $scope, Config) {

  $log.log('Hello from your Controller: Multi-imageCtrl in module main:. This is your controller:', this);
  $scope.ready = false;
  $scope.images = [];
  // bind data from services

  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;

  $scope.selImages = function () {

    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80
    };

    $cordovaImagePicker.getPictures(options).then(
      function (results) {
        for (var i = 0; i < results.length; i++) {
          $log.log('Image URI: ' + results[i]);
          $scope.images.push(results[i]);
        }
      }, function (error) {
      $log.log('Error: ' + error);
    }
    );

  };
});
