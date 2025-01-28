const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuario = new Schema({
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: false
    },
})

const Usuarios = mongoose.model('Usuarios', usuario)
module.exports = Usuarios