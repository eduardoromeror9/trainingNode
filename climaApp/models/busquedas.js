const axios = require('axios');



class Busquedas {

  historial = ['Caracas', 'Bogotá', 'Madrid'];

  constructor() {
    // TODO: leer DB si existe
  }

  async ciudad(lugar = '') {

    try {
      // Peticion HTTP
      // console.log('Ciudad:',lugar);
      const respuesta = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/madr.json?access_token=pk.eyJ1IjoiZWR1YXJkb3JvbWVyb3I5IiwiYSI6ImNsMTlmMjR5ZTAxbDUzZHFyZnoxampiaHMifQ.xRl9EifIyCoTLUSunm9LPA&limit=5&language=es`
      );
      console.log(respuesta.data);
      return []; // Regresa los lugares

    } catch (error) {
      return [];
    }
  }
}



module.exports = Busquedas;