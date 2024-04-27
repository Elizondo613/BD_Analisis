const express = require('express');
const mongoose = require('mongoose');
const compraRoutes = require('./routes/compraRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');
const ventaRoutes = require('./routes/ventaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

//middleware
app.use(express.json());
app.use('/compras', compraRoutes);
app.use('/proveedor', proveedorRoutes);
app.use('/inventario', inventarioRoutes);
app.use('/venta', ventaRoutes);
app.use('/cliente', clienteRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("API funcionando")
});

//conexion mongo
//pass - asd123qwe456
mongoose.connect("mongodb+srv://josejavierem:asd123qwe456@cluster0.ai1wl4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.listen(port, () => console.log('server on port', port));