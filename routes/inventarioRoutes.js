const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Rutas CRUD para el Inventario
router.post('/', inventarioController.createProducto);
router.get('/', inventarioController.getAllProductos);
router.get('/:id', inventarioController.getProductoById);
router.put('/:id', inventarioController.updateProductoById);
router.delete('/:id', inventarioController.deleteProductoById);

module.exports = router;
