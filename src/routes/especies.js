const express = require('express');
const Specie = require('../modules/species.js'); // Aquí importamos el modelo, no el esquema
const router = express.Router();

// Crear especie usando un parámetro en la URL
// Ejemplo de uso: curl -X POST "http://localhost:9000/api/especies?familia=Tigre"
router.post('/especies', async (req, res) => {
    try {
        const familia = req.query.familia; // Obtiene el parámetro 'familia' de la URL
        if (!familia) {
            return res.status(400).json({ message: "El parámetro 'familia' es obligatorio" });
        }

        // Crea una nueva instancia del modelo Specie
        const especie = new Specie({ familia });

        // Guarda la especie en la base de datos
        const savedEspecie = await especie.save();

        res.status(201).json(savedEspecie); // Responde con el objeto guardado
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
