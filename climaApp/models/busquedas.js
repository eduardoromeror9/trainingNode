const fs = require('fs');

const axios = require('axios');



class Busquedas {

  historial = [];
  dbPath = './db/database.json';

  constructor() {
    this.leerDb();
  }


  get historialCapitalizado() {

    return this.historial.map( lugar => {
      let palabras = lugar.split(' ');
      palabras = palabras.map( palabra => palabra[0].toUpperCase() + palabra.substring(1) );

      return palabras.join(' ');
    });

  }


  get paramsMapbox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      language: 'es'
    }
  }


  get paramsWeather() {
    return {
      units: 'metric',
      appid: process.env.OPENWEATHER_KEY,
      lang: 'es'
    }
}


  async ciudad(lugar = '') {

    try {
      // Peticion HTTP

      const intance = axios.create({

        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
        params: this.paramsMapbox
      });

      const respuesta = await intance.get();
      return respuesta.data.features.map(lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        longitud: lugar.center[0],
        latitud: lugar.center[1]
      }));

    } catch (error) {
      return [];
    }
  }

  async climaLugar(latitud, longitud) {

    try{

      const instance = axios.create({

        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.paramsWeather, lat: latitud, lon: longitud }
      });

      const respuesta = await instance.get();
      const { weather, main } = respuesta.data;

      return {
        desc: weather[0].description,
        min: main.temp_min,
        max: main.temp_max,
        temp: main.temp
      };


    } catch (error) {
      console.log(error);
    }
  }


  guardarHistorial( lugar = '' ) {

    if ( this.historial.includes(lugar.toLocaleLowerCase()) ) return;
    this.historial = this.historial.splice(0,5);
    this.historial.unshift( lugar.toLocaleLowerCase() );
    this.guardarDb();

  }
    // Guardar en DB
    guardarDb() {
      const payload = {historial: this.historial};

      fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }
  

    leerDb() {

      if ( !fs.existsSync(this.dbPath) ) {
        return;
      }

      const info = fs.readFileSync(this.dbPath, 'utf-8');
      const data = JSON.parse(info);

      this.historial = data.historial;
    }


}



module.exports = Busquedas;