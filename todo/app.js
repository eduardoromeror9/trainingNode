require('colors');

const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList 
} = require('./helpers/inquirer');

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

      case '5':
        const ids = await mostrarListadoCheckList(tareas.listadoArray);
        tareas.toogleCompletadas(ids);
      break;

      case '6':
        const id = await listadoTareasBorrar( tareas.listadoArray );

        if ( id !== '0' ) {
          const confirmacion = await confirmar(`Estas seguro que deseas eliminar la tarea ${id}?`);
        if ( confirmacion ) {
          tareas.borrarTarea(id);
          console.log('Tarea eliminada');
        }
      }   
      break;
    }

    guardarDb( tareas.listadoArray );

    await pausa();
    
  } while( opcion !== '0' ); 
  
}


main();


