const fs = require("fs");
const path = require ("path");
const { borrar } = require ("./delete");
const { read } = require ("./read");
const { write } = require ("./write")
const { edit } = require ("./edit")


const filePath = "./baseDeDatos.json" 
const entrada = process.argv;
