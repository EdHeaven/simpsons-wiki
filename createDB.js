var async = require("async")

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/simpsons-wiki')
var Character = require("./models/character").Character

function open(callback){
    mongoose.connection.on("open",callback)
}

function dropDatabase(callback){
    var db = mongoose.connection.db
    db.dropDatabase(callback)
}

function createCharacters(callback){
    async.parallel([
            function(callback){
                var homer = new Character({nick:"homer"})
                homer.save(function(err,homer){
                    callback(err,"homer")
                })
            },
            function(callback){
                var marge = new Character({nick:"marge"})
                marge.save(function(err,marge){
                    callback(err,"marge")
                })
            },
            function(callback){
                var bart = new Character({nick:"bart"})
                bart.save(function(err,bart){
                    callback(err,"bart")
                })
            }
        ],
        function(err,result){
            callback(err)
        })
}

function close(callback){
    mongoose.disconnect(callback)
}

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