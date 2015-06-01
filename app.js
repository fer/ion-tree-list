angular.module('starter', ['ionic', 'ion-tree-list'])
    .controller('DashCtrl', function($scope) {
        $scope.collapse = true;

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
            },
            {
                name: 'first task 3'
            },
            {
                name: 'first task 4'
            }
        ];

        $scope.toggleCollapse = function(){
            $scope.collapse = !$scope.collapse;
            console.log($scope.collapse);
        }
    });
