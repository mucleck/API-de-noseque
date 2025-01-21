const mongoose = require('mongoose');

// Definir el esquema
const specieSchema = mongoose.Schema({
    familia: {
        type: String,
        required: true,
    }
});

// Crear el modelo a partir del esquema
const Specie = mongoose.model('Specie', specieSchema);

// Exportar el modelo
module.exports = Specie;
