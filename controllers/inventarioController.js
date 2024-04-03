const Inventario = require('../models/Inventario');

// Función para crear un nuevo producto en el inventario
exports.createProducto = async (req, res) => {
  try {
    const nuevoProducto = new Inventario(req.body);
    await nuevoProducto.save();
    res.status(201).json({ message: 'Producto creado correctamente', producto: nuevoProducto });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto en el inventario' });
  }
};

// Función para obtener todos los productos en el inventario
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Inventario.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos en el inventario' });
  }
};

// Función para obtener un producto en el inventario por su ID
exports.getProductoById = async (req, res) => {
  try {
    const producto = await Inventario.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto en el inventario no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto en el inventario' });
  }
};

// Función para actualizar un producto en el inventario por su ID
exports.updateProductoById = async (req, res) => {
  try {
    const producto = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producto) {
      return res.status(404).json({ message: 'Producto en el inventario no encontrado' });
    }
    res.status(200).json({ message: 'Producto en el inventario actualizado correctamente', producto });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el producto en el inventario' });
  }
};

// Función para eliminar un producto en el inventario por su ID
exports.deleteProductoById = async (req, res) => {
  try {
    const producto = await Inventario.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto en el inventario no encontrado' });
    }
    res.status(200).json({ message: 'Producto en el inventario eliminado correctamente', producto });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto en el inventario' });
  }
};
