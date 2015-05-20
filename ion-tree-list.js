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
            addDepthToTree(obj[key], key === 'tree' ? ++ depth : depth)
        }
    }
    return obj
}

/**
 * adds visible attribute and toggles its value in case it exists
 *
 * @param obj
 * @returns {*}
 */
function collapse(obj) {
    for (key in obj) {
        if (typeof(obj[key]) == 'object') {
            obj[key].collapsed = !obj[key].collapsed;
            collapse(obj[key])
        }
    }

    console.log('collapse:', obj);
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
            // Add depth attr to items
            $scope.items = addDepthToTree($scope.items, 0);
            $scope.collapse = collapse
        }
    }
});