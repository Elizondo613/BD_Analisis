const Compra = require('../models/Compra');

// Función para crear una nueva compra
exports.createCompra = async (req, res) => {
  try {
    const nuevaCompra = new Compra(req.body);
    await nuevaCompra.save();
    res.status(201).json({ message: 'Compra creada correctamente', compra: nuevaCompra });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la compra' });
  }
};

// Función para obtener todas las compras
exports.getAllCompras = async (req, res) => {
  try {
    const compras = await Compra.find();
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las compras' });
  }
};

// Función para obtener una compra por su ID
exports.getCompraById = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json(compra);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la compra' });
  }
};

// Función para actualizar una compra por su ID
exports.updateCompraById = async (req, res) => {
  try {
    const compra = await Compra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json({ message: 'Compra actualizada correctamente', compra });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la compra' });
  }
};

// Función para eliminar una compra por su ID
exports.deleteCompraById = async (req, res) => {
  try {
    const compra = await Compra.findByIdAndDelete(req.params.id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json({ message: 'Compra eliminada correctamente', compra });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la compra' });
  }
};
