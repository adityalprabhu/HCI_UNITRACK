var express = require('express');
var app = express();
var bodyParser    = require('body-parser');
//var multer        = require('multer');
var uuid = require('node-uuid');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose      = require('mongoose');
var passport = require('passport');



 var   connectionString = 'mongodb://127.0.0.1:27017/HCI_UNITRACK' ;


var db = mongoose.connect(connectionString);


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.PASSPORT_SECRET || "anvita"
}));
app.use(passport.initialize());
app.use(passport.session());

var port =  12717;
app.set('port', (3000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

 require("./server/app.js")(app, uuid, db, mongoose);


app.listen(port, function(){
 console.log("HEllo");
});














