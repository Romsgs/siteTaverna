var express = require('express');
var router = express.Router();
const cadastroController = require('../controllers/cadastroController')
/* GET users listing. */
router.get('/', cadastroController.cadastrar);

module.exports = router;
