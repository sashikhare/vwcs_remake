
var path = require('path');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('*', function(req, res, next) {
  // res.send(fs.readFileSync(path.resolve(__dirname, '../build/index.html')));
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
