// create module for custom directives
var linkedInProfileApp = angular.module('linkedInProfileApp',[]);

linkedInProfileApp.config(['$routeProvider', '$locationProvider','$httpProvider',
  function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/login', {
          templateUrl : 'templates/login.html'
      })
      .when('/profile', {
          templateUrl : 'templates/profile.html',
          controller : 'profileCtrl'
      })
      .otherwise({
          redirectTo : '/login'
      });
}]);
