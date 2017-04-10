// console.log("YOU GOT IT TO WORK JENN!!"); //smoke test

// ////////////// REGULAR SERVER ///////////////////
// // import the http module
// var http = require('http'); //node uses "require" for pulling the module
//
// // create a function to handle sending request and returning responses
// function handleRequest(req, res){
//   res.end('Hello, World!');//at the end of the event, return a basic response - just logging a string "Hello, World!"
// }
//
// //create the server (after we handle our request)
// var server = http.createServer(handleRequest); //using the http module that we created above.
//
// //start the server and listen on a specified port
// server.listen(8080, function(){ //use the server that we just created
//   console.log('Listening on port 8080 HURRAY!');//console.log to verify that it really is listening
// });


/////////////////////// EXPRESS ///////////////////

var express = require('express'); //require and call the module (tell the app we're using it)
var app = express ();
var port = 8080;// create a new instance of the express module

//Start the server. Use "app" which is the express instance that we just created.
app.listen(port, function (){ //Use listen, pass it "port", open a new function.
  console.log('Listening on port 8080 HURRAY!'); //Verify in console.log that the server is lisenting
});

//Any time a request is made to our homepage, we're going to return a response
app.get('/', function(req, res){
  res.send('Hello, World!');
});
