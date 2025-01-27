const mongoose = require('mongoose')
const Schema = mongoose.Schema

const especiesSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagenURL: {
        type: String,
        required: true
    }
})

const Especies = mongoose.model('Especies', especiesSchema)
module.exports = Especies