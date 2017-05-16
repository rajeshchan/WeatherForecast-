/// <reference path="../common.r.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "angularWithTS.controllers.weatherController",
                templateUrl: "/app/views/weatherInformation.html",
                controllerAs: "weatherInformationList"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        return Routes;
    }());
    Routes.$inject = ["$routeProvider"];
    angularWithTS.Routes = Routes;
})(angularWithTS || (angularWithTS = {}));
//# sourceMappingURL=app.routes.js.map