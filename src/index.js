const express = require('express');
const mongoose = require('mongoose');
const rutasEspecies = require('./routes/rutasEspecies')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then((response) => console.log("Todo bien"))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

// Ruta de prueba
app.get("/", (req, res) => {
    res.send('Va no me jodas');
});

app.use('/especies', rutasEspecies);

app.listen(port, () => console.log("Servidor escuchando en el puerto", port));
