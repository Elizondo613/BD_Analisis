const mongoose = require('mongoose');
const Inventario = require('./Inventario');

const compraSchema = new mongoose.Schema({
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor', required: true },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventario', required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true }
});

compraSchema.pre('save', async function(next) {
  try {
    // Verificar si el producto ya existe en el inventario
    const productoExistente = await Inventario.findById(this.producto);

    if (!productoExistente) {
      throw new Error('El producto no existe en el inventario.');
    }

    // Actualizar el stock del producto existente en el inventario
    productoExistente.stock += this.cantidad;
    await productoExistente.save();

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Compra', compraSchema);
