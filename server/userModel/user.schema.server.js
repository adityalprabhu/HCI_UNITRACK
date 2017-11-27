
module.exports = function(mongoose) {

    var TrackingIDSchema = require("../TrackingObjectModel/TrackingID.schema.server.js")(mongoose);

    // use mongoose to declare a user schema
    var UserSchema = mongoose.Schema({
        firstName : String,
        lastName: String,
        email: String,
        password: String,
        gender: String,
        items:   {
            id:    [String]
        }
    }, {collection: 'project.user'});

    return UserSchema;
};