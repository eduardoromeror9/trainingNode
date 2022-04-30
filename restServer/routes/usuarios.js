const {Router} = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');


const {usuariosGet,
  usuariosPut,
  usuariosPost, 
  usuariosDelete,
  usuariosPatch} = require('../controllers/usuarios');



const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', [
  check('nombre', 'El nombre es necesario').not().isEmpty(),
  check('correo', 'El correo no es valido').isEmail(),
  check('password', 'La contraseña tiene que tener mas de 6 caracteres').isLength({min: 6}),
  check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  validarCampos
],usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);




module.exports = router;