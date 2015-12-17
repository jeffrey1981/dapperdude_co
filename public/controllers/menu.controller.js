(function(){
  "use strict";

  angular.module('dapperApp')
    .controller("MenuController", MenuController);

    MenuController.$inject = ["CatalogDataService"];

    function MenuController(CatalogDataService) {
      var vm = this;
      vm.catalog = CatalogDataService.catalog;

    }




})();
