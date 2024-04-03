const express = require('express');
const mongoose = require('mongoose');
const compraRoutes = require('./routes/compraRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

const app = express();
const port = process.env.PORT || 4000;

/*app.use(
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
  })*/

//middleware
app.use(express.json());

//rutas
app.get("/", (req, res) => {
    res.send("API funcionando")
});

app.use('/compras', compraRoutes);
app.use('/proveedor', proveedorRoutes);
app.use('/inventario', inventarioRoutes);
app.use('/venta', ventaRoutes);

//conexion mongo
//pass - ehBaMsoZbAxCVCIg
//mongodb+srv://josejavierem:<password>@cluster0.yxwmeav.mongodb.net/
mongoose.connect("mongodb+srv://josejavierem:g5w6EfZBvHFMGTih@cluster0.yxwmeav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.listen(port, () => console.log('server on port', port));