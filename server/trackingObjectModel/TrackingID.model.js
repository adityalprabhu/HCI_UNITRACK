
"use strict";

//var TrackingID = require("./TrackingID.mock.json");
var q = require("q");

module.exports = function(db, mongoose, UserModel)
{

    var TrackingIDSchema = require("./TrackingID.schema.server.js")(mongoose);
    var TrackingID = mongoose.model('TrackingID', TrackingIDSchema);

    var User = UserModel.getMongooseModel();
    var api = {

        deleteItemById: deleteItemById,
        //see comment below
        //findAllItemsForUser: findAllItemsForUser,
        findItemById: findItemById,
        updateItemById: updateItemById,
        createItem: createItem
    };

    return api;

    function deleteItemById(TrackingID){

        return Note.findByIdAndRemove(TrackingID);
    }

//i feel this should be in User schema but i could be wrong.
// this is because there is no field in TrackingiD schema to show which
//user it belongs to. or there will be a need to change the schema a bit

    // function findAllItemsForUser(email){
    // }

    function findItemById(TrackingID){

        return TrackingID.findById(TrackingID);
    }

    function updateItemById(TrackingID, newItem){

        return TrackingID.findByIdAndUpdate(TrackingID, newItem);
    }

    function createItem(newItem){

        return TrackingID.create(newItem);

    }

    function getMongooseModel() {

        return TrackingID
    }
};
