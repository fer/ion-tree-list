angular.module('starter', ['ionic', 'ion-tree-list'])
    .controller('DashCtrl', function($scope) {
        $scope.collapse = true;
        $scope.tasks = [
            {
                name: 'Chapter one',
                checked: false,
                tree: [
                    {
                        name: 'Section 1',
                        checked: false,
                        tree: [
                            {
                                name: 'Subsection'
                            }
                        ]
                    },
                    {
                        name: 'Section 2',
                        checked: true
                    },
                    {
                        name: 'Section 3',
                        checked: true
                    }
                ]
            },
            {
                name: 'Chapter two',
                checked: true
            },
            {
                name: 'Chapter three',
                checked: false

            },
            {
                name: 'Chapter four',
                checked: true
            }
        ];

        $scope.toggleCollapse = function(){
            $scope.collapse = !$scope.collapse;
            console.log($scope.collapse)
        };

        $scope.customTemplate = 'item_default_renderer';

        $scope.toggleTemplate = function() {
            if ($scope.customTemplate == 'ion-item.tmpl.html') {
                $scope.customTemplate = 'item_default_renderer'
            } else {
                $scope.customTemplate = 'ion-item.tmpl.html'
            }
        }
    });
