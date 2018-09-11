var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "workbench",
    password: "root",
    database: "vwcs"
});

con.connect(function (err) {
    if (err) throw err;


});

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    con.query("SELECT DATE_FORMAT(Course_Start_Date,'%d-%m-%y'),DATE_FORMAT(Course_End_Date,'%d-%m-%y') FROM course_four", function (err, result, fields) {

        res.json({
            result,
            err
        });
    });

})
module.exports = router;
