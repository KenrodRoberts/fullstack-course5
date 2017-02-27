(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController',LunchCheckerController);


LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope){
    
	$scope.checkQuantity = function () {
		$scope.message = "";
		console.log("Error: "+$scope.message);
		console.log("List: "+$scope.menuList);
		if ($scope.menuList!="" && $scope.menuList!=undefined){			
			if ($scope.menuList.split(',').length < 4) {
				$scope.message = "Enjoy!";

			} else {
				$scope.message = "Too Much!";
			};
		}else{
			$scope.message = "Please enter data first";
		};
		
	};
}


})();