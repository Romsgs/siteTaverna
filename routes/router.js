var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')
const { body, validationResult } = require('express-validator');
const { route } = require('../app');
//const quem = require('../middlewares/quemMiddleware')
/* GET home page. */
router.get('/', controller.index);
router.get('/contato', controller.contato);
router.get('/abanda', controller.aBanda);
router.get('/login', controller.login);
router.get('/cadastrar', controller.cadastrar)
router.post('/cadastro', body('email').notEmpty().isEmail(), body('senha').notEmpty(), controller.cadastraUsuario);
router.post('/login', body('email').notEmpty().isEmail(), body('senha').notEmpty(), controller.verificaLogin)
router.get('/perfil', controller.mostrarPerfil)
router.get('/media', controller.media)
module.exports = router;
