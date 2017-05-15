/// <reference path="../../common.r.ts" />
/// <reference path="../interfaces/interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />

module angularWithTS.controllers {

    export class weatherController {
        
        public weatherInformation: any;
        weatherService: angularWithTS.Interfaces.IweatherService;
        static $inject = ["angularWithTS.Services.weatherService"];
        constructor(weatherService: angularWithTS.Interfaces.IweatherService) {

            this.weatherService = weatherService;
        }

        public getWeatherInfo = (searchLocation: string) => {
            this.weatherInformation = '';
            this.weatherService.getWeatherInfo(searchLocation).then((data) => {
                this.weatherInformation = data;
            });
        }
    };

    angular.module("angularWithTS").controller("angularWithTS.controllers.weatherController", weatherController);
}
