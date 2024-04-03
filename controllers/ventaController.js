const Venta = require('../models/Venta');
const Inventario = require('../models/Inventario');

// Función para crear una nueva venta
exports.createVenta = async (req, res) => {
    try {
      const nuevaVenta = new Venta(req.body);
      await nuevaVenta.save();
  
      // Reducir el stock en el inventario
      const productoId = nuevaVenta.producto;
      const cantidadVendida = nuevaVenta.cantidad;
      const productoInventario = await Inventario.findById(productoId);
  
      if (!productoInventario) {
        return res.status(404).json({ error: 'Producto no encontrado en el inventario' });
      }
  
      // Verificar si hay suficiente stock
      if (productoInventario.stock < cantidadVendida) {
        return res.status(400).json({ error: 'No hay suficiente stock para realizar la venta' });
      }
  
      // Actualizar el stock en el inventario
      productoInventario.stock -= cantidadVendida;
      await productoInventario.save();
  
      res.status(201).json({ message: 'Venta creada correctamente', venta: nuevaVenta });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la venta' });
    }
  };

// Función para obtener todas las ventas
exports.getAllVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
};

// Función para obtener una venta por su ID
exports.getVentaById = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.status(200).json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la venta' });
  }
};

// Función para actualizar una venta por su ID
exports.updateVentaById = async (req, res) => {
  try {
    const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.status(200).json({ message: 'Venta actualizada correctamente', venta });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la venta' });
  }
};

// Función para eliminar una venta por su ID
exports.deleteVentaById = async (req, res) => {
  try {
    const venta = await Venta.findByIdAndDelete(req.params.id);
    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }
    res.status(200).json({ message: 'Venta eliminada correctamente', venta });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
};
