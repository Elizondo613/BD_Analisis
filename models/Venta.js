const mongoose = require('mongoose');
const Inventario = require('./Inventario');

const ventaSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  producto: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventario',
    required: true 
  },
  cantidad: { 
    type: Number, 
    required: true 
  },
  precioUnitario: { 
    type: Number, 
    required: true 
  },
  total: { 
    type: Number, 
    required: true 
  }
});

ventaSchema.pre('save', async function(next) {
  try {
    // Buscar el producto en el inventario
    const productoInventario = await Inventario.findById(this.producto);

    if (!productoInventario) {
      throw new Error('El producto no está disponible en el inventario');
    }

    // Verificar si hay suficiente stock para la venta
    else if (productoInventario.stock < this.cantidad) {
      throw new Error('Stock insuficiente para completar la venta');
    }

    // Actualizar el stock del producto en el inventario
    else{
      productoInventario.stock -= this.cantidad;
      await productoInventario.save();
    }

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Venta', ventaSchema);
