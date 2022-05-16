const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT, validarCampos } = require('../middlewares/');
const { crearCategoria } = require('../controllers/categorias');


const router = Router();


// Obtener todas las categorias
router.get('/', (req, res) => {
  res.json('GET');
});


// Obtener una categoria por id
router.get('/:id', (req, res) => {
  res.json('GET - ID');
});


// Crear una categoria
router.post('/', [
  validarJWT,
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  validarCampos
], crearCategoria);


// Actualizar una categoria
router.put('/:id', (req, res) => {
  res.json('PUT');
});


// Eliminar una categoria
router.delete('/:id', (req, res) => {
  res.json('DELETE');
});





module.exports = router;