const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Rutas CRUD para el Inventario
router.post('/productos', inventarioController.createProducto);
router.get('/productos', inventarioController.getAllProductos);
router.get('/productos/:id', inventarioController.getProductoById);
router.put('/productos/:id', inventarioController.updateProductoById);
router.delete('/productos/:id', inventarioController.deleteProductoById);

module.exports = router;
