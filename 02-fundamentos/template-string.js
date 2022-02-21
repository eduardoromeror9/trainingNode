const nombre = 'Deadpool';
const real = 'Wade Winston Wilson';

const normal = 'El nombre de la persona es ' + nombre + ' y su nombre real es ' + real;
const template = `El nombre de la persona es ${nombre} y su nombre real es ${real}`;

console.log(template);
console.log(normal === template);



const html = `
  <h1>Hola mundo</h1>
  <p>Mi nombre es ${nombre}</p>
`;

console.log(html);



