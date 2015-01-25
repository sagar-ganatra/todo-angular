define([
    'ng',
    'controllersModule'
], function (ng, controllers) {
    controllers.controller('todoController', [
        '$scope',
        '$mdDialog',
        'todoService',
        function ($scope, $mdDialog, todoService) {

            $scope.todoList = todoService.getTodoList();

            $scope.model = {
                task: null,
                completeBy: new Date(),
                severity: 'High',
                completed: false
            };

            $scope.deleteTodo = function (todo) {
                var confirm = $mdDialog.confirm()
                    .content('Do you want to delete this task?')
                    .ok('Yes')
                    .cancel('No');

                $mdDialog.show(confirm).then(function () {
                    $scope.todoList = todoService.deleteTodo(todo);
                });
            };

            $scope.updateTodo = function (todo) {
                $scope.todoList = todoService.editTodo(todo);
            };

            $scope.showTodoDialog = function ($event, todo) {
                $mdDialog.show({
                    targetEvent: $event,
                    templateUrl: 'scripts/todo/partials/todoDialogTemplate.html',
                    controller: 'todoDialogController',
                    locals: {
                        todo: todo,
                        parentScope: $scope
                    }
                });
            };
        }
    ]);
});