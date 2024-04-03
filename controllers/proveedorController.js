const Proveedor = require('../models/Proveedor');

// Función para crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
  try {
    const nuevoProveedor = new Proveedor(req.body);
    await nuevoProveedor.save();
    res.status(201).json({ message: 'Proveedor creado correctamente', proveedor: nuevoProveedor });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proveedor' });
  }
};

// Función para obtener todos los proveedores
exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proveedores' });
  }
};

// Función para obtener un proveedor por su ID
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

// Función para actualizar un proveedor por su ID
exports.updateProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.status(200).json({ message: 'Proveedor actualizado correctamente', proveedor });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proveedor' });
  }
};

// Función para eliminar un proveedor por su ID
exports.deleteProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByIdAndDelete(req.params.id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.status(200).json({ message: 'Proveedor eliminado correctamente', proveedor });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};
