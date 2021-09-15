const {crearTabla} = require ('./helpers/multiplicar');
const argv = require ('./config/yargs');
const colors = require('colors');



console.clear();

const base = argv.b;
const producto = argv.p;
const listar = argv.l;
// const base = 5;
// const producto= 10;

crearTabla(base, producto, listar)
    .then(nombreArchivo=>console.log(colors.bgRed.white(`el archivo: ${nombreArchivo}, fue creado con exito`)))
    .catch(error => console.log(error));