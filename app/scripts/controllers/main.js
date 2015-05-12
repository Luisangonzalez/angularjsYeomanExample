/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */

'use strict';


angular.module('angularjsApp')
  .controller('MainCtrl', function($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || []; //Raro raro, en orden importa en ||

    $scope.$watch('todos', function(){
      localStorageService.set('todos',$scope.todos);
    },true);

    $scope.addTodo = function(){
        $scope.todos.push($scope.todo);
        $scope.todo = '';

    };

    $scope.removeTodo= function(index) {
      $scope.todos.splice(index,1);
    };




  });


