const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  stock: { type: Number, required: true },
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model('Inventario', inventarioSchema);
