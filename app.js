var express = require('express');
var methodOverride = require('method-override');
var app = express();
var db = require("./models");

var port = 3000;
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/api-routes");
var profile = require("./routes/profile");

app.use("/", routes);
app.use("/", profile);

// // Requiring our models for syncing
 db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});