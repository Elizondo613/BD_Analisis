const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Rutas CRUD para Proveedores
router.post('/proveedores', proveedorController.createProveedor);
router.get('/proveedores', proveedorController.getAllProveedores);
router.get('/proveedores/:id', proveedorController.getProveedorById);
router.put('/proveedores/:id', proveedorController.updateProveedorById);
router.delete('/proveedores/:id', proveedorController.deleteProveedorById);

module.exports = router;