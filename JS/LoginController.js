<<<<<<< HEAD
app.controller('loginController', function ($scope, $location, $mdDialog, $mdToast) {

    $scope.formType = { signIn : true };

    $scope.loginDetails = {
        email : "test@test.com",
        password : "test"
    };

    $scope.userDetails = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    };




    $scope.clicked = "";
    $scope.activeClass = "active";
    $scope.signIn1 = function () {
        $scope.formType.signIn = true;

    };

    $scope.signUp = function () {
        $scope.formType.signIn = false;

    };

    $scope.inputType = 'password';

    $scope.showPassword = function () {
        if($scope.inputType == 'password'){
            $scope.inputType = 'text';
        }else{
            $scope.inputType = 'password';
        }
    };

    $scope.submit = function(ev){
        //console.log($scope.userDetails);

        if($scope.formType.signIn == true){
            console.log($scope.userDetails);
            console.log($scope.loginDetails);
            if($scope.userDetails.email == $scope.loginDetails.email &&
                $scope.userDetails.password == $scope.loginDetails.password){
                var last = {
                    bottom: false,
                    top: true,
                    left: false,
                    right: true
                };

                $scope.toastPosition = angular.extend({},last);
                var pinTo = $scope.toastPosition;

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Simple Toast!')
                        .position(pinTo )
                        .hideDelay(3000)
                );
                $location.path("home");
            }else{

                    var confirm = $mdDialog.alert()
                        .title('Invalid Credentials')
                        .textContent('Enter Correct Email & Password Combination')
                        .ariaLabel('TutorialsPoint.com')
                        .targetEvent(event)
                        .ok('OK')
                    $mdDialog.show(confirm).then(function() {
                        $scope.status = 'Record deleted successfully!';
                    }, function() {
                        $scope.status = 'You decided to keep your record.';
                    });

                //alert("INVALID CREDENTIALS");
            }
        }else{
            $scope.loginDetails = {
                email : $scope.userDetails.email,
                password : $scope.userDetails.password
            };
            $scope.formType.signIn = true;
        }

    };

=======
app.controller('loginController', function ($scope, $location, $mdDialog, $mdToast) {

    $scope.formType = { signIn : true };

    $scope.loginDetails = {
        email : "test@test.com",
        password : "test"
    };

    $scope.userDetails = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        showPassword: false
    };




    $scope.clicked = "";
    $scope.activeClass = "active";
    $scope.signIn1 = function () {
        $scope.formType.signIn = true;

    };

    $scope.signUp = function () {
        $scope.formType.signIn = false;

    };

    $scope.inputType = 'password';

    $scope.showPassword = function () {
        if($scope.inputType == 'password'){
            $scope.inputType = 'text';
        }else{
            $scope.inputType = 'password';
        }
    };

    $scope.submit = function(ev){
        //console.log($scope.userDetails);

        if($scope.formType.signIn == true){
            console.log($scope.userDetails);
            console.log($scope.loginDetails);
            if($scope.userDetails.email == $scope.loginDetails.email &&
                $scope.userDetails.password == $scope.loginDetails.password){
                var last = {
                    bottom: false,
                    top: true,
                    left: false,
                    right: true
                };

                $scope.toastPosition = angular.extend({},last);
                var pinTo = $scope.toastPosition;

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Simple Toast!')
                        .position(pinTo )
                        .hideDelay(3000)
                );
                $location.path("home");
            }else{

                    var confirm = $mdDialog.alert()
                        .title('Invalid Credentials')
                        .textContent('Enter Correct Email & Password Combination')
                        .ariaLabel('TutorialsPoint.com')
                        .targetEvent(event)
                        .ok('OK')
                    $mdDialog.show(confirm).then(function() {
                        $scope.status = 'Record deleted successfully!';
                    }, function() {
                        $scope.status = 'You decided to keep your record.';
                    });

                //alert("INVALID CREDENTIALS");
            }
        }else{
            $scope.loginDetails = {
                email : $scope.userDetails.email,
                password : $scope.userDetails.password
            };
            $scope.formType.signIn = true;
        }

    };

>>>>>>> a4d1fc1f903885dbdb05057f38270cc719741308
});