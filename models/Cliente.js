const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dpi: { type: Number, required: true },
  nit: { type: Number }
});

module.exports = mongoose.model('Cliente', clienteSchema);