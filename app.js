angular.module('starter', ['ionic', 'ion-tree-list'])
    .controller('DashCtrl', function($scope) {
        $scope.collapse = true;

        $scope.tasks = [
            {
                name: 'Chapter one',
                tree: [
                    {
                        name: 'Section 1',
                        tree: [
                            {
                                name: 'Subsection'
                            }
                        ]
                    },
                    {
                        name: 'Section 2'
                    },
                    {
                        name: 'Section 3'
                    }
                ]
            },
            {
                name: 'Chapter two'
            },
            {
                name: 'Chapter three'
            },
            {
                name: 'Chapter four'
            }
        ];

        $scope.toggleCollapse = function(){
            $scope.collapse = !$scope.collapse;
            console.log($scope.collapse);
        }
    });
