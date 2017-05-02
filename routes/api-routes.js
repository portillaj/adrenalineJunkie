// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/login", function(req, res) {
   	res.render("login");
    // Add sequelize code to find all posts, and return them to the user with res.json
  });

};