const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');


// Serve static files
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home', {
    nombre: ' Eduardo Romero',
    titulo: 'Node.js'
  });
})



app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: ' Eduardo Romero',
    titulo: 'Node.js'
  });
})


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: ' Eduardo Romero',
    titulo: 'Node.js'
  });
})


app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})