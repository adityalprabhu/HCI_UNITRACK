
module.exports = function(mongoose) {

    // use mongoose to declare a TrackingID schema
    var TrackingIDSchema = mongoose.Schema({
        TrackingID : String,
        carrierName: String,
        productName: String,
        category: String,
        isFavorite: String,
        description:String
    }, {collection: 'project.TrackingID'});

    return TrackingIDSchema;
};