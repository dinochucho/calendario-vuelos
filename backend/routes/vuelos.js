const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelosController');

router.get('/', vuelosController.listarVuelos);
router.post('/buscar', vuelosController.buscarVuelos);

module.exports = router;