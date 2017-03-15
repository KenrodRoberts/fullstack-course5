(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.html'
    })

    // Categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.html',
      controller: 'CategoriesListController as catList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService){
          return MenuDataService.getAllCategories();
        }] 
     }

    })

    // Items page
    .state('items', {
      url: '/items/{cat}',
      templateUrl: 'src/menuapp/templates/items.html',
      controller: 'ItemsListController as itemsList',
      params: {
        cat: null
      },
      resolve: {
        items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams){
          return MenuDataService.getItemsForCategory($stateParams.cat);
        }]

    }
  });
}

})();