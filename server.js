

var express = require('express'),
  app = express(),
  port = process.env.PORT || 80,
 // mongoose = require('mongoose'),
 // Question = require('./api/models/resumetestModel'), //created model loading here
 // bodyParser = require('body-parser');
  
// mongoose instance connection url connection
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Questiondb'); 


//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


const routes = require('./api/routes/resumetestRoutes'); //importing route
routes(app); //register the route


app.listen(port);

