'use strict'

var ngModules = [ 'ngAnimate', 'ngResource', 'ngRoute', 'firebase']

var app = angular.module("FireJobApp", ngModules)
  .constant('FBURL', 'https://fireangular2.firebaseio.com/')
  .config(_1);
