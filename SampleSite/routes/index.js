var express = require('express');
var router = express.Router();
var sampleSite = require('../Model/sampleSite.model');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Post home page. */

router.post('/', function (req, res, next) {

  var newobj = new sampleSite(req.body);

  newobj.save(

    function (err, data) {

      if (err) return console.error(err);

      console.log("success")

      res.status(200).json({"status":"success"})


    }

  )


});

/* GET API call. */
router.get('/hello', function (req, res, next) {

  sampleSite.find({}, function (err, results) {

    if (err) {

      res.status(403).json({ msg: "its too bad", err })

    }

    else {

      res.status(200).json({ msg: "user record fetched successfully", data: results })

    }

  })

});


module.exports = router;
