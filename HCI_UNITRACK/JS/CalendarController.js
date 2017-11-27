app.controller('calendarController', function ($scope, $location) {

    $scope.userName = "John Smith";

    $scope.add = function(){

        $location.path('add');
    };

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.month = m;

    $scope.events = [
        {
            title: 'Shoes Delivery',
            start: new Date(y, m, d-2)
        }
    ];

    var Script = function () {


        /* initialize the calendar
         -----------------------------------------------------------------*/

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next,today',
                center: 'title',
                right: 'month'
            },
            eventLimit: true,
            events: $scope.events
        });


    }();

    $(window).trigger("resize");

});