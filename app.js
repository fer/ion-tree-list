angular.module('starter', ['ionic', 'ionic-toast', 'ion-tree-list'])
    .controller('DashCtrl', function($scope, ionicToast) {
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

        $scope.$on('$ionTreeList:ItemClicked', function(event, item) {
            ionicToast.show('You clicked: ' + JSON.stringify(item.name), 'bottom', true, 2500)
        });

        $scope.toggleCollapse = function(){
            $scope.collapse = !$scope.collapse;
            console.log($scope.collapse)
        };

        $scope.customTemplate = 'item_default_renderer';

        $scope.toggleTemplate = function() {
            $scope.customTemplate = $scope.customTemplate == 'ion-item.tmpl.html' ? 'item_default_renderer' : 'ion-item.tmpl.html'
        }
    });
