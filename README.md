# ion-tree-list

Ionic directive for displaying and manipulating nested list ionic items.

<!-- Here is the DEMO page -->

## Installation

<!-- bower installation -->


```
<script src="lib/ion-tree-list/ion-tree-list.js"></script>
```

app.js: 

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


Template:

```
<ion-tree-list items="tasks"></ion-tree-list>
```