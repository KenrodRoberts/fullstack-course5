(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController',LunchCheckerController);


LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope){
    
	$scope.checkQuantity = function () {
		$scope.message = "";
		$scope.messageStyle="";

		if ($scope.menuList){			
			if ($scope.menuList.split(',').length < 4) {
				$scope.message = "Enjoy!";
				$scope.messageStyle="greenMessage";

			} else {
				$scope.message = "Too Much!";
				$scope.messageStyle="greenMessage";
			};
		}else{
			$scope.message = "Please enter data first";
			$scope.messageStyle="redMessage";
		};
		
	};
}

})();