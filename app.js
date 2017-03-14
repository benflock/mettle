<<<<<<< HEAD
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
//determine port
var arg = process.argv[2] ? Number(process.argv[2]) : 8000;
// var data_store = require('./data_store');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var routes = require('./routes/signin');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(arg, function() {
  console.log('Listening on port ' + arg);
=======
var redis = require('redis');
var redisClient = redis.createClient({host : 'localhost', port : 6379});

redisClient.on('ready', function() {
  console.log("Redis is ready")
});

redisClient.on('error', function() {
  console.log('Error in Redis');
})

redisClient.set("language", "nodejs");

redisClient.get("language",function(err,reply) {
 console.log(err);
 console.log(reply);
>>>>>>> 2b5ae36164fdedcf190c643a55883a164bc8f9b7
});
