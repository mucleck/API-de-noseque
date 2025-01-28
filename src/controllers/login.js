const Users = require('../models/usuario')

const login = (req,res) => {
    res.render('../src/views/login')
}

module.exports = {
    login,
}