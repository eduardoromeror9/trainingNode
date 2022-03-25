require('colors');

const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async () => {

  let opcion = '';
  const tareas = new Tareas();

  const tareasDb = leerDb();

  if ( tareasDb ) {

    tareas.cargarTareasFromArray(tareasDb);

  }


  do {
    opcion = await inquirerMenu();

    switch (opcion) {
      case '1':
        const description = await leerInput('Descripcion: ');
        tareas.crearTarea(description);
      break;

      case '2':
        tareas.listadoCompleto();
      break;

      case '3':
        tareas.listarPendientesCompletadas(true);
      break;
      
      case '4':
        tareas.listarPendientesCompletadas(false);
      break;
    }

    guardarDb( tareas.listadoArray );

    await pausa();
    
  } while( opcion !== '0' ); 
  
}


main();


