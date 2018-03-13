

var express = require('express'),
  app = express(),
  port = process.env.PORT || 80,

 routes = require('./api/routes/resumetestRoutes'); //importing route
routes(app); //register the route


app.listen(port);

