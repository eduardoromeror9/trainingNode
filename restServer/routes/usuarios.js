const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { validarCampos } = require('../middlewares/validar-campos');

const { usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete, 
  usuariosPatch } = require('../controllers/usuarios');


const router = Router();



router.get('/', usuariosGet);
router.put('/:id', usuariosPut);
router.post('/',[
  check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  check('email', 'El email no es valido').isEmail(),
  check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
  // check('role', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('rol').custom(async(rol = '') => {
    const existeRole = await Role.findOne({ rol });
    if (!existeRole) {
      throw new Error(`El rol ${rol} no existe en la BD`);
    }
  }),
  validarCampos
], usuariosPost);
router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);





module.exports = router;