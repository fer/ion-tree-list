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
                                name: 'Subsection 1.1'
                            },
                            {
                                name: 'Subsection 1.2'
                            },
                            {
                                name: 'Subsection 1.3'
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
            },
            {
                name: 'Chapter five',
                checked: true
            },
            {
                name: 'Chapter six',
                checked: true
            },
            {
                name: 'Chapter seven',
                checked: true
            },
            {
                name: 'Chapter eight',
                checked: true
            },
            {
                name: 'Chapter nine',
                checked: true
            },
            {
                name: 'Chapter ten',
                checked: true
            },
            {
                name: 'Chapter eleven',
                checked: true
            },
            {
                name: 'Chapter twelve',
                checked: true
            },
            {
                name: 'Chapter thirteen',
                checked: true
            },
            {
                name: 'Chapter fourteen',
                checked: true
            },
            {
                name: 'Chapter fifteen',
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
