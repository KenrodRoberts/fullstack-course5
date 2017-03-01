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

	service.toBuyItems = [{name: "cookies", quantity: 10 },
							{ name: "chips", quantity: 5 },
							{name: "chocolate", quantity: 4},
							{ name: "brownies", quantity: 8 },
							{name: "icecream", quantity: 4}];
   
	service.boughtItems = [];

	

	service.buyItem = function (itemIndex) {

		var item = service.toBuyItems.splice(itemIndex, 1);

		service.boughtItems.push(item[0]);
	};

	service.buyItemsIsEmpty = function () {
		return (service.toBuyItems.length<1)
	};

	service.boughtItemsIsEmpty = function () {
		return (service.boughtItems.length<1)
	};

}

})();