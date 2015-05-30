# ion-tree-list

Ionic directive for displaying nested list ionic items.

## Installation

```
<script src="lib/ion-tree-list/ion-tree-list.js"></script>
```

app: 

```
angular.module('starter', [
    'ionic', 
    'controllers', 
    'services', 
    'ion-tree-list'
])
```

controller:

```
  $scope.tasks = [
    {
      name: 'first task 1',
      tree: [
        {
          name: 'first task 1.1'
        },
      ]
    },
    {
      name: 'first task 2'
    }
  ];    
```


view:

```
<ion-tree-list items="tasks" collapsed="true"></ion-tree-list>
```