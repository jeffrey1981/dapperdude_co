(function(){
  "use strict";

  angular.module('dapperApp')
    .controller("HomeController", HomeController);

    HomeController.$inject = [];

    function HomeController() {
      var vm = this;

      vm.test = "howdy";
    }




})();
