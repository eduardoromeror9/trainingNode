require('colors');

const { guardarDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

  let opcion = '';
  const tareas = new Tareas();

  do {
    opcion = await inquirerMenu();

    switch (opcion) {
      case '1':
        const description = await leerInput('Descripcion: ');
        tareas.crearTarea(description);
      break;

      case '2':
        console.log('Listando tareas: '.yellow, tareas.listadoArray);
      break;
    }

    // guardarDb( tareas.listadoArray );

    await pausa();
    
  } while( opcion !== '0' ); 
  
}


main();


