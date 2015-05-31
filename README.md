[![Stories in Ready](https://badge.waffle.io/fer/ion-tree-list.png?label=ready&title=Ready)](https://waffle.io/fer/ion-tree-list)
# ion-tree-list

Ionic directive for displaying nested list ionic items.

## Installation

```
bower install ion-tree-list --save
```

Add somewhere in your HEAD tag:

```
<script src="lib/ion-tree-list/ion-tree-list.js"></script>
```

You'll need to add ```ion-tree-list``` as a dependency on your Ionic app:

```
angular.module('starter', [
    'ionic', 
    'controllers', 
    'services', 
    'ion-tree-list'
])
```

In your ```controller.js```:

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


In your ```view.js```:

```
<ion-tree-list items="tasks" collapsed="true"></ion-tree-list>
```