var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');


router.get("/testing", function(req, res) {
    console.log("working profile");
    res.sendFile(path.join(__dirname, "/../public/test.html"));
    
  });


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
 
var upload = multer({ storage: storage });

router.post('/upload', upload.single('pic'), function(req,res){
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
   res.json("uploaded");
  res.status(204).end();
});


module.exports = router;
