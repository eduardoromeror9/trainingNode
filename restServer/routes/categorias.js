const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares/');
const { crearCategoria,
  obtenerCategorias,
  obtenerCategoria, 
  actualizarCategoria,
  eliminarCategoria} = require('../controllers/categorias');

const { existeCategoriaPorId } = require('../helpers/db-validators');

/* Creating a new router object. */
const router = Router();


// Obtener todas las categorias
router.get('/', obtenerCategorias );


// Obtener una categoria por id
router.get('/:id', [
  check('id',  'No es un ID valido').isMongoId(),
  check('id').custom( existeCategoriaPorId ),
  validarCampos,
],obtenerCategoria );


// Crear una categoria
router.post('/', [
  validarJWT,
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  validarCampos
], crearCategoria );


// Actualizar una categoria
router.put('/:id', [
  validarJWT,
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('id').custom( existeCategoriaPorId ),
  validarCampos
],actualizarCategoria );


// Eliminar una categoria
router.delete('/:id', [
  validarJWT,
  esAdminRole,
  check('id',  'No es un ID valido').isMongoId(),
  check('id').custom( existeCategoriaPorId ),
  validarCampos
],eliminarCategoria );



module.exports = router;