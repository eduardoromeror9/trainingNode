const http = require('http');

http.createServer((req, res) => {

  res.write('Hola mundo');
  res.end();

}).listen(8080);

console.log('Servidor corriendo en el puerto', 8080);
console.log('Para salir presione CTRL + C');