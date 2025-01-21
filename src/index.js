const express = require('express');
const mongoose = require('mongoose');
const rutasEspecie = require('./routes/especies.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;


// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', rutasEspecie);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send('Va no me jodas');
});

app.listen(port, () => console.log("Servidor escuchando en el puerto", port));
