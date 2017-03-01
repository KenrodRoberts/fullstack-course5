(function () {
'use strict';

angular.module('ShoppingListCheckOffApp',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
	var buyList = this;

	buyList.items = ShoppingListCheckOffService.toBuyItems;
	
	buyList.buyItem = ShoppingListCheckOffService.buyItem;

	buyList.isEmpty = ShoppingListCheckOffService.buyItemsIsEmpty;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtList = this;

	boughtList.items = ShoppingListCheckOffService.boughtItems;

	boughtList.isEmpty = ShoppingListCheckOffService.boughtItemsIsEmpty;

}

function ShoppingListCheckOffService() {
	var service = this;

	service.toBuyItems = [{name: "cookies", quantity: 10 },{ name: "chips", quantity: 5 },{name: "chocolate", quantity: 4}];
   
	service.boughtItems = [];

	

	service.buyItem = function (itemIndex) {

		var item = service.toBuyItems.splice(itemIndex, 1);

		service.boughtItems.push(item[0]);
	};

	service.buyItemsIsEmpty = function () {
		if (service.toBuyItems.length>0){
			return true;
		} else {
			return false;
		}
	};

	service.boughtItemsIsEmpty = function () {
		if (service.boughtItems.length>0){
			return true;
		} else {
			return false;
		}
	};

}

})();