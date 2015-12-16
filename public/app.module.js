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
          controller: "manifestController",
          controllerAs: "vm"
        })
        .state("dogood", {
          url: "/dogood",
          templateUrl: "templates/begood.html",
          controller: "dogoodController",
          controllerAs: "vm"
        })
        .state("theman", {
          url: "/theman",
          templateUrl: "templates/mensshop.html",
          controller: "themanController",
          controllerAs: "vm"
        });
    }]);
})();
