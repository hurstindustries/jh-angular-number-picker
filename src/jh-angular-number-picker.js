(function(){
    'use strict';

    angular.module('jh.angular-number-picker', [])
    .component('jhNumberPicker', {
        bindings: {
            number: '=',
            min: '@',
            max: '@',
            step: '@',
            buttonClass: '@'
        },
        controller: jhNumberPickerCtrl,
        template: '<div class="jh-number-picker">' +
            '<button class="jh-number-picker--btn jh-number-picker--decrement" ng-click="$ctrl.decrement()" ng-class="$ctrl.buttonClass">-</button>' +
            '<div class="jh-number-picker--value">{{$ctrl.number}}</div>' +
            '<button class="jh-number-picker--btn jh-number-picker--increment" ng-click="$ctrl.increment()" ng-class="$ctrl.buttonClass">+</button>' +
        '</div>'
    });

    // default values
    var defaults = {
        min: 0,
        max: 100,
        step: 1
    };

    // object assign function for merging th default values with potential binding values
    var assign = function(dest, src) {
        for (var key in src) {
            if (!dest[key]) {
                dest[key] = src[key];
            }
        }
        return dest;
    };

    jhNumberPickerCtrl.$inject = [];

    function jhNumberPickerCtrl(){

        var vm = this;

        vm.number = parseInt(vm.number, 10) || 0;

        var opts = assign({
            min: this.min,
            max: this.max,
            step: this.step
        }, defaults);

        this.decrement = function(){
            if(vm.number <= opts.min){
                return;
            }
            vm.number = vm.number - parseInt(opts.step, 10);

        };

        this.increment = function(){
            if(vm.number >= opts.max){
                return;
            }
            vm.number = vm.number + parseInt(opts.step, 10);
        };

    }


})();