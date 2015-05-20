/**
 * returns a tree object with extra attribute 'depth'
 *
 * @param obj tree object
 * @param depth initial depth
 * @returns {*} obj with depths
 */
function addDepthToTree(obj, depth) {
    for (key in obj) {
        if (typeof(obj[key]) == 'object') {
            obj[key].depth = depth;
            obj[key].visible = true;

            addDepthToTree(obj[key], (key == 'tree') ? depth + 1 : depth)
        }
    }
    return obj
}

angular.module('ion-tree-list', [])
.directive('ionTreeList', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            items: '='
        },
        templateUrl: 'lib/ion-tree-list/ion-tree-list.tmpl.html',
        controller: function($scope){
            $scope.items = addDepthToTree($scope.items, 0);
            $scope.collapse = function(item) {
                item.visible = false;
                console.log(item);
            }
        }
    }
});