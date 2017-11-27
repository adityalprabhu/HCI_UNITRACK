<<<<<<< HEAD
app.controller('homepageController', function ($scope,myService, $location) {

	$scope.userName = "John Smith";

	/*	$scope.itemName = "Groceries";
	$scope.itemNumber = "1234567890";
	$scope.itemStaus = "Dispatched";
	$scope.itemDate = "22/07/18";*/

	// $scope.items = myService.get();
	$scope.items  = [];
	$scope.cardInfo = [];
	$scope.isHome = true;
	$scope.searchTextEnter ={};

	$scope.setItem = function () {

		if(localStorage.getItem('items') != (null||undefined)){
			$scope.items = JSON.parse(localStorage.getItem('items'));
		}
	};

	$scope.setItem();

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
		/*if(localStorage.getItem('items') != (null||undefined)){
       	 $scope.items = JSON.parse(localStorage.getItem('items'));
       }*/
		console.log($scope.items);

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
		$scope.progress();
	};


	$scope.showCard = function()
	{
		if(localStorage.getItem('items') !=null)
		{
			$scope.cardInfo = JSON.parse(localStorage.getItem('items'));
			$scope.isHome = true;
		}
	}

	$scope.add = function() {
		$scope.isHome = false;
	};

    $scope.showCalendar = function() {
        $location.path('calendar');
    };


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

	$scope.sorts = [
		"Ascending",
		"Descending",
		"Status"
		];

	$scope.filters = [
		"Name",
		"Date",
		"Status"
		];

	$scope.progress = 
		function() {
		var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

		$trigger = $(".trigger").first();
		$points = $(".progress-points").first();
		$point_arr = $(".progress-point");
		$progress = $(".progress").first();

		val = +$points.data("current") - 1;
		max = $point_arr.length - 1;
		tracker = active = 0;

		function activate(index) {
			if (index !== active) {
				active = index;
				var $_active = $point_arr.eq(active);

				$point_arr
				.removeClass("completed active")
				.slice(0, active)
				.addClass("completed");

				$_active.addClass("active");

				return $progress.css("width", index / max * 100 + "%");
			}
		}

		$points.on("click", "li", function(event) {
			var _index;
			_index = $point_arr.index(this);
			tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

			return activate(_index);
		});

		$trigger.on("click", function() {
			return activate(tracker++ % 2 === 0 ? 0 : val);
		});

		setTimeout(function() {
			return activate(val);
		}, 1000);
	}.call(this);


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
	}



});


=======
app.controller('homepageController', function ($scope,myService, $location) {

	$scope.userName = "John Smith";

	/*	$scope.itemName = "Groceries";
	$scope.itemNumber = "1234567890";
	$scope.itemStaus = "Dispatched";
	$scope.itemDate = "22/07/18";*/

	// $scope.items = myService.get();
	$scope.items  = [];
	$scope.cardInfo = [];
	$scope.isHome = true;
	$scope.searchTextEnter ={};

	$scope.setItem = function () {

		if(localStorage.getItem('items') != (null||undefined)){
			$scope.items = JSON.parse(localStorage.getItem('items'));
		}
	};

	$scope.setItem();

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
		/*if(localStorage.getItem('items') != (null||undefined)){
       	 $scope.items = JSON.parse(localStorage.getItem('items'));
       }*/
		console.log($scope.items);

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
		$scope.progress();
	};


	$scope.showCard = function()
	{
		if(localStorage.getItem('items') !=null)
		{
			$scope.cardInfo = JSON.parse(localStorage.getItem('items'));
			$scope.isHome = true;
		}
	}

	$scope.add = function() {
		$scope.isHome = false;
	};

    $scope.showCalendar = function() {
        $location.path('calendar');
    };


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

	$scope.sorts = [
		"Ascending",
		"Descending",
		"Status"
		];

	$scope.filters = [
		"Name",
		"Date",
		"Status"
		];

	$scope.progress = 
		function() {
		var $point_arr, $points, $progress, $trigger, active, max, tracker, val;

		$trigger = $(".trigger").first();
		$points = $(".progress-points").first();
		$point_arr = $(".progress-point");
		$progress = $(".progress").first();

		val = +$points.data("current") - 1;
		max = $point_arr.length - 1;
		tracker = active = 0;

		function activate(index) {
			if (index !== active) {
				active = index;
				var $_active = $point_arr.eq(active);

				$point_arr
				.removeClass("completed active")
				.slice(0, active)
				.addClass("completed");

				$_active.addClass("active");

				return $progress.css("width", index / max * 100 + "%");
			}
		}

		$points.on("click", "li", function(event) {
			var _index;
			_index = $point_arr.index(this);
			tracker = _index === 0 ? 1 : _index === val ? 0 : tracker;

			return activate(_index);
		});

		$trigger.on("click", function() {
			return activate(tracker++ % 2 === 0 ? 0 : val);
		});

		setTimeout(function() {
			return activate(val);
		}, 1000);
	}.call(this);


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
	}



});


>>>>>>> a4d1fc1f903885dbdb05057f38270cc719741308
