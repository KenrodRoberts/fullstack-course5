(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController',LunchCheckerController);


LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope){
    
	$scope.checkQuantity = function () {
		$scope.errorMessage = "";
		console.log("Error: "+$scope.errorMessage);
		console.log("List: "+$scope.menuList);
		if ($scope.menuList!=""){			
			if ($scope.menuList.split(',').length < 4) {
				$scope.errorMessage = "Enjoy!";

			} else {
				$scope.errorMessage = "Too Much!";
			};
		};
		
	};
}


})();