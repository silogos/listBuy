
angular.module('listBuy', ['ionic', 'listBuy.controllers'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('list-index', {
          url: '/index',
          template: '<ion-list-item></ion-list-item>'
        })
        .state('add-index', {
          url: '/addItem',
          template: '<ion-header></ion-header>'
        });

        $urlRouterProvider.otherwise('/index');

    });
