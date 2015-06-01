angular.module('starter', ['ionic', 'ion-tree-list'])

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

})
.controller('DashCtrl', function($scope) {
  $scope.tasks = [
    {
      name: 'first task 1',
      tree: [
        {
          name: 'first task 1.1',
          tree: [
            {
              name: 'first task 1.1.1'
            }
          ]
        }
      ]
    },
    {
      name: 'first task 2'
    }
  ]
});
