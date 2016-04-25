"use strict";
/* global angular */

var CONF = {
    baseUrl: 'lib/ion-tree-list',
    digestTtl: 35
}

function addDepthToTree(obj, depth, collapsed, treeKey) {
    for (var key in obj) {
        if ( obj[key] && typeof(obj[key]) == 'object') {
            obj[key].depth = depth;
            obj[key].collapsed = collapsed;
            addDepthToTree(obj[key], key === treeKey ? ++ depth : depth, collapsed, treeKey)
        }
    }
    return obj
}

function toggleCollapse(obj) {
    for (var key in obj) {
        if (obj[key] && typeof(obj[key]) == 'object') {
            obj[key].collapsed = !obj[key].collapsed;
            toggleCollapse(obj[key])
        }
    }
    return obj
}

angular.module('ion-tree-list', [], function($rootScopeProvider){
    $rootScopeProvider.digestTtl(CONF.digestTtl)
})
.directive('ionTreeList', function() {
    return {
        restrict: 'E',
        scope: {
            items: '=',
            itemsTreeKey: '@',
            itemsNameKey: '=',
            collapsed: '=',
            templateUrl: '@',
            showReorder: '='
        },
        templateUrl: CONF.baseUrl + '/ion-tree-list.tmpl.html',
        controller: function($scope) {
            $scope.baseUrl = CONF.baseUrl;
            $scope.itemsTreeKey = $scope.itemsTreeKey ? $scope.itemsTreeKey : 'tree';
            $scope.itemsNameKey = $scope.itemsNameKey ? $scope.itemsNameKey : 'name';

            $scope.toggleCollapse = function(item) {
                if (item && item.collapsible !== false) {
                    toggleCollapse(item);
                }
            };

            $scope.emitEvent = function(event,item){
                event.stopPropagation();
                $scope.$emit('$ionTreeList:ItemClicked', item)
            }

            $scope.moveItem = function(item, fromIndex, toIndex) {
                $scope.items.splice(fromIndex, 1);
                $scope.items.splice(toIndex, 0, item)
            }

            $scope.$watch('collapsed', function() {
                $scope.toggleCollapse($scope.items)
            });

            $scope.$watch('items', function() {
                $scope.items = addDepthToTree($scope.items, 1, $scope.collapsed, $scope.itemsTreeKey);
                $scope.$emit('$ionTreeList:LoadComplete', $scope.items)
            })
        },
        compile: function(element, attrs){
            attrs.templateUrl = attrs.templateUrl ? attrs.templateUrl : 'item_default_renderer';
        }
    }
});
