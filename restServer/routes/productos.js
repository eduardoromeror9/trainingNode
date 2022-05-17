const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares/');
const { crearProducto,
        obtenerProductos,
        obtenerProducto, 
        actualizarProducto,
        eliminarProducto } = require('../controllers/productos');

const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validators');

/* Creating a new router object. */
const router = Router();


// Obtener todas las categorias
router.get('/', obtenerProductos );


// Obtener una categoria por id
router.get('/:id', [
  check('id',  'No es un ID valido').isMongoId(),
  check('id').custom( existeProductoPorId ),
  validarCampos,
], obtenerProducto );


// Crear una categoria
router.post('/', [
  validarJWT,
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('categoria', 'No es un ID valido').isMongoId(),
  check('categoria').custom( existeCategoriaPorId ),
  validarCampos
], crearProducto );


// Actualizar una categoria
router.put('/:id', [
  validarJWT,
  // check('categoria', 'No es un ID valido').isMongoId(),
  check('id').custom( existeProductoPorId ),
  validarCampos
], actualizarProducto );


// Eliminar una categoria
router.delete('/:id', [
  validarJWT,
  esAdminRole,
  check('id', 'No es un ID valido').isMongoId(),
  check('id').custom( existeProductoPorId ),
  validarCampos
], eliminarProducto );



module.exports = router;