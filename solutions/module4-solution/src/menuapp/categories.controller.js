(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController',CategoriesListController);

CategoriesListController.$inject = ['MenuDataService','categories'];
function CategoriesListController (MenuDataService,categories){
	var catList = this;
	catList.categories = categories.data;
}

})();