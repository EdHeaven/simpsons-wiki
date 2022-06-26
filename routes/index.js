var express = require('express')
var router = express.Router()
var Character = require("../models/character").Character

/* GET home page. */
router.get('/', function(req, res, next) {
    Character.find({},{_id:0,title:1,nick:1},function(err,menu){
      req.session.greeting = "Hi!!!!"
      res.render('index', {
                              title: 'Симпсоны',
                              menu: menu
                          });
      })
  });

module.exports = router;