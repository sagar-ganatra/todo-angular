define([
    'ng',
    'jquery',
    'nganimate',
    'ngaria',
    'hammer',
    'ngmaterial',
    'controllersModule',
    'servicesModule',
    'todo/controllers/todoController',
    'todo/controllers/todoDialogController',
    'todo/services/todoService',
    'common/localStorageService'
], function (ng) {
    return ng.module('todoApp', [
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'controllers',
        'services'
    ]);
});