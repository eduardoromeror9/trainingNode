require('colors');

const mostrarMenu = () => {

  return new Promise(resolve => {

    console.clear();
    console.log('========================'.green);
    console.log(' Selecciona una opcion: '.yellow);
    console.log('========================\n'.green);

    
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Seleccione una opcion: ', (opcion) => {
      readline.close();
      resolve(opcion);
    });
  });

}


const pausa = () => {

  return new Promise(resolve => {
    
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opcion) => {
      readline.close();
      resolve();
    })
  });  
}


module.exports = {
  mostrarMenu,
  pausa

}