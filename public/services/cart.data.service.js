(function(){
  "use strict";

  angular.module('dapperApp')
    .factory("CartDataService", CartDataService);

  CartDataService.$inject = ["$window"];

  function CartDataService($window) {
    var self = this;
    self.list = [];
    deserialize();
    return {
      add: add,
      remove: remove,
      list: self.list
    };

    function add(item) {
      self.list.push(item);
        serialize();
    }

    function remove(item) {
      self.list = self.list.filter(function(filteredItem) {
        return filteredItem._id != item._id;
      });
      serialize();
    }

    function serialize() {
      $window.localStorage.setItem("dapperCart", angular.toJson(self.list));
    }

    function deserialize() {
      var storedList = $window.localStorage.getItem("dapperCart");
        if(storedList) {
          self.list = angular.fromJson(storedList);
        }
      }

    }

})();
