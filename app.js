var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })
  
  
  
  .when('/contact', {
    templateUrl : 'pages/contact.html',
    controller  : 'ContactController'
  })
  
  
  
  

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController  nternational Journal of Basic & Clinical Pharmacology (Int J Basic Clin Pharmacol; Print ISSN: 2319-2003; Online ISSN: 2279-0780) publishes important advances in pharmacology that include basic and clinical studies of all aspects of pharmacology in human, animal and cell-line studies. The journal also accepts articles on traditional medicine. The journal has a broad coverage of relevant topics across pharmacology including ethics';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});



app.controller('ContactController', function($scope) {
  $scope.message = 'Hello from ContactController';
});
