module.exports = function(app, TrackingIDModel, UserModel){

   app.get("api/unitrack/user/:UserId/tracking", findAllTrackingObjectsOfUser);

   app.post("api/unitrack/user/:UserId/tracking", addTrackingObjectForUser);

   app.delete("/api/unitrack/tracking/:trackingId", deleteTrackingById);

   app.put("/api/unitrack/tracking/:trackingId", updateTrackingForUser);

   app.post("api/unitrack/tracking/Favorite/:TrackingId", FavoriteTracking);

    app.post("api/unitrack/tracking/UnFavorite/:TrackingId", UnFavoriteTracking);



   function findAllTrackingObjectsOfUser(req, res){

        var UserId = req.params.UserId;

       TrackingIDModel.findAllTrackingObjectsOfUser(UserId)
            .then(
                function (doc) {

                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                }
            );
    }




 function addTrackingObjectForUser(req, res){

        var UserId = req.params.UserId;

       var tracking = req.body;

        tracking.createdBy = UserId;
        tracking.createdTime = Date.now();

     TrackingIDModel.createTrackingObject(tracking)
            .then(
                function (doc) {
                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                }
            );
    }


 function deleteTrackingById(req, res){

        var trackingId = req.params.trackingId;

     TrackingIDModel.deleteTrackingById(trackingId)
            .then(
                function (doc) {

                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                }
            );
    }



    function updateTrackingForUser(req, res){

        var trackingId = req.params.trackingId;
        var newTracking = req.body;

        TrackingIDModel.updateTrackingForUser(trackingId, newTracking)
            .then(
                function (doc) {
                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                }
            );
    }


 function FavoriteTracking(req, res) {

        var trackingId = req.params.TrackingId;

     TrackingIDModel.FavoriteTracking(trackingId, true)
            .then(
                function (doc) {
                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                }
            );
    }


 function UnFavoriteTracking(req, res) {

        var trackingId = req.params.TrackingId;

     TrackingIDModel.FavoriteTracking(trackingId, false)
            .then(
                function (doc) {
                    res.json(doc);
                },
                function ( err ) {

                    res.status(400).send(err);
                }
            );
    }


};