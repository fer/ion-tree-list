angular.module('starter', ['ionic', 'starter.controllers', 'ion-tree-list'])

.run(function($ionicPlatform) {})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/dash');

});
