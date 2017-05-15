/// <reference path="../../common.r.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
namespace angularWithTS.Services {   
let forecast: any;
   
    export class weatherService {
        
        private $httpService: ng.IHttpService;
        qService: ng.IQService;
        logService: ng.ILogService;
        http: ng.IHttpService;
        static $inject = ["$http","$log","$q"];
        constructor( $http: ng.IHttpService,
					 $log: ng.ILogService,
					 $q: ng.IQService)
		{
			this.http = $http;
			this.logService = $log;
			this.qService = $q;
		}

        getWeatherInfo(searchLocation): ng.IPromise<{}> {
		var self = this;
        var deferred = this.qService.defer();

        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+searchLocation+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys').then(
            function(response) {
                deferred.resolve(response.data);
            },
            function(errors) {               
                deferred.reject(errors.data);
            }
        );

        return deferred.promise;
        	
	};
    
}
    angular.module("angularWithTS").service("angularWithTS.Services.weatherService", weatherService);
}