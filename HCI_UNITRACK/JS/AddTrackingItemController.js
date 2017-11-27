app.controller('addItemController', function ($scope, myService, $location) {

    $scope.userName = "John Smith";
    
    
   // $scope.items = myService.get();
    $scope.items  = [];
   
    if(localStorage.getItem('items') != (null||undefined)){
    	 $scope.items = JSON.parse(localStorage.getItem('items'));
    }

    $scope.item ={
        trackingId : "",
        carrierName : "",
        productName : "",
        category : "",
        description : "",
        deliveryDate : "02/22/15",
        status : "Processing"
        
    };



    $scope.addItem = function () {

    	
    	if(localStorage.getItem('items') != (null||undefined)){
       	 $scope.items = JSON.parse(localStorage.getItem('items'));
       }
    	console.log($scope.items);
    	
    	$scope.items.push($scope.item);
    	
        if($scope.items == null){
        	$scope.items = [];
        }
        //myService.set($scope.items);
        localStorage.setItem('items', JSON.stringify($scope.items));
        $location.path("home");
    };

});

