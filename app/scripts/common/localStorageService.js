define([
    'ng',
    'servicesModule'
], function (ng, services) {
    services.service('localStorageService', [
        '$window',
        function ($window) {

            this.getItem = function (key) {
                return $window.localStorage.getItem(key);
            };

            this.setItem = function (key, value) {
                $window.localStorage.setItem(key, value);
            };
        }
    ]);
});