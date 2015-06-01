angular.module('starter.controllers', [])

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