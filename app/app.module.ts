/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../common.r.ts" />
module angularWithTS {
var app = angular.module("angularWithTS", ['ngRoute']);
app.config(angularWithTS.Routes.configureRoutes); 
}