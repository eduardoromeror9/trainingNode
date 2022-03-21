require('colors');


const {mostrarMenu, pausa} = require('./helpers/mensajes');

console.clear();


const main = async () => {

  console.log('Starting todo app'.yellow);
  mostrarMenu();
  // pausa();

}


main();


