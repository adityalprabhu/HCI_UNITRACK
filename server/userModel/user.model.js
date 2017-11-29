

var q = require("q");

var noUser = {};

module.exports = function(db, mongoose) {

    var UserSchema = require("./user.schema.server.js")(mongoose);
    var User = mongoose.model('ProjectUser', UserSchema);

    var api = {
        findUserByCredentials: findUserByCredentials,
        createUser: createUser,
        findUserById: findUserById,
        deleteUserById: deleteUserById,
        updateUserById: updateUserById,
        getMongooseModel: getMongooseModel,
        findUserByUsername: findUserByUsername
    };

    return api;

    function signUpAlert(){
        console.log("in user model");
    }

    function findUserByUsername(un){

        var deferred = q.defer();

        // find one retrieves one document
        User.findOne(

            // first argument is predicate
            {   username: un },

            // doc is unique instance matches predicate
            function(err, doc) {

                if (err) {
                    // reject promise if error
                    deferred.reject(err);
                } else {
                    // resolve promise
                    deferred.resolve(doc);
                }

            });

        return deferred.promise;
    }

    function findUserByCredentials(credentials){

        var deferred = q.defer();

        // find one retrieves one document
        User.findOne(

            // first argument is predicate
            {   email: credentials.email,
                password: credentials.password },

            // doc is unique instance matches predicate
            function(err, doc) {

                if (err) {
                    // reject promise if error
                    deferred.reject(err);
                } else {
                    // resolve promise
                    deferred.resolve(doc);
                }

            });

        return deferred.promise;
    }


    function updateUserById(userId, user){

        delete user._id;

        return User.update({_id: userId}, {$set: user});
    }


    function findUserById(email){

        var deferred = q.defer();

        User.findById(email, function (err, doc) {

            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });

        return deferred.promise;
    }


    function createUser(user){

        var deferred = q.defer();

        // insert new user with mongoose user model's create()
        User.create(user, function (err, doc) {

            if (err) {
                // reject promise if error
                deferred.reject(err);
            } else {
                // resolve promise
                deferred.resolve(doc);
            }

        });

        // return a promise
        return deferred.promise;
    }


    function deleteUserById(email){

        var deferred = q.defer();

        User.findByIdAndRemove(email, function (err, doc) {

            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });

        return deferred.promise;
    }

    function getMongooseModel() {
        return User;
    }

};