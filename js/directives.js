(function() {
  var app = angular.module('listBuy.controllers', []);

  app.directive("ionHeader", function(){
    return {
      restrict: "E",
      templateUrl: "templates/ion-header.html",
      controller: function() {
          this.title="listBuy";
      },
      controllerAs: "header"
    };
  });


  app.directive("ionListItem", function(){
    return {
      restrict: "E",
      templateUrl: "templates/ion-list-item.html",
      controller: function() {
        this.items = [
          {
            "iName":"Gelas",
            "iQuantity":3,
            "iPic":"item-1.jpg"
          },
          {
            "iName":"Piring",
            "iQuantity":3,
            "iPic":"item-2.jpg"
          },
          {
            "iName":"Sendok",
            "iQuantity":3,
            "iPic":"item-3.jpg"
          }
        ];
      },
      controllerAs:"listItem"
    };
  });

  app.directive("ionAddItem", function(){
    return {
      restrict: "E",
      templateUrl: "templates/ion-add-item.html",
      controller: function() {
          this.title="Add Item";
      },
      controllerAs: "addItem"
    };
  });


})();
