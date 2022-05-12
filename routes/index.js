var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/how-to-solve', function(req, res, next) {
  res.render('how-to-solve', { title: 'Express' });
});

module.exports = router;
