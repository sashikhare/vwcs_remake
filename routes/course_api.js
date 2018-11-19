var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'workbench',
  password: 'root',
  database: 'vwcs',
});

con.connect(function(err) {
  if (err) throw err;
});

var express = require('express');
var router = express.Router();

/* GET date listing. */
router.get('/', function(req, res, next) {
  const course_id = req.query.course_id;
  const query =
    `
    SELECT course_id as id,
    course_name as course_name,
    Detail as detail,
    Duration as duration,
    Overview_Para1 as overview_para1,
    Overview_Para2 as overview_para2,
    Overview_Para3 as overview_para3,
    Overview_Para4 as overview_para4,
    Overview_Para5 as overview_para5,
    Overview_Para6 as overview_para6,
    Overview_Para7 as overview_para7,
    INR_Fees as inr_fees,
    USD_Fees as usd_fees,
    GST as gst,
    course_type as course_type,
    total as total from course
    where course_id =` +
    course_id +
    `;
    `;
  con.query(query, function(err, result, fields) {
    res.json({
      result,
      err,
    });
  });
});

module.exports = router;
