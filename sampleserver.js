////Build a regular server WITHOUT the express module

// import the http module
var http = require('http'); //node uses "require" for pulling the module

// create a function to handle sending request and returning responses
function handleRequest(req, res){
  res.end('Hello, World!');//at the end of the event, return a basic response - just logging a string "Hello, World!"
}

//create the server (after we handle our request)
var server = http.createServer(handleRequest); //using the http module that we created above.

//start the server and listen on a specified port
server.listen(8080, function(){ //use the server that we just created
  console.log('Listening on port 8080 HURRAY!');//console.log to verify that it really is listening
});
