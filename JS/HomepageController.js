app.controller('homepageController', function ($scope,myService,$location) {

	$scope.userName = "John Smith";
	
	
	$scope.filterConds = [
        { category: 'carName', name: 'UPS' },
        { category: 'carName', name: 'USPS' },
        { category: 'carName', name: 'Amazon' },
        { category: 'carName', name: 'FedEx' },
        { category: 'carName', name: 'DHL' },
        { category: 'status', name: 'Ordered' },
        { category: 'status', name: 'Packed' },
        { category: 'status', name: 'Shipped' },
        { category: 'status', name: 'Delivered' }
      ];
	
	//$scope.filterCondOptions = {};
	$scope.filterCondOptions = { option: '' };
	$scope.sortCondOptions = { option: '' };
	
	$scope.resetOptions = function () {
		$scope.filterCondOptions = { option: '' };
		$scope.sortCondOptions = { option: '' };
		
	};
	

	$scope.items  = [];
	$scope.cardInfo = [];
	$scope.cardInfoPerm =[];
	$scope.isHome = true;
	$scope.searchTextEnter ={};
	$scope.ordered = false;
	$scope.ordered_a = false;
	$scope.packed = false;
	$scope.packed_a = false;
	$scope.shipped = false;
	$scope.shipped_a = false;
	$scope.delivered = false;
	$scope.delivered_a = false;

	$scope.setItem = function () {

		if(localStorage.getItem('items') != (null||undefined)){
			$scope.items = JSON.parse(localStorage.getItem('items'));
		}
	};

	$scope.setItem();
	
	var statusArray = [
	    'Ordered',
	    'Packed',
	    'Shipped',
	    'Delivered'
	];
	

	$scope.logout = function(){
        $location.path("/");
	};

	$scope.item ={
			trackingId : "",
			carrierName : "",
			productName : "",
			category : "",
			description : "",
			deliveryDate : formatDate(randomDate()),
			status : "",
			ordered : "",
			orderedA : "",
			packed : "",
			packedA : "",
			shipped : "",
			shippedA : "",
			delivered : "",
			deliveredA : ""

	};
	
	$scope.searchCard = function (args) {

			var name = args;
			$scope.cardInfo = $scope.cardInfoPerm;
			if(args.length!=0 || args==undefined)
				{
				var res = $.grep($scope.cardInfo, function(v) {
					return ((name.indexOf(v.carrierName) > -1) || (name.indexOf(v.status) > -1));
				});
				$scope.cardInfo = res;
				}
			$scope.clickedFilter = false;

	};
	
	$scope.addItem = function () {
		console.log($scope.items);
		
		var randomNumber = Math.floor(Math.random()*statusArray.length);

		$scope.item.status = statusArray[randomNumber];
		
		$scope.item.deliveryDate = formatDate(randomDate());
		if($scope.item.status == "Ordered")
		{
			$scope.item.ordered = false;
			$scope.item.orderedA = true;
			$scope.item.packed = false;
			$scope.item.packedA = false;
			$scope.item.shipped = false;
			$scope.item.shippedA = false;
			$scope.item.delivered = false;
			$scope.item.deliveredA = false;
		}
		if($scope.item.status == "Packed")
		{
			$scope.item.ordered = true;
			$scope.item.orderedA = false;
			$scope.item.packed = false;
			$scope.item.packedA = true;
			$scope.item.shipped = false;
			$scope.item.shippedA = false;
			$scope.item.delivered = false;
			$scope.item.deliveredA = false;
		}
		if($scope.item.status == "Shipped")
		{
			$scope.item.ordered = true;
			$scope.item.orderedA = false;
			$scope.item.packed = true;
			$scope.item.packedA = false;
			$scope.item.shipped = false;
			$scope.item.shippedA = true;
			$scope.item.delivered = false;
			$scope.item.deliveredA = false;
		}
		if($scope.item.status == "Delivered")
		{
			$scope.item.ordered = true;
			$scope.item.orderedA = false;
			$scope.item.packed = true;
			$scope.item.packedA = false;
			$scope.item.shipped = true;
			$scope.item.shippedA = false;
			$scope.item.delivered = true;
			$scope.item.deliveredA = false;
		}

		$scope.items.push($scope.item);

		if($scope.items == null){
			$scope.items = [];
		}
		//myService.set($scope.items);
		localStorage.setItem('items', JSON.stringify($scope.items));
		//$location.path("home");
		$scope.isHome = true;
		$scope.setItem();
		$scope.showCard();
		//$scope.progress();
	};


	$scope.showCard = function()
	{
		if(localStorage.getItem('items') !=null)
		{
			$scope.cardInfo = JSON.parse(localStorage.getItem('items'));
			$scope.isHome = true;
			$scope.cardInfoPerm = $scope.cardInfo;
			//$(".progress-tracker li:nth-child(1)").removeClass('is-complete');
		}
	}

	$scope.add = function() {
		$scope.isHome = false;
	}
	
	
	$scope.sortingCriteria = [
        "Date",
        "Carrier Name"
    ];
	
/*	function custom_sort(a, b) {
	    return new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime();
	}*/

	/*$scope.sorting = function(args) {
		if(args=='Date')
		$scope.cardInfo.sort(custom_sort);
	
	}*/
	
	//$scope.cardInfo = myService.get();

	/*	
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function() {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	$('#serachText').on('click', function(e){
		  e.preventDefault();
		  $(this).css('border-color', 'transparent');
		});
	 */

/*	$scope.sorts = [
		"Ascending",
		"Descending",
		"Status"
		];
*/
	$scope.filters = [
		"Name",
		"Date",
		"Status"
		];

	// Define the tour!
	var tour = {
			id: "hello-hopscotch",
			steps: [
				{
					title: "Unitrack",
					content: "This application lets you track yur packages easily.",
					target: "unitrack_logo_size",
					placement: "bottom"
				},
				{
					title: "Add",
					content: "This lets you add ypur packages to the website.",
					target: "addIcon",
					placement: "bottom"
				},
				{
					title: "History",
					content: "This shows you history of deleted and cancelled items.",
					target: "historyIcon",
					placement: "bottom"
				}
//				{
//					title: "Calendar",
//					content: "This shows you the calendar events.",
//					target: "calendarIcon",
//					placement: "bottom"
//				},
//				{
//					title: "Logout",
//					content: "This will log you out of the application",
//					target: "logoutIcon",
//					placement: "bottom"
//				},
//				{
//					title: "Search",
//					content: "This will let you search your items in the dashboard.",
//					target: "searchBar",
//					placement: "bottom"
//				},
//				{
//					title: "Cards",
//					content: "These are the list of items added.",
//					target: "cards",
//					placement: "top"
//				},
//				{
//					title: "Sort",
//					content: "This will sort your result",
//					target: "sort",
//					placement: "left"
//				},
//				{
//					title: "Filter",
//					content: "This will filter your result.",
//					target: "filter",
//					placement: "left"
//				}
				
				]
	};

	$scope.tour = function()
	{
		// Start the tour!
		hopscotch.startTour(tour);
	};

	$scope.cc="";
	

$(function () {
	  var btn = $('.search-button'),
	  val_length;
	  $('input').keyup(function () {
	    val_length = $(this).val().length;
	    if ( val_length > 0 ) {
	      btn.addClass('typed');
	    } else {
	      btn.removeClass('typed');
	    }
	  });
	  btn.click(function () {
	    if ( val_length > 0 ) {
	      $('input').val('').trigger('keyup').focus();
	    }
	  })
	});

function randomDate(){
	   var startDate = new Date(2016,0,1).getTime();
	   var endDate =  new Date(2020,0,1).getTime();
	   var spaces = (endDate - startDate);
	   var timestamp = Math.round(Math.random() * spaces);
	   timestamp += startDate;
	   return new Date(timestamp);
	}
	function formatDate(date){
	    var month = randomDate().getMonth();
	    var day = randomDate().getDate();

	    month = month < 10 ? '0' + month : month;
	    day = day < 10 ? '0' + day : day;

	    return String(date.getFullYear()) + "/" + month + "/"+ day;
	}

});


