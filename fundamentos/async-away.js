const empleados = [
  {
      id: 1,
      nombre: 'Eduardo'
  },
  {
      id: 2,
      nombre: 'Linda'
  },
  {
      id: 3,
      nombre: 'Karen'
  }
];

const salarios = [
  {
      id: 1,
      salario: 1000
  },
  {
      id: 2,
      salario: 1500
  }
];


const getEmpleado = ( id, callback ) => {

  const empleado = empleados.find( e => e.id === id )?.nombre

  const promesa = new Promise( ( resolve, reject ) => {
    if ( empleado ) {
        resolve( empleado );
    } else {
        reject(`Empleado con id ${ id } no existe`);
    }
  });
  return promesa;
}

const getSalario = ( id, callback ) => {
  
  const salario = salarios.find( s => s.id === id )?.salario;

  const promesa = new Promise( ( resolve, reject ) => {
    if ( salario ) {
      resolve( salario );
    } else {
      reject( `No existe salario para el id ${ id }` );
    }
  });
  return promesa;
}
