app.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when("/Home",{
      templateUrl: './views/Home.html'
      ,control: ''
    }).
    otherwise({
      redirectTo: '/Home'
    });
}]);
