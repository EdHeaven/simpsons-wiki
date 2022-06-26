var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маошрутов, начинающихся с characters');
});

/* Страница персонажей */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});


module.exports = router;