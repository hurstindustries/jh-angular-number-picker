# jh-angular-number-picker

jh-number-picker is an angluar ^1.5.0 component for easily selcecting a number in a visually appealing (no bootstrap required) and functional way.

##Demo

![jh-angular-number-picker](http://i.imgur.com/qyPVHep.gif)


## Requirements
Angluarjs ^1.5.0

### Installation

```sh
$ npm install jh.angular-number-picker --save
```

### Usage

***Include module into app dependancy***
```javascript
<script>
angular.module('myApp', [
    'jh-angular-number-picker'
]).controller('myController', ['$scope', function($scope){
    $scope.myNumber = 0;
}]);
</script>
```

***Use in template view***
``` javascript
<jh-number-picker number="myNumber"></jh-number-picker>
```

### Options
| Attribute        | Type           | Default Value  |
| ------------- |:-------------:| -----:|
| number | number | 0 |
| min | number | 0 |
| max | number | 100 |
| step | number | 1 |


### License
MIT
