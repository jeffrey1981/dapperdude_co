(function(){
  "use strict";

  angular.module('dapperApp')
    .controller("LifeController", LifeController);

    LifeController.$inject = [];

    function LifeController() {
      var vm = this;

      vm.items = [
        {
          title: "shirt",
          price: 14.99
        },
        {
          title: "fancy pants",
          price: 89.99
        },
        {
          title: "leather jacket",
          price: 1000.99
        }
      ];
    }




})();

