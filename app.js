/* global angular*/

function generateSampleNodes(obj, num) {
    var result = [];
    
    for(var x=1; x <= num; x++) {
        result.push({
            name: 'Chapter ' + (obj.length + x),
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
        })
    }
    
    return result
}

function calculateTotalNodes(obj) { 
   var count = 0;
   
   obj.forEach(function(model, key) { 
       if(model.hasOwnProperty('tree')) { 
           count = count + calculateTotalNodes(model.tree) + 1
       } else {
           return count++
       }
   }); 
   
   return count
}; 

angular.module('starter', ['ionic', 'ionic-toast', 'ion-tree-list'])
    .controller('DashCtrl', function($scope, ionicToast) {
        $scope.collapse = true;
        $scope.tasks = generateSampleNodes([], 10);
        $scope.customTemplate = 'item_default_renderer';
        $scope.totalNodes = calculateTotalNodes($scope.tasks);
        
        $scope.generateSampleNodes = function(num) {
            $scope.tasks = $scope.tasks.concat(generateSampleNodes($scope.tasks, num))
        }
        
        $scope.toggleTemplate = function() {
            $scope.customTemplate = $scope.customTemplate == 'ion-item.tmpl.html' ? 'item_default_renderer' : 'ion-item.tmpl.html'
        }
        
        $scope.$watch('tasks', function(){
           $scope.totalNodes = calculateTotalNodes($scope.tasks)
        });
        
        $scope.$on('$ionTreeList:ItemClicked', function(event, item) {
            item.checked = !item.checked;
            ionicToast.show('You clicked: ' + JSON.stringify(item.name), 'bottom', false, 1500)
        })
    })