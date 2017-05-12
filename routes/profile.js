//our npm packages
var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var mime = require('mime');
var db = require("../models");

//route of profile section
router.get("/profile", function(req, res) {
  
        res.sendFile(path.join(__dirname, "/../public/profilepage.html"));
    
  });

//store multer diskstorage in storage variable where you want the files to be uploaded to
//in this case we want all of the files uploaded into uploads folder
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    //grabs the file name and mime package will update the extension for us to whatever file it is
    cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));
  }
});
 
//store the mullter storeage into upload variable
var upload = multer({ storage: storage });

//our post where we would upload our photo and video
router.post('/upload', upload.single('photos'), function(req,res){
  console.log(req.body); //form fields
  /* example output:
  { title: 'abc' }
   */
  console.log(req.file); //form files
  /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
   */
   var getPath = req.file.path;
   db.User.update({
    picture: getPath,
    }, {
    where: {
      id: 1
  }
   }).then(function(results){
       res.redirect("/profile");
   });
 
});

//export our router to the app.js file to run the app
module.exports = router;

