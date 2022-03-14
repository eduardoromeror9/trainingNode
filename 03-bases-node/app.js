// hacer un bucle que imprima la tabla del 5

const { crearArchivo } = require('./helpers/multiplicar');

console.clear();


const[,, arg3 = 'base = 5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');  



// const base = 6;



crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, ''))
  .catch(err => console.log(err));