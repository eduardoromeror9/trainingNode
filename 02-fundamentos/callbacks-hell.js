

const empleados = [
  {
    id: 1,
    nombre: 'Eduardo'
  },
  {
    id: 2,
    nombre: 'Maria'
  },
  {
    id: 3,
    nombre: 'Luis'
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];


const getEmpleado = (id, callback) => {
  const empleado = empleados.find( e => e.id === id);

  if(empleado) {
    return empleado;
  }else {
    return `No existe un empleado con el ID:${id}`;
  }

};

getEmpleado(12, empleado => {
  console.log(empleado);
});