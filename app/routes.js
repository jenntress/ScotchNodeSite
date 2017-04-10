var express = require('express'); //Require express to be used.
var router  = express.Router(); //Create our router object to apply all of our routes to "router" instead of the entire application.
var path    = require('path');//Node's little helper that makes creating paths simple for us.


module.exports = router; //Export our router.

router.get('/', function(req, res){ //The "get" route for homepage.
//  res.send('Hello, World!'); //Return this response when someone goes to our homepage. OR...
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res){ //The "get" route for the about page.
  res.send('About me');
});

router.get('/contact', function (req, res){ //The "get" route for the contact page.
  res.send('Contact us');
});

router.post('/contact'); //The "post" route for the contact page.
