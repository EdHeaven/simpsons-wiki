var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/simpsons-wiki')
var async = require("async")
var data = require('./data.js').data

async.series([
    open,
    dropDatabase,
    requireModels,
    createCharacters,
    ],
    function(err,result){
        mongoose.disconnect()
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

function requireModels(callback){
    require("./models/character").Character

    async.each(Object.keys(mongoose.models),function(modelName){
        mongoose.models[modelName].ensureIndexes(callback)
    },
        callback
    )
}