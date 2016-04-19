// create the module and name it app
    var app = angular.module('app', ['ngRoute']);

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

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
	
	app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });