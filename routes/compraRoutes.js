const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

// Rutas CRUD para Compras
router.post('/compra', compraController.createCompra);
router.get('/compra', compraController.getAllCompras);
router.get('/compra/:id', compraController.getCompraById);
router.put('/compra/:id', compraController.updateCompraById);
router.delete('/compra/:id', compraController.deleteCompraById);

module.exports = router;
