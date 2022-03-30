const http = require('http');

http.createServer((req, res) => {


  // res.writeHead(200, { 'Content-Type': 'application/json' });

  // res.setHeader('content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead(200, { 'Content-Type': 'application/csv' });

  

  res.write('Hola mundo');
  // res.write('1, Juan\n');
  // res.write('2, Pedro\n');
  // res.write('3, Caro\n');
  // res.write('4, Eduardo\n');


  res.end();

}).listen(8080);

console.log('Servidor corriendo en el puerto', 8080);
console.log('Para salir presione CTRL + C');