const fs = require('fs')

//console.log(fs.readFileSync ('./TasksData.json', 'utf-8'))
//con el anterior código también funciona perfectamente

function read (filePath){
    var data = JSON.parse(fs.readFileSync(filePath,"utf-8"))
return data
}

module.exports = {read}
