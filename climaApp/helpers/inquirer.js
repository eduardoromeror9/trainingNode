const inquirer = require('inquirer');
require('colors');


const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Selecciona una opcion: ',
    choices: [
      {
        value : 1,
        name: `${'1'.green}. Buscar ciuadad`
      },
      {
        value : 2,
        name: `${'2'.green}. Historial de busquedas`
      },
      {
        value : 0,
        name: `${'0'.green}. Salir`
      }
    ]
  }
];


const inquirerMenu = async () => {

  console.clear();

  console.log('========================'.green);
  console.log(' Selecciona una opcion: '.yellow);
  console.log('========================\n'.green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;

}

const pausa = async () => {

  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ];

  console.log('\n');
  await inquirer.prompt(question);

}

const leerInput = async ( message ) => {

  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate: ( value ) => {
        if ( value.length === 0 ) {
          return 'Por favor ingresa un valor';
        }
        return true;
      }
    }
  ];

  const { description } = await inquirer.prompt(question);

  return description;

}


const listarLugares = async ( lugares = [] ) => {

  const choices = lugares.map( ( lugar, index ) => {

    const idx = `${index + 1}`.green;
    
    return {
      value: lugar.id,
      name: `${idx}. ${lugar.nombre}`
    }

  });

  choices.unshift({
    value: '0',
    name: `${'0'.green}. Cancelar`
  });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Seleccione lugar: ',
      choices
    }
  ];

  const { id } = await inquirer.prompt(preguntas);
  return id;

}

const confirmar = async ( message ) => {

  const question = [
    {
      type: 'confirm',
      name: 'OK',
      message
    }
  ];

  const { OK } = await inquirer.prompt(question);

  return OK;

}


const mostrarListadoCheckList = async ( tareas = [] ) => {

  const choices = tareas.map( ( tarea, index ) => {

    const idx = `${index + 1}`.green;
    
    return {
      value: tarea.id,
      name: `${idx}. ${tarea.description}`,
      checked: (tarea.completedEn) ? true : false
    }

  });

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones: ',
      choices
    }
  ];

  const { ids } = await inquirer.prompt(pregunta);
  return ids;

}


module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
  confirmar,
  mostrarListadoCheckList
}


