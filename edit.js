"use strict"

const fs = require("fs")

const baseDeDatos = fs.readFileSync("./baseDeDatos.json").toString()
console.log(baseDeDatos)

//Esta funcion permite editar los datos del arrive
//Elementos susceptibles de modificación:title, genre, author, year, cost
const libros = JSON.parse(baseDeDatos)
libros[0].genre = "terror argentino"
libros[1].author = "Eduardo Galeano"
libros[2].cost = "1980"



console.log(libros)


