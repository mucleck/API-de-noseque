const Especies = require('../models/especiesEsquema')


const get_especies = (req,res) => {
    res.send("Buenasssssss")
}

const post_especies = (req, res) => {
    const Esspecies = new Especies( {nombre: 'JAVI', descripcion: 'Buenas', imagenURL: 'Ali'})
    Esspecies.save().then(resultado => {
        res.send("Oye no")
        console.log("Especie creada")
    })
    .catch(err => {
        console.log(err)
    })
   //res.send("Buenas")
}

module.exports = {
    get_especies,
    post_especies,
}