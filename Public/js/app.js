angular.module("poke", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: '../views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('pokemon', {
               templateUrl: '../views/pokemon.html',
               controller: 'pokemonCtrl',
               //add id param to url
               url: '/pokemon/:id'
           })
           .state('type', {
               templateUrl: '../views/types.html',
               controller: 'typeCtrl',
               //add type param to the url
               url: '/type/:type'
           });
 });
