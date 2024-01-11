

const fs = require ('fs')
const path = require ('path')
const {read} = require ('./read')


const borrar = (filepath, titulo) => {
    var libros = read(filepath)
    var estaBorrado = false
    var nuevoslibros = libros.filter(libros => {
        if(estaBorrado && libros.title){
            estaBorrado= true
            return libros.title = titulo
    
}
    return write(nuevoslibros.filePath)


module.exports = {borrar}


        }
    
          )    

    return tarea.title === titulo
}




    