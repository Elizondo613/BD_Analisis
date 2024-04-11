const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas CRUD para Ventas
router.post('/ventas', ventaController.createVenta);
router.get('/ventas', ventaController.getAllVentas);
router.get('/ventas/:id', ventaController.getVentaById);
router.put('/ventas/:id', ventaController.updateVentaById);
router.delete('/ventas/:id', ventaController.deleteVentaById);

module.exports = router;
