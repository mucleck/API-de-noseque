const express = require('express');
const mongoose = require('mongoose');
const rutasEspecies = require('./routes/rutasEspecies')
const usuariosGestiones = require('./routes/usuariosGestiones')
const loginRutas = require('./routes/login')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then((response) => console.log("Todo bien"))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Middleware

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

// Ruta de base
app.get("/", (req, res) => {
  res.render('../src/views/home', { mensaje: 'Bienvenido al blog' });
});

app.use('/login', loginRutas)
app.use('/usuarios', usuariosGestiones)

app.listen(port, () => console.log("Servidor escuchando en el puerto", port));
