const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();


crearArchivo(argv.base, argv.listar, argv.hasta)
  .then(nombreArchivo => console.log(nombreArchivo.red, ''))
  .catch(err => console.log(err));