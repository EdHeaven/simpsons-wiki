var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/simpsons-wiki')
var Character = require("./models/character").Character

var character = new Character({
    title: "Гомер Симпсон",
    nick:"homer"
})

character.save(function(err, character, affected){
    console.log(character.title)
})