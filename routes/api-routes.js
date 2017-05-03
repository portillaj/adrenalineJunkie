// Routes
// =============================================================
var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/login", function(req, res) {
   	res.render("login");
    // Add sequelize code to find all posts, and return them to the user with res.json
  });

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ user_name: user_name }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));










//   app.post("/testing", function(req, res){
//   	var email = req.body.email_address;
//   		db.User.findAll({}).then(function(results){
//   			console.log(results);
//   			for (var i = 1; i <= results.length; i++) {
//   				if(email === results[i].dataValues.email){
//   					console.log("Email already exists");
//   				}else{
//   					console.log("email created");
//   				}
//   			}
//   		});
// 	  	db.User.create({
// 	  		first_name: req.body.first_name,
// 	  		last_name: req.body.last_name,
// 	  		email: req.body.email_address,
// 	  		password: req.body.password,
// 	  		user_name: req.body.user_name
// 	  	}).then(function(user){
// 	  		res.json("user");	
	 
// 	  	});
// });//end post




// function emailMatch(){
	
// }//end function

};