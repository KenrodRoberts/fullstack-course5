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

	buyList.buyItem = function(itemIndex) {
		console.log("Yes")
		ShoppingListCheckOffService.buyItem(itemIndex);
	}


}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
	var boughtList = this;

	boughtList.items = ShoppingListCheckOffService.boughtItems;

}

function ShoppingListCheckOffService() {
	var service = this;

	service.toBuyItems = [{name: "cookies", quantity: 10 },{ name: "chips", quantity: 5 },{name: "chocolate", quantity: 4}];
   
	service.boughtItems = [];

	service.buyItem = function (itemIndex) {
		var item = service.toBuyItems.splice(itemIndex, 1);

		console.log(item);

		service.boughtItems.push(item);
	};

}

})();