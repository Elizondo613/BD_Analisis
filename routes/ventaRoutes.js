const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas CRUD para Ventas
router.post('/', ventaController.createVenta);
router.get('/', ventaController.getAllVentas);
router.get('/:id', ventaController.getVentaById);
router.put('/:id', ventaController.updateVentaById);
router.delete('/:id', ventaController.deleteVentaById);

module.exports = router;
