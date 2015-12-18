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
        .state("shop", {
          url: "/shops/:category/:collection",
          templateUrl:  "templates/shop.html",
          controller:   "ShopController",
          controllerAs: "vm",
          resolve: {
            category: function($stateParams) {
              return $stateParams.category;
            },
            collection: function($stateParams) {
              return $stateParams.collection;
            }
          }

        })
        .state("manifest", {
          url: "/manifesto",
          templateUrl: "templates/manifesto.html"
        })
        .state("begood", {
          url: "/begood",
          templateUrl: "templates/begood.html"
        });


    }]);
})();
