(function() {
  "use strict";

  angular.module('dapperApp')
    .factory("CatalogDataService", CatalogDataService);

  CatalogDataService.$inject = ["$http"];

  function CatalogDataService($http) {
    var self = this;
    $http.get('http://localhost:3000/api/collections')
      .then(function(response) {
        self.catalog = response.data;
    });
    return {catalog: self.catalog};
  }


})();

