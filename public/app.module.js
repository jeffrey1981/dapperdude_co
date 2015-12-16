(function() {
  "use strict";

  angular
    .module('dapperApp', ["ui.router"])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state("home", {
          url: "/home",
          templateUrl: "templates/home.html",
          controller: "HomeController",
          controllerAs: "vm"
        })
        .state("life", {
          url: "/life",
          templateUrl: "templates/lifestyle.html",
          controller: "LifeController",
          controllerAs: "vm"
        })
        .state("manifest", {
          url: "/manifesto",
          templateUrl: "templates/manifesto.html",
          controller: "ManifestController",
          controllerAs: "vm"
        })
        .state("begood", {
          url: "/begood",
          templateUrl: "templates/begood.html",
          controller: "BegoodController",
          controllerAs: "vm"
        })
        .state("theman", {
          url: "/theman",
          templateUrl: "templates/mensshop.html",
          controller: "ThemanController",
          controllerAs: "vm"
        });
    }]);
})();
