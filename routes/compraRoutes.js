const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

// Rutas CRUD para Compras
router.post('/', compraController.createCompra);
router.get('/', compraController.getAllCompras);
router.get('/:id', compraController.getCompraById);
router.put('/:id', compraController.updateCompraById);
router.delete('/:id', compraController.deleteCompraById);

module.exports = router;
