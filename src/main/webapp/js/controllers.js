(function(){
    var app = angular.module('starter.controllers', []);

    app.factory('todos', [function(){
        var o = {
            posts: []
        };
        return o;
    }]);

    app.controller('MainCtrl', [ '$scope', todos, function($scope, todos){
        /*$scope.todos = [
            {
                task: "herp",
                priority: 10
            },
            {
                task: "derp",
                priority: 9
            },
            {
                task: "foobar",
                priority: 5
            }
        ];*/
        $scope.todos = todos.todos;

        $scope.addToDo = function(){
            if(!$scope.title || $scope.title === '') { return; }
            $scope.todos.push({
                task: $scope.task,
                priority: 0
            });
            $scope.task = '';
        };

        $scope.incrementPriority = function(todo) {
            todo.priority += 1;
        };

        $scope.decrementPriority = function(todo) {
            todo.priority -= 1;
        };
    }]);
})
