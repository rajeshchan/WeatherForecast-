/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module angularWithTS.Interfaces {
    export interface IweatherService {
        getWeatherInfo: (searchLocation:string) => ng.IHttpPromise<{}>;
    }
}