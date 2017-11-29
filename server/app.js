module.exports = function(app, uuid, db, mongoose) {

    //Models
    var UserModel = require("./userModel/user.model.js")(db, mongoose);
    var TrackingIDModel   = require("./trackingObjectModel/TrackingID.model.js")(db, mongoose, UserModel);



    //Services

    var UserService = require("./services/tracking.services.server.js")(app, UserModel, TrackingIDModel, uuid);

    var TrackingIDService = require("./services/user.services.server.js")(app, TrackingIDModel, UserModel, uuid);

};