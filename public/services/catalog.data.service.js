(function() {
  "use strict";

  angular.module('dapperApp')
    .factory("CatalogDataService", CatalogDataService);

  CatalogDataService.$inject = ["$http"];

  function CatalogDataService($http) {
    var self = this;

    // $http.get('http://localhost:3000/api/collections')
    //   .then(function(response) {
    //     self.catalog = response.data;
    // });
    // return {catalog: self.catalog};

    return {
      catalog: [
        {
          name: "Tops",
          category:   "men",
          collection: "tops",
          permalink:  "shops/men/tops",
          products: [
          {
            imageUrl: "assets/images/tops1.jpeg",
            title: "Koto natural knit",
            price: 89.99,
            description: "This is a hipster sweater",
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/tops2.jpeg",
            title: "Woodsman",
            price: 59.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/tops4.jpeg",
            title: "Vintage Dylan",
            price: 39.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/tops5.jpeg",
            title: "The Jeff",
            price: 29.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/tops3.jpeg",
            title: "Half Dome hoodie",
            price: 59.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/tops7.jpeg",
            title: "Quilted Ramen Lover",
            price: 79.99,
            variants: [{ size: "S" }, { size: "M" }, { size: "L" }]
          }]
        },

        {
          name: "Trousers",
          category:   "men",
          collection: "trousers",
          permalink:  "shops/men/trousers",
          products: [
          {
            imageUrl: "assets/images/trousers1.jpeg",
            title: "The orange peal",
            price: 47.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/trousers2.jpeg",
            title: "Seattle Grunge",
            price: 39.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/trousers3.jpeg",
            title: "The Portland cheese maker",
            price: 79.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/trousers4.jpeg",
            title: "Downtown Chino",
            price: 39.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/trousers5.jpeg",
            title: "Dry Denim",
            price: 49.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/trousers6.jpeg",
            title: "Kool cuffed Denim",
            price: 79.99,
            variants: [{ size: "M" }]

          }]

        },

        {
          name: "Everything Else",
          category:   "men",
          collection: "other",
          permalink:  "shops/men/other",
          products: [
          {
            imageUrl: "assets/images/everything10.jpeg",
            title: "See those pimples - Mini Microscope",
            price: 39.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/everything2.jpeg",
            title: "The Burning Man",
            price: 12.50,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/everything7.jpeg",
            title: "Grannys knitted wallet",
            price: 29.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/everything5.jpeg",
            title: "Mr. Sparkle Socks",
            price: 9.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/everything4.jpeg",
            title: "Come to Jesus Socks",
            price: 9.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/everything1.jpeg",
            title: "Panta Trucker",
            price: 15.99,
            variants: [{ size: "N/A" }]

          }]

          },

          {
          name: "Camping",
          category:   "life",
          collection: "camping",
          permalink:  "shops/men/camping",
          products: [
          {
            imageUrl: "assets/images/camping1.jpeg",
            title: "Mummy Bag",
            price: 89.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/camping2.jpeg",
            title: "Granny Bag",
            price: 59.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/camping3.jpeg",
            title: "Swell Hydration",
            price: 39.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/camping4.jpeg",
            title: "Folding Messenger Tote",
            price: 29.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/camping5.jpeg",
            title: "Hawaiian Lounger",
            price: 59.99,
            variants: [{ size: "M" }]
          },
          {
            imageUrl: "assets/images/camping8.jpeg",
            title: "Hippie Bed",
            price: 79.99,
            variants: [{ size: "M" }]

          }]
          },

          {
          name: "Home",
          category:   "life",
          collection: "home",
          permalink:  "shops/men/home",
          products: [
          {
            imageUrl: "assets/images/home1.jpeg",
            title: "Navajo Throw",
            price: 89.99,
            variants: [{ size: "N/A" }]
          },
          {
            imageUrl: "assets/images/home2.jpeg",
            title: "Modern humidifier",
            price: 59.99,
            variants: [{ size: "" }]
          },
          {
            imageUrl: "assets/images/home3.jpeg",
            title: "Apothecary candle",
            price: 19.99,
            variants: [{ size: "" }]
          },
          {
            imageUrl: "assets/images/home4.jpeg",
            title: "The milk crate",
            price: 29.99,
            variants: [{ size: "" }]
          },
          {
            imageUrl: "assets/images/home5.jpeg",
            title: "Brass hanging planter",
            price: 59.99,
            variants: [{ size: "" }]
          },
          {
            imageUrl: "assets/images/home6.jpeg",
            title: "Angular pendant light",
            price: 179.99,
            variants: [{ size: "" }]

          }]
          },

          {
          name: "Fun",
          category:   "life",
          collection: "fun",
          permalink:  "shops/men/fun",
          products: [
          {
            imageUrl: "assets/images/fun1.jpeg",
            title: "Sweet melons",
            price: 89.99,
            variants: [{ size: "N/A" }]
          },
          {
            imageUrl: "assets/images/fun12.jpeg",
            title: "Magic fingers",
            price: 9.99,
            variants: [{ size: "Have normal hands" }]
          },
          {
            imageUrl: "assets/images/fun11.jpeg",
            title: "Gay Poker",
            price: 12.99,
            variants: [{ size: "N/A" }]
          },
          {
            imageUrl: "assets/images/fun3.jpeg",
            title: "Seattle phone case",
            price: 29.99,
            variants: [{ size: "what phone do you have?" }]
          },
          {
            imageUrl: "assets/images/fun10.jpeg",
            title: "Hillbilly Gee-Tar",
            price: 59.99,
            variants: [{ size: "" }]
          },
          {
            imageUrl: "assets/images/fun6.jpeg",
            title: "THe lonely traveler",
            price: 25.50,
            variants: [{ size: "M" }]

          }]

        }]

    };


  }




})();

