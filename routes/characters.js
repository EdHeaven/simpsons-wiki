var express = require('express');
var router = express.Router();
var Character = require("../models/character").Character

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маошрутов, начинающихся с characters');
});

/* Страница персонажей */
router.get('/:nick', function(req, res, next) {
    Character.findOne({nick:req.params.nick}, function(err,character){
        if(err) return next(err)
        if(!character) return next(new Error("Нет такого героя в этом мультсериале"))
        res.render('character', {
            title: character.title,
            picture: character.avatar,
            desc: character.desc
        })
    })
})



module.exports = router;