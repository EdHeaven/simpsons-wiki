var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Гомера Симсона*/
router.get('/Homer_Simson', function(req, res, next) {
  res.send("<h1>Страница Гомера Симсона</h1>")
});

/* Страница Мардж Симсона*/
router.get('/Marge_Simson', function(req, res, next) {
  res.send("<h1>Страница Мардж Симсона</h1>")
});

/* Страница Барта Симсона*/
router.get('/Bart_Simson', function(req, res, next) {
  res.send("<h1>Страница Барта Симсона</h1>")
});

/* Страница Лисы Симсона*/
router.get('/Lisa_Simson', function(req, res, next) {
  res.send("<h1>Страница Лисы Симсона</h1>")
});

/* Страница Мегги Симсона*/
router.get('/Maggie_Simson', function(req, res, next) {
  res.send("<h1>Страница Мегги Симсона</h1>")
});

module.exports = router;