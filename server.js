// console.log("YOU GOT IT TO WORK JENN!!"); //smoke test

var express = require('express'); //Require and call the module (tell the app we're using it)
var app     = express ();
var port    = 8080;// Create a new instance of the express module
var router  = require('./app/routes');//Tell our server where to look for our routes.

app.use('/', router); //Tell the server to use the routes file to load any path.
app.use(express.static(__dirname + '/public')); // Tell server where to look for our static files (css, images)

//Start the server. Use "app" which is the express instance that we just created.
app.listen(port, function (){ //Use listen, pass it "port", open a new function.
  console.log('Listening on port 8080 HURRAY!'); //Verify in console.log that the server is lisenting
});
