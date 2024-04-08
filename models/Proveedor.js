const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  codigo: { type: Number, required: true },
  nit: { type: Number, required: true },
  departamento: { type: String },
  municipio: { type: String },
  correo: { type: String },
  telefono: { type: Number, required: true }
});

module.exports = mongoose.model('Proveedor', proveedorSchema);