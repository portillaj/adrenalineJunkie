// Routes
// =============================================================
var db = require("../models");
//var valid = require("./public/assets/js/signup.js");
module.exports = function(app) {
  // GET route for getting all of the posts
 
//sign up page
//grab the data from the form fields (.ToLowerCase() every entry)
  //first and last name required
    //if left blank, tell the user to enter something
  //email required
    //if left blank, tell the user to enter something
    //make sure that email address is not already in use in database
  //username required
    //if left blank, tell the user to enter something
    //make sure that user name is not already in use in database
  //password is required
    //if left blank, tell the user to enter a password (must be at least 7 characters)

//login page
//make sure user name matches the password associated with user

  app.post("/testing", function(req, res){
	  	db.User.create({
	  		first_name: req.body.first_name,
	  		last_name: req.body.last_name,
	  		email: req.body.email_address,
	  		password: req.body.pass,
	  		user_name: req.body.user_name
	  	}).then(function(user){
	  		res.json("user");	
	 
	  	});
});//end post

app.post("/profile", function(req,res){
  db.User.findAll({
    where: {
      user_name: req.body.login_user,
      password: req.body.login_pass
    }
  }).then(function(results){
    console.log(results);
    res.json(results);

  });
});//end app.get profile




// function emailMatch(){
	
// }//end function

};