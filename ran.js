
//  ! Hacer una funcion que reciba una lista de nombres y devuelva otra lista de nombres con 3 nombres ramdom que no se repitan


let nombres = [
  "Eduardo", "Juan", "Galo", 
  "Lucas", "Soledad", "Cristian", 
  "Carlos C", "Carla Z", "Carlos Cabrera", 
  "Ignacio", "Elias", 
  "Dalma", "Ignacio Garcia", "Juanjo", 
  "Maxi", "Pedro", "Tomas"
];

const getRandom = (lista) => {

  while (lista.length > 5) {
    let index = Math.floor(Math.random() * lista.length);
    lista.splice(index, 1);
  }

  return lista;
}

console.log(getRandom(nombres));