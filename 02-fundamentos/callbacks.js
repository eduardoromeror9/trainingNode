


setTimeout( () => {
  // console.log('Hola mundo');
} , 1000); // 1 segundo)



const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: 'Eduardo'
  };
  
  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});

