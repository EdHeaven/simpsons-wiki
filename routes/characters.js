var express = require('express')
var router = express.Router()
var Character = require("../models/character").Character
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с heroes')
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Character.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Character.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var character = result[0]
            var characters = result[1] || []
            if(!character) return next(new Error("Нет такого героя в этой книжке"))
            res.render('character', {
                title: character.title,
                picture: character.avatar,
                desc: character.desc,
                menu: characters
            });
        })
})

module.exports = router