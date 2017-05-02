var express = require('express');
var methodOverride = require('method-override');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

// // Requiring our models for syncing
// var db = require("./models");

  app.listen(process.env.port || 3000, function() {
    console.log("App listening on PORT " + port);
  });



