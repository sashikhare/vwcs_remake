var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    	course_id : 1,
	course_date : '2018-09-11'
  });
});

module.exports = router;
