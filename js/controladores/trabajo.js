'use strict'

app.controller("TrabajoCtrl", function ($scope, FBURL, $firebaseArray){

  var ref = new Firebase(FBURL);
  $scope.trabajos = $firebaseArray(ref.child("trabajos"));

  $scope.publicarTrabajo = function (trabajo){
    $scope.trabajos.$add(trabajo)
    console.log(trabajo);
  }

});
