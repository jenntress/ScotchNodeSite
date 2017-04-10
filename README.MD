Create our basic Project
=============
https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet
NODE
----------
- Using note allows us to use javascript on our server.
- Node uses a non-blocking event mode - which makes it run quickly.

Install JSON
------------
1. create the package.json file with npm init
2. change the entry point from index.js to server.js

Install dependencies
------------
1. npm install express --save (add the --save so friends don't have to install it if they download your files). Simplifies all the low-level built-in node modules.

Create our first server
==============
1. import the http module
2. create a function to handle sending request and returning responses
3. create the server (after we handle our request)
4. start the server and listen on a specified port
5. test in browser, go to localhost:8080 (should see "Hello, World!")

Using express and nodemon
====================
1. Use express to start the server (vars: express, app, port)
2. app.listen
3. app.get
4. nodemon (already installed yay!)

Router (Node Directory Structure)
==================
1. Add more routes (in addition to the "get" route)
