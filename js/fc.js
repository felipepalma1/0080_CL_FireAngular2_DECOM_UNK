function _1 ($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'vistas/main.html'
    })

    .when('/publicar', {
      templateUrl: 'vistas/publicar.html',
      controller: 'TrabajoCtrl'
    })

    .when('/editar', {
      templateUrl: 'vistas/editar.html'
    })

    .when('/buscar', {
      templateUrl: 'vistas/buscar.html',
      controller: 'TrabajoCtrl'
    })

    .otherwise({
      redirectTo: '/'
    });
}

/*function _2($scope, FBURL, $firebaseArray)
{
  var ref = new Firebase(FBURL);
  $scope.trabajos = $firebaseArray(ref.child("trabajos"));
  //$scope.titulo = "Se necesita disenhador con experiencia";
  $scope.publicarTrabajo = _3;
}

function _3($trabajo) {
 $scope.trabajos.$add(trabajo);
 console.log(trabajo)
}*/
