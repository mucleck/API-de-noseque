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


const signupUser = (req, res) => {
    const user = new Users( {nombre: 'Ali', password: 'Bonsais', descripcion: 'Buenas', imagenURL: 'Ali'} )
    //Checkear si existe 
    const existingUser =  Users.findOne( { nombre: "Ali" }).then(result => {
        if(result){
            res.send(result)
        } else {
            user.save().then(resultado => {
                res.send("Usuario creado")
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    }).catch(err => {console.log("Buenas")})
    /*
    user.save().then(resultado => {
        res.send("Usuario creado")
    })
    .catch(err => {
        console.log(err)
    })*/
}


module.exports = {
    get_all_users,
    signupUser,
}