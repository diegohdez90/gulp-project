export function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
  $routeProvider
    .when('/formulario',{
      templateUrl : 'app/form/form.html',
      controller : 'FormController',
      controllerAs : 'form'
    })
    .otherwise({
      redirectTo : '/'
    });

}
