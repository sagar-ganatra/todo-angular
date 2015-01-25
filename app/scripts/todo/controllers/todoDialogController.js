define([
    'ng',
    'controllersModule'
], function (ng, controllers) {
    controllers.controller('todoDialogController', [
        '$scope',
        '$mdDialog',
        'todoService',
        'todo',
        'parentScope',
        function ($scope, $mdDialog, todoService, todo, parentScope) {
            $scope.model = ng.copy(todo) || ng.copy(parentScope.model);

            $scope.saveTodo = function () {
                //add todo if model.id not present
                if ($scope.todoForm.$valid && !$scope.model.id) {
                    parentScope.todoList.push($scope.model);
                    todoService.addTodo($scope.model);
                    $scope.closeDialog();
                } else if ($scope.todoForm.$valid && $scope.model.id) { //if model.id is present edit the todo
                    parentScope.todoList = todoService.editTodo($scope.model);
                    $scope.closeDialog();
                }
            };

            $scope.closeDialog = function () {
                $mdDialog.hide();
            };
        }
    ]);
});