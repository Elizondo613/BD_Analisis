const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Rutas CRUD para Proveedores
router.post('/', proveedorController.createProveedor);
router.get('/', proveedorController.getAllProveedores);
router.get('/:id', proveedorController.getProveedorById);
router.put('/:id', proveedorController.updateProveedorById);
router.delete('/:id', proveedorController.deleteProveedorById);

module.exports = router;
