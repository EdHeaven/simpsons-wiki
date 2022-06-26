    var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/simpsons-wiki')
var Character = require("./models/character").Character
var async = require("async")
var data = require('./data.js').data

async.series([
    open,
    dropDatabase,
    createCharacters,
    close
],
function(err,result){
    if(err) throw err
    console.log("ok")
})

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createCharacters(callback){
    async.each(data, function(characterData, callback){
        var character = new mongoose.models.Character(characterData);
         character.save(callback);
     },
     callback);
}

function close(callback){
    mongoose.disconnect(callback)
}