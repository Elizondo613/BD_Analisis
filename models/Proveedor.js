const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

module.exports = mongoose.model('Proveedor', proveedorSchema);
