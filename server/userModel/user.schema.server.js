
module.exports = function(mongoose) {

    var TrackingIDSchema = require("../TrackingObjectModel/TrackingID.schema.server.js")(mongoose);

    // use mongoose to declare a user schema
    var UserSchema = mongoose.Schema({
        username : String,
        email: String,
        password: String,
        items: [String]

    }, {collection: 'project.user'});

    return UserSchema;
};