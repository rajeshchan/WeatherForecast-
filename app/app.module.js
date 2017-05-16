/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../common.r.ts" />
var angularWithTS;
(function (angularWithTS) {
    var app = angular.module("angularWithTS", ['ngRoute']);
    app.config(angularWithTS.Routes.configureRoutes);
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=app.module.js.map