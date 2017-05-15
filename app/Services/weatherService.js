/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var angularWithTS;
(function (angularWithTS) {
    var Services;
    (function (Services) {
        var forecast;
        var weatherService = (function () {
            function weatherService($http, $log, $q) {
                this.http = $http;
                this.logService = $log;
                this.qService = $q;
            }
            weatherService.prototype.getWeatherInfo = function (searchLocation) {
                var self = this;
                var deferred = this.qService.defer();
                this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + searchLocation + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(function (response) {
                    deferred.resolve(response.data);
                }, function (errors) {
                    deferred.reject(errors.data);
                });
                return deferred.promise;
            };
            ;
            return weatherService;
        }());
        weatherService.$inject = ["$http", "$log", "$q"];
        Services.weatherService = weatherService;
        angular.module("angularWithTS").service("angularWithTS.Services.weatherService", weatherService);
    })(Services = angularWithTS.Services || (angularWithTS.Services = {}));
})(angularWithTS || (angularWithTS = {}));
