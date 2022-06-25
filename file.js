var async = require("async")

var from_one_two_five = [1,"два",3,4,5]

async.each(
    from_one_two_five,
    function(elem,report){
        if(typeof elem === "number"){
            report()
        } else {
            report("Нашли не число")
        }
    },
    function(info){
        if(info){
            console.log(info)
        } else {
            console.log("Проверка прошла успешно. Все элементы массива являются числами")
        }
    }
)

async.series([
    function(callback){
        callback(null,"МАМА")
    },
    function(callback){
        callback(null,"МЫЛА")
    },
    function(callback){
        callback(null,"РАМУ")
    }],
    function(err,result){
        if(err){
            console.log("Ошибка: "+err)
        } else {
            console.log(result)
        }
    }
)
