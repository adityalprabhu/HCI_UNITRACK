<<<<<<< HEAD
var TaskList = function () {

    return {

        initTaskWidget: function () {
			$('input.list-child').change(function() {
				if ($(this).is(':checked')) { 
					$(this).parents('li').addClass("task-done"); 
				} else { 
					$(this).parents('li').removeClass("task-done"); 
				}
			}); 
        }

    };

=======
var TaskList = function () {

    return {

        initTaskWidget: function () {
			$('input.list-child').change(function() {
				if ($(this).is(':checked')) { 
					$(this).parents('li').addClass("task-done"); 
				} else { 
					$(this).parents('li').removeClass("task-done"); 
				}
			}); 
        }

    };

>>>>>>> a4d1fc1f903885dbdb05057f38270cc719741308
}();