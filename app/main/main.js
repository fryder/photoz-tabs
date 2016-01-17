'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');
  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/images');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'main/templates/account.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.login', {
        url: '/login',
        views: {
          'tab-account': {
            templateUrl: 'main/templates/login.html',
            controller: 'LoginCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })
      .state('main.images', {
        url: '/images',
        views: {
          'tab-images': {
            templateUrl: 'main/templates/images.html',
          //  controller: 'MultiImageCtrl as ctrl'
          }
        }
      })
     .state('main.library', {
       url: '/images/library',
       views: {
         'tab-images': {
           templateUrl: 'main/templates/multi-image-view.html',
           controller: 'MultiImageCtrl as ctrl'
         }
       }
     });
});
