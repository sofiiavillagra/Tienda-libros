const fs = require('fs')

const {read} = require("./libros.txt")
function write (filePath, arrObj) {

var baseDeDatos = JSON.stringify(arrObj, null, 2)

var baseDeDatos = fs.writerFyleSync(filePath, baseDeDatos) 

return "Se escribio correctamente el archivo en " + filePath
}

