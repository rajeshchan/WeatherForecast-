/// <reference path="../../common.r.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var controllers;
    (function (controllers) {
        var weatherController = (function () {
            function weatherController(weatherService) {
                var _this = this;
                this.getWeatherInfo = function (searchLocation) {
                    _this.weatherInformation = '';
                    _this.weatherService.getWeatherInfo(searchLocation).then(function (data) {
                        _this.weatherInformation = data;
                    });
                };
                this.weatherService = weatherService;
            }
            return weatherController;
        }());
        weatherController.$inject = ["angularWithTS.Services.weatherService"];
        controllers.weatherController = weatherController;
        ;
        angular.module("angularWithTS").controller("angularWithTS.controllers.weatherController", weatherController);
    })(controllers = angularWithTS.controllers || (angularWithTS.controllers = {}));
})(angularWithTS || (angularWithTS = {}));
