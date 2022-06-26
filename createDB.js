var async = require("async")

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/simpsons-wiki')
var Character = require("./models/character").Character

mongoose.connection.on("open",function(){
    var db = mongoose.connection.db
    db.dropDatabase(function(err){
        if(err) throw err

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
            if(err){
                console.log(err)
            } else {
                console.log("Успешно созданы герои с никами: " +result.join(", "))
            }
            mongoose.disconnect()
        })
    })
})
