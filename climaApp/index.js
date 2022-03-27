const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async () => {


  const busquedas = new Busquedas();
  let option;


  do {

    option = await inquirerMenu();

    switch (option) {

      case 1:

      // Mostrar mensajes
      const lugar = await leerInput('Ingresa una ciudad: ');
      await busquedas.ciudad(lugar);

      // Buscar los lugares

      // Seleccionar el lugar

      // Clima

      // Mostrar resultados
      console.log('\nInformacion de la Ciudad\n'.green);
      console.log('Ciudad: ');
      console.log('Latitud: ');
      console.log('Longitud: ');
      console.log('Temperatura: ');
      console.log('Minima: ');
      console.log('Maxima: ');

      break; 

    }

    if (option !== 0) await pausa();


  } while (option !== 0);


}


main();