const Users = require('../models/usuario')

const get_all_users = (req,res) => {
   
    Users.find()
    .then(users => {
        res.json(users); // Envía los usuarios como respuesta en formato JSON
    })
    .catch(error => {
        console.error(error); // Muestra el error en consola para depuración
        res.json({ error: "Error retrieving users" }); // Envía un mensaje de error genérico
    });
}


module.exports = {
    get_all_users,
}