// create the module and name it app
    var app = angular.module('app', ['ngRoute']);
	var key = 'i5qmRRLvtKzATW37IFnitzVOeFLt2w3D';
	
	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })
			
			.when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })

            // route for the pigeons page
            .when('/pigeons', {
                templateUrl : 'pages/pigeons.html',
                controller  : 'pigeonsController'
            })
			
			// route for the photos page
            .when('/photos', {
                templateUrl : 'pages/photos.html',
                controller  : 'photosController'
            })
			
			// route for the articles page
            .when('/articles', {
                templateUrl : 'pages/articles.html',
                controller  : 'articlesController'
            })
			
			// route for the prestations page
            .when('/prestations', {
                templateUrl : 'pages/prestations.html',
                controller  : 'prestationsController'
            })
			
			// route for the testimonials page
            .when('/testimonials', {
                templateUrl : 'pages/testimonials.html',
                controller  : 'testimonialsController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });
	
    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
		
    });
	
	app.controller('homeController', function($scope, $http, $rootScope) {
		if(!$rootScope.pigeons){
			$scope.busy=true;
			$http({
				method: 'GET',
				url: 'https://api.mlab.com/api/1/databases/pigeons/collections/DuivenEme?apiKey='+key
			}).then(function (response) {
				$scope.busy=false;
				$rootScope.pigeons = response.data;
				
				$scope.image=$rootScope.pigeons[0].image;
				$scope.text=$rootScope.pigeons[0].text;
			}, function errorCallback(response) {
				$scope.busy=false;
				console.log(response);
			});
		}else{
			$scope.image=$rootScope.pigeons[0].image;
			$scope.text=$rootScope.pigeons[0].text;
		}
    });
	
	app.controller('pigeonsController', function($scope, $http,$rootScope) {
		if(!$rootScope.pigeons){
			$scope.busy=true;
			$http({
				method: 'GET',
				url: 'https://api.mlab.com/api/1/databases/pigeons/collections/DuivenEme?apiKey='+key
			}).then(function (response) {
				$scope.busy=false;
				console.log(response.data);
				$scope.pigeons = response.data;
				$rootScope.pigeons = response.data;
			}, function errorCallback(response) {
				$scope.busy=false;
				console.log(response);
			});
		}
    });
	
	app.controller('photosController', function($scope) {
	
    });
	
	app.controller('articlesController', function($scope) {
	
    });
	
	app.controller('prestationsController', function($scope) {
	
    });
	
	app.controller('testimonialsController', function($scope) {
	
    });
	
	app.controller('contactController', function($scope) {
	
    });