

const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  edad: '31',
  getNombre() {
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
  }
}


// imprimeHeroe(deadpool);


// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;


function imprimeHeroe({ nombre, apellido, poder, edad = 1 }) {
  nombre = 'Eduardo';
  console.log(nombre, apellido, poder, edad);
}

const heroes = ['Deadpool', 'Batman', 'Superman'];
// const h1 = heroes[0];


const [,  , h3] = heroes;


console.log(h3);

