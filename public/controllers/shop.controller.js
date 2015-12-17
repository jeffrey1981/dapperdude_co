(function(){
  "use strict";

  angular.module('dapperApp')
    .controller("ShopController", ShopController);

    ShopController.$inject = ['$http', '$filter', 'category', 'collection'];

    function ShopController($http, $filter, category, collection) {
      var vm = this;
      $http.get("http://localhost:3000/api/collections")
        .then(function(response) {
          vm.collections = response.data;
          vm.subMenus = $filter('filter')(vm.collections, {categoryPermalink: category}, true);
          vm.commection = $filter('filter')
        });
    }

})();

