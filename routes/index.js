var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//For any other get request to render need the full path or request
router.get('/about/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/play-game/play-game.html', function(req, res, next) {
  res.render('play-game', { title: 'Play Game' });
});

router.get('/how-to-play/how-to-play.html', function(req, res, next) {
  res.render('how-to-play', { title: 'How to Play' });
});

router.get('/leaderboard/leaderboard.html', function(req, res, next) {
  res.render('leaderboard', { title: 'Leaderboard' });
});

router.get('algorithms/algorithms.html', function(req, res, next) {
  res.render('algorithms', { title: 'Algorithms' });
});

module.exports = router;
