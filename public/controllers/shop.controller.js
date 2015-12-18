(function(){
  "use strict";

  angular.module('dapperApp')
    .controller("ShopController", ShopController);

    ShopController.$inject = ["$stateParams", "CatalogDataService"];

    function ShopController($stateParams, CatalogDataService) {
      var vm = this;

      vm.params = $stateParams;

      vm.data = CatalogDataService;
    }

})();
