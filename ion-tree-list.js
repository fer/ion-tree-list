function addDepthToTree(obj, depth) {
    for (key in obj) {
        if (typeof(obj[key]) == 'object') {
            if (key == 'tree') {
                addDepthToTree(obj[key], depth)
            }

            obj[key].depth = depth;
            addDepthToTree(obj[key], depth + 1)
        }
    }
    return obj
}

angular.module('ion-tree-list', [])
    .directive('ionTreeList', function () {
        return {
            restrict: 'EA',
            scope: {
                items: '='
            },
            templateUrl: 'lib/ion-tree-list/ion-tree-list.tmpl.html',
            controller: function($scope){
                $scope.items = addDepthToTree($scope.items, 0);
                console.log($scope.items)
            }
        }
    });