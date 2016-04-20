// create the module and name it app
    var app = angular.module('app', ['ngRoute']);
	var key = 'i5qmRRLvtKzATW37IFnitzVOeFLt2w3D';
	// configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
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
        $scope.message = 'Everyone come and see how good I look!';
    });
	
	app.controller('pigeonsController', function($scope, $http) {
		$http({
			method: 'GET',
			url: 'https://api.mlab.com/api/1/databases/pigeons/collections/DuivenEme?apiKey='+key
		}).then(function (response) {
			console.log(response.data);
			$scope.pigeons = response.data;
		}, function errorCallback(response) {
			
			console.log(response);
		});
    });