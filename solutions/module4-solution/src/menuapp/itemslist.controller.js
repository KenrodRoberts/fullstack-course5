(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemsListController',ItemsListController);

ItemsListController.$inject = ['MenuDataService','items'];
function ItemsListController (MenuDataService,items){
	var itemsList = this;

	itemsList.categoryName = "";
	itemsList.items = [];

	if (items.data.menu_items.length > 0){
		itemsList.categoryName = items.data.category.name;
		itemsList.items = items.data.menu_items;
	}

	itemsList.isEmpty = function(){
		if (itemsList.items.length < 1) {
			return true;
		}
	}

}

})();