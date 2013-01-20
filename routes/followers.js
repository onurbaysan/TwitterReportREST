var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('reporter', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'winedb' database");
        db.collection('followers', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'followers' collection doesn't exist. Creating it with sample data...");
            } 
        });
    }
});

exports.findByScreenName = function(req, res) {
	var screen_name = req.params.screen_name;
	console.log('Retrieving followers of: ' + screen_name);
    db.collection('followers', function(err, collection) {
        collection.find({"user_name" : screen_name}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('followers', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};