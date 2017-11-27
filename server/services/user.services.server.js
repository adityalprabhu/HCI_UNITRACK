module.exports = function(app, UserModel, TrackingIDModel){

	// Sign Up
  app.post("/api/unitrack/user", createUser);

	// Login
	// Client side for login do finduserbycredentials , then send the user object to login.
  app.post  ("api/unitrack/login", login);

   app.get("/api/unitrack/user/:UserId", findUserById);

  app.get("api/unitrack/users", findUserByCredentials);

  app.put("api/unitrack/user/:UserId", updateUserById);

  app.delete("api/unitrack/user/:UserId", deleteUserById);



  // request: user object as per final user schema. send in request body.
  // response: new user from mongo schema(will have the mongo Id associated with it)

      function createUser(req,res){

        var newUser = req.body;

        UserModel.findUserByUsername(newUser.username)
            .then(

                function(user){

                    if(user) {
                    	// username already exists
                        res.json(null);
                    } else {
						// username does not exists
                        return UserModel.createUser(newUser);
                    }
                },
                function(err){

                    res.status(400).send(err);
                }
            )
            .then(
                function(user){

                    if(user){
                    	// automatcally login after signup
                        req.login(user, function(err) {

                            if(err) {

                                res.status(400).send(err);
                            } else {

                                res.json(user);
                            }
                        });
                    }
                },
                function(err){

                    res.status(400).send(err);
                }
            );

    }


	// Login
  // request: user object which is response of find user by credentials. send in request body.
  // response: user from mongo schema(will have the mongo Id associated with it)

    function login(req, res) {

        var user = req.user;
        
          UserModel
            .findUserById(user._id)
             .then(
                function (doc) {

                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
            });
    }


     // request: userID. send in request params.
  // response: user from mongo schema(will have the mongo Id associated with it)


     function findUserById(req, res) {

        var userId = req.params.UserId;

        var user = UserModel.findUserById(userId)
            .then(
                function (doc) {

                    res.json(doc);
                },

                // send error if promise rejected
                function ( err ) {

                    res.status(400).send(err);
                });

    }

     // request: json object. send in request body.
     //{username: "un",
    // password: "pw"}
  // response: user from mongo schema(will have the mongo Id associated with it)

     function findUserByCredentials(req ,res){

   		var username = req.query.username;
        var password = req.query.password;


            var credentials = {username: username,
                               password: password};



        var user = UserModel.findUserByCredentials(credentials)
            .then(
                function (doc) {

                    req.session.currentUser = doc;
                    res.json(doc);
                },

                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }


 // request: user object(Modified user). send in request body.
 // userID. send in request params.
  // response: updated user from mongo schema(will have the mongo Id associated with it)
      function updateUserById(req,res){
        var userId = req.params.id;
        var user = req.body;

        var updatedUser = UserModel.updateUserById(userId, user)
            .then(
                function (doc) {

                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                });
    }


 // request:  userID. send in request params.
  // response: usually null
    function deleteUserById(req, res){

        var userId = req.params.id;

        user = UserModel.deleteUserById(userId)
            .then(
                function (doc) {

                    res.json(doc);
                },

                // send error if promise rejected
                function ( err ) {

                    res.status(400).send(err);

                }
            );
    }

};