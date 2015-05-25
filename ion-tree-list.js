"use strict";

/**
 * returns a tree object with extra attribute 'depth'
 *
 * @param obj tree object
 * @param depth initial depth
 * @returns {*} obj
 */
function addDepthToTree(obj, depth) {
    for (var key in obj) {
        if (typeof(obj[key]) == 'object') {
            obj[key].depth = depth;
            obj[key].collapsed = false;
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
    for (var key in obj) {
        if (typeof(obj[key]) == 'object') {
            obj[key].collapsed = !obj[key].collapsed;
            collapse(obj[key])
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
            $scope.items = addDepthToTree($scope.items, 1);
            $scope.collapse = collapse;
        }
    }
});