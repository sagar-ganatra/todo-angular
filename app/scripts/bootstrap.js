define([
    'ng',
    'app',
    'jquery'
], function (ng, app, $) {
    $(document).ready(function () {
        ng.bootstrap($('body'), ['todoApp']);
    });
});