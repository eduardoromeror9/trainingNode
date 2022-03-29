require('dotenv').config()


const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
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


      // Buscar los lugares
      const lugares = await busquedas.ciudad(lugar);


      // Seleccionar el lugar
      const id = await listarLugares(lugares);
      if ( id === '0') continue;
      const lugarSeleccionado = lugares.find(lugar => lugar.id === id);

      // Guardar en DB
      busquedas.guardarHistorial(lugarSeleccionado.nombre);


      // Clima
      const clima = await busquedas.climaLugar(lugarSeleccionado.latitud, lugarSeleccionado.longitud);



      // Mostrar resultados
      console.clear();
      console.log('\nInformacion de la Ciudad\n'.green);
      console.log('Ciudad:', lugarSeleccionado.nombre.green);
      console.log('Latitud:', lugarSeleccionado.latitud);
      console.log('Longitud:', lugarSeleccionado.longitud);
      console.log('Temperatura:', clima.temp);
      console.log('Minima:', clima.min);
      console.log('Maxima:', clima.max);
      console.log('Descripcion:', clima.desc.green);

      break;

      case 2:
        busquedas.historialCapitalizado.forEach((lugar, index ) => {

          const idx = index + 1;
          console.log(`${idx} - ${lugar}`);
      });

      break;

    }

    if (option !== 0) await pausa();


  } while (option !== 0);


}


main();