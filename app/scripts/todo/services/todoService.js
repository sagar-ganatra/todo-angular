define([
    'ng',
    'servicesModule'
], function (ng, services) {
    services.service('todoService', [
        'localStorageService',
        function (localStorageService) {

            this.getTodoList = function () {
                var todoList = JSON.parse(localStorageService.getItem('todos')) || [];

                for (var i = 0; i < todoList.length; i++) {
                    todoList[i].completeBy = new Date(todoList[i].completeBy);
                }

                return todoList;
            };

            this.addTodo = function (todo) {
                var todoList = this.getTodoList();
                todo.id = new Date().getTime();
                todoList.push(todo);
                localStorageService.setItem('todos', JSON.stringify(todoList));
            };

            this.deleteTodo = function (todo) {
                var todoList = this.getTodoList();
                for (var i = 0; i < todoList.length; i++) {
                    if (todoList[i].id === todo.id) {
                        todoList.splice(i, 1);
                        break;
                    }
                }

                localStorageService.setItem('todos', JSON.stringify(todoList));

                return todoList;

            };

            this.editTodo = function (todo) {
                var todoList = this.getTodoList();
                for (var i = 0; i < todoList.length; i++) {
                    if (todoList[i].id === todo.id) {
                        todoList.splice(i, 1, todo);
                        break;
                    }
                }

                localStorageService.setItem('todos', JSON.stringify(todoList));

                return todoList;
            };

        }
    ]);
});