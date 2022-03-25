const Tarea = require('./tarea');

class Tareas {

  _listado = {};

  get listadoArray() {

    const listado = [];
    Object.keys(this._listado).forEach(key => {
      listado.push(this._listado[key]);
    })

    return listado;

  }

  constructor() {
    this._listado = {};  
  }


  cargarTareasFromArray(tareas = []) {

    tareas.forEach( tarea => {
      this._listado[tarea.id] = tarea;
    });
    
  }


  crearTarea(description = '') {
      
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;
  
  }


  listadoCompleto() {

    console.log();
    this.listadoArray.forEach( (tarea, id) => {

      const idx = `${id + 1}`.green;
      const {description, completedEn} = tarea;
      const estado = (completedEn) ? 'Completada'.green : 'Pendiente'.yellow;

      console.log(`${idx} - ${description} - ${estado}`);

    });
  }


  listarPendientesCompletadas( completadas = true ) {

    console.log();
    let contador = 0;

    this.listadoArray.forEach( tarea => {

      const {description, completedEn} = tarea;
      const estado = (completadas) ? 'Completada'.green : 'Pendiente'.yellow;

      if ( completadas ) {  
        if ( completedEn ) {
          contador++;
          console.log(`${contador.toString().green} - ${description} - ${completedEn}`);
        }
      } else {
        if ( !completedEn ) {
          contador++;
          console.log(`${contador.toString().green} - ${description} - ${estado}`);
        }
      }
    });
  }
}



module.exports = Tareas;

