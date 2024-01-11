const fs = require  ('fs')

function create (filepath, title, desc) {
    const objeto = editar (title, desc)
    
    var data = read(filepath)

    data.push(objeto)
return write(data, filepath) 
}

module.exports = ( create )