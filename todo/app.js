require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {
  console.log('Starting todo app'.yellow);

  let opcion = '';

  do {
    opcion = await inquirerMenu();
    console.log({ opcion });

    await pausa();
    
  } while( opcion !== '0' ); 
  
}


main();


