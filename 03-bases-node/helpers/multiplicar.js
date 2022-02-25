const fs = require('fs');


const crearArchivo = async (base = 5) => {

  try {

    console.log('======================');
    console.log('     Tabla del:', base);
    console.log('======================');
  
  
    let salida = '';
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
  
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `tabla del ${base} creada!!`;  

  } catch (error) {
    throw error;
  }
}

module.exports = {
  crearArchivo
}
