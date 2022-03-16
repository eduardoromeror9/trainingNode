const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();


crearArchivo(argv.base, argv.listar)
  .then(nombreArchivo => console.log(nombreArchivo, ''))
  .catch(err => console.log(err));