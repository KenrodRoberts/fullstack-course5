(function(){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var narrowList = this;

	// narrowList.found = [];
    narrowList.searchTerm = "";


	narrowList.narrowItDown = function(){

		var promise = MenuSearchService.getMatchedMenuItems(narrowList.searchTerm);
		
		promise.then(function(response){
			
			narrowList.found = response;
			// console.log(response);
		});


	};
	
	narrowList.removeItem = function(index){
		narrowList.found.splice(index,1);
	};

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;

	service.getMatchedMenuItems = function (searchTerm){

		return $http({
			method: "GET",
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function (result) {
	    		// process result and only keep items that match
	    		var foundItems = [];
	    		var menuItems = result.data.menu_items;
			    
			    if (searchTerm==''){
			    	return foundItems;
			    }

			    for (var i=0; i<menuItems.length; i++){
			    	if (menuItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1){
			    		foundItems.push(menuItems[i]);
			    	}
			     }

			    return foundItems;
			});

	};

}

function FoundItemsDirective(){
	var ddo = {
		templateUrl: 'foundItems.html',
		restrict: 'E',
		scope:{
			foundItems: '<foundItems',
			onRemove: '&onRemove',
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'list',
		bindToController: true
	};

	return ddo;
}

function FoundItemsDirectiveController (){
	var list = this;

	list.isEmpty = function(){
		return (list.foundItems && (list.foundItems.length==0));
	};
}

})();